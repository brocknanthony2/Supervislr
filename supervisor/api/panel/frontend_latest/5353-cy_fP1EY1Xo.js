"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5353],{16235:(e,t,n)=>{var i=n(17463),r=n(68144),l=n(79932);(0,i.Z)([(0,l.Mo)("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return r.dy`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>r.iv`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px}`}]}}),r.oi)},65353:(e,t,n)=>{n.r(t),n.d(t,{HaNumberSelector:()=>a});var i=n(17463),r=n(68144),l=n(79932),s=n(83448),o=n(47181);n(16235),n(92197),n(3555);let a=(0,i.Z)([(0,l.Mo)("ha-selector-number")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,l.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){var e,t,n,i,l,o,a,d,u,h,c,p,m,v,b,f,k,x,g;const y="box"===(null===(e=this.selector.number)||void 0===e?void 0:e.mode);return r.dy` <div class="input"> ${y?"":r.dy` ${this.label?r.dy`${this.label}${this.required?" *":""}`:""} <ha-slider .min="${null===(t=this.selector.number)||void 0===t?void 0:t.min}" .max="${null===(n=this.selector.number)||void 0===n?void 0:n.max}" .value="${null!==(i=this.value)&&void 0!==i?i:""}" .step="${"any"===(null===(l=this.selector.number)||void 0===l?void 0:l.step)?void 0:null!==(o=null===(a=this.selector.number)||void 0===a?void 0:a.step)&&void 0!==o?o:1}" .disabled="${this.disabled}" .required="${this.required}" pin ignore-bar-touch @change="${this._handleSliderChange}"> </ha-slider> `} <ha-textfield .inputMode="${"any"===(null===(d=this.selector.number)||void 0===d?void 0:d.step)||(null!==(u=null===(h=this.selector.number)||void 0===h?void 0:h.step)&&void 0!==u?u:1)%1!=0?"decimal":"numeric"}" .label="${"box"!==(null===(c=this.selector.number)||void 0===c?void 0:c.mode)?void 0:this.label}" .placeholder="${this.placeholder}" class="${(0,s.$)({single:"box"===(null===(p=this.selector.number)||void 0===p?void 0:p.mode)})}" .min="${null===(m=this.selector.number)||void 0===m?void 0:m.min}" .max="${null===(v=this.selector.number)||void 0===v?void 0:v.max}" .value="${null!==(b=this.value)&&void 0!==b?b:""}" .step="${null!==(f=null===(k=this.selector.number)||void 0===k?void 0:k.step)&&void 0!==f?f:1}" helperPersistent .helper="${y?this.helper:void 0}" .disabled="${this.disabled}" .required="${this.required}" .suffix="${null===(x=this.selector.number)||void 0===x?void 0:x.unit_of_measurement}" type="number" autoValidate ?no-spinner="${"box"!==(null===(g=this.selector.number)||void 0===g?void 0:g.mode)}" @input="${this._handleInputChange}"> </ha-textfield> </div> ${!y&&this.helper?r.dy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"_handleInputChange",value:function(e){e.stopPropagation();const t=""===e.target.value||isNaN(e.target.value)?void 0:Number(e.target.value);this.value!==t&&(0,o.B)(this,"value-changed",{value:t})}},{kind:"method",key:"_handleSliderChange",value:function(e){e.stopPropagation();const t=Number(e.target.value);this.value!==t&&(0,o.B)(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`.input{display:flex;justify-content:space-between;align-items:center;direction:ltr}ha-slider{flex:1}ha-textfield{--ha-textfield-input-width:40px}.single{--ha-textfield-input-width:unset;flex:1}`}}]}}),r.oi)},92197:(e,t,n)=>{n(28138);const i=customElements.get("paper-slider");let r;customElements.define("ha-slider",class extends i{static get template(){if(!r){r=i.template.cloneNode(!0);r.content.querySelector("style").appendChild(document.createTextNode('\n          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n\n            .pin > .slider-knob > .slider-knob-inner {\n              font-size:  var(--ha-slider-pin-font-size, 15px);\n              line-height: normal;\n              cursor: pointer;\n            }\n\n            .disabled.ring > .slider-knob > .slider-knob-inner {\n              background-color: var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n              border: 2px solid var(--paper-slider-disabled-knob-color, var(--disabled-text-color));\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::before {\n              top: unset;\n              margin-left: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              width: 2.6em;\n              height: 2.6em;\n\n              -webkit-transform-origin: left bottom;\n              transform-origin: left bottom;\n              -webkit-transform: rotate(-45deg) scale(0) translate(0);\n              transform: rotate(-45deg) scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::before {\n              -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n              transform: rotate(-45deg) scale(1) translate(7px, -7px);\n            }\n\n            .pin > .slider-knob > .slider-knob-inner::after {\n              top: unset;\n              font-size: unset;\n\n              bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n              left: 50%;\n              margin-left: -1.3em;\n              width: 2.6em;\n              height: 2.5em;\n\n              -webkit-transform-origin: center bottom;\n              transform-origin: center bottom;\n              -webkit-transform: scale(0) translate(0);\n              transform: scale(0) translate(0);\n            }\n\n            .pin.expand > .slider-knob > .slider-knob-inner::after {\n              -webkit-transform: scale(1) translate(0, -10px);\n              transform: scale(1) translate(0, -10px);\n            }\n\n            .slider-input {\n              width: 54px;\n            }\n        '))}return r}_setImmediateValue(e){super._setImmediateValue(this.step>=1?Math.round(e):Math.round(100*e)/100)}_calcStep(e){if(!this.step)return parseFloat(e);const t=Math.round((e-this.min)/this.step),n=this.step.toString(),i=n.indexOf(".");if(-1!==i){const e=10**(n.length-i-1);return Math.round((t*this.step+this.min)*e)/e}return t*this.step+this.min}})}}]);
//# sourceMappingURL=5353-cy_fP1EY1Xo.js.map