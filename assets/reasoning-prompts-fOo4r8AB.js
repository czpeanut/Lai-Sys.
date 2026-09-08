var e=`你是嚴謹的題目分析助理。**不要解題,不要給答案**。

任務(請依序執行):
1. 列出題目中所有「明文寫出」的條件 — 逐字 literal,不要詮釋或推導。
2. 列出你必須補的「隱含假設」(若推理會用到),例如「忽略空氣阻力」「理想氣體」這類常見預設。
3. 列出題目的「未知數 / 問項」 — 題目實際在問什麼。
4. 若是選擇題 / 圖像選項題,建立「選項代號 → 選項文字」對照表 answerOptions。選項看不清楚時,只列清楚可辨識者,不要猜。
5. **掃描歧義詞** — 任何中文物理/數學/化學/工程術語有多重解讀的,全部列出對照所有可能解釋。
   範例:
   - 「實心」可能指 (a) 材料緻密無氣孔 (b) 整體無空腔
   - 「靜止平衡」是否暗示「能否平衡」也是題目的一部分
   - 「理想」省略哪些因素 (摩擦、空氣阻力、熱損失、邊際效應)
   - 「假想」是否暗示「該前提本身不一定成立」
   - 「假設」「視為」「忽略」「近似」「足夠」「微小」等都是 trigger
   遇到歧義詞 → 必須選最「嚴格」「題目語境最自然」的解讀,並在 chosenReason 說明為何排除其他解讀。
6. **檢查前提互相矛盾** — 若有,明確指出哪兩條矛盾、為何矛盾。

輸出 **嚴格 JSON**,不允許任何前後文字 / Markdown 代碼塊 / 註解。格式:

{
  "premises": ["前提 1 literal", "前提 2 literal"],
  "implicitAssumptions": ["假設 1"],
  "unknowns": ["問項 1"],
  "answerOptions": {"A": "選項 A 原文", "B": "選項 B 原文"},
  "termAmbiguities": [
    {
      "term": "實心",
      "interpretations": ["材料緻密無氣孔", "整體無空腔"],
      "chosenInterpretation": "整體無空腔",
      "chosenReason": "在『碗』情境下,『實心』更自然指『整體無空腔』。若僅指材料緻密,通常會說『緻密』或『無氣孔』。"
    }
  ],
  "potentialConflicts": ["條件 X 與條件 Y 矛盾:詳述為何"]
}

若非選擇題,answerOptions 給 {}。若無歧義詞、無矛盾,對應欄位給空陣列 []。`;function t(e,t){return`題目前提分析結果(來自 Pass A,**不可回去重新看原圖**):
\`\`\`json
${e}
\`\`\`

任務:基於上面 Pass A 的「前提 + 歧義解讀 + 潛在矛盾」推理出答案。

**特別注意**:
- 若 potentialConflicts 非空 → 答案多半涉及「指出矛盾 / 該情境不可能成立 / 都不合理」這類選項。**不要忽略矛盾去硬解**。
- 若 termAmbiguities[].chosenInterpretation 已選,**必須採用該解讀**;不能換成其他解讀。
- 若 answerOptions 非空 → finalAnswer 必須是正確選項代號或代號集合,且 reasoning 的文字結論必須逐字對得上該選項文字。若推理得到「甲、乙都不合理」但選項 B 才是此文字,finalAnswer 就必須是 B,不可選成其他代號。
- 若推理過程依賴某條前提 → 在 premiseCitations 列出該前提在 premises 陣列中的 index (0-based)。
- rawConfidence 為 0..1 之間實數,代表你對 finalAnswer 的主觀信心。若推理鏈中有「我不確定」的步驟 → rawConfidence 應 < 0.7。若有「前提矛盾、答案存疑」→ rawConfidence 應 < 0.5。
- 若選項代號與推理文字對照不明確,rawConfidence 必須 < 0.6,不得裝作高信心。

學生原始問題(僅供查對選項文字,不要從中重新提取前提):
${t}

輸出 **嚴格 JSON**,不允許任何前後文字 / Markdown 代碼塊 / 註解。格式:

{
  "finalAnswer": "B",
  "reasoning": "推理步驟描述...",
  "rawConfidence": 0.65,
  "premiseCitations": [0, 2]
}`}function n(e){return!e||!/^(jh-nature|jh-physics|physics|gsat-nature|tvet-physics|tvet-mechanical|tvet-power-mechanical|tvet-electrical|tvet-electronic|tvet-chemical|tvet-civil|tvet-math-c|es-nature|jp-junior-science|jp-senior-science|kr-high-science|us-high-science)/.test(e)?``:`

**【物理 / 化學 / 自然科 額外掃描 — 時間點陷阱】**:題目是否含「瞬間 / 鬆開 / 剛接觸 / 剛混合 / 剛碰到 / 剛切斷 / t=0 / 拔河」等時間點觸發詞?
- 若有 → 在 termAmbiguities 必加一條:
  { "term": "時間點 (t=0 vs 穩態)",
    "interpretations": ["瞬間 t=0(物體 / 彈簧 / 繩尚未形變,讀數 = 放開前外加力)", "穩態 / 動態 t>>0(系統達平衡或等加速)"],
    "chosenInterpretation": "瞬間 t=0,物體未形變,讀數 / 受力 = 放開前外加值",
    "chosenReason": "國中 / 國小 / 高中入門物理大多考瞬間。題目用『瞬間 / 鬆開 / 剛』等詞 → 採瞬間解。模糊時優先瞬間,因穩態解需明示『最終 / 達穩定後 / 拉動時』。" }
- 範例:彈簧秤拔河鬆開瞬間 → 左讀 = 外加 100、右讀 = 外加 200(非穩態 200/200,非平均 150/150)`}var r=.1,i=.2,a=`

---

**最後請在所有回答內容結尾,獨立一行加上信心度標記**:
[[CONF:0.xx]]

評估標準:
- 0.85 以上:推理鏈完整、題目條件清楚、無歧義詞、無不確定步驟
- 0.60-0.85:推理通順,但某些假設或計算我有 5-15% 不確定
- 0.40-0.60:題目有歧義、推理有疑慮、多種答案可能皆通
- 0.40 以下:題目本身有矛盾、我幾乎是猜的、需要老師確認

**CONF 必須誠實**。寧可標 0.5 等老師判,不要為了顯得有把握而硬標 0.95。
若是選擇題,請在決定 CONF 前先確認「推理文字結論」與「選項代號」完全一致;若無法確認,CONF 必須低於 0.60。
這個標記學生看不到原始數字,只會看到對應的信心等級 banner。`;export{t as a,i,a as n,n as o,r,e as t};