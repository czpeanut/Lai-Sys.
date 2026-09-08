import{i as e}from"./rolldown-runtime-aKtaBQYM.js";import{i as t,t as n}from"./vendor-react-BomN5VXn.js";import{y as r}from"./Primitives-B8szjkoj.js";import{t as i}from"./x-CAXnU5qL.js";import{W as a,jt as o}from"./index-DSBwn2dO.js";import{MarkdownContent as s,t as c}from"./MarkdownContent-27WLCcRh.js";var l=e(t(),1),u=n(),d={number_source:`annotation.category_number_source`,unit_conversion:`annotation.category_unit_conversion`,formula_role:`annotation.category_formula_role`,term_definition:`annotation.category_term_definition`,ratio_meaning:`annotation.category_ratio_meaning`,common_pitfall:`annotation.category_common_pitfall`,step_bridge:`annotation.category_step_bridge`},f=/(```[\s\S]*?```|~~~[\s\S]*?~~~|\$\$[\s\S]*?\$\$|`[^`\n]*`|\$[^$\n]+\$|!\[[^\]]*]\([^)]+\)|\[[^\]]+]\([^)]+\))/g,p=`#answer-annotation-`;function m(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function h(e){return e.replace(/\\/g,`\\\\`).replace(/\[/g,`\\[`).replace(/\]/g,`\\]`)}function g(e){let t=[],n=0;for(let r of e.matchAll(f)){let i=r.index??0;i>n&&t.push({text:e.slice(n,i),protected:!1}),t.push({text:r[0],protected:!0}),n=i+r[0].length}return n<e.length&&t.push({text:e.slice(n),protected:!1}),t}function _(e){return`#answer-annotation-${e.id}`}function v(e){return`[${h(e.target)}](${_(e)})`}function y(e,t){if(!e||t.length===0)return e;let n=g(e);return[...t].filter(e=>e.target.trim().length>0).sort((e,t)=>t.target.length-e.target.length).forEach(e=>{let t=new RegExp(m(e.target),`g`),r=0,i=!1;for(let a=0;a<n.length&&!i;a+=1){let o=n[a];if(!o||o.protected)continue;let s;for(t.lastIndex=0;s=t.exec(o.text);){if(r+=1,r<e.occurrence)continue;let t=s.index,c=t+s[0].length,l=[];t>0&&l.push({text:o.text.slice(0,t),protected:!1}),l.push({text:v(e),protected:!0}),c<o.text.length&&l.push({text:o.text.slice(c),protected:!1}),n.splice(a,1,...l),i=!0;break}}}),n.map(e=>e.text).join(``)}function b(e){if(!e)return null;try{let t=typeof window>`u`?`https://94aiteacher.local/`:window.location.href,n=e.startsWith(`#`)?e:new URL(e,t).hash;if(!n.startsWith(p))return null;let r=n.slice(19).trim();return r?decodeURIComponent(r):null}catch{return null}}function x(e){return e?.closest(`[data-answer-annotation-id], a[href*="#answer-annotation-"]`)??null}function S(e){return e?e.getAttribute(`data-answer-annotation-id`)||(e instanceof HTMLAnchorElement?b(e.getAttribute(`href`))??b(e.href):null):null}var C=({children:e,isVisualEnhanced:t,annotations:n})=>{let{t:f}=a(),[p,m]=(0,l.useState)(null),h=(0,l.useMemo)(()=>c(e),[e]),g=(0,l.useMemo)(()=>y(h,n),[n,h]),_=(0,l.useMemo)(()=>n.find(e=>e.id===p)??null,[p,n]),v=(0,l.useCallback)(e=>{let t=e.target,r=x(t);if(!r)return;e.preventDefault(),e.stopPropagation();let i=S(r),a=i?n.find(e=>e.id===i):null;a&&m(a.id)},[n]);return(0,l.useEffect)(()=>{if(!_)return;let e=e=>{e.key===`Escape`&&m(null)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[_]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`style`,{children:`
        .answer-annotation-layer [data-answer-annotation-id],
        .answer-annotation-layer a[href*="#answer-annotation-"] {
          appearance: none;
          border-radius: 0.65em;
          border: 1px solid rgba(197, 164, 102, 0.46);
          border: 1px solid color-mix(in srgb, var(--gold-300, #c5a466) 46%, transparent);
          background: rgba(253, 230, 138, 0.64);
          background: color-mix(in srgb, var(--gold-100, #fef3c7) 72%, transparent);
          box-shadow:
            inset 0 -0.35em 0 rgba(252, 211, 77, 0.35),
            0 1px 0 rgba(255, 253, 248, 0.82);
          box-shadow:
            inset 0 -0.35em 0 color-mix(in srgb, var(--gold-300, #fcd34d) 35%, transparent),
            0 1px 0 rgba(255, 253, 248, 0.82);
          color: var(--gold-800, #854d0e);
          cursor: help;
          display: inline;
          font: inherit;
          font-weight: 800;
          line-height: inherit;
          margin: 0 0.03em;
          padding: 0.06rem 0.28rem;
          text-align: inherit;
          text-decoration: none;
          transition:
            background-color 160ms ease,
            border-color 160ms ease,
            box-shadow 160ms ease,
            color 160ms ease;
        }
        .answer-annotation-layer [data-answer-annotation-id]:hover,
        .answer-annotation-layer [data-answer-annotation-id]:focus-visible,
        .answer-annotation-layer a[href*="#answer-annotation-"]:hover,
        .answer-annotation-layer a[href*="#answer-annotation-"]:focus-visible {
          background: rgba(253, 230, 138, 0.82);
          background: color-mix(in srgb, var(--gold-200, #fde68a) 82%, transparent);
          border-color: rgba(180, 145, 93, 0.78);
          border-color: color-mix(in srgb, var(--gold-400, #fbbf24) 62%, var(--gold-700, #713f12));
          box-shadow:
            inset 0 -0.45em 0 rgba(251, 191, 36, 0.48),
            0 0 0 3px rgba(251, 191, 36, 0.14);
          box-shadow:
            inset 0 -0.45em 0 color-mix(in srgb, var(--gold-400, #fbbf24) 48%, transparent),
            0 0 0 3px color-mix(in srgb, var(--gold-300, #fcd34d) 22%, transparent);
          color: var(--gold-900, #713f12);
          outline: 2px solid rgba(251, 191, 36, 0.58);
          outline: 2px solid color-mix(in srgb, var(--gold-400, #fbbf24) 58%, transparent);
          outline-offset: 2px;
        }
        .answer-annotation-sheet {
          bottom: calc(96px + env(safe-area-inset-bottom));
          max-height: min(46dvh, calc(100dvh - 126px - env(safe-area-inset-bottom)));
          touch-action: pan-y;
        }
        .answer-annotation-scroll {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
          touch-action: pan-y;
        }
        @media (min-width: 640px) {
          .answer-annotation-sheet {
            bottom: 1rem;
            max-height: 60dvh;
          }
        }
        @media (min-width: 1024px) {
          .answer-annotation-sheet {
            bottom: 1.25rem;
            max-height: 68dvh;
          }
        }
      `}),(0,u.jsx)(`div`,{className:`answer-annotation-layer`,onClickCapture:v,children:(0,u.jsx)(s,{isVisualEnhanced:t,normalizeLooseLatex:!1,children:g})}),_&&(0,u.jsxs)(`aside`,{role:`dialog`,"aria-modal":`false`,"aria-labelledby":`answer-annotation-title-${_.id}`,"data-testid":`answer-annotation-sheet`,className:`answer-annotation-sheet fixed inset-x-2 z-[140] flex animate-fade-in-up flex-col overflow-hidden rounded-2xl border border-[var(--gold-200)] bg-[var(--surface-raised)] p-3 shadow-2xl shadow-amber-950/12 sm:inset-x-auto sm:right-4 sm:w-[min(430px,calc(100vw-2rem))] sm:p-4 lg:right-5 lg:w-[400px] lg:p-5 print:hidden`,children:[(0,u.jsxs)(`div`,{className:`flex items-start gap-2.5 sm:gap-3`,children:[(0,u.jsx)(`div`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--gold-100)] text-[var(--gold-700)] sm:h-10 sm:w-10`,children:(0,u.jsx)(o,{className:`h-5 w-5`,"aria-hidden":`true`})}),(0,u.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,u.jsx)(`p`,{className:`text-[10px] font-black uppercase tracking-widest text-[var(--gold-700)]`,children:f(d[_.category])}),(0,u.jsx)(`h3`,{id:`answer-annotation-title-${_.id}`,className:`mt-0.5 text-base font-black leading-snug text-ac-stone`,children:_.title}),(0,u.jsxs)(`p`,{className:`mt-1 inline-flex max-w-full items-center rounded-full border border-[var(--gold-200)] bg-[var(--gold-50)] px-2 py-0.5 text-[11px] font-black leading-tight text-[var(--gold-700)]`,children:[(0,u.jsx)(`span`,{className:`shrink-0`,children:f(`annotation.selected`)}),(0,u.jsx)(`span`,{className:`ml-1 truncate`,children:_.target})]})]}),(0,u.jsx)(`button`,{type:`button`,onClick:()=>m(null),"aria-label":f(`annotation.close_aria`),className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-1)] bg-[var(--surface-base)] text-[var(--ink-3)] transition hover:border-[var(--gold-300)] hover:text-[var(--gold-700)] focus-polish`,children:(0,u.jsx)(i,{className:`h-4 w-4`,"aria-hidden":`true`})})]}),(0,u.jsxs)(`div`,{"data-testid":`answer-annotation-scroll`,className:`answer-annotation-scroll mt-3 min-h-0 overflow-y-auto pr-1 sm:mt-4`,children:[(0,u.jsxs)(`div`,{className:`rounded-xl bg-[var(--surface-sunken)] px-3 py-3`,children:[(0,u.jsx)(`p`,{className:`text-[13px] font-bold leading-relaxed text-[var(--ink-2)] sm:text-sm`,children:_.meaning}),_.source&&(0,u.jsxs)(`p`,{className:`mt-2 text-[11px] font-bold leading-relaxed text-[var(--ink-4)] sm:text-xs`,children:[f(`annotation.source`),_.source]})]}),(0,u.jsxs)(`div`,{className:`mt-3 flex items-start gap-2 rounded-xl border border-[var(--sage-200)] bg-[var(--surface-tinted-sage)] px-3 py-3`,children:[(0,u.jsx)(r,{className:`mt-0.5 h-4 w-4 shrink-0 text-[var(--sage-700)]`,"aria-hidden":`true`}),(0,u.jsx)(`p`,{className:`text-[13px] font-bold leading-relaxed text-[var(--sage-800)] sm:text-sm`,children:_.whyItMatters})]}),_.pitfall&&(0,u.jsx)(`p`,{className:`mt-3 rounded-xl border border-[var(--rose-200)] bg-[var(--warm-danger-soft)] px-3 py-2 text-[13px] font-bold leading-relaxed text-[var(--warm-danger)] sm:text-sm`,children:_.pitfall})]})]})]})};export{C as AnnotatedMarkdownContent};