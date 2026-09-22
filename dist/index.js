"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=o(function(h,s){
var T=require('@stdlib/strided-base-reinterpret-complex128/dist');function j(e,r,i,d){var u,a,t;if(e<=0)return r;for(u=T(r,0),a=d*2,i*=2,t=0;t<e;t++)u[a]=t,u[a+1]=0,a+=i;return r}s.exports=j
});var z=o(function(k,q){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=n();function l(e,r,i){return x(e,r,i,m(e,i))}q.exports=l
});var p=o(function(A,c){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=z(),_=n();R(f,"ndarray",_);c.exports=f
});var w=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),v,y=E(w(__dirname,"./native.js"));O(y)?v=b:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
