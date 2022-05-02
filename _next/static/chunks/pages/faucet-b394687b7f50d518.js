(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{6794:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faucet",function(){return t(9098)}])},8292:function(e,n,t){"use strict";var r=t(5893),i=t(8527);n.Z=function(e){return(0,r.jsx)(i.kC,{flexDirection:"column",minHeight:"100vh",overflow:"hidden",children:e.children})}},9370:function(e,n,t){"use strict";var r=t(5893),i=t(9008);n.Z=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e.title||"VoxelTowers"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("link",{rel:"shortcut icon",type:"image/svg",href:"".concat("/website-dev","/assets/voxel-towers-logo.svg")})]}),e.children]})}},9098:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var r=t(5893),i=t(9795),o=t(7294),c=t(3238),s=t(8527),a=t(9762),u=t(4612),l=t(6723),d=t(8292),f=t(9370),h=t(7786),v=t(8152),x=t(4651),p=function(e){var n=e.show,t=e.title,i=o.useRef();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.aR,{isOpen:n,leastDestructiveRef:i,onClose:null,children:(0,r.jsx)(h.dh,{children:(0,r.jsxs)(h._T,{bg:"#160045",children:[(0,r.jsx)(h.fY,{color:"white",fontSize:"lg",fontWeight:"bold",children:t}),(0,r.jsx)(h.iP,{display:"flex",justifyContent:"center",children:(0,r.jsx)(v.D8,{isIndeterminate:!0,thickness:"4px",size:"100px",color:"#FDA291",children:(0,r.jsx)(v.ip,{as:s.kC,justifyContent:"center",color:"white",children:(0,r.jsx)(x.Ee,{w:"30px",src:"assets/loader.gif"})})})})]})})})})},m=t(2660),g=t(4051),w=t.n(g),E=t(1438),b=t(8928),k=t(5553);function S(e,n,t,r,i,o,c){try{var s=e[o](c),a=s.value}catch(u){return void t(u)}s.done?n(a):Promise.resolve(a).then(r,i)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function c(e){S(o,r,i,c,s,"next",e)}function s(e){S(o,r,i,c,s,"throw",e)}c(void 0)}))}}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C,T=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.provider=new E.cK(n.rpcUrl),this.confirmationsThreshold=n.confirmationsThreshold||2,this.confirmationWaitingTimeoutSec=n.confirmationWaitingTimeoutSec||120,this.confirmationPollIntervalSec=n.confirmationPollIntervalSec||5}var n,t,r;return n=e,t=[{key:"sendEth",value:function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this;return j(w().mark((function i(){var o,c;return w().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o=new b.w5(n.senderPrivKey,r.provider),i.next=3,o.sendTransaction({to:n.receiverAddress,value:e.ethToWei(n.amountInEth)});case 3:if(c=i.sent,!t){i.next=7;break}return i.next=7,r.waitForConfirmation(c.hash);case 7:return i.abrupt("return",c);case 8:case"end":return i.stop()}}),i)})))()}},{key:"getBalance",value:function(n){var t=this;return j(w().mark((function r(){var i,o;return w().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.provider.getBalance(n);case 2:return i=r.sent,o=e.weiToEth(i),r.abrupt("return",o);case 5:case"end":return r.stop()}}),r)})))()}},{key:"waitForConfirmation",value:function(e){var n=this;return j(w().mark((function t(){var r,i,o,c,s;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=!1,o=Math.round(n.confirmationWaitingTimeoutSec/n.confirmationPollIntervalSec),c=0;case 4:if(!(c<=o)){t.next=23;break}return t.next=8,null===(s=n.provider)||void 0===s?void 0:s.getTransaction(e);case 8:if(!((i=t.sent)&&i.confirmations>=n.confirmationsThreshold)){t.next=14;break}return r=!0,t.abrupt("break",23);case 14:if(c!==o){t.next=18;break}return t.abrupt("break",23);case 18:return t.next=20,n.sleep(n.confirmationPollIntervalSec);case 20:c++,t.next=4;break;case 23:if(r){t.next=25;break}throw new Error("confirmation waiting timeout");case 25:case"end":return t.stop()}}),t)})))()}},{key:"sleep",value:function(e){return new Promise((function(n){return setTimeout(n,1e3*e)}))}},{key:"fundAddressUpTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this;return j(w().mark((function r(){var i,o,c;return w().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.getBalance(e.receiverAddress);case 2:if(i=r.sent,!((o=e.amountInEth-i)>0)){r.next=9;break}return r.next=8,t.sendEth({senderPrivKey:e.senderPrivKey,amountInEth:o,receiverAddress:e.receiverAddress},n);case 8:c=r.sent;case 9:return r.abrupt("return",c);case 10:case"end":return r.stop()}}),r)})))()}}],r=[{key:"weiToEth",value:function(e){return parseFloat(k.dF(e))}},{key:"ethToWei",value:function(e){return k.fi(e.toString())}}],t&&y(n.prototype,t),r&&y(n,r),e}(),I="0x8fA98E72788A9200B41113728F8aDEd1597a99FE",_="0xce603e4a7db7c0c7fc74937792124c36396d5d9999b357384fd142b4f8e85320",F=new T({rpcUrl:m.$G,confirmationsThreshold:1});!function(e){e[e.HIDE=0]="HIDE",e[e.SUCCESS=1]="SUCCESS",e[e.ERROR=2]="ERROR",e[e.ENOUGH_FUNDS=3]="ENOUGH_FUNDS"}(C||(C={}));var A=function(){var e=(0,i.Ge)().account,n=(0,o.useState)(""),t=n[0],h=n[1],v=(0,o.useState)(!1),x=v[0],m=v[1],g=(0,o.useState)(0),w=g[0],E=g[1],b=(0,o.useState)(C.HIDE),k=b[0],S=b[1],j=(0,c.pm)();(0,o.useEffect)((function(){k===C.SUCCESS&&j({title:"Success",description:"Account successfully funded!",status:"success",duration:5e3,isClosable:!0}),k===C.ENOUGH_FUNDS&&j({title:"Warning",description:"Account not funded because balance is greater than ".concat(1,"\n            ."),status:"warning",duration:5e3,isClosable:!0}),k===C.ERROR&&j({title:"Error",description:"Ooops. An Error occurred :(. Check console for more details.",status:"error",duration:5e3,isClosable:!0})}),[k]);return(0,o.useEffect)((function(){return e=I,n=E,m(!0),void F.getBalance(e).then((function(e){return n(e)})).catch((function(e){return console.log(e)})).finally((function(){return m(!1)}));var e,n}),[]),(0,o.useEffect)((function(){return h(e)}),[e]),(0,r.jsx)(f.Z,{children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(s.W2,{p:"8",height:"100vh",maxW:"container.md",children:[(0,r.jsx)(s.X6,{mb:"5",as:"h2",size:"2xl",isTruncated:!0,children:"Faucet"}),(0,r.jsxs)(s.QI,{mb:8,children:[(0,r.jsxs)(s.HC,{children:["Faucet Address: ",I]}),(0,r.jsxs)(s.HC,{children:["ETH left: ",w]}),(0,r.jsxs)(s.HC,{children:["Account will be funded up to ",1," ETH"]})]}),(0,r.jsxs)(a.NI,{mb:"5",id:"address",children:[(0,r.jsx)(a.lX,{children:"Set your Ethereum Address"}),(0,r.jsx)(u.II,{bg:"white",color:"black",type:"address",value:t,onChange:function(e){return h(e.target.value)}})]}),(0,r.jsx)(l.zx,{_hover:{backgroundPosition:"right center"},backgroundImage:"linear-gradient(to right, #EF7383 0%, #FDA291 50%,#EF7383 100%)",backgroundSize:"200% auto",transition:"0.5s",onClick:function(){S(C.HIDE),m(!0),F.fundAddressUpTo({amountInEth:1,receiverAddress:t,senderPrivKey:_}).then((function(e){console.log("Funded successfully!!"),console.log("Tx:",e),S(e?C.SUCCESS:C.ENOUGH_FUNDS)})).catch((function(e){S(C.ERROR),console.log(e)})).finally((function(){return m(!1)}))},bg:"#220069",color:"white",p:"5",_active:{backgroundImage:"linear-gradient(to right, #220069 0%, #220069 50%,#220069 100%)"},children:"GO"}),(0,r.jsx)(p,{show:x,title:"Interacting with Blockchain..."})]})})})}}},function(e){e.O(0,[199,572,774,888,179],(function(){return n=6794,e(e.s=n);var n}));var n=e.O();_N_E=n}]);