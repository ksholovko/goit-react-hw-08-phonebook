"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[547],{547:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(439),r=n(791),c=n(434),o=n(893),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i="contactForm_form__3ay0L",l="contactForm_label__WakW9",u="contactForm_formInput__G+R7H",m="contactForm_button__JixDz",_=function(e){return e.phonebook.contacts.items},d=function(e){return e.filter.filters},h=function(e){return e.phonebook.contacts.isLoading},f=n(184);function v(){var e=(0,c.I0)(),t=(0,c.v9)(_),n=(0,r.useState)(""),d=(0,a.Z)(n,2),h=d[0],v=d[1],x=(0,r.useState)(""),b=(0,a.Z)(x,2),j=b[0],p=b[1],N=s(),g=s();(0,r.useEffect)((function(){e((0,o.yF)())}),[e]);var C=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":v(a);break;case"number":p(a)}};return(0,f.jsxs)("form",{className:i,onSubmit:function(n){n.preventDefault();var a={name:h,number:j};t.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(a.name," is already in the contacts")):(e((0,o.uK)(a)),v(""),p(""))},children:[(0,f.jsx)("label",{htmlFor:N,className:l,children:" Name "}),(0,f.jsx)("input",{className:u,id:N,type:"text",name:"name",value:h,required:!0,onChange:C}),(0,f.jsx)("label",{htmlFor:g,className:l,children:"Number"}),(0,f.jsx)("input",{className:u,id:g,type:"tel",name:"number",value:j,required:!0,onChange:C}),(0,f.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})}var x="contactItem_contact__UA9J9",b="contactItem_button__hluQ2";function j(e){var t=e.name,n=e.number,a=e.onDelete;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("span",{className:x,children:[t," ",n," "]})," ",(0,f.jsx)("button",{className:b,onClick:a,children:"Delete"})]})}var p={contactItem:"conctactList_contactItem__F3PXh"};function N(){var e=(0,c.I0)(),t=(0,c.v9)(_),n=(0,c.v9)(h),a=(0,c.v9)(d),r=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return(0,f.jsx)("div",{children:n?(0,f.jsx)("div",{children:"Loading..."}):(0,f.jsx)("ul",{className:p.contactList,children:r.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,f.jsx)("li",{className:p.contactItem,children:(0,f.jsx)(j,{id:n,name:a,number:r,onDelete:function(){return t=n,void e((0,o.GK)(t));var t}})},n)}))})})}var g=n(991),C="filter_container__8MH92",k="filter_label__nHxuJ",y="filter_filterInput__2T6yn";function F(){var e=(0,c.I0)(),t=s();return(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)("label",{className:k,htmlFor:t,children:"Find contacts by name"}),(0,f.jsx)("input",{className:y,type:"text",name:"filter",id:t,onChange:function(t){e((0,g.sP)(t.target.value))}})]})}var I="Contacts_container__WzsIr",w="Contacts_title__LxdN4",L=function(){return(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("h1",{className:w,children:"Phonebook"}),(0,f.jsx)(v,{}),(0,f.jsx)("h1",{className:w,children:"Contacts"}),(0,f.jsx)(F,{}),(0,f.jsx)(N,{})]})}}}]);
//# sourceMappingURL=547.c9adc399.chunk.js.map