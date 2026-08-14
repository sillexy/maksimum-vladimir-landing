"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74630],{14685:function(o,t,e){var r=e(57437),i=e(77840);t.Z=o=>{let{children:t,color:e,zIndex:n=1,noPaddingYAxis:a=!1,overflow:d,noPadding:l,noPaddingTablet:s,noPaddingMobile:c,noPaddingBottom:p,id:m,topOffset:h,bottomOffset:g,font:b,...u}=o;return(0,r.jsx)(i.$,{$color:e,$noPaddingYAxis:a,$noPadding:l,$noPaddingTablet:s,$noPaddingMobile:c,$noPaddingBottom:p,$overflow:d,$topOffset:h,$bottomOffset:g,$font:b,id:m,...u,children:(0,r.jsx)(i.k,{$fullWidth:l,$zIndex:n,...u,children:t})})}},77840:function(o,t,e){e.d(t,{$:function(){return d},k:function(){return a}});var r=e(48849),i=e(99379),n=e(93072);let a=i.ZP.div.withConfig({componentId:"sc-3eae27a9-0"})(["position:relative;height:100%;margin:0 auto;max-width:",";z-index:",";"],({$fullWidth:o,theme:t})=>o?"unset":`${t.grid.maxWidth}px`,({$zIndex:o})=>o),d=i.ZP.section.withConfig({componentId:"sc-3eae27a9-1"})(["padding:50px 48px;background-color:",";"," @media ","{padding:40px 32px;}@media ","{padding:32px 16px;}"," "," "," "," "," "," "," ",""],({$color:o,theme:t})=>o?t.coreColors[o][0]:"inherit",({$overflow:o})=>o&&`overflow: ${o};`,r.B["tablet-"],r.B["pad-"],({$topOffset:o})=>o&&n.J[o],({$bottomOffset:o})=>o&&n.w[o],({$noPaddingYAxis:o})=>o&&`& {
      padding-top: 0;
      padding-bottom: 0;

      @media ${r.B["tablet-"]} {
        padding-top: 0;
        padding-bottom: 0;
      }
      @media ${r.B["pad-"]} {
        padding-top: 0;
        padding-bottom: 0;
      }
  }`,({$noPadding:o})=>o&&`& {
      padding-left: 0;
      padding-right: 0;
    }`,({$noPaddingTablet:o})=>o&&`& {
      @media ${r.B["tablet-"]} {
        padding-left: 0;
        padding-right: 0;
      }
      @media ${r.B["pad-"]} {
        padding-left: 0;
        padding-right: 0;
      }
    }`,({$noPaddingMobile:o})=>o&&`& {
      @media ${r.B["pad-"]} {
        padding-left: 0;
        padding-right: 0;
      }
    }`,({$noPaddingBottom:o})=>o&&`& {
      padding-bottom: 0;
    }`,({$font:o,theme:t})=>"Golos_Text"===o&&`div, span { 
      font-family: ${t.fonts.families.golosText}; 
    }`)},93072:function(o,t,e){e.d(t,{J:function(){return a},w:function(){return d}});var r=e(48849),i=e(69565),n=e(99379);let a={[i.En.SLIM]:(0,n.iv)(["padding-top:24px;@media ","{padding-top:24px;}@media ","{padding-top:16px;}"],r.B["tablet-"],r.B["pad-"]),[i.En.WITHOUT]:(0,n.iv)(["padding-top:0px !important;"]),[i.En.DEFAULT]:(0,n.iv)([""])},d={[i.En.SLIM]:(0,n.iv)(["padding-bottom:24px;@media ","{padding-bottom:24px;}@media ","{padding-bottom:16px;}"],r.B["tablet-"],r.B["pad-"]),[i.En.WITHOUT]:(0,n.iv)(["padding-bottom:0px !important;"]),[i.En.DEFAULT]:(0,n.iv)([""])}},74630:function(o,t,e){e.d(t,{q:function(){return c}});var r=e(57437),i=e(2265),n=e(97847),a=e(99376),d=e(14685),l=e(37779);e(83079);var s=(0,e(12119).$)("3267f66106eaa76bca2b19ec1686caab642f7586");let c=({error:o})=>{let t=(0,a.useRouter)(),e=(0,a.usePathname)(),[c,p]=(0,i.useState)({metaDescription:""});return(0,i.useEffect)(()=>{console.error(o),s(e).then(p)},[e,o]),(0,r.jsx)("div",{style:{marginTop:70},children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(n.Z.Paragraph,{children:c.metaDescription}),(0,r.jsx)(l.Z,{type:"primary",onClick:()=>t.push("/"),children:"На главную"})]})})}},66476:function(o,t,e){var r=e(57437),i=e(2265),n=e(27648),a=e(58110),d=e(24152),l=e(35452),s=e(49334);t.Z=o=>{let{children:t,href:e,onClick:c,target:p}=o,[m,h]=(0,i.useState)(e),[g,b]=(0,i.useState)((0,l.B)(e)),u=(0,d.E)(e);return(0,i.useEffect)(()=>{(0,s.cL)()?(g||h(`https://maximumtest.ru${e}`),b(!0)):h(e)},[e]),u?(0,r.jsx)("div",{style:{cursor:"pointer"},onClick:()=>{(0,a.FK)(e.slice(1))},children:t}):(0,r.jsx)(n.default,{...o,target:p||(g?"_blank":void 0),rel:g?"noopener noreferrer":void 0,href:m,onClick:c,children:t})}},37779:function(o,t,e){e.d(t,{Z:function(){return C}});var r=e(57437),i=e(2265),n=e(32854),a=e(66476),d=e(99379),l=e(55281),s=e(5545),c=e(1727),p=e(58110),m=e(99942),h=e(48849);let g={primary:"primary",default:"default",text:"text",link:"link",dashed:"dashed",additional:"dashed"},b=(o,t)=>{let{type:e,color:r=l.Qd.ORANGE}=t,i={colorText:o.coreColors[r][5],colorTextLightSolid:o.coreColors.white,colorPrimary:o.coreColors[r][5],colorPrimaryHover:o.coreColors[r][4],colorPrimaryActive:o.coreColors[r][6],colorBorder:o.coreColors[r][5],colorLink:o.coreColors[r][5],colorLinkHover:o.coreColors[r][4],colorLinkActive:o.coreColors[r][6],colorBgContainer:o.coreColors[r][5],colorBgContainerDisabled:o.coreColors.neutral[3]};switch(r){case l.Qd.YELLOW:i.colorTextLightSolid=o.coreColors.neutral[8],i.colorText=o.coreColors[r][6],i.colorBorder=o.coreColors[r][6],i.colorLink=o.coreColors[r][6],i.colorLinkHover=o.coreColors[r][5];break;case l.Qd.NEUTRAL:i.colorPrimary=o.coreColors[r][7],i.colorPrimaryHover=o.coreColors[r][6],i.colorPrimaryActive=o.coreColors[r][8],i.colorText=o.coreColors[r][7],i.colorBorder=o.coreColors[r][7],i.colorLink=o.coreColors[r][7],i.colorLinkHover=o.coreColors[r][6]}switch(e){case"default":i.colorBgContainer=o.coreColors.transparent;break;case"additional":i.colorBgContainer=o.coreColors[r][1],i.colorBorder=o.coreColors[r][1]}return{token:i}},u=o=>"string"==typeof o&&o.includes("gradient"),f=(0,d.ZP)(s.ZP).withConfig({componentId:"sc-24a27402-0"})(["&&{display:flex;align-items:center;justify-content:center;text-shadow:none;box-shadow:none;height:",";min-width:",";"," padding:"," !important;"," &:disabled,&:disabled:hover{color:","4D;}",";",";",";",";",";",";@media ","{","}&.ant-btn-icon-only{width:48px;@media ","{width:40px;min-width:0 !important;padding:0 !important;}}}"],({$height:o})=>o?`${o}px`:"48px",({$isRubber:o})=>o?"0":"145px",({$isRubber:o})=>o&&"width: 100%;",({$isRubber:o})=>o?"8px":"0 23px",({$isSmallText:o,theme:t})=>o?(0,m.M)({size:t.fonts.sizes.sizeSM,lineHeight:t.fonts.lineHeights.lineHeightLG,weight:t.fonts.weights.weightSemiBold,family:t.fonts.families.golosText}):(0,m.M)({size:t.fonts.sizes.sizeLG,lineHeight:t.fonts.lineHeights.lineHeightLG,weight:t.fonts.weights.weightSemiBold,family:t.fonts.families.golosText}),({theme:o})=>o.coreColors.black,({type:o,theme:t})=>"primary"===o&&`
    &:disabled {
      background: ${t.coreColors.black}14;
      border-color: transparent !important;
    }
  `,({type:o})=>("text"===o||"link"===o)&&"padding: 10px 0 !important;",({type:o,theme:t})=>"link"===o&&`
    &::after {
      content: '';
      border-bottom: 1px solid;
      position: absolute;
      bottom: 12px;
      left: 0;
      width: 100%;
    }

    @media ${h.B.phone} {
      &::after {
        bottom: 6px;
      }
    }

    &:disabled::after,
    &:disabled:hover::after {
      border-bottom: 1px solid ${t.coreColors.neutral[3]};
    }
  `,({type:o,$mappedType:t,theme:e,$color:r})=>"dashed"===o&&"additional"===t&&`
    &:hover {
      border-color: ${e.coreColors[r][0]} !important;
    }

    &:disabled {
      background: ${e.coreColors.black}14;
      color: ${e.coreColors.black}4D;
      border: unset;
    }
  `,({type:o,theme:t})=>"default"===o&&`
    &:disabled {
      background: transparent;
      border-color: ${t.coreColors.black}4D;
    }
  `,({$mappedType:o,theme:t,$color:e})=>"text"===o&&`
        background: ${t.coreColors.transparent};
        padding: 0 !important;
        min-width: 0 !important;
        height: 0 !important;
        border: none;
      
        &:focus-visible {
          outline: 0;
          color: ${t.coreColors[e][6]};
        }
      `,h.B.phone,({$mappedType:o,$isRubber:t})=>"text"!==o&&`
        height: 40px;
        width: 100%;
        ${t?"padding: 0 !important;":"min-width: 136px;"}
      `,h.B.phone),x=(0,d.ZP)(s.ZP).withConfig({componentId:"sc-24a27402-1"})(["&&{text-shadow:none;align-items:center;justify-content:center;box-shadow:none;height:",";min-width:",";padding:"," !important;"," &:disabled,&:disabled:hover{border-color:transparent !important;background:","!important;color:"," !important;}",";"," "," ",";",";",";@media ","{height:40px;width:100%;","}&.ant-btn-icon-only{width:48px;@media ","{width:40px;min-width:0 !important;padding:0 !important;}}}"],({$height:o})=>o?`${o}px`:"48px",({$isRubber:o})=>o?"0":"145px",({$isRubber:o})=>o?"8px":"0 23px",({theme:{fonts:o}})=>(0,m.M)({size:o.sizes.sizeLG,lineHeight:o.lineHeights.lineHeightLG,weight:o.weights.weightSemiBold,family:o.families.golosText}),({$hexColor:o})=>o,({$hexColor:o})=>(0,c.v)(o),({type:o,$hexColor:t,theme:e})=>("text"===o||"link"===o)&&`
    padding: 10px 0 !important;

    &:hover:not(:disabled) {
      background: ${e.coreColors.transparent} !important;
      color:  ${t} !important;
    }
  `,({type:o,$hexColor:t})=>"primary"===o&&`
      color: ${(0,c.v)(t)} !important;
      border: none;
      background: ${t} !important;
        &:hover {
          background: ${(0,p.Vx)(t,1,"light",15)} !important;
        }
    `,({theme:o,type:t,$hexColor:e})=>"primary"===t&&u(`${e}`)&&`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${o.coreColors.white}1F;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      &:hover::before {
        opacity: 1;
      }
    `,({type:o,$hexColor:t})=>"link"===o&&`
      &::after {
        content: '';
        border-bottom: 1px solid ${t} !important;
        position: absolute;
        bottom: 12px;
        left: 0;
        width: 100%;
      }

      @media ${h.B.phone} {
        &::after {
          bottom: 6px;
        }
      }

    &:hover::after {
      border-bottom: 1px solid ${t} !important;
    }

    &:disabled::after,
    &:disabled:hover::after {
      border-bottom: 1px solid ${t} !important;
    }
  `,({type:o,$mappedType:t,$hexColor:e})=>"dashed"===o&&"additional"===t&&`
      background: ${(0,p.Vx)(e,.2,"light",0)} !important;
      border: none;
      color: ${e} !important;

      &:hover {
        color: ${(0,p.Vx)(e,1,"dark",20)} !important;
      }
  `,({type:o,$hexColor:t})=>"default"!==o||u(t)?"default"===o&&u(t)?`
        background: ${t};
        border: unset !important;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &:before {
          content: '';
          position: absolute;
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0;
          border-radius: 8px; 
          padding: 1px; 
          background: ${t};
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          z-index: -1;
        }

        &:not(:disabled):hover {
          opacity: 0.85;
          background: ${t} !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }

        &:disabled {
          -webkit-text-fill-color: unset !important;
        }
      `:void 0:`
          color: ${t} !important;
          border-color: ${t} !important;
          &:hover {
            color: ${(0,p.Vx)(t,1,"light",15)} !important;
            border-color: ${(0,p.Vx)(t,1,"light",15)} !important;
          }
      `,h.B.phone,({$isRubber:o})=>!o&&"min-width: 136px;",h.B.phone),$=(0,i.memo)(({theme:o,hexColor:t,type:e,color:i,isRubber:n,height:a,isSmallText:d,...l})=>t?(0,r.jsx)(x,{...l,type:g[e],$mappedType:e,$hexColor:t,$isRubber:n,$height:a,$isSmallText:d}):(0,r.jsx)(f,{...l,type:g[e],$mappedType:e,$color:i,$isRubber:n,$height:a,$isSmallText:d}));var C=(0,i.memo)(o=>{let t=(0,d.Fg)(),{type:e,color:i=l.Qd.ORANGE,isRubber:s=!1,href:c,hexColor:p,height:m,isSmallText:h=!1,...g}=o,u=b(t,o),f=(0,r.jsx)(n.ZP,{theme:u,children:(0,r.jsx)($,{theme:t,hexColor:p,type:e,color:i,isRubber:s,height:m,isSmallText:h,...g})});return c?(0,r.jsx)(a.Z,{href:c,children:f}):f})},55281:function(o,t,e){var r,i,n,a,d,l,s,c;e.d(t,{JK:function(){return n},Qd:function(){return i},u_:function(){return a}}),(d=r||(r={})).ORANGE="orange",d.BLUE="blue",d.GREEN="green",d.RED="red",d.PURPLE="purple",d.NEUTRAL="neutral",(l=i||(i={})).ORANGE="orange",l.BLUE="blue",l.GREEN="green",l.RED="red",l.PURPLE="purple",l.NEUTRAL="neutral",l.YELLOW="yellow",(s=n||(n={})).DEFAULT="default",s.BASIC="basic",s.UNDERLINED="underlined",(c=a||(a={})).WHITE="white",c.GRAY="gray",c.ERROR="error",c.WARNING="warning",c.SUCCESS="success"},1727:function(o,t,e){e.d(t,{v:function(){return s}});var r=e(88148),i=e(50967),n=e.n(i);let a=(o,t,e)=>(299*o+587*t+114*e)/1e3,d=o=>{let t=o.replace("#","");return{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}},l=o=>{let t;let e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/gi,r=[];for(;t=e.exec(o);)r.push({r:Number(t[1]),g:Number(t[2]),b:Number(t[3])});return r},s=n()(o=>{if(o.startsWith("#")){let{r:t,g:e,b:i}=d(o);return a(t,e,i)>170?r.Z.coreColors.neutral[9]:r.Z.coreColors.white}if(o.includes("gradient")){let t=l(o);return t.length&&t.reduce((o,{r:t,g:e,b:r})=>o+a(t,e,r),0)/t.length>170?r.Z.coreColors.neutral[9]:r.Z.coreColors.white}return r.Z.coreColors.white},o=>o)},24152:function(o,t,e){e.d(t,{E:function(){return r}});let r=o=>!!o?.startsWith("#")}}]);