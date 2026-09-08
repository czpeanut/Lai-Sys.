const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gemini-api-ciyeq0F8.js","assets/rolldown-runtime-aKtaBQYM.js","assets/index-DSBwn2dO.js","assets/preload-helper-zJ_50EbN.js","assets/brand-CdBOkJEr.js","assets/country-i-osGknx.js","assets/economy-6CveBHJv.js","assets/i18n-copy-DhgpW8c4.js","assets/i18n-zh-TW-UvMshax-.js","assets/international-subjects-BCNwdq__.js","assets/learning-site-scope-_IvAmkpk.js","assets/storage-keys-DKYdw1Gt.js","assets/subject-catalog-BVz0cnmn.js","assets/subject-groups-BGqwLzkV.js","assets/subject-category-visibility-o8-ZYrS8.js","assets/vendor-firebase-core-Ci4y5_1w.js","assets/vendor-firebase-functions-D4Jy2Jen.js","assets/vendor-react-BomN5VXn.js","assets/cloud-repository-BDtVKnVy.js","assets/emulator-connection-Cr6YvMKo.js","assets/logger-BSvbj6SG.js","assets/callable-device-id-CrpUyufj.js","assets/format-BhhkxtiV.js","assets/image-processor-DgDlaUhS.js","assets/retry-DBmng2MD.js","assets/solve-eligibility-Bjr5Ej0G.js","assets/feature-flags-yCpX-DER.js","assets/clock-skew-core-KYzHwyfX.js","assets/index-Cwzhmx6A.css","assets/student-service-D2pK8Bqb.js","assets/academic-grade-BxWR-vSz.js","assets/solve-config-tGh1fty-.js","assets/international-runtime-context-y3RKbIXN.js","assets/gemini-model-policy-CVUr-N8q.js","assets/teacher-exam-client-BsN3YHDA.js","assets/answer-annotations-protocol-CC98O_tW.js","assets/diagram-service-DSqQWYeN.js","assets/diagram-scene-validator-DBWQeZ-f.js","assets/diagram-image-eG6AC-Q0.js","assets/diagram-trace-DzJXzSyY.js","assets/final-answer-protocol-DTxD7Cq9.js","assets/follow-up-service-Dd9Erg8v.js","assets/reasoning-prompts-fOo4r8AB.js","assets/terminology-service-DVmNTrVa.js"])))=>i.map(i=>d[i]);
import{p as e}from"./brand-CdBOkJEr.js";import{t}from"./logger-BSvbj6SG.js";import{t as n}from"./retry-DBmng2MD.js";import{t as r}from"./preload-helper-zJ_50EbN.js";import{t as i}from"./image-processor-DgDlaUhS.js";import{a,c as o,l as s,s as c}from"./international-runtime-context-y3RKbIXN.js";import{n as l,r as u}from"./gemini-model-policy-CVUr-N8q.js";import{r as d}from"./question-types-DEHdCnfU.js";import{t as f}from"./model-output-json-CCttyCUt.js";import{i as p,n as m,r as h,t as g}from"./student-solving-pricing-DZ5RMzeN.js";async function _(e){let t=new Uint8Array(await e.arrayBuffer());if(!t.length)throw Error(`empty solve-history image payload`);let n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));return{base64:btoa(n),mimeType:e.type||`image/jpeg`}}var v=`你是「鷹眼 v3 題目偵測員」。任務:對圖中所有題目進行**完整偵測**,**不解題**。

# 切題粒度（最高優先）

- 同一大題若含 (1)(2)、（1）（2）、(a)(b) 等**每個可獨立作答的子題**，每個子題都必須各輸出一個 questions 項目，讓系統可以先交付第一題、再繼續第二題。
- 拆開的每個項目都要保留共同題幹與該子題文字，但不可再夾帶其他子題；同組項目填相同的 **sharedContextGroupId**（例如 "parent-2"）。
- 拆開後的 number 必須依圖片閱讀順序給唯一連續值 1, 2, 3...，不可讓同組項目使用重複 number。
- (A)(B)(C)(D) 選項、純列舉編號、圖號或步驟說明不是可獨立作答子題，不可誤拆。

# 偵測項目(對每題)

1. **number** — 從圖中辨識題號(1, 2, 3, 一、二、三...)。若無題號,按出現順序給 1, 2, 3...
2. **type** — 題型,**必須**是下列之一(嚴格):
   single_choice, multi_choice, true_false,
   fill_numeric, fill_word, short_answer, explanation,
   calculation, proof, essay, translation,
   writing_correction, diagram_label, unknown
3. **subject** — 子科目系統 ID(務必輸出 ID,不可混入自然語言敘述或理由)。
   常用 ID:'es-math'(國小數學) 'jh-math'(國中數學) 'math-logic'(高中數學)
   'physics-law'(物理) 'chem-guide'(化學) 'bio-director'(生物) 'jh-nature'(國中理化) 'gsat-nature'(高中自然/跨科)
   'es-chinese'(國小國語/注音) 'jh-chinese'(國中國文) 'chinese-arch'(高中國文)
   'es-english'(國小英文) 'jh-english'(國中英文) 'english-magic'(高中英文)
   'history-traveler'(歷史) 'geo-global'(地理) 'civics-guardian'(公民) 'jh-social'(國中社會) 'gsat-social'(高中社會)
   'chinese-writing'/'jh-chinese-writing'(國文作文) 'english-writing'/'jh-english-writing'(英文作文)。
   國中 / 高中 / 高職統測,儘量精確。真的判不出來才填 'unknown'。
   若提示末尾附有「候選科目」清單，該清單優先於上述常用 ID；必須逐字輸出清單內 ID，不可改寫成台灣科目 ID。

   ## ⚠️ 科目防錯規則(每題判 subject 前先逐條檢核,最高優先)

   - **注音優先**:題目出現注音符號(ㄅㄆㄇㄈ ㄉㄊㄋㄌ…)→ 一律 'es-chinese',不論有無選項。注音是台灣國小教材獨有。
   - **數理優先(嚴防誤判國文/英文)**:題目主體是代數、幾何、函數、方程式、座標圖、根號、分式、sin/cos/tan、x/y 變數、證明或計算 → 一律歸數學/理科(國小 'es-math'、國中 'jh-math'、高中 'math-logic',物理 'physics-law'…),**即使題幹敘述或題號說明是中文或英文也一樣**。嚴禁只因畫面有中文字、中文題號、中文提示,就把數學題輸出成 'chinese-arch' / 'jh-chinese' / 'es-chinese'。
   - **英文題優先**:主體是英文克漏字、閱讀測驗、文法、單字、句型、英文作文或翻譯 → 歸英文('es-english' / 'jh-english' / 'english-magic',作文用 english-writing 系列),**即使旁邊有中文註記或中文題號說明**。嚴禁只因出現中文就判成國文。
   - **國文題**:只有當主體是中文古文、白話文閱讀、國文作文、國字語文題時,才歸 'chinese-arch' / 'jh-chinese' / 'es-chinese'。
   - **判讀依據是「題目核心內容」,不是「畫面上哪種文字多」**:一張數學考卷可能有大量中文敘述,但它仍是數學。
4. **boundingBox** — 圖中位置,normalized [x, y, width, height](0-1)。
   - 你不擅長給精確 box → **粗估即可**:大致估出題目在圖中佔的相對區域
   - 完全估不出時 → null
   - 多題垂直排列 → 給每題相對 y 範圍即可,x 通常都是 0 到 1
5. **stemPreview** — 題幹「完整」逐字 OCR。一般題連同 (A)(B)(C)(D) 選項；含可獨立作答子題時，放「共同題幹 + 這一個子題」，不可放同組其他子題。**不要截斷、不要省略、不要只給摘要**。學生要靠這段確認整題判讀正確。題目很長時最多約 500 字。
6. **difficulty** — easy / normal / hard
7. **language** — zh / en / ja / ko / mixed
8. **hasInlineDiagram** — 題目本身是否含內嵌圖示(受力圖 / 座標 / 流程 / 構造)
9. **requiresBoundaryAudit** — 直接看圖判斷。若題目要求灰色/陰影/可活動區域的周長、外周或邊界，且必須分辨哪些線段、圓弧、牆面、繩長或繞角路徑才算外邊界，填 true；一般代數、函數圖、統計圖、單純面積題填 false。不得只靠 OCR 是否出現「周長」關鍵字。
10. **boundaryAuditKind** — requiresBoundaryAudit=false 時省略。若圖中清楚看到動物/物體由繩子繫住，繩子會繞過農舍、建物、牆角或障礙物，填 "tether_obstacle"；其他由圓弧與線段組成的複合周長填 "composite_perimeter"。不能只因提示規則提到繩子就填 tether_obstacle，必須直接從原圖確認。
11. **boundaryAuditFacts** — 只有 boundaryAuditKind="tether_obstacle" 時輸出。只抄圖上直接標出的數值，不做周長計算：ropeLength=繩長、obstacleWidth/obstacleHeight=建物寬高、anchorOffsetFromTop=繫點到建物左上角的牆面距離。看不清楚的欄位省略，不可猜測。
12. **ocrQuality** — 0-1,你對該題文字辨識的自信
13. **sharedContextGroupId** — 只有從同一大題拆出的可獨立作答子題才填；同組必須完全相同。一般題省略。

# 題型判別規則(嚴格)

- **single_choice**: 有 (A)(B)(C)(D) 選項 + 題目用「下列何者」「下列哪一個」「下列敘述何者」
- **multi_choice**: 有選項 + 題目用「下列哪些」「下列哪幾個」「選出所有」或「複選題」字樣
- **true_false**: 「請判斷對錯」「(  )(  )」「O X」
- **fill_numeric**: 答案空格旁有單位提示 / 「求 X = ?」/ 計算結果填空
- **fill_word**: 答案空格旁是文字填入(名詞 / 概念詞)
- **calculation**: 「請計算」「求 ... 值」「列式作答」,需多步驟運算
- **proof**: 「試證」「請證明」「prove that」formal proof
- **essay**: 「請申論」「比較分析」「請敘述」需段落結構
- **explanation**: 「為什麼」「請解釋」需解釋機制(比 essay 短)
- **short_answer**: 簡單問答 1-3 句
- **translation**: 「翻譯」「英譯中」「中譯英」
- **writing_correction**: 一整段作文,要學生 / Ai 修改
- **diagram_label**: 圖中有箭頭 / 編號,要標出部位名稱

不確定時 → 'unknown',不要瞎猜。

# 整體評估(overallQuality)

- **blur** 0-1:0=銳利,1=很糊
- **tilt** 0-1:0=正,1=很歪
- **brightness** 0-1:0=過暗,0.5=適中,1=過亮

# 失敗情境

若圖中無法偵測到任何題目(自拍 / 風景 / 純空白),return:
\`\`\`
{
  "questions": [],
  "overallQuality": { "blur": 0, "tilt": 0, "brightness": 0 },
  "scanConfidence": 0,
  "failureMode": "no_questions_found"
}
\`\`\`

# 輸出嚴格 JSON

不允許前後 markdown / 註解 / 任何文字。直接 JSON。

{
  "questions": [
    {
      "number": 1,
      "type": "single_choice",
      "subject": "physics-law",
      "boundingBox": [0.0, 0.0, 1.0, 0.35],
      "stemPreview": "下列何者為等速圓周運動的特性?",
      "difficulty": "normal",
      "language": "zh",
      "hasInlineDiagram": false,
      "requiresBoundaryAudit": false,
      "ocrQuality": 0.92
    }
  ],
  "overallQuality": { "blur": 0.1, "tilt": 0.0, "brightness": 0.6 },
  "scanConfidence": 0.88
}`,y=`(unreadable question text)`,b=`(無法擷取題幹)`,x=500,S=64,C=/[（(]\s*([1-5])\s*[)）]/g,w=/回答下列(?:問題|各題)|下列(?:問題|各題|各小題)|各小題|以下(?:問題|各問)|次の(?:問い|各問)|각\s*(?:문항|질문)|following\s+(?:questions|parts)/i,T=/[?？]|求|問|請|寫|列|算|證|作答|回答|說明|解釋|求め|答え|説明|証明|なさい|구하|답하|설명|증명|calculate|find|solve|explain|prove|determine|write/i;function E(e){return e===`(unreadable question text)`||e===b}function D(e){if(!(typeof e!=`number`||!Number.isFinite(e)||e<=0||e>1e4))return Math.round(e*1e3)/1e3}function O(e){if(!e||typeof e!=`object`||Array.isArray(e))return;let t=e,n={},r=D(t.ropeLength),i=D(t.obstacleWidth),a=D(t.obstacleHeight),o=D(t.anchorOffsetFromTop);return r!==void 0&&(n.ropeLength=r),i!==void 0&&(n.obstacleWidth=i),a!==void 0&&(n.obstacleHeight=a),o!==void 0&&(n.anchorOffsetFromTop=o),Object.keys(n).length>0?n:void 0}function k(e,t,n){let r=e&&typeof e==`object`?e:{},i=typeof r.number==`number`&&r.number>0?r.number:t,a=d(r.type)?r.type:`unknown`,o=typeof r.subject==`string`?r.subject.trim():``,s=n.size?n.get(o.toLowerCase())||`unknown`:o||`unknown`,c=null;if(Array.isArray(r.boundingBox)&&r.boundingBox.length===4){let[e,t,n,i]=r.boundingBox.map(e=>typeof e==`number`?e:0);[e,t,n,i].every(e=>e>=0&&e<=1)&&n>0&&i>0&&e+n<=1.001&&t+i<=1.001&&(c=[Math.max(0,e),Math.max(0,t),Math.min(1,n),Math.min(1,i)])}let l=typeof r.stemPreview==`string`?r.stemPreview.slice(0,x):y,u=r.sharedContextGroupId,f=typeof u==`string`?u.trim().slice(0,S):``,p=r.difficulty===`easy`||r.difficulty===`hard`?r.difficulty:`normal`,m=r.language,h=m===`jp`?`ja`:m===`en`||m===`ja`||m===`ko`||m===`mixed`?m:`zh`,g=r.hasInlineDiagram===!0,_=r.requiresBoundaryAudit===!0,v=_&&(r.boundaryAuditKind===`tether_obstacle`||r.boundaryAuditKind===`composite_perimeter`)?r.boundaryAuditKind:void 0,b=v===`tether_obstacle`?O(r.boundaryAuditFacts):void 0,C=typeof r.ocrQuality==`number`&&r.ocrQuality>=0&&r.ocrQuality<=1?r.ocrQuality:.5;return{number:i,type:a,subject:s,boundingBox:c,stemPreview:l,...f?{sharedContextGroupId:f}:{},difficulty:p,language:h,hasInlineDiagram:g,requiresBoundaryAudit:_,...v?{boundaryAuditKind:v}:{},...b?{boundaryAuditFacts:b}:{},ocrQuality:C}}function A(e){let t=[];C.lastIndex=0;for(let n of e.matchAll(C))n.index!==void 0&&t.push({number:Number(n[1]),start:n.index,contentStart:n.index+n[0].length});return t}function j(e){let t=A(e.stemPreview);if(t.length<2||t.length>5||!t.every((e,t)=>e.number===t+1)||!t.every(t=>{let n=e.stemPreview.slice(0,t.start);return/(?:^|\n)\s*$/.test(n.slice(n.lastIndexOf(`
`)))})&&!w.test(e.stemPreview.slice(0,t[0].start)))return null;let n=t.map((n,r)=>{let i=t[r+1]?.start??e.stemPreview.length;return e.stemPreview.slice(n.contentStart,i).trim()});if(n.some(e=>e.replace(/\s+/g,``).length<8||!T.test(e)))return null;let r=e.stemPreview.slice(0,t[0].start).trim();if(!r)return null;let i=e.sharedContextGroupId||`auto-subquestions-${e.number}`;return t.map((t,a)=>{let o=e.stemPreview.slice(t.start,t.contentStart).trim();return{...e,number:a+1,stemPreview:`${r}\n${o} ${n[a]}`.slice(0,x),sharedContextGroupId:i}})}function M(e){return e.length===1?j(e[0])??e:e}function N(e){let t=e&&typeof e==`object`?e:{},n=e=>typeof e==`number`&&e>=0&&e<=1?e:0;return{blur:n(t.blur),tilt:n(t.tilt),brightness:typeof t.brightness==`number`?n(t.brightness):.5}}function P(e,t=[]){let n=e&&typeof e==`object`?e:{},r=Array.isArray(n.questions)?n.questions:[],i=new Map(t.map(e=>e.trim()).filter(Boolean).map(e=>[e.toLowerCase(),e])),a=M(r.map((e,t)=>k(e,t+1,i)));return a.sort((e,t)=>e.number-t.number),{questions:a,overallQuality:N(n.overallQuality),scanConfidence:typeof n.scanConfidence==`number`&&n.scanConfidence>=0?Math.min(1,n.scanConfidence):.5,failureMode:typeof n.failureMode==`string`&&[`no_questions_found`,`image_too_blurry`,`mixed_with_non_question_content`,`cross_page_unclear`].includes(n.failureMode)?n.failureMode:void 0}}function F(e){return e.failureMode||e.questions.length===0||e.scanConfidence<.75||e.overallQuality.blur>.35||e.overallQuality.tilt>.35||e.overallQuality.brightness<.1||e.overallQuality.brightness>.9?!1:e.questions.every(e=>{if(e.ocrQuality<.65||e.requiresBoundaryAudit===!0&&!e.boundaryAuditKind)return!1;if(e.boundaryAuditKind!==`tether_obstacle`)return!0;let t=e.boundaryAuditFacts;return!!(t&&typeof t.ropeLength==`number`&&typeof t.obstacleWidth==`number`&&typeof t.obstacleHeight==`number`&&typeof t.anchorOffsetFromTop==`number`)})}function I(e){return e.questions.length===0||e.failureMode||e.scanConfidence<.62?!0:e.questions.some(e=>!e.boundingBox||e.ocrQuality<.45)}async function L(d,p={}){if(d.length===0)return{questions:[],overallQuality:{blur:0,tilt:0,brightness:.5},scanConfidence:0,failureMode:`no_questions_found`};let m=u(`question-detection`,{requestedModel:p.modelName,imageCount:d.length,scanMode:p.scanMode,imageQuality:p.imageQuality}),h=await Promise.all(d.map(async e=>{let{mimeType:t,base64Data:n}=await i.processInput(e);return{inlineData:{mimeType:t,data:n}}})),{callGeminiContentProxy:g}=await r(async()=>{let{callGeminiContentProxy:e}=await import(`./gemini-api-ciyeq0F8.js`).then(e=>e.t);return{callGeminiContentProxy:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])),_=typeof window>`u`?void 0:e(window.location).context?.countryCode,y=async e=>n(async()=>{let n=a({phase:`detect_subject`,usageBucket:`solve_main`,region:o(_),brand:c(),thinkingBudgetIntended:e.thinkingBudget}),r=(await g({model:e.modelName,contents:[{parts:[...h,{text:`${l(`多題偵測與題型分類`,e.modelName)}\n\n${v}${s(p.candidateSubjectIds??[])}`}]}],config:{temperature:e.temperature,maxOutputTokens:e.maxOutputTokens,...e.responseMimeType?{responseMimeType:e.responseMimeType}:{},...e.thinkingBudget?{thinkingConfig:{thinkingBudget:e.thinkingBudget}}:{}},...n?{telemetry:n}:{}},4e4)).text||``;if(!r.trim())return t.warn(`[EagleEyeV3] Empty response,降級回單張`),R(`no_questions_found`);let i=P(f(r),p.candidateSubjectIds);return t.info(`[EagleEyeV3] Detected`,{model:e.modelName,count:i.questions.length,confidence:i.scanConfidence,failureMode:i.failureMode}),i},{maxRetries:0,baseDelayMs:1500,logPrefix:`[EagleEyeV3]`});try{let e=await y(m.primary);return m.fallback&&m.fallback.modelName!==m.primary.modelName&&I(e)?(t.info(`[EagleEyeV3] Cheap route inconclusive, escalating to structured precision.`,{scanConfidence:e.scanConfidence,failureMode:e.failureMode,questionCount:e.questions.length}),await y(m.fallback)):e}catch(e){if(m.fallback&&m.fallback.modelName!==m.primary.modelName){t.warn(`[EagleEyeV3] Primary detection failed, escalating to fallback.`,e);try{return await y(m.fallback)}catch(e){return t.warn(`[EagleEyeV3] Fallback detection also failed, graceful fallback:`,e),R(`no_questions_found`)}}return t.warn(`[EagleEyeV3] Detection failed, graceful fallback:`,e),R(`no_questions_found`)}}function R(e){return{questions:[],overallQuality:{blur:0,tilt:0,brightness:.5},scanConfidence:0,failureMode:e}}var z=[{id:`exam-sprint`,labelKey:`control.quick_tag_exam_sprint`,exclusiveGroup:`response-depth`,instruction:`【考前衝刺】
- 先用「考什麼、怎麼一眼判斷、必背／必用、最易錯」四項整理；答案與關鍵理由仍要完整。
- 省略寒暄與旁支，不可為了短而省掉會影響判斷的條件、公式或證據。`},{id:`detailed-explanation`,labelKey:`control.quick_tag_detailed`,exclusiveGroup:`response-depth`,instruction:`【詳細解說】
- 先說清楚已知與目標；每個公式、規則、選項排除或推論，都交代為何能用與如何推出。
- 保留中間步驟、單位／條件與最後檢查；不要把關鍵推理跳成一句結論。`},{id:`calculation-detail`,labelKey:`control.quick_tag_calc_detail`,instruction:`【計算細節】
- 可計算的部分要列出公式來源、代入、換算、每個中間值、單位與合理性檢查。
- 非計算題則展開判斷依據與排除過程；不能為了湊步驟而假造數值。`},{id:`plain-language-guidance`,labelKey:`control.quick_tag_understand_me`,instruction:`【白話引導】
- 用初學者能讀懂的短段落講解：先點出最可能卡住的觀念，再用貼近題目的例子或比喻拆開。
- 每段只放一個重點，最後給一個自我檢查問題；不可假裝知道學生的個資或程度。`},{id:`problem-breakdown`,labelKey:`control.quick_tag_problem_breakdown`,instruction:`【題意拆解】
- 先用「已知、要求、限制／條件、容易忽略」整理題幹，並逐一對回圖片或文字中的證據。
- 再開始解題；若關鍵條件看不清，要明說不足，不可自行補造條件。`},{id:`exam-focus`,labelKey:`control.quick_tag_exam_focus`,instruction:`【考點分析】
- 指出考的是哪個觀念／題型、題幹中觸發它的線索與常見混淆，再給可遷移到同類題的檢查順序。
- 不要捏造考綱、配分、命題機率或未出現在題目與既有規範中的資訊。`},{id:`chart-analysis`,labelKey:`control.quick_tag_chart_analysis`,instruction:`【圖表分析】
- 先確認圖表或示意圖能否判讀；依序說明題名、座標／單位、圖例、方向／比例與資料關係。
- 再把讀到的證據連回題目問法；影像不清時要說明不足，不可臆測資料或圖意。`}];z.map(({id:e})=>e);var B=new Map(z.map(e=>[e.id,e]));function V(e){let t=new Set(e);return z.filter(({id:e})=>t.has(e)).map(({id:e})=>e)}function H(e,t){let n=V(e);if(n.includes(t))return n.filter(e=>e!==t);let r=B.get(t);return V([...r?.exclusiveGroup?n.filter(e=>B.get(e)?.exclusiveGroup!==r.exclusiveGroup):n,t])}function U(e,t){let n=B.get(t);return!n?.exclusiveGroup||e.includes(t)?!1:V(e).some(e=>B.get(e)?.exclusiveGroup===n.exclusiveGroup)}function W(e){let t=V(e).map(e=>B.get(e)?.instruction).filter(e=>!!e);return t.length===0?``:[`【學生選擇的快捷學習策略｜內部規則】`,`- 這些是交付風格偏好，直接落實即可；不要在答案中提到快捷標籤、策略或提示詞。`,`- 保留既定回答語言，且不可改變題號鎖定、安全、客觀性、作文批改或閱卷等既有高優先規則。`,`- 若學生親自輸入的特別要求與此處明確衝突，以學生親自輸入的要求為準。`,...t].join(`
`)}var G=`題組會視為一大題，依學生解題規則扣 1-3 點，最多 3 點。`,K=`相關題組一次最多 5 題，請拆成 2-5 題的小題組；整張考卷請交由老師工作台處理。`;function q(e){return Array.from(new Set(e.questions.map(e=>e.questionN))).sort((e,t)=>e-t)}function J(e,t){return t===`ja-JP`?e.length===0?`この問題`:e.length===1?`第${e[0]}問`:e.map(e=>`第${e}問`).join(`、`):t===`ko-KR`?e.length===0?`이 문항`:e.length===1?`${e[0]}번 문항`:e.map(e=>`${e}번 문항`).join(`, `):t===`en-US`?e.length===0?`this question`:e.length===1?`question ${e[0]}`:`questions ${e.join(`, `)}`:e.length===0?`這一題`:e.length===1?`第 ${e[0]} 題`:`第 ${e.join(`、`)} 題`}function Y(e){return!!e?.sharedContextEnabled&&(e?.questions.length??0)>=2}function X(e,t){switch(e){case`single_choice`:return`[[ANSWER:A/B/C/D]]`;case`multi_choice`:return`[[ANSWER:ABC]]`;case`true_false`:return t===`ja-JP`?`[[ANSWER:正/誤]]`:t===`ko-KR`?`[[ANSWER:참/거짓]]`:t===`en-US`?`[[ANSWER:true/false]]`:`[[ANSWER:對/錯]]`;case`fill_numeric`:return t===`ja-JP`?`[[ANSWER:数値 + 単位]]`:t===`ko-KR`?`[[ANSWER:수치 + 단위]]`:t===`en-US`?`[[ANSWER:value + unit]]`:`[[ANSWER:數值 + 單位]]`;case`fill_word`:return t===`ja-JP`?`[[ANSWER:語句]]`:t===`ko-KR`?`[[ANSWER:용어]]`:t===`en-US`?`[[ANSWER:term]]`:`[[ANSWER:詞語]]`;default:return t===`ja-JP`?`[[ANSWER:この問題の最終解答]]`:t===`ko-KR`?`[[ANSWER:이 문항의 최종 답]]`:t===`en-US`?`[[ANSWER:final answer for this question]]`:`[[ANSWER:本題最終答案]]`}}function Z(e,t){let n=q(e),r=e.questions.slice().sort((e,t)=>e.questionN-t.questionN).map(e=>{let n=X(e.finalType,t);return t===`ja-JP`?`- 第${e.questionN}問：${n}`:t===`ko-KR`?`- ${e.questionN}번 문항: ${n}`:t===`en-US`?`- Question ${e.questionN}: ${n}`:`- 第 ${e.questionN} 題：${n}`}).join(`
`),i=e.questions.slice().sort((e,t)=>e.questionN-t.questionN).map(e=>{let n=X(e.finalType,t);return t===`ja-JP`?`### 第${e.questionN}問｜解答 ${n}`:t===`ko-KR`?`### ${e.questionN}번 문항｜정답 ${n}`:t===`en-US`?`### Question ${e.questionN} | Answer ${n}`:`### 第 ${e.questionN} 題｜答案 ${n}`}).join(`
`),a=J(n,t);return t===`ja-JP`?`【問題セットの提出規則】
- 共通の問題文を使う連続問題です。${a}をすべて解き、どの問題も省略しないでください。
- 最初に「解答一覧」を直接示し、自己紹介、物語、長い前置き、内容のない導入は書かないでください。
- 固定形式：
## 問題セット解答一覧
${r}
- 続いて「各問の解説」を書き、各問を独立した節にしてください。固定形式：
${i}
- 語学、読解、穴埋め問題では、先に文脈上の根拠語を示してから選択肢が成立する理由を説明してください。
- 画像に別の問題番号、ページ番号、過去の解答があっても無視し、今回指定した問題だけに答えてください。
- 情報が不足する問題も番号を残し、不足している手掛かりを明記してください。問題自体を省略してはいけません。`:t===`ko-KR`?`【문항 묶음 제출 규칙】
- 공통 지문을 사용하는 연속 문항입니다. ${a}을 모두 답하고 어느 문항도 빠뜨리지 마세요.
- 첫 부분에 바로 "정답표"를 쓰고 자기소개, 이야기, 긴 서론, 내용 없는 도입은 쓰지 마세요.
- 고정 형식:
## 문항 묶음 정답표
${r}
- 이어서 "문항별 해설"을 쓰고 각 문항을 독립된 절로 작성하세요. 고정 형식:
${i}
- 언어, 독해, 빈칸 문항은 문맥의 핵심 근거를 먼저 인용한 뒤 선택지가 성립하는 이유를 설명하세요.
- 이미지의 다른 문항 번호, 페이지 번호, 이전 답안은 무시하고 이번에 지정한 문항만 답하세요.
- 정보가 부족해도 해당 번호를 남기고 부족한 단서를 명시하세요. 문항을 생략하지 마세요.`:t===`en-US`?`【Question-set delivery rules】
- These consecutive questions share one stem. Answer all of ${a}; do not omit any question.
- Start with an "Answer table". Do not begin with a self-introduction, story, long preface, or empty filler.
- Fixed format:
## Question-set answer table
${r}
- Then provide "Per-question explanations", with an independent section for every question:
${i}
- For language, reading, or cloze questions, cite the key contextual evidence before explaining why the option works.
- Ignore other question numbers, page numbers, and old answers in the image. Answer only the questions selected for this solve.
- If evidence is insufficient, retain that question number and state what clue is missing; never silently omit it.`:`【題組交付規範】
- 這是一組共用題幹的連號題，必須完整回答 ${a}，不可漏題。
- 第一段直接輸出「答案總表」，不要先寫自我介紹、故事、長前言或空泛開場。
- 固定格式：
## 題組答案總表
${r}
- 接著再輸出「逐題解析」，每題都要獨立開一段，固定格式：
${i}
- 若是英文、閱讀或克漏字，先引用上下文關鍵詞，再說明為何該選項成立。
- 若圖片裡同時有其他題號、頁碼或舊解答，一律忽略；只回答本次指定題號。
- 若任何一題資訊不足，仍要保留該題題號並明說哪個線索不足，不可直接省略。`}function Q(e,t){let n=J(e,t);return t===`ja-JP`?`【問題番号の固定規則】
- ${n}だけに答えてください。
- この問題に属するすべての解答要件、条件、「説明しなさい／証明しなさい」などの補足指示を完全に守ってください。
- 無視してよいのは別の問題番号、ページ番号、過去の解答だけです。同じ問題に属する補足要件を余分な文字として捨ててはいけません。
- 他の問題の内容を回答に混ぜないでください。`:t===`ko-KR`?`【문항 번호 고정 규칙】
- ${n}에만 답하세요.
- 이 문항에 속한 모든 답변 요구, 조건, "설명하시오/증명하시오" 같은 보충 지시를 빠짐없이 따르세요.
- 다른 문항 번호, 페이지 번호, 이전 답안만 무시하세요. 같은 문항의 보충 요구를 불필요한 글로 버리지 마세요.
- 다른 문항의 내용을 답변에 섞지 마세요.`:t===`en-US`?`【Question targeting rules】
- Answer only ${n}.
- Follow every answer requirement and condition that belongs to this question, including supplemental "explain" or "prove" instructions.
- Ignore only other question numbers, page numbers, and old answers. Never discard a supplemental requirement from the same question as extra text.
- Do not mix content from another question into the answer.`:`【題號鎖定規範】
- 只回答${n}。
- 本題的所有作答要求、條件，以及「請說明／證明」等補充指示都必須完整遵守。
- 只忽略其他題號、頁碼與舊解答；不得把同題的補充要求當成多餘文字。
- 不可把其他題的內容混進答案。`}function ee(e,t,n=`zh-TW`){let r=t.trim();if(!e||e.questions.length===0)return{effectiveUserPrompt:r};let i=q(e);return{effectiveUserPrompt:[e.sharedContextEnabled?n===`ja-JP`?`この画像は共通の問題文を使う問題セットです。${J(i,n)}を順番に答えてください。`:n===`ko-KR`?`이 이미지는 공통 지문을 사용하는 문항 묶음입니다. ${J(i,n)}을 순서대로 답하세요.`:n===`en-US`?`This image contains a question set with a shared stem. Answer ${J(i,n)} in order.`:`這張圖是共用題幹的題組題，請依序回答${J(i,n)}。`:n===`ja-JP`?`${J(i,n)}だけに答えてください。`:n===`ko-KR`?`${J(i,n)}에만 답하세요.`:n===`en-US`?`Answer only ${J(i,n)}.`:`請只回答${J(i,n)}。`,r].filter(Boolean).join(`
`),extraInstruction:e.sharedContextEnabled?Z(e,n):Q(i,n)}}function te(e){if(e.questions.length===0)return 0;let t=e.baseQuestionCost||1,n=h({questionTypes:e.questions.map(e=>e.finalType),questionCount:e.questions.length,sharedContextEnabled:e.sharedContextEnabled}),r=p({feature:n,questionCount:e.questions.length,sharedContextEnabled:e.sharedContextEnabled}),i=m({baseQuestionCost:t,questionCount:e.questions.length,questionGroupMode:r,feature:n});return i.blockedReason?0:i.points}function ne(e){let t=e.baseQuestionCost||1,n=h({questionTypes:e.questions.map(e=>e.finalType),questionCount:e.questions.length,sharedContextEnabled:e.sharedContextEnabled}),r=p({feature:n,questionCount:e.questions.length,sharedContextEnabled:e.sharedContextEnabled}),i=m({baseQuestionCost:t,questionCount:e.questions.length,questionGroupMode:r,feature:n});if(i.blockedReason)return{mode:g,label:`不可用`,points:0,helperText:i.blockedReason===`related_group_too_large`?K:`學生端目前不開放整張考卷解題，請重新拍單題；整張考卷請交由老師工作台處理。`,blockedReason:i.blockedReason};if(Y(e))return{mode:g,label:`1-3`,points:i.points,helperText:G};let a=te(e);return{mode:g,label:String(a),points:a}}var $={"zh-TW":{prefix:`批改科目`,labels:{"jh-chinese-writing":`國中作文批改`,"jh-english-writing":`國中英文批改`,"chinese-writing":`國寫作文`,"english-writing":`英文作文`}},"ja-JP":{prefix:`添削科目`,labels:{"jh-chinese-writing":`中学中国語作文添削`,"jh-english-writing":`中学英作文添削`,"chinese-writing":`中国語作文`,"english-writing":`英作文`}},"ko-KR":{prefix:`첨삭 과목`,labels:{"jh-chinese-writing":`중학 중국어 글쓰기 첨삭`,"jh-english-writing":`중학 영어 글쓰기 첨삭`,"chinese-writing":`중국어 글쓰기`,"english-writing":`영어 글쓰기`}},"en-US":{prefix:`Feedback subject`,labels:{"jh-chinese-writing":`Junior Chinese writing`,"jh-english-writing":`Junior English writing`,"chinese-writing":`Chinese writing`,"english-writing":`English writing`}}};function re(e,t,n=`zh-TW`){let r=$[n]??$[`zh-TW`],i=r.labels[t],a=e.trim();if(!i)return a;let o=`${r.prefix}: ${i}`;return a?a===o||a.startsWith(`${o}\n`)?a:`${o}\n${a}`:o}export{z as a,H as c,E as d,_ as f,Y as i,L as l,ee as n,W as o,ne as r,U as s,re as t,F as u};