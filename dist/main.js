(()=>{var t={475:()=>{Array.prototype.sum=function(t=0,e=this.length-1){let r=0;for(let n=t;n<=e;n++)r+=this[n];return r}},136:()=>{Array.prototype.sort=function(t="asc"){if(this.length<=1)return this;let e=Math.floor(this.length/2),r=this.slice(0,e),n=this.slice(e),o=function(t,e){let r=[],n=0,o=0;for(;n<t.length&&o<e.length;)t[n]>e[o]?(r.push(e[o]),o++):(r.push(t[n]),n++);return r.concat(t.slice(n)).concat(e.slice(o))};return"desc"==t||1==t?o(r.sort(),n.sort()).reverse():o(r.sort(),n.sort())}},391:()=>{Array.prototype.mean=function(){return this.sum()/this.length},Array.prototype.median=function(){var t=this.sort();if(t.length%2==1)return t[Math.floor(t.length/2)];{let e=Math.floor(t.length/2);return[t[e-1],t[e]].mean()}},Array.prototype.mode=function(){let t={},e=[],r=0;for(var n in this.forEach((e=>{t[e]?t[e]=t[e]+1:t[e]=1})),t)t[n]>r?(e=[],e.push(parseInt(n)),r=t[n]):t[n]==r&&e.push(parseInt(n));return 1==e.length?e[0]:e},Array.prototype.range=function(){let t=this.sort();return t[t.length-1]-t[0]},Array.prototype.interquartileRange=function(){let t,e=this.sort(),r=[],n=Math.floor(e.length/2);return t=e.slice(0,n),e.length%2==1&&n++,r=e.slice(n),r.median()-t.median()},Array.prototype.avg=Array.prototype.mean,Array.prototype.midspread=Array.prototype.interquartileRange},458:()=>{Array.prototype.pop=function(t=1){if(this.length<t)throw new Error("PROTOLIB ERR: Cannot pop "+t+" items from array with length of "+this.length);if(t<0)throw new Error('PROTOLIB ERR: Function "pop" cannot take negative number as parameter, was given '+t);if("number"!=typeof t)throw new Error('PROTOLIB ERR: Function "pop" can only take parameter of type Number, was given "'+t+'"');if(1==t){let t=this[this.length-1];return this.length--,t}let e=[];for(let r=0;r<t;r++)e.unshift(this[this.length-1]),this.length--;return e},Array.prototype.shift=function(t=1){if(this.length<t)throw new Error("PROTOLIB ERR: Cannot shift "+t+" items from array with length of "+this.length);if(t<0)throw new Error('PROTOLIB ERR: Function "shift" cannot take negative number as parameter, was given '+t);if("number"!=typeof t)throw new Error('PROTOLIB ERR: Function "shift" can only take parameter of type Number, was given "'+t+'"');if(this.reverse(),1==t){let t=this[this.length-1];return this.length--,this.reverse,t}let e=[];for(let r=0;r<t;r++)e.push(this[this.length-1]),this.length--;return this.reverse(),e}},434:()=>{String.prototype.caps=function(){let t=this.split(" ");t.forEach(((e,r)=>{t[r]=e[0].toUpperCase()+e.slice(1)}));let e="";for(let r=0;r<t.length;r++)e+=t[r],r!=t.length-1&&(e+=" ");return e},String.prototype.uncaps=function(){let t=this.split(" ");t.forEach(((e,r)=>{t[r]=e[0]+e.slice(1).toLowerCase()}));let e="";for(let r=0;r<t.length;r++)e+=t[r],r!=t.length-1&&(e+=" ");return e},String.prototype.title=function(t=!1){let e=this.split(" ");e.forEach(((r,n)=>{["a","an","and","at","but","by","for","in","nor","of","on","or","so","the","to","up","yet","is"].includes(r)&&!t||(e[n]=r[0].toUpperCase()+r.slice(1))}));let r="";for(let t=0;t<e.length;t++)r+=e[t],t!=e.length-1&&(r+=" ");return r},String.prototype.spongegar=function(){let t="";for(let e=0;e<this.length;e++)Math.random()>.5?t+=this[e].toUpperCase():t+=this[e].toLowerCase();return t},String.prototype.reverse=function(){let t="";for(let e=this.length-1;e>=0;e--)t+=this[e];return t}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(()=>{"use strict";r(458),r(136),r(475),r(391),r(434)})()})();