var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){let t;try{t=new URL(e)}catch(e){return alert("Please insert a valid URL!"),!1}return e}n.r(t),n.d(t,"checkForName",(function(){return r})),n.d(t,"handleSubmit",(function(){return o}));function o(e){e.preventDefault();let t=document.getElementById("name").value;t=Client.checkForName(t),console.log("::: Form Submitted :::"),console.log(t),0!=t&&(async(e,t)=>{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("error",e)}})("http://localhost:8080/test",{formText:t}).then((function(e){var t,n;for(console.log(e),document.getElementById("subjectivity").innerHTML="Subjectivity: "+e.subjectivity,document.getElementById("confidence").innerHTML="Confidence: "+e.confidence,document.getElementById("irony").innerHTML="Irony: "+e.irony,document.getElementById("score_tag").innerHTML="Score_tag: "+e.score_tag,document.getElementById("agreement").innerHTML="Agreement: "+e.agreement,t=0;t<10;t++){n=document.getElementById("result-sentimented");var r=document.createElement("p");r.innerHTML=e.sentence_list[t].text,n.appendChild(r)}}))}console.log(r),alert("I EXIST"),console.log("CHANGE!!")}]);