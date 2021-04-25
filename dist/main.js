(()=>{var t={327:()=>{Array.prototype.delimit=function(t=","){if("string"!=typeof t)throw new Error('PROTOLIB ERR: (Function "delimit") can only take parameter of type "string", was given "'+typeof t+'"');return this.length<1?"":this.reduce(((e,r,n)=>n==this.length-1?e+r:e+r+t),"")},Array.prototype.flatten=function(){if(this.length<1)return[];let t=[];return this.forEach((e=>{Array.isArray(e)?t=t.concat(e.flatten()):t.push(e)})),t},Array.prototype.compact=function(){return this.length<1?[]:this.filter((t=>!!t))},Array.prototype.dropLeft=function(t=1){return this.length<1?[]:this.slice(t)},Array.prototype.dropRight=function(t=1){return this.slice(0,0-t)},Array.prototype.strings=function(){},Array.prototype.numbers=function(t=!1){},Array.prototype.join=Array.prototype.delimit},136:()=>{Array.prototype.mergeSort=function(t="asc"){if(!["asc","desc",0,1].includes(t))throw new Error('PROTOLIB ERR: (Function "sort") Sort direction must be either 0 or "asc" (for ascending), or 1 or "desc" for descending. Was given '+t);if(this.length<=1)return this;let e=Math.floor(this.length/2),r=this.slice(0,e),n=this.slice(e),o=function(t,e){let r=[],n=0,o=0;for(;n<t.length&&o<e.length;)t[n]>e[o]?(r.push(e[o]),o++):(r.push(t[n]),n++);return r.concat(t.slice(n)).concat(e.slice(o))};return"desc"==t||1==t?o(r.mergeSort(),n.mergeSort()).reverse():o(r.mergeSort(),n.mergeSort())},Array.prototype.shuffle=function(){return this.forEach(((t,e)=>{let r=Math.floor(Math.random()*this.length);[this[e],this[r]]=[this[r],this[e]]})),this},Array.prototype.sortBy=function(t,e="asc"){if("function"==typeof t){let r=[],n=[],o=[];return this.forEach((e=>{r.push(t(e))})),r=r.mergeSort(e),r.forEach((e=>{n.push(this.find(((r,n)=>{let i=t(r)===e&&!o.includes(n);return i&&o.push(n),i})))})),n}return t.length>1?this.sortBy(t.pop(),e).sortBy(t,e):this.sortBy(t.pop(),e)},Array.prototype.randomize=Array.prototype.shuffle},391:()=>{Array.prototype.mean=function(){return this.sum()/this.length},Array.prototype.median=function(){var t=this.mergeSort();if(t.length%2==1)return t[Math.floor(t.length/2)];{let e=Math.floor(t.length/2);return[t[e-1],t[e]].mean()}},Array.prototype.mode=function(){let t={},e=[],r=0;for(var n in this.forEach((e=>{t[e]?t[e]=t[e]+1:t[e]=1})),t)t[n]>r?(e=[],e.push(parseInt(n)),r=t[n]):t[n]==r&&e.push(parseInt(n));return 1==e.length?e[0]:e},Array.prototype.range=function(){let t=this.mergeSort();return t[t.length-1]-t[0]},Array.prototype.interquartileRange=function(){let t,e=this.mergeSort(),r=[],n=Math.floor(e.length/2);return t=e.slice(0,n),e.length%2==1&&n++,r=e.slice(n),r.median()-t.median()},Array.prototype.variance=function(t="population"){let e=this.mean(),r=this.length;return this.map((t=>Math.pow(t-e,2))).sum()/(r-("sample"==t?1:0))},Array.prototype.standardDeviation=function(t="population"){return Math.pow(this.variance(t),.5)},Array.prototype.union=function(t){let e=new Set(this);return e=e.union(new Set(t)),new Array(...e)},Array.prototype.intersection=function(t){let e=new Set(this);return e=e.intersection(new Set(t)),new Array(...e)},Array.prototype.sample=function(t=1){let e=this.slice();if(1==t)return e[random(this.length)];for(var r=0;r<t;r++)return e.shuffle().slice(0,t)},Array.prototype.avg=Array.prototype.mean,Array.prototype.midspread=Array.prototype.interquartileRange},568:()=>{Object.prototype.isEqual=function(t){return JSON.stringify(this)===JSON.stringify(t)},Object.prototype.isEmpty=function(){return 0===Object.keys(this).length},Object.prototype.allFalsey=function(){let t={...this.primitives()};for(let e in t)if(t[e]&&"function"!=typeof t[e])return!1;return!0}},253:()=>{Function.prototype.wait=function(t,...arguments){new Promise(((e,r)=>{setTimeout((()=>{e()}),t)})).then((()=>{this(...arguments)}))},Function.prototype.repeat=function(t,...arguments){let e=[];for(let r=0;r<t;r++)e.push(this(...arguments));return e},Function.prototype.debounce=function(t,...arguments){}},32:()=>{Number.prototype.bound=function(t,e){return this<t?t:this>e?e:this},Number.prototype.round=function(t){let e;return e=-1!==t.toString().indexOf(".")?t.toString().length-t.toString().indexOf(".")-1:0,Math.round(this/t)*t}},821:()=>{Object.prototype.search=function(...t){let e=[];return t.forEach((t=>{t=t.toString().toLowerCase();for(let r in this){if("function"==typeof this[r])return;(r.toString().toLowerCase().includes(t)||this[r].toString().toLowerCase().includes(t))&&e.push({[r]:this[r]})}})),e},Object.prototype.searchDeep=function(...t){const e=[],r={...this.primitives()};return t.forEach((t=>{t=t.toString().toLowerCase();for(let n in r)"function"!=typeof r[n]&&(n.toString().toLowerCase().includes(t)||r[n].toString().toLowerCase().includes(t))&&e.push({[n]:r[n]})})),e}},400:()=>{Set.prototype.union=function(t){let e=new Array(...this),r=new Array(...t);return new Set([...e,...r])},Set.prototype.intersection=function(t){let e=new Array(...this),r=new Array(...t),n=new Set;return e.forEach((t=>{r.includes(t)&&n.add(t)})),r.forEach((t=>{e.includes(t)&&n.add(t)})),n}},319:()=>{String.prototype.camelCase=function(){let t=this.words(),e="";return t.forEach(((t,r)=>{t=t.toLowerCase(),0!=r&&(t=t[0].toUpperCase()+t.slice(1)),e+=t})),e},String.prototype.capitalCamelCase=function(){let t=this.camelCase();return t[0].toUpperCase()+t.slice(1)},String.prototype.kebabCase=function(){return this.words().join("-").toLowerCase()},String.prototype.snakeCase=function(){return this.words().join("_").toLowerCase()},String.prototype.flatCase=function(){return this.words().join("").toLowerCase()},String.prototype.upperCase=function(){return this.words().join("").toUpperCase()},String.prototype.cases=function(){return{camel:this.camelCase(),capitalCamel:this.capitalCamelCase(),kebab:this.kebabCase(),snake:this.snakeCase(),flat:this.flatCase(),upper:this.upperCase()}},String.prototype.words=function(){let t=this.slice();return t=t.replace(/([a-z](?=[A-Z9-_]|\W))/g,"$1!@#$%^&*())(*&^%$#@!"),t=t.replace(/([A-Z](?=[A-Z]))/g,"$&!@#$%^&*())(*&^%$#@!"),t=t.replace(/[_\-\.\,\|\s]/g,""),t.split("!@#$%^&*())(*&^%$#@!")}},125:()=>{window.loop=function(t,e){for(var r=[],n=0;n<t;n++){let t=e(n);null!=t&&r.push(t)}return r},window.random=function(t,e,r){return 1==arguments.length?Math.floor(Math.random()*arguments[0]):parseFloat((Math.random()*(e-t)+t).toFixed(r))},window.now=function(){return new Date},window.rand=window.random}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(()=>{"use strict";r(400),r(136),r(327),Array.prototype.sum=function(){let t=this.flatten(),e=0;for(let r=0;r<t.length;r++)if("string"==typeof t[r]){let n=parseFloat(t[r]);NaN!=n&&(e+=n)}else{if("number"!=typeof t[r])continue;e+=t[r]}return e},r(391),Array.prototype.popN=function(t=1){if("number"!=typeof t)throw new Error('PROTOLIB ERR: (Function "popN") Can only take parameter of type "number", was given a "'+typeof t+'"');if(this.length<t)throw new Error('PROTOLIB ERR: (Function "popN") Cannot pop '+t+" items from array with length of "+this.length);if(t<0)throw new Error('PROTOLIB ERR: (Function "popN") Cannot take negative number as parameter, was given '+t);const e=[];for(let r=0;r<t;r++)e.unshift(this[this.length-1]),this.length--;return e},Array.prototype.shiftN=function(t=1){if("number"!=typeof t)throw new Error('PROTOLIB ERR: (Function "shiftN") Can only take parameter of type Number, was given "'+t+'"');if(this.length<t)throw new Error('PROTOLIB ERR: (Function "shiftN") Cannot shift '+t+" items from array with length of "+this.length);if(t<0)throw new Error('PROTOLIB ERR: (Function "shiftN") Cannot take negative number as parameter, was given '+t);this.reverse();const e=[];for(let r=0;r<t;r++)e.push(this[this.length-1]),this.length--;return this.reverse(),e},Array.prototype.insert=function(t,...e){if("number"!=typeof t)throw new Error('PROTOLIB ERR: (Function "insert") Argument "index" must be of type "number", but was passed in as type '+typeof t);if("number"!=typeof length)throw new Error('PROTOLIB ERR: (Function "remove") Argument "length" must be of type "number", but was passed in as type '+typeof length);if(t<0)throw new Error('PROTOLIB ERR: (Function "insert") Cannot take negative number as index, was given '+t);if(0==t)return e.concat(this);if(t>this.length-1)return this.concat(e);{let r=this.slice(0,t),n=this.slice(t-1);return r.concat(e).concat(n)}},Array.prototype.remove=function(t,e=1){if("number"!=typeof t)throw new Error('PROTOLIB ERR: (Function "remove") Argument "index" must be of type "number", but was passed in as type '+typeof t);if("number"!=typeof e)throw new Error('PROTOLIB ERR: (Function "remove") Argument "length" must be of type "number", but was passed in as type '+typeof e);if(t<0)throw new Error('PROTOLIB ERR: (Function "remove") Cannot take negative number as index, was given '+t);if(e<0)throw new Error('PROTOLIB ERR: (Function "remove") Cannot take negative number as length, was given '+e);let r=this.slice(0,t),n=this.slice(t+e);return r.concat(n)},Array.prototype.at=function(t){if("number"!=typeof t)throw new Error('PROTOLIB ERR: (Function "at") Argument "n" must be of type "number", but was passed in as type '+typeof t);if(t<0-this.length||t>this.length-1)throw new Error('PROTOLIB ERR: (Function "at") Tried to get an element that was out of range. Tried to get element at '+t+", but possible indexes range from "+(0-this.length)+" to "+(this.length-1));return t<0&&(t=this.length+t),this[t]},Array.prototype.first=function(){return this[0]},Array.prototype.last=function(){return this[this.length-1]},Array.prototype.toggle=function(t){return this.includes(t)?this.splice(this.indexOf(t),1):this.push(t),this},Array.prototype.count=function(t){return this.reduce(((e,r)=>(r===t&&e++,e)),0)},Array.prototype.group=function(){return this.reduce(((t,e)=>(t[e]?t[e]++:t[e]=1,t)),{})},Array.prototype.start=Array.prototype.first,Array.prototype.end=Array.prototype.last,Array.prototype.get=Array.prototype.at,r(568),Object.prototype.clone=function(){return JSON.parse(JSON.stringify(this))},r(821),Object.prototype.extend=function(...t){return t.forEach((t=>{for(let e in t)this[e]=t[e]})),this},Object.prototype.primitives=function(){let t=JSON.parse(JSON.stringify(this));const e={};let r=(t,n="")=>{let o;for(let i in t)o=""!=n?Array.isArray(t)?n+"["+i+"]":n+"."+i:i,"object"==typeof t[i]?r(t[i],o):"function"!=typeof t[i]&&(e[o]=t[i])};return r(t),e},Object.prototype.pick=function(){},r(319),String.prototype.caps=function(){let t=this.split(" ");t.forEach(((e,r)=>{t[r]=e[0].toUpperCase()+e.slice(1)}));let e="";for(let r=0;r<t.length;r++)e+=t[r],r!=t.length-1&&(e+=" ");return e},String.prototype.uncaps=function(){let t=this.split(" ");t.forEach(((e,r)=>{t[r]=e[0]+e.slice(1).toLowerCase()}));let e="";for(let r=0;r<t.length;r++)e+=t[r],r!=t.length-1&&(e+=" ");return e},String.prototype.title=function(t=!1){let e=this.split(" ");e.forEach(((r,n)=>{["a","an","and","at","but","by","for","in","nor","of","on","or","so","the","to","up","yet","is"].includes(r)&&!t||(e[n]=r[0].toUpperCase()+r.slice(1))}));let r="";for(let t=0;t<e.length;t++)r+=e[t],t!=e.length-1&&(r+=" ");return r},String.prototype.spongegar=function(){let t="";for(let e=0;e<this.length;e++)Math.random()>.5?t+=this[e].toUpperCase():t+=this[e].toLowerCase();return t},String.prototype.reverse=function(){let t="";for(let e=this.length-1;e>=0;e--)t+=this[e];return t},String.prototype.attach=function(t,e=1){for(var r=this.slice(),n=0;n<e;n++)r=[...t].reduce(((t,e)=>t+e),r);return r},r(253),r(125),r(32),window.testObj={name:"Protolib",personel:[{name:"Kevin Bacon",title:"Outside contractor",cool:!0},{name:"John Doe",title:"CEO",info:{favoriteColor:"red",interests:["protolib","coding","cats","not ranch dressing"],isCeo:!0,age:46,family:[{name:"Lori",relation:"wife"},{name:"Sam",relation:"son"}]},employees:[{name:"Jane Doe",title:"CFO",employees:[{name:"Jane Doe",title:"President of Accounting",employees:[{name:"Kim",title:"employee",employees:[]}]},{name:"Jane Doe",title:"Chief Actuarial Officer",employees:[{name:"Frenny",title:"employee",employees:[]},{name:"Nick",title:"employee",employees:[]},{name:"Chris",title:"employee",employees:[]}]}]},{name:"Brandon Brandons",title:"President",employees:[{name:"Frank",title:"employee",employees:[]},{name:"John",title:"employee",employees:[]},{name:"Colton",title:"employee",employees:[]},{name:"Matt",title:"manager",employees:[{name:"Victor",title:"employee",employees:[]},{name:"Tony",title:"employee",employees:[]}]}]},{name:"Jeff Bezos",title:"CIO",employees:[{name:"Becky",title:"employee",employees:[]},{name:"Sal",title:"employee",employees:[]},{name:"Jenny",title:"employee",employees:[]}]}]}]},window.testArr=[{name:"Matt",info:{age:19,favoriteColor:"green"}},{name:"Chris",info:{age:39,favoriteColor:"blue"}},{name:"John",info:{age:45,favoriteColor:"red"}},{name:"Joe",info:{age:16,favoriteColor:"yellow"}},{name:"Jeff",info:{age:37,favoriteColor:"green"}},{name:"Becky",info:{age:19,favoriteColor:"pink"}}]})()})();