import{t as e}from"./logger-BSvbj6SG.js";import{i as t}from"./economy-6CveBHJv.js";import{t as n}from"./retry-DBmng2MD.js";import{a as r,t as i}from"./gemini-model-policy-CVUr-N8q.js";import{t as a}from"./model-output-json-CCttyCUt.js";var o=.2;function s(e,t,n){return`你剛回答了一題,以下是分析 + 答案:

PREMISES:
${JSON.stringify(e,null,2)}

ANSWER: ${t.finalAnswer}
REASONING: ${t.reasoning}

任務:對自己的答案進行「自驗證」(Chain-of-Verification, CoVe)。

設計 3-5 個驗證問題,每個都要 self-answer 並判斷是否與 finalAnswer 一致。

驗證問題類型範例(請混搭):
- 反證:「若答案為 ${t.finalAnswer},前提 X 是否仍成立?」
- 排除:「為何答案不是其他選項?具體哪條前提排除它?」
- 推論:「若答案為 ${t.finalAnswer},推論結果 Z 是否合理?」
- 矛盾檢查:「我的答案是否與前提 N 矛盾?」
- 專家挑戰:「若把此題交給人類專家,可能挑戰我哪個推理步驟?」

判定:
- passed=true:modelAnswer 與 expectedIfCorrect 內容一致(同方向、不矛盾)
- passed=false:不一致,或 modelAnswer 揭露了 finalAnswer 站不住腳

學生原始問題(對照用):
${n}

輸出 **嚴格 JSON**,不允許前後文字 / Markdown 代碼塊 / 註解:

{
  "verifications": [
    {
      "question": "...",
      "expectedIfCorrect": "若 finalAnswer 正確,應答 ...",
      "modelAnswer": "...",
      "passed": true
    }
  ]
}`}async function c(c,l,u,d){let f=`${l.modelName===t.FLASH_3_5?`${i(`CoVe 自驗證 JSON`)}\n\n`:``}${s(u,d,l.originalUserPrompt)}`,p=a((await n(()=>c({model:l.modelName,contents:[{parts:[{text:f}]}],config:{temperature:o,...l.modelName===t.FLASH_3_5?{thinkingConfig:{thinkingBudget:r(`reliability-review`)}}:{}}}),{maxRetries:2,baseDelayMs:1500,logPrefix:`[Pipeline/CoVe]`})).text),m=Array.isArray(p.verifications)?p.verifications:[];return e.info(`[Pipeline] CoVe complete`,{total:m.length,passed:m.filter(e=>e.passed).length}),m}export{c as runVerification};