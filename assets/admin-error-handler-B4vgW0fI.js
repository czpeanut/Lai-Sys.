import{t as e}from"./i18n-copy-DhgpW8c4.js";import{_ as t,h as n,q as r}from"./index-DSBwn2dO.js";function i(t){return t||(typeof window<`u`?e(window.location):`zh-TW`)}function a(e){return e===`ja-JP`?`に失敗しました`:e===`ko-KR`?` 실패`:e===`en-US`?` failed`:`失敗`}function o(e){return/[\u3400-\u9fff]/.test(e)}function s(e){return e===`ja-JP`?`操作に失敗しました`:e===`ko-KR`?`작업에 실패했습니다`:e===`en-US`?`Action failed`:`操作失敗`}function c(e,t){return e.split(`
`).filter(e=>!e.includes(t)).join(`
`).trim()}function l(e,c,l,u=`權限不足`,d){r.error.play();let f=i(d),p=t(e,u,{locale:f});n(`[${p.code}] ${p.message.split(`
`)[0]}`);let m=a(f),h=l.trim(),g=f===`zh-TW`||!o(h)?h:s(f);c(g.endsWith(m)?g:`${g}${m}`,p.message)}function u(e,r,a=`操作失敗，請稍後再試`,o,s={}){let c=t(e,a,{locale:i(o),...s});n(`[${c.code}] ${c.message.split(`
`)[0]}`),r(c.message)}function d(e,r,a=`操作失敗，請稍後再試`,o){let s=t(e,a,{locale:i(o),includeRawReason:!1});n(`[${s.code}] ${s.message.split(`
`)[0]}`),r(c(s.message,s.code))}export{u as n,d as r,l as t};