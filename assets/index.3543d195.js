var Or=Object.defineProperty,br=Object.defineProperties;var Dr=Object.getOwnPropertyDescriptors;var tr=Object.getOwnPropertySymbols;var Gr=Object.prototype.hasOwnProperty,Mr=Object.prototype.propertyIsEnumerable;var er=(i,r,t)=>r in i?Or(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,nr=(i,r)=>{for(var t in r||(r={}))Gr.call(r,t)&&er(i,t,r[t]);if(tr)for(var t of tr(r))Mr.call(r,t)&&er(i,t,r[t]);return i},ir=(i,r)=>br(i,Dr(r));import{d as P,o as $,n as N,p as L,q as Lr,f as or,e as Ar,s as Ur,a as w,u as g,t as Vr,v as U,w as E,x as sr,y as $r,z as Xr,A as jr,B as Nr,C as Rr,F as Wr,D as Kr,G as Tr,H as ar,I as cr,J as fr,K as qr,L as Jr,M as Yr,N as dr,c as Qr,O as Zr,P as Pr}from"./vendor.1ff9ca97.js";/* empty css             *//* empty css                  */import{_ as vr}from"./input.6fe220a3.js";/* empty css               *//* empty css             *//* empty css                *//* empty css                 */import{U as K,u as rt,g as tt,L as W,h as et,a as nt,s as ur,r as it,b as ot}from"./index.895e1189.js";import{u as lr}from"./useToggle.a63d2b17.js";const st=P({name:"Lock"}),at={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ct=L("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),ft=L("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"},null,-1),ut=[ct,ft];function lt(i,r,t,e,n,o){return $(),N("svg",at,ut)}var ht=vr(st,[["render",lt]]);const pt=P({name:"User"}),dt={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},vt=L("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"},null,-1),gt=[vt];function _t(i,r,t,e,n,o){return $(),N("svg",dt,gt)}var yt=vr(pt,[["render",_t]]);const Bt="_loginWrapper_m8z6j_2",kt="_loginCard_m8z6j_9",mt="_cardHeader_m8z6j_15",wt="_loginLoginBtn_m8z6j_19",xt="_cardBackground_m8z6j_23",Ct="_circleBackground_m8z6j_31",St="_wrapperBackground_m8z6j_35";var M={loginWrapper:Bt,loginCard:kt,cardHeader:mt,loginLoginBtn:wt,cardBackground:xt,circleBackground:Ct,wrapperBackground:St};const zt={userId:{message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",required:!0,trigger:"change"},password:{message:"\u8BF7\u8F93\u5165\u5BC6\u7801",required:!0,trigger:"change"}},Et={[K.Student]:"\u5B66\u751F",[K.Admin]:"\u7BA1\u7406\u5458"};var It="/Octo-Exam/assets/login-illustration.610e709c.webp";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var T=function(i,r){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},T(i,r)};function z(i,r){T(i,r);function t(){this.constructor=i}i.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}/**
 * @license crypto-ts
 * MIT license
 */var gr=function(){function i(){}return i.stringify=function(r){for(var t=[],e=0;e<r.sigBytes;e++){var n=r.words[e>>>2]>>>24-e%4*8&255;t.push((n>>>4).toString(16)),t.push((n&15).toString(16))}return t.join("")},i.parse=function(r){for(var t=r.length,e=[],n=0;n<t;n+=2)e[n>>>3]|=parseInt(r.substr(n,2),16)<<24-n%8*4;return new m(e,t/2)},i}(),m=function(){function i(r,t){this.words=r||[],t!==void 0?this.sigBytes=t:this.sigBytes=this.words.length*4}return i.random=function(r){for(var t=[],e=function(c){var a=987654321,f=4294967295;return function(){a=36969*(a&65535)+(a>>16)&f,c=18e3*(c&65535)+(c>>16)&f;var y=(a<<16)+c&f;return y/=4294967296,y+=.5,y*(Math.random()>.5?1:-1)}},n=0,o=void 0;n<r;n+=4){var s=e((o||Math.random())*4294967296);o=s()*987654071,t.push(s()*4294967296|0)}return new i(t,r)},i.prototype.toString=function(r){return(r||gr).stringify(this)},i.prototype.concat=function(r){if(this.clamp(),this.sigBytes%4)for(var t=0;t<r.sigBytes;t++){var e=r.words[t>>>2]>>>24-t%4*8&255;this.words[this.sigBytes+t>>>2]|=e<<24-(this.sigBytes+t)%4*8}else for(var t=0;t<r.sigBytes;t+=4)this.words[this.sigBytes+t>>>2]=r.words[t>>>2];return this.sigBytes+=r.sigBytes,this},i.prototype.clamp=function(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)},i.prototype.clone=function(){return new i(this.words.slice(0),this.sigBytes)},i}(),hr=function(){function i(){}return i.stringify=function(r){for(var t=[],e=0;e<r.sigBytes;e++){var n=r.words[e>>>2]>>>24-e%4*8&255;t.push(String.fromCharCode(n))}return t.join("")},i.parse=function(r){for(var t=r.length,e=[],n=0;n<t;n++)e[n>>>2]|=(r.charCodeAt(n)&255)<<24-n%4*8;return new m(e,t)},i}(),_r=function(){function i(){}return i.stringify=function(r){try{return decodeURIComponent(escape(hr.stringify(r)))}catch{throw new Error("Malformed UTF-8 data")}},i.parse=function(r){return hr.parse(unescape(encodeURIComponent(r)))},i}(),yr=function(){function i(r){this._minBufferSize=0,this.cfg=Object.assign({blockSize:1},r),this._data=new m,this._nDataBytes=0}return i.prototype.reset=function(){this._data=new m,this._nDataBytes=0},i.prototype._append=function(r){typeof r=="string"&&(r=_r.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes},i.prototype._process=function(r){if(!this.cfg.blockSize)throw new Error("missing blockSize in config");var t=this.cfg.blockSize*4,e=this._data.sigBytes/t;r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);var n=e*this.cfg.blockSize,o=Math.min(n*4,this._data.sigBytes),s;if(n){for(var c=0;c<n;c+=this.cfg.blockSize)this._doProcessBlock(this._data.words,c);s=this._data.words.splice(0,n),this._data.sigBytes-=o}return new m(s,o)},i.prototype.clone=function(){var r=this.constructor();for(var t in this)this.hasOwnProperty(t)&&(r[t]=this[t]);return r._data=this._data.clone(),r},i}(),Ft=function(){function i(){}return i}(),R=function(i){z(r,i);function r(t){var e=i.call(this)||this;return e.ciphertext=t.ciphertext,e.key=t.key,e.iv=t.iv,e.salt=t.salt,e.algorithm=t.algorithm,e.mode=t.mode,e.padding=t.padding,e.blockSize=t.blockSize,e.formatter=t.formatter,e}return r.prototype.extend=function(t){return t.ciphertext!==void 0&&(this.ciphertext=t.ciphertext),t.key!==void 0&&(this.key=t.key),t.iv!==void 0&&(this.iv=t.iv),t.salt!==void 0&&(this.salt=t.salt),t.algorithm!==void 0&&(this.algorithm=t.algorithm),t.mode!==void 0&&(this.mode=t.mode),t.padding!==void 0&&(this.padding=t.padding),t.blockSize!==void 0&&(this.blockSize=t.blockSize),t.formatter!==void 0&&(this.formatter=t.formatter),this},r.prototype.toString=function(t){if(t)return t.stringify(this);if(this.formatter)return this.formatter.stringify(this);throw new Error("cipher needs a formatter to be able to convert the result into a string")},r}(Ft),pr=function(){function i(){}return i.stringify=function(r){r.clamp();for(var t=[],e=0;e<r.sigBytes;e+=3)for(var n=r.words[e>>>2]>>>24-e%4*8&255,o=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,s=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=n<<16|o<<8|s,a=0;a<4&&e+a*.75<r.sigBytes;a++)t.push(this._map.charAt(c>>>6*(3-a)&63));var f=this._map.charAt(64);if(f)for(;t.length%4;)t.push(f);return t.join("")},i.parse=function(r){var t=r.length;if(this._reverseMap===void 0){this._reverseMap=[];for(var e=0;e<this._map.length;e++)this._reverseMap[this._map.charCodeAt(e)]=e}var n=this._map.charAt(64);if(n){var o=r.indexOf(n);o!==-1&&(t=o)}return this.parseLoop(r,t,this._reverseMap)},i.parseLoop=function(r,t,e){for(var n=[],o=0,s=0;s<t;s++)if(s%4){var c=e[r.charCodeAt(s-1)]<<s%4*2,a=e[r.charCodeAt(s)]>>>6-s%4*2;n[o>>>2]|=(c|a)<<24-o%4*8,o++}return new m(n,o)},i._map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i._reverseMap=void 0,i}(),Br=function(){function i(){}return i.stringify=function(r){if(!r.ciphertext)throw new Error("missing ciphertext in params");var t=r.ciphertext,e=r.salt,n;if(e){if(typeof e=="string")throw new Error("salt is expected to be a WordArray");n=new m([1398893684,1701076831]).concat(e).concat(t)}else n=t;return n.toString(pr)},i.parse=function(r){var t=pr.parse(r),e;return t.words[0]===1398893684&&t.words[1]===1701076831&&(e=new m(t.words.slice(2,4)),t.words.splice(0,4),t.sigBytes-=16),new R({ciphertext:t,salt:e})},i}(),X=function(){function i(){}return i.encrypt=function(r,t,e,n){var o=Object.assign({},this.cfg,n),s=r.createEncryptor(e,o),c=s.finalize(t);return new R({ciphertext:c,key:e,iv:s.cfg.iv,algorithm:r,mode:s.cfg.mode,padding:s.cfg.padding,blockSize:s.cfg.blockSize,formatter:o.format})},i.decrypt=function(r,t,e,n){var o=Object.assign({},this.cfg,n);if(!o.format)throw new Error("could not determine format");if(t=this._parse(t,o.format),!t.ciphertext)throw new Error("could not determine ciphertext");var s=r.createDecryptor(e,o).finalize(t.ciphertext);return s},i._parse=function(r,t){return typeof r=="string"?t.parse(r):r},i.cfg={blockSize:4,iv:new m([]),format:Br},i}(),rr=function(i){z(r,i);function r(t){var e=i.call(this,Object.assign({blockSize:16},t))||this;return e.reset(),e}return r._createHelper=function(t){function e(n,o){var s=t,c=new s(o);return c.finalize(n)}return e},r.prototype.update=function(t){return this._append(t),this._process(),this},r.prototype.finalize=function(t){t&&this._append(t);var e=this._doFinalize();return e},r}(yr),d=[];for(var j=0;j<64;j++)d[j]=Math.abs(Math.sin(j+1))*4294967296|0;var Ht=function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.FF=function(t,e,n,o,s,c,a){var f=t+(e&n|~e&o)+s+a;return(f<<c|f>>>32-c)+e},r.GG=function(t,e,n,o,s,c,a){var f=t+(e&o|n&~o)+s+a;return(f<<c|f>>>32-c)+e},r.HH=function(t,e,n,o,s,c,a){var f=t+(e^n^o)+s+a;return(f<<c|f>>>32-c)+e},r.II=function(t,e,n,o,s,c,a){var f=t+(n^(e|~o))+s+a;return(f<<c|f>>>32-c)+e},r.prototype.reset=function(){i.prototype.reset.call(this),this._hash=new m([1732584193,4023233417,2562383102,271733878])},r.prototype._doProcessBlock=function(t,e){for(var n=0;n<16;n++){var o=e+n,s=t[o];t[o]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360}var c=this._hash.words,a=t[e+0],f=t[e+1],y=t[e+2],_=t[e+3],k=t[e+4],v=t[e+5],B=t[e+6],C=t[e+7],S=t[e+8],F=t[e+9],H=t[e+10],O=t[e+11],b=t[e+12],D=t[e+13],I=t[e+14],G=t[e+15],u=c[0],l=c[1],h=c[2],p=c[3];u=r.FF(u,l,h,p,a,7,d[0]),p=r.FF(p,u,l,h,f,12,d[1]),h=r.FF(h,p,u,l,y,17,d[2]),l=r.FF(l,h,p,u,_,22,d[3]),u=r.FF(u,l,h,p,k,7,d[4]),p=r.FF(p,u,l,h,v,12,d[5]),h=r.FF(h,p,u,l,B,17,d[6]),l=r.FF(l,h,p,u,C,22,d[7]),u=r.FF(u,l,h,p,S,7,d[8]),p=r.FF(p,u,l,h,F,12,d[9]),h=r.FF(h,p,u,l,H,17,d[10]),l=r.FF(l,h,p,u,O,22,d[11]),u=r.FF(u,l,h,p,b,7,d[12]),p=r.FF(p,u,l,h,D,12,d[13]),h=r.FF(h,p,u,l,I,17,d[14]),l=r.FF(l,h,p,u,G,22,d[15]),u=r.GG(u,l,h,p,f,5,d[16]),p=r.GG(p,u,l,h,B,9,d[17]),h=r.GG(h,p,u,l,O,14,d[18]),l=r.GG(l,h,p,u,a,20,d[19]),u=r.GG(u,l,h,p,v,5,d[20]),p=r.GG(p,u,l,h,H,9,d[21]),h=r.GG(h,p,u,l,G,14,d[22]),l=r.GG(l,h,p,u,k,20,d[23]),u=r.GG(u,l,h,p,F,5,d[24]),p=r.GG(p,u,l,h,I,9,d[25]),h=r.GG(h,p,u,l,_,14,d[26]),l=r.GG(l,h,p,u,S,20,d[27]),u=r.GG(u,l,h,p,D,5,d[28]),p=r.GG(p,u,l,h,y,9,d[29]),h=r.GG(h,p,u,l,C,14,d[30]),l=r.GG(l,h,p,u,b,20,d[31]),u=r.HH(u,l,h,p,v,4,d[32]),p=r.HH(p,u,l,h,S,11,d[33]),h=r.HH(h,p,u,l,O,16,d[34]),l=r.HH(l,h,p,u,I,23,d[35]),u=r.HH(u,l,h,p,f,4,d[36]),p=r.HH(p,u,l,h,k,11,d[37]),h=r.HH(h,p,u,l,C,16,d[38]),l=r.HH(l,h,p,u,H,23,d[39]),u=r.HH(u,l,h,p,D,4,d[40]),p=r.HH(p,u,l,h,a,11,d[41]),h=r.HH(h,p,u,l,_,16,d[42]),l=r.HH(l,h,p,u,B,23,d[43]),u=r.HH(u,l,h,p,F,4,d[44]),p=r.HH(p,u,l,h,b,11,d[45]),h=r.HH(h,p,u,l,G,16,d[46]),l=r.HH(l,h,p,u,y,23,d[47]),u=r.II(u,l,h,p,a,6,d[48]),p=r.II(p,u,l,h,C,10,d[49]),h=r.II(h,p,u,l,I,15,d[50]),l=r.II(l,h,p,u,v,21,d[51]),u=r.II(u,l,h,p,b,6,d[52]),p=r.II(p,u,l,h,_,10,d[53]),h=r.II(h,p,u,l,H,15,d[54]),l=r.II(l,h,p,u,f,21,d[55]),u=r.II(u,l,h,p,S,6,d[56]),p=r.II(p,u,l,h,G,10,d[57]),h=r.II(h,p,u,l,B,15,d[58]),l=r.II(l,h,p,u,D,21,d[59]),u=r.II(u,l,h,p,k,6,d[60]),p=r.II(p,u,l,h,O,10,d[61]),h=r.II(h,p,u,l,y,15,d[62]),l=r.II(l,h,p,u,F,21,d[63]),c[0]=c[0]+u|0,c[1]=c[1]+l|0,c[2]=c[2]+h|0,c[3]=c[3]+p|0},r.prototype._doFinalize=function(){var t=this._data,e=t.words,n=this._nDataBytes*8,o=t.sigBytes*8;e[o>>>5]|=128<<24-o%32;var s=Math.floor(n/4294967296),c=n;e[(o+64>>>9<<4)+15]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,e[(o+64>>>9<<4)+14]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360,t.sigBytes=(e.length+1)*4,this._process();for(var a=this._hash,f=a.words,y=0;y<4;y++){var _=f[y];f[y]=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360}return a},r}(rr),Ot=function(){function i(r){this.cfg=Object.assign({keySize:128/32,hasher:Ht,iterations:1},r)}return i.prototype.compute=function(r,t){for(var e=new this.cfg.hasher,n=new m,o;n.words.length<this.cfg.keySize;){o&&e.update(o),o=e.update(r).finalize(t),e.reset();for(var s=1;s<this.cfg.iterations;s++)o=e.finalize(o),e.reset();n.concat(o)}return n.sigBytes=this.cfg.keySize*4,n},i}(),bt=function(){function i(){}return i.execute=function(r,t,e,n){n||(n=m.random(64/8));var o=new Ot({keySize:t+e}).compute(r,n),s=new m(o.words.slice(t),e*4);return o.sigBytes=t*4,new R({key:o,iv:s,salt:n})},i}(),q=function(){function i(){}return i.encrypt=function(r,t,e,n){var o=Object.assign({},this.cfg,n);if(o.kdf===void 0)throw new Error("missing kdf in config");var s=o.kdf.execute(e,r.keySize,r.ivSize);s.iv!==void 0&&(o.iv=s.iv);var c=X.encrypt.call(this,r,t,s.key,o);return c.extend(s)},i.decrypt=function(r,t,e,n){var o=Object.assign({},this.cfg,n);if(o.format===void 0)throw new Error("missing format in config");if(t=this._parse(t,o.format),o.kdf===void 0)throw new Error("the key derivation function must be set");var s=o.kdf.execute(e,r.keySize,r.ivSize,t.salt);s.iv!==void 0&&(o.iv=s.iv);var c=X.decrypt.call(this,r,t,s.key,o);return c},i._parse=function(r,t){return typeof r=="string"?t.parse(r):r},i.cfg={blockSize:4,iv:new m([]),format:Br,kdf:bt},i}(),Dt=function(i){z(r,i);function r(t,e,n){var o=i.call(this,Object.assign({blockSize:1},n))||this;return o._xformMode=t,o._key=e,o.reset(),o}return r.createEncryptor=function(t,e){var n=this;return new n(this._ENC_XFORM_MODE,t,e)},r.createDecryptor=function(t,e){var n=this;return new n(this._DEC_XFORM_MODE,t,e)},r._createHelper=function(t){function e(o,s,c){return typeof s=="string"?q.encrypt(t,o,s,c):X.encrypt(t,o,s,c)}function n(o,s,c){return typeof s=="string"?q.decrypt(t,o,s,c):X.decrypt(t,o,s,c)}return{encrypt:e,decrypt:n}},r.prototype.process=function(t){return this._append(t),this._process()},r.prototype.finalize=function(t){t&&this._append(t);var e=this._doFinalize();return e},r._ENC_XFORM_MODE=1,r._DEC_XFORM_MODE=2,r.keySize=4,r.ivSize=4,r}(yr),V=function(){function i(r,t){this.init(r,t)}return i.prototype.init=function(r,t){this._cipher=r,this._iv=t},i}(),kr=function(){function i(){}return i.createEncryptor=function(r,t){var e=this.Encryptor;return new e(r,t)},i.createDecryptor=function(r,t){var e=this.Decryptor;return new e(r,t)},i.Encryptor=V,i.Decryptor=V,i}(),Gt=function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.prototype.processBlock=function(t,e){if(this._cipher.cfg.blockSize===void 0)throw new Error("missing blockSize in cipher config");this.xorBlock(t,e,this._cipher.cfg.blockSize),this._cipher.encryptBlock(t,e),this._prevBlock=t.slice(e,e+this._cipher.cfg.blockSize)},r.prototype.xorBlock=function(t,e,n){var o;if(this._iv?(o=this._iv,this._iv=void 0):o=this._prevBlock,o!==void 0)for(var s=0;s<n;s++)t[e+s]^=o[s]},r}(V),Mt=function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.prototype.processBlock=function(t,e){if(this._cipher.cfg.blockSize===void 0)throw new Error("missing blockSize in cipher config");var n=t.slice(e,e+this._cipher.cfg.blockSize);this._cipher.decryptBlock(t,e),this.xorBlock(t,e,this._cipher.cfg.blockSize),this._prevBlock=n},r.prototype.xorBlock=function(t,e,n){var o;if(this._iv?(o=this._iv,this._iv=void 0):o=this._prevBlock,o!==void 0)for(var s=0;s<n;s++)t[e+s]^=o[s]},r}(V),Lt=function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.Encryptor=Gt,r.Decryptor=Mt,r}(kr),At=function(){function i(){}return i.pad=function(r,t){for(var e=t*4,n=e-r.sigBytes%e,o=n<<24|n<<16|n<<8|n,s=[],c=0;c<n;c+=4)s.push(o);var a=new m(s,n);r.concat(a)},i.unpad=function(r){var t=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=t},i}(),mr=function(i){z(r,i);function r(t,e,n){return i.call(this,t,e,Object.assign({blockSize:4,mode:Lt,padding:At},n))||this}return r.prototype.reset=function(){if(i.prototype.reset.call(this),this.cfg.mode===void 0)throw new Error("missing mode in config");var t;this._xformMode===this.constructor._ENC_XFORM_MODE?t=this.cfg.mode.createEncryptor:(t=this.cfg.mode.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator===t?this._mode.init(this,this.cfg.iv&&this.cfg.iv.words):(this._mode=t.call(this.cfg.mode,this,this.cfg.iv&&this.cfg.iv.words),this._mode.__creator=t)},r.prototype._doProcessBlock=function(t,e){this._mode.processBlock(t,e)},r.prototype._doFinalize=function(){if(this.cfg.padding===void 0)throw new Error("missing padding in config");var t;if(this._xformMode===this.constructor._ENC_XFORM_MODE){if(this.cfg.blockSize===void 0)throw new Error("missing blockSize in config");this.cfg.padding.pad(this._data,this.cfg.blockSize),t=this._process(!0)}else t=this._process(!0),this.cfg.padding.unpad(t);return t},r}(Dt),x=[],wr=[],xr=[],Cr=[],Sr=[],zr=[],J=[],Y=[],Q=[],Z=[];(function(){for(var i=[],r=0;r<256;r++)r<128?i[r]=r<<1:i[r]=r<<1^283;for(var t=0,e=0,r=0;r<256;r++){var n=e^e<<1^e<<2^e<<3^e<<4;n=n>>>8^n&255^99,x[t]=n,wr[n]=t;var o=i[t],s=i[o],c=i[s],a=i[n]*257^n*16843008;xr[t]=a<<24|a>>>8,Cr[t]=a<<16|a>>>16,Sr[t]=a<<8|a>>>24,zr[t]=a,a=c*16843009^s*65537^o*257^t*16843008,J[n]=a<<24|a>>>8,Y[n]=a<<16|a>>>16,Q[n]=a<<8|a>>>24,Z[n]=a,t?(t=o^i[i[i[c^o]]],e^=i[i[e]]):t=e=1}})();var Ut=[0,1,2,4,8,16,32,64,128,27,54],Vt=function(i){z(r,i);function r(t,e,n){return i.call(this,t,e,n)||this}return r.prototype.reset=function(){if(i.prototype.reset.call(this),!(this._nRounds&&this._keyPriorReset===this._key)){for(var t=this._keyPriorReset=this._key,e=t.words,n=t.sigBytes/4,o=this._nRounds=n+6,s=(o+1)*4,c=this._keySchedule=[],a=0;a<s;a++)if(a<n)c[a]=e[a];else{var f=c[a-1];a%n?n>6&&a%n===4&&(f=x[f>>>24]<<24|x[f>>>16&255]<<16|x[f>>>8&255]<<8|x[f&255]):(f=f<<8|f>>>24,f=x[f>>>24]<<24|x[f>>>16&255]<<16|x[f>>>8&255]<<8|x[f&255],f^=Ut[a/n|0]<<24),c[a]=c[a-n]^f}for(var y=this._invKeySchedule=[],_=0;_<s;_++){var a=s-_,f=void 0;_%4?f=c[a]:f=c[a-4],_<4||a<=4?y[_]=f:y[_]=J[x[f>>>24]]^Y[x[f>>>16&255]]^Q[x[f>>>8&255]]^Z[x[f&255]]}}},r.prototype.encryptBlock=function(t,e){this._doCryptBlock(t,e,this._keySchedule,xr,Cr,Sr,zr,x)},r.prototype.decryptBlock=function(t,e){var n=t[e+1];t[e+1]=t[e+3],t[e+3]=n,this._doCryptBlock(t,e,this._invKeySchedule,J,Y,Q,Z,wr),n=t[e+1],t[e+1]=t[e+3],t[e+3]=n},r.prototype._doCryptBlock=function(t,e,n,o,s,c,a,f){for(var y=t[e]^n[0],_=t[e+1]^n[1],k=t[e+2]^n[2],v=t[e+3]^n[3],B=4,C=1;C<this._nRounds;C++){var S=o[y>>>24]^s[_>>>16&255]^c[k>>>8&255]^a[v&255]^n[B++],F=o[_>>>24]^s[k>>>16&255]^c[v>>>8&255]^a[y&255]^n[B++],H=o[k>>>24]^s[v>>>16&255]^c[y>>>8&255]^a[_&255]^n[B++],O=o[v>>>24]^s[y>>>16&255]^c[_>>>8&255]^a[k&255]^n[B++];y=S,_=F,k=H,v=O}var b=(f[y>>>24]<<24|f[_>>>16&255]<<16|f[k>>>8&255]<<8|f[v&255])^n[B++],D=(f[_>>>24]<<24|f[k>>>16&255]<<16|f[v>>>8&255]<<8|f[y&255])^n[B++],I=(f[k>>>24]<<24|f[v>>>16&255]<<16|f[y>>>8&255]<<8|f[_&255])^n[B++],G=(f[v>>>24]<<24|f[y>>>16&255]<<16|f[_>>>8&255]<<8|f[k&255])^n[B++];t[e]=b,t[e+1]=D,t[e+2]=I,t[e+3]=G},r.keySize=8,r}(mr),$t=[],Xt=[],A=[],jt=function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.prototype.reset=function(){i.prototype.reset.call(this),this._hash=new m($t.slice(0))},r.prototype._doProcessBlock=function(t,e){for(var n=this._hash.words,o=n[0],s=n[1],c=n[2],a=n[3],f=n[4],y=n[5],_=n[6],k=n[7],v=0;v<64;v++){if(v<16)A[v]=t[e+v]|0;else{var B=A[v-15],C=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,S=A[v-2],F=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;A[v]=C+A[v-7]+F+A[v-16]}var H=f&y^~f&_,O=o&s^o&c^s&c,b=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),D=(f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25),I=k+D+H+Xt[v]+A[v],G=b+O;k=_,_=y,y=f,f=a+I|0,a=c,c=s,s=o,o=I+G|0}n[0]=n[0]+o|0,n[1]=n[1]+s|0,n[2]=n[2]+c|0,n[3]=n[3]+a|0,n[4]=n[4]+f|0,n[5]=n[5]+y|0,n[6]=n[6]+_|0,n[7]=n[7]+k|0},r.prototype._doFinalize=function(){var t=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(t/4294967296),this._data.words[(e+64>>>9<<4)+15]=t,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash},r}(rr),Nt=function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.prototype.processBlock=function(t,e){this._cipher.encryptBlock(t,e)},r}(V),Rt=function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.prototype.processBlock=function(t,e){this._cipher.decryptBlock(t,e)},r}(V);(function(i){z(r,i);function r(){return i!==null&&i.apply(this,arguments)||this}return r.Encryptor=Nt,r.Decryptor=Rt,r})(kr);var Er={BlockCipher:mr,WordArray:m,CipherParams:R,Hasher:rr,SerializableCipher:X,PasswordBasedCipher:q},Ir={AES:Vt,SHA256:jt},Wt={Utf8:_r,Hex:gr},Fr=Er.BlockCipher._createHelper(Ir.AES);Er.Hasher._createHelper(Ir.SHA256);const Hr="X_OCTO_EXAM",Kt=i=>Fr.encrypt(i,Hr).toString(),Tt=i=>Fr.decrypt(i,Hr).toString(Wt.Utf8),qt={class:"w-full flex justify-evenly mb-8"},Jt={class:"flex -mt-2"},Yt=dr(" \u767B \u9646 "),ce=P({setup(i){const r=Lr(),t=rt(),e=or(),n=or(),{isActive:o}=lr(),{isActive:s,onToggle:c}=lr(),a=Ar({role:K.Student,userId:"",password:""}),f=()=>{try{const k=tt(W);if(k){const v=JSON.parse(k);o.value=!0,a.role=v.role,a.userId=v.userId,a.password=Tt(v.password)}}catch{}},y=k=>{a.role=k,e.value&&e.value.focus()},_=async()=>{try{c(),n.value&&await n.value.validate();const{status:k,data:v}=await et.postRequest(nt,a);if(k){const{res:B,token:C}=v;o.value?ur(W,JSON.stringify(ir(nr({},a),{password:Kt(a.password)}))):it(W),ur(ot,C),t.patchUserConfig(B),r.push("/space")}}catch{}finally{c()}};return Ur(()=>{f(),e.value&&e.value.focus()}),(k,v)=>($(),N("div",{class:U(g(M).loginWrapper)},[w(g(Vr),{class:U(g(M).loginCard),shadow:"hover"},{default:E(()=>[w(g(sr),null,{default:E(()=>[w(g($r),null,{default:E(()=>[L("h3",{class:U(g(M).cardHeader)},"Octo",2)]),_:1}),w(g(sr),null,{default:E(()=>[w(g(Xr),{width:"400px",style:{flex:"2"}},{default:E(()=>[w(g(jr),{src:g(It)},null,8,["src"])]),_:1}),w(g(Nr),{direction:"vertical",style:{height:"auto"}}),w(g(Rr),{style:{"flex-basis":"0"}},{default:E(()=>[L("div",qt,[($(!0),N(Wr,null,Kr(Object.entries(g(Et)),([B,C])=>($(),Qr(g(Pr),{key:B,checked:g(a).role===B,onClick:S=>y(B)},{default:E(()=>[dr(Zr(C),1)]),_:2},1032,["checked","onClick"]))),128))]),w(g(Tr),{ref_key:"formRef",ref:n,"label-position":"top",model:g(a),rules:g(zt),"hide-required-asterisk":""},{default:E(()=>[w(g(ar),{label:"\u7528\u6237\u540D",for:"username",prop:"userId"},{default:E(()=>[w(g(cr),{id:"username",ref_key:"loginInputRef",ref:e,modelValue:g(a).userId,"onUpdate:modelValue":v[0]||(v[0]=B=>g(a).userId=B),"prefix-icon":g(yt),clearable:"",onKeyup:fr(_,["enter"])},null,8,["modelValue","prefix-icon","onKeyup"])]),_:1}),w(g(ar),{label:"\u5BC6\u7801",for:"password",prop:"password"},{default:E(()=>[w(g(cr),{id:"password",modelValue:g(a).password,"onUpdate:modelValue":v[1]||(v[1]=B=>g(a).password=B),type:"password","prefix-icon":g(ht),"show-password":"",onKeyup:fr(_,["enter"])},null,8,["modelValue","prefix-icon","onKeyup"])]),_:1})]),_:1},8,["model","rules"]),L("div",Jt,[w(g(qr),{modelValue:g(o),"onUpdate:modelValue":v[2]||(v[2]=B=>Jr(o)?o.value=B:null),label:"\u8BB0\u4F4F\u5BC6\u7801",size:"small"},null,8,["modelValue"])]),w(g(Yr),{type:"primary",class:U(g(M).loginLoginBtn),loading:g(s),onClick:_},{default:E(()=>[Yt]),_:1},8,["class","loading"])]),_:1})]),_:1})]),_:1}),L("div",{class:U(`${g(M).circleBackground} ${g(M).cardBackground}`)},null,2)]),_:1},8,["class"]),L("div",{class:U(`${g(M).circleBackground} ${g(M).wrapperBackground}`)},null,2)],2))}});export{ce as default};
