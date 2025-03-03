"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5003],{62286:(t,e,o)=>{o.d(e,{D:()=>a});const a=(0,o(23097).P)("title",{},"Title")},38622:(t,e,o)=>{o.d(e,{Q:()=>i,v:()=>a});const a=(0,o(23097).P)("toolbox",{},"Toolbox");function i(t){return{show:!0,onclick:t,iconStyle:{borderColor:"lightgray"},icon:"path://M995.84,1024,28.16,1024C12.8,1024,0,1011.2,0,995.84l0,0c0-15.36,12.8-28.16,28.16-28.16l967.68,0c15.36,0,28.16,12.8,28.16,28.16l0,0C1024,1011.2,1011.2,1024,995.84,1024zM926.72,376.32,926.72,376.32c-10.24-10.24-30.72-10.24-40.96,0L537.6,721.92,537.6,28.16C537.6,12.8,527.36,0,512,0s-25.6,12.8-25.6,28.16l0,693.76L138.24,376.32c-10.24-10.24-30.72-10.24-40.96,0-10.24,10.24-10.24,28.16,0,40.96l394.24,394.24c2.56,2.56,2.56,2.56,5.12,2.56,0,0,2.56,2.56,2.56,2.56,7.68,2.56,15.36,2.56,23.04,0,2.56,0,2.56-2.56,2.56-2.56,2.56,0,5.12-2.56,5.12-2.56l394.24-394.24C936.96,404.48,936.96,386.56,926.72,376.32z"}}},96214:(t,e,o)=>{var a=o(64836);e.Z=void 0;var i=a(o(64938)),n=o(85893),r=(0,i.default)((0,n.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");e.Z=r},72428:(t,e,o)=>{o.d(e,{Z:()=>n});var a=o(82066),i=o(85893);const n=(0,a.Z)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},31812:(t,e,o)=>{o.d(e,{Z:()=>y});var a=o(63366),i=o(87462),n=o(67294),r=o(98216),l=o(27909),d=o(94780),s=o(90948),c=o(28628),u=o(11057),p=o(98363),g=o(98456),m=o(35971),b=o(34867);function v(t){return(0,b.ZP)("MuiLoadingButton",t)}const h=(0,o(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var f=o(85893);const Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],x=(0,s.ZP)(u.Z,{shouldForwardProp:t=>(t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t)(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,e)=>[e.root,e.startIconLoadingStart&&{[`& .${h.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${h.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})((({ownerState:t,theme:e})=>(0,i.Z)({[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${h.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}))),I=(0,s.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.loadingIndicator,e[`loadingIndicator${(0,r.Z)(o.loadingPosition)}`]]}})((({theme:t,ownerState:e})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{left:"small"===e.size?10:14},"start"===e.loadingPosition&&"text"===e.variant&&{left:6},"center"===e.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{right:"small"===e.size?10:14},"end"===e.loadingPosition&&"text"===e.variant&&{right:6},"start"===e.loadingPosition&&e.fullWidth&&{position:"relative",left:-10},"end"===e.loadingPosition&&e.fullWidth&&{position:"relative",right:-10}))),y=n.forwardRef((function(t,e){const o=n.useContext(p.Z),s=(0,m.Z)(o,t),u=(0,c.i)({props:s,name:"MuiLoadingButton"}),{children:b,disabled:h=!1,id:y,loading:C=!1,loadingIndicator:$,loadingPosition:B="center",variant:E="text"}=u,L=(0,a.Z)(u,Z),S=(0,l.Z)(y),k=null!=$?$:(0,f.jsx)(g.Z,{"aria-labelledby":S,color:"inherit",size:16}),R=(0,i.Z)({},u,{disabled:h,loading:C,loadingIndicator:k,loadingPosition:B,variant:E}),P=(t=>{const{loading:e,loadingPosition:o,classes:a}=t,n={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${(0,r.Z)(o)}`],endIcon:[e&&`endIconLoading${(0,r.Z)(o)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${(0,r.Z)(o)}`]},l=(0,d.Z)(n,v,a);return(0,i.Z)({},a,l)})(R),_=C?(0,f.jsx)(I,{className:P.loadingIndicator,ownerState:R,children:k}):null;return(0,f.jsxs)(x,(0,i.Z)({disabled:h||C,id:S,ref:e},L,{variant:E,classes:P,ownerState:R,children:["end"===R.loadingPosition?b:_,"end"===R.loadingPosition?_:b]}))}))},56863:(t,e,o)=>{o.d(e,{Z:()=>y});var a=o(63366),i=o(87462),n=o(67294),r=o(63961),l=o(94780),d=o(2101),s=o(97258),c=o(98216),u=o(90948),p=o(28628),g=o(1588),m=o(34867);function b(t){return(0,m.ZP)("MuiButtonGroup",t)}const v=(0,g.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var h=o(98363),f=o(93326),Z=o(85893);const x=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],I=(0,u.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${v.grouped}`]:e.grouped},{[`& .${v.grouped}`]:e[`grouped${(0,c.Z)(o.orientation)}`]},{[`& .${v.grouped}`]:e[`grouped${(0,c.Z)(o.variant)}`]},{[`& .${v.grouped}`]:e[`grouped${(0,c.Z)(o.variant)}${(0,c.Z)(o.orientation)}`]},{[`& .${v.grouped}`]:e[`grouped${(0,c.Z)(o.variant)}${(0,c.Z)(o.color)}`]},{[`& .${v.firstButton}`]:e.firstButton},{[`& .${v.lastButton}`]:e.lastButton},{[`& .${v.middleButton}`]:e.middleButton},e.root,e[o.variant],!0===o.disableElevation&&e.disableElevation,o.fullWidth&&e.fullWidth,"vertical"===o.orientation&&e.vertical]}})((({theme:t,ownerState:e})=>(0,i.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},"vertical"===e.orientation&&{flexDirection:"column"},{[`& .${v.grouped}`]:(0,i.Z)({minWidth:40,"&:hover":(0,i.Z)({},"contained"===e.variant&&{boxShadow:"none"})},"contained"===e.variant&&{boxShadow:"none"}),[`& .${v.firstButton},& .${v.middleButton}`]:(0,i.Z)({},"horizontal"===e.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===e.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===e.variant&&"horizontal"===e.orientation&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${v.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},"text"===e.variant&&"vertical"===e.orientation&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${v.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},"text"===e.variant&&"inherit"!==e.color&&{borderColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:(0,d.Fq)(t.palette[e.color].main,.5)},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"transparent"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"transparent"},"contained"===e.variant&&"horizontal"===e.orientation&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${v.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},"contained"===e.variant&&"vertical"===e.orientation&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${v.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},"contained"===e.variant&&"inherit"!==e.color&&{borderColor:(t.vars||t).palette[e.color].dark},{"&:hover":(0,i.Z)({},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"currentColor"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"currentColor"})}),[`& .${v.lastButton},& .${v.middleButton}`]:(0,i.Z)({},"horizontal"===e.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===e.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===e.variant&&"horizontal"===e.orientation&&{marginLeft:-1},"outlined"===e.variant&&"vertical"===e.orientation&&{marginTop:-1})}))),y=n.forwardRef((function(t,e){const o=(0,p.i)({props:t,name:"MuiButtonGroup"}),{children:d,className:u,color:g="primary",component:m="div",disabled:v=!1,disableElevation:y=!1,disableFocusRipple:C=!1,disableRipple:$=!1,fullWidth:B=!1,orientation:E="horizontal",size:L="medium",variant:S="outlined"}=o,k=(0,a.Z)(o,x),R=(0,i.Z)({},o,{color:g,component:m,disabled:v,disableElevation:y,disableFocusRipple:C,disableRipple:$,fullWidth:B,orientation:E,size:L,variant:S}),P=(t=>{const{classes:e,color:o,disabled:a,disableElevation:i,fullWidth:n,orientation:r,variant:d}=t,s={root:["root",d,"vertical"===r&&"vertical",n&&"fullWidth",i&&"disableElevation"],grouped:["grouped",`grouped${(0,c.Z)(r)}`,`grouped${(0,c.Z)(d)}`,`grouped${(0,c.Z)(d)}${(0,c.Z)(r)}`,`grouped${(0,c.Z)(d)}${(0,c.Z)(o)}`,a&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,l.Z)(s,b,e)})(R),_=n.useMemo((()=>({className:P.grouped,color:g,disabled:v,disableElevation:y,disableFocusRipple:C,disableRipple:$,fullWidth:B,size:L,variant:S})),[g,v,y,C,$,B,L,S,P.grouped]),w=(0,s.Z)(d),z=w.length,M=t=>{const e=0===t,o=t===z-1;return e&&o?"":e?P.firstButton:o?P.lastButton:P.middleButton};return(0,Z.jsx)(I,(0,i.Z)({as:m,role:"group",className:(0,r.Z)(P.root,u),ref:e,ownerState:R},k,{children:(0,Z.jsx)(h.Z.Provider,{value:_,children:w.map(((t,e)=>(0,Z.jsx)(f.Z.Provider,{value:M(e),children:t},e)))})}))}))},97258:(t,e,o)=>{o.d(e,{Z:()=>i});var a=o(67294);function i(t){return a.Children.toArray(t).filter((t=>a.isValidElement(t)))}},6351:(t,e,o)=>{o.d(e,{Z:()=>s});var a=o(67294),i=o(86010),n=o(95999),r=o(6023);const l="collapseSidebarButton_PEFL",d="collapseSidebarButtonIcon_kv0_";function s(t){let{onClick:e}=t;return a.createElement("button",{type:"button",title:(0,n.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,n.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",l),onClick:e},a.createElement(r.Z,{className:d}))}},89665:(t,e,o)=>{o.d(e,{Z:()=>B});var a=o(87462),i=o(67294),n=o(86010),r=o(902),l=o(86668),d=o(86043),s=o(35281),c=o(53438),u=o(48596),p=o(14353),g=o(39960),m=o(95999),b=o(72389),v=o(1424);function h(t){let{categoryLabel:e,onClick:o}=t;return i.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:o})}function f(t){let{item:e,onItemClick:o,activePath:m,level:f,index:Z,...x}=t;const{items:I,label:y,collapsible:C,className:$,href:B}=e,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,l.L)(),L=function(t){const e=(0,b.Z)();return(0,i.useMemo)((()=>t.href?t.href:!e&&t.collapsible?(0,c.Wl)(t):void 0),[t,e])}(e),S=(0,c._F)(e,m),k=(0,u.Mg)(B,m),{collapsed:R,setCollapsed:P}=(0,d.u)({initialState:()=>!!C&&(!S&&e.collapsed)}),{expandedItem:_,setExpandedItem:w}=(0,p.f)(),z=function(t){void 0===t&&(t=!R),w(t?null:Z),P(t)};return function(t){let{isActive:e,collapsed:o,updateCollapsed:a}=t;const n=(0,r.D9)(e);(0,i.useEffect)((()=>{e&&!n&&o&&a(!1)}),[e,n,o,a])}({isActive:S,collapsed:R,updateCollapsed:z}),(0,i.useEffect)((()=>{C&&null!=_&&_!==Z&&E&&P(!0)}),[C,_,Z,P,E]),i.createElement("li",{className:(0,n.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(f),"menu__list-item",{"menu__list-item--collapsed":R},$)},i.createElement("div",{className:(0,n.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},i.createElement(g.Z,(0,a.Z)({className:(0,n.Z)("menu__link",{"menu__link--sublist":C,"menu__link--sublist-caret":!B&&C,"menu__link--active":S}),onClick:C?t=>{null==o||o(e),B?z(!1):(t.preventDefault(),z())}:()=>{null==o||o(e)},"aria-current":k?"page":void 0,"aria-expanded":C?!R:void 0,href:C?L??"#":L},x),y),B&&C&&i.createElement(h,{categoryLabel:y,onClick:t=>{t.preventDefault(),z()}})),i.createElement(d.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:R},i.createElement(v.Z,{items:I,tabIndex:R?-1:0,onItemClick:o,activePath:m,level:f+1})))}var Z=o(13919),x=o(39471);const I="menuExternalLink_NmtK";function y(t){let{item:e,onItemClick:o,activePath:r,level:l,index:d,...u}=t;const{href:p,label:m,className:b,autoAddBaseUrl:v}=e,h=(0,c._F)(e,r),f=(0,Z.Z)(p);return i.createElement("li",{className:(0,n.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(l),"menu__list-item",b),key:m},i.createElement(g.Z,(0,a.Z)({className:(0,n.Z)("menu__link",!f&&I,{"menu__link--active":h}),autoAddBaseUrl:v,"aria-current":h?"page":void 0,to:p},f&&{onClick:o?()=>o(e):void 0},u),m,!f&&i.createElement(x.Z,null)))}const C="menuHtmlItem_M9Kj";function $(t){let{item:e,level:o,index:a}=t;const{value:r,defaultStyle:l,className:d}=e;return i.createElement("li",{className:(0,n.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(o),l&&[C,"menu__list-item"],d),key:a,dangerouslySetInnerHTML:{__html:r}})}function B(t){let{item:e,...o}=t;switch(e.type){case"category":return i.createElement(f,(0,a.Z)({item:e},o));case"html":return i.createElement($,(0,a.Z)({item:e},o));default:return i.createElement(y,(0,a.Z)({item:e},o))}}},6023:(t,e,o)=>{o.d(e,{Z:()=>n});var a=o(87462),i=o(67294);function n(t){return i.createElement("svg",(0,a.Z)({width:"20",height:"20","aria-hidden":"true"},t),i.createElement("g",{fill:"#7a7a7a"},i.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},14353:(t,e,o)=>{o.d(e,{D:()=>l,f:()=>d});var a=o(67294),i=o(902);const n=Symbol("EmptyContext"),r=a.createContext(n);function l(t){let{children:e}=t;const[o,i]=(0,a.useState)(null),n=(0,a.useMemo)((()=>({expandedItem:o,setExpandedItem:i})),[o]);return a.createElement(r.Provider,{value:n},e)}function d(){const t=(0,a.useContext)(r);if(t===n)throw new i.i6("DocSidebarItemsExpandedStateProvider");return t}},64063:t=>{t.exports=function t(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var a,i,n;if(Array.isArray(e)){if((a=e.length)!=o.length)return!1;for(i=a;0!=i--;)if(!t(e[i],o[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((a=(n=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(i=a;0!=i--;)if(!Object.prototype.hasOwnProperty.call(o,n[i]))return!1;for(i=a;0!=i--;){var r=n[i];if(!t(e[r],o[r]))return!1}return!0}return e!=e&&o!=o}}}]);