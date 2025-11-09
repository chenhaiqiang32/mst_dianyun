(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vs="177",Ci={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mc=0,pa=1,Ec=2,Tl=1,Al=2,bn=3,Bn=0,Bt=1,Pn=2,Mn=0,Ri=1,jo=2,ma=3,ga=4,Tc=5,Kn=100,Ac=101,Cc=102,Rc=103,Ic=104,Dc=200,Lc=201,Nc=202,Uc=203,Ko=204,Zo=205,Oc=206,$c=207,Bc=208,Fc=209,Xc=210,zc=211,kc=212,Yc=213,Hc=214,Jo=0,es=1,ts=2,ni=3,ns=4,is=5,rs=6,os=7,Cl=0,Gc=1,Vc=2,Un=0,Qc=1,Wc=2,qc=3,jc=4,Kc=5,Zc=6,Jc=7,Rl=300,Li=301,Ni=302,ss=303,as=304,ro=306,ls=1e3,Jn=1001,cs=1002,Ft=1003,eh=1004,dr=1005,on=1006,uo=1007,ei=1008,fn=1009,Il=1010,Dl=1011,rr=1012,Qs=1013,ii=1014,Sn=1015,lr=1016,Ws=1017,qs=1018,or=1020,Ll=35902,Nl=1021,Ul=1022,jt=1023,sr=1026,ar=1027,Ol=1028,js=1029,$l=1030,Ks=1031,Zs=1033,Hr=33776,Gr=33777,Vr=33778,Qr=33779,hs=35840,ds=35841,us=35842,fs=35843,ps=36196,ms=37492,gs=37496,vs=37808,_s=37809,ys=37810,xs=37811,bs=37812,Ps=37813,Ss=37814,ws=37815,Ms=37816,Es=37817,Ts=37818,As=37819,Cs=37820,Rs=37821,Wr=36492,Is=36494,Ds=36495,Bl=36283,Ls=36284,Ns=36285,Us=36286,th=3200,nh=3201,ih=0,rh=1,Nn="",Wt="srgb",Ui="srgb-linear",Kr="linear",it="srgb",ci=7680,va=519,oh=512,sh=513,ah=514,Fl=515,lh=516,ch=517,hh=518,dh=519,Os=35044,$s="300 es",wn=2e3,Zr=2001;class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qr=Math.PI/180,Bs=180/Math.PI;function On(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function fo(i,e,t){return(1-t)*i+t*e}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fh={DEG2RAD:qr};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ri{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=o[s+0],m=o[s+1],v=o[s+2],y=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=y;return}if(u!==y||l!==f||c!==m||h!==v){let p=1-a;const d=l*f+c*m+h*v+u*y,M=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const N=Math.sqrt(w),D=Math.atan2(N,d*M);p=Math.sin(p*D)/N,a=Math.sin(a*D)/N}const b=a*M;if(l=l*p+f*b,c=c*p+m*b,h=h*p+v*b,u=u*p+y*b,p===1-a){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],m=o[s+2],v=o[s+3];return e[t]=a*v+h*u+l*m-c*f,e[t+1]=l*v+h*f+c*u-a*m,e[t+2]=c*v+h*m+a*f-l*u,e[t+3]=h*v-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u-f*m*v;break;case"YXZ":this._x=f*h*u+c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u+f*m*v;break;case"ZXY":this._x=f*h*u-c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u-f*m*v;break;case"ZYX":this._x=f*h*u-c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u+f*m*v;break;case"YZX":this._x=f*h*u+c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u-f*m*v;break;case"XZY":this._x=f*h*u-c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_a.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_a.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),h=2*(a*t-o*r),u=2*(o*n-s*t);return this.x=t+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new C,_a=new ri;class $e{constructor(e,t,n,r,o,s,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],v=n[8],y=r[0],p=r[3],d=r[6],M=r[1],w=r[4],b=r[7],N=r[2],D=r[5],E=r[8];return o[0]=s*y+a*M+l*N,o[3]=s*p+a*w+l*D,o[6]=s*d+a*b+l*E,o[1]=c*y+h*M+u*N,o[4]=c*p+h*w+u*D,o[7]=c*d+h*b+u*E,o[2]=f*y+m*M+v*N,o[5]=f*p+m*w+v*D,o[8]=f*d+m*b+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*s-a*c,f=a*l-h*o,m=c*o-s*l,v=t*u+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=u*y,e[1]=(r*c-h*n)*y,e[2]=(a*n-r*s)*y,e[3]=f*y,e[4]=(h*t-r*l)*y,e[5]=(r*o-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(s*t-n*o)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new $e;function Xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ph(){const i=Jr("canvas");return i.style.display="block",i}const ya={};function Ii(i){i in ya||(ya[i]=!0,console.warn(i))}function mh(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function gh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xa=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ba=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const i={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===it&&(r.r=En(r.r),r.g=En(r.g),r.b=En(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===it&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Nn?Kr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Ii("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Ii("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ui]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:xa,fromXYZ:ba,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:xa,fromXYZ:ba,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const Qe=_h();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class yh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=Jr("canvas")),hi.width=e.width,hi.height=e.height;const r=hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=En(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xh=0;class Js{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(go(r[s].image)):o.push(go(r[s]))}else o=go(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bh=0;const vo=new C;class Tt extends zn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Jn,r=Jn,o=on,s=ei,a=jt,l=fn,c=Tt.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=On(),this.name="",this.source=new Js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Rl;Tt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],v=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(m+1)/2,N=(d+1)/2,D=(h+f)/4,E=(u+y)/4,L=(v+p)/4;return w>b&&w>N?w<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(w),r=D/n,o=E/n):b>N?b<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),n=D/r,o=L/r):N<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),n=E/o,r=L/o),this.set(n,r,o,t),this}let M=Math.sqrt((p-v)*(p-v)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(u-y)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:n.depth},o=new Tt(r);this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Js(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zl extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sh extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,en):en.fromBufferAttribute(o,s),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),fr.subVectors(this.max,Vi),di.subVectors(e.a,Vi),ui.subVectors(e.b,Vi),fi.subVectors(e.c,Vi),Tn.subVectors(ui,di),An.subVectors(fi,ui),Hn.subVectors(di,fi);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Hn.y,Hn.x,0];return!_o(t,di,ui,fi,fr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,di,ui,fi,fr))?!1:(pr.crossVectors(Tn,An),t=[pr.x,pr.y,pr.z],_o(t,di,ui,fi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,ur=new zi,di=new C,ui=new C,fi=new C,Tn=new C,An=new C,Hn=new C,Vi=new C,fr=new C,pr=new C,Gn=new C;function _o(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Gn.fromArray(i,o);const a=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wh=new zi,Qi=new C,yo=new C;class ki{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wh.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(yo)),this.expandByPoint(Qi.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new C,xo=new C,mr=new C,Cn=new C,bo=new C,gr=new C,Po=new C;class oo{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xo.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(xo);const o=e.distanceTo(t)*.5,s=-this.direction.dot(mr),a=Cn.dot(this.direction),l=-Cn.dot(mr),c=Cn.lengthSq(),h=Math.abs(1-s*s);let u,f,m,v;if(h>0)if(u=s*l-a,f=s*a-l,v=o*h,u>=0)if(f>=-v)if(f<=v){const y=1/h;u*=y,f*=y,m=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),m=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),m=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-o,-l),o),m=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),m=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(xo).addScaledVector(mr,f),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),r=vn.dot(vn)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(o=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,r,o){bo.subVectors(t,e),gr.subVectors(n,e),Po.crossVectors(bo,gr);let s=this.direction.dot(Po),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Cn.subVectors(this.origin,e);const l=a*this.direction.dot(gr.crossVectors(Cn,gr));if(l<0)return null;const c=a*this.direction.dot(bo.cross(Cn));if(c<0||l+c>s)return null;const h=-a*Cn.dot(Po);return h<0?null:this.at(h/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,o,s,a,l,c,h,u,f,m,v,y,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,h,u,f,m,v,y,p)}set(e,t,n,r,o,s,a,l,c,h,u,f,m,v,y,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=v,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),o=1/pi.setFromMatrixColumn(e,1).length(),s=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const f=s*h,m=s*u,v=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,v=c*h,y=c*u;t[0]=f+y*a,t[4]=v*a-m,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=m*a-v,t[6]=y+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,v=c*h,y=c*u;t[0]=f-y*a,t[4]=-s*u,t[8]=v+m*a,t[1]=m+v*a,t[5]=s*h,t[9]=y-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,m=s*u,v=a*h,y=a*u;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=a*l,y=a*c;t[0]=l*h,t[4]=y-f*u,t[8]=v*u+m,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+v,t[10]=f-y*u}else if(e.order==="XZY"){const f=s*l,m=s*c,v=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=s*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,Eh)}lookAt(e,t,n){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Rn.crossVectors(n,zt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Rn.crossVectors(n,zt)),Rn.normalize(),vr.crossVectors(zt,Rn),r[0]=Rn.x,r[4]=vr.x,r[8]=zt.x,r[1]=Rn.y,r[5]=vr.y,r[9]=zt.y,r[2]=Rn.z,r[6]=vr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],v=n[2],y=n[6],p=n[10],d=n[14],M=n[3],w=n[7],b=n[11],N=n[15],D=r[0],E=r[4],L=r[8],P=r[12],x=r[1],R=r[5],Y=r[9],X=r[13],q=r[2],V=r[6],Q=r[10],Z=r[14],z=r[3],le=r[7],ue=r[11],we=r[15];return o[0]=s*D+a*x+l*q+c*z,o[4]=s*E+a*R+l*V+c*le,o[8]=s*L+a*Y+l*Q+c*ue,o[12]=s*P+a*X+l*Z+c*we,o[1]=h*D+u*x+f*q+m*z,o[5]=h*E+u*R+f*V+m*le,o[9]=h*L+u*Y+f*Q+m*ue,o[13]=h*P+u*X+f*Z+m*we,o[2]=v*D+y*x+p*q+d*z,o[6]=v*E+y*R+p*V+d*le,o[10]=v*L+y*Y+p*Q+d*ue,o[14]=v*P+y*X+p*Z+d*we,o[3]=M*D+w*x+b*q+N*z,o[7]=M*E+w*R+b*V+N*le,o[11]=M*L+w*Y+b*Q+N*ue,o[15]=M*P+w*X+b*Z+N*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],v=e[3],y=e[7],p=e[11],d=e[15];return v*(+o*l*u-r*c*u-o*a*f+n*c*f+r*a*m-n*l*m)+y*(+t*l*m-t*c*f+o*s*f-r*s*m+r*c*h-o*l*h)+p*(+t*c*u-t*a*m-o*s*u+n*s*m+o*a*h-n*c*h)+d*(-r*a*h-t*l*u+t*a*f+r*s*u-n*s*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],v=e[12],y=e[13],p=e[14],d=e[15],M=u*p*c-y*f*c+y*l*m-a*p*m-u*l*d+a*f*d,w=v*f*c-h*p*c-v*l*m+s*p*m+h*l*d-s*f*d,b=h*y*c-v*u*c+v*a*m-s*y*m-h*a*d+s*u*d,N=v*u*l-h*y*l-v*a*f+s*y*f+h*a*p-s*u*p,D=t*M+n*w+r*b+o*N;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/D;return e[0]=M*E,e[1]=(y*f*o-u*p*o-y*r*m+n*p*m+u*r*d-n*f*d)*E,e[2]=(a*p*o-y*l*o+y*r*c-n*p*c-a*r*d+n*l*d)*E,e[3]=(u*l*o-a*f*o-u*r*c+n*f*c+a*r*m-n*l*m)*E,e[4]=w*E,e[5]=(h*p*o-v*f*o+v*r*m-t*p*m-h*r*d+t*f*d)*E,e[6]=(v*l*o-s*p*o-v*r*c+t*p*c+s*r*d-t*l*d)*E,e[7]=(s*f*o-h*l*o+h*r*c-t*f*c-s*r*m+t*l*m)*E,e[8]=b*E,e[9]=(v*u*o-h*y*o-v*n*m+t*y*m+h*n*d-t*u*d)*E,e[10]=(s*y*o-v*a*o+v*n*c-t*y*c-s*n*d+t*a*d)*E,e[11]=(h*a*o-s*u*o-h*n*c+t*u*c+s*n*m-t*a*m)*E,e[12]=N*E,e[13]=(h*y*r-v*u*r+v*n*f-t*y*f-h*n*p+t*u*p)*E,e[14]=(v*a*r-s*y*r-v*n*l+t*y*l+s*n*p-t*a*p)*E,e[15]=(s*u*r-h*a*r+h*n*l-t*u*l-s*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,h=s+s,u=a+a,f=o*c,m=o*h,v=o*u,y=s*h,p=s*u,d=a*u,M=l*c,w=l*h,b=l*u,N=n.x,D=n.y,E=n.z;return r[0]=(1-(y+d))*N,r[1]=(m+b)*N,r[2]=(v-w)*N,r[3]=0,r[4]=(m-b)*D,r[5]=(1-(f+d))*D,r[6]=(p+M)*D,r[7]=0,r[8]=(v+w)*E,r[9]=(p-M)*E,r[10]=(1-(f+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=pi.set(r[0],r[1],r[2]).length();const s=pi.set(r[4],r[5],r[6]).length(),a=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/o,h=1/s,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=wn){const l=this.elements,c=2*o/(t-e),h=2*o/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===wn)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Zr)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=wn){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(s-o),f=(t+e)*c,m=(n+r)*h;let v,y;if(a===wn)v=(s+o)*u,y=-2*u;else if(a===Zr)v=o*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pi=new C,tn=new at,Mh=new C(0,0,0),Eh=new C(1,1,1),Rn=new C,vr=new C,zt=new C,Pa=new at,Sa=new ri;class ln{constructor(e=0,t=0,n=0,r=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Th=0;const wa=new C,mi=new ri,_n=new at,_r=new C,Wi=new C,Ah=new C,Ch=new ri,Ma=new C(1,0,0),Ea=new C(0,1,0),Ta=new C(0,0,1),Aa={type:"added"},Rh={type:"removed"},gi={type:"childadded",child:null},So={type:"childremoved",child:null};class yt extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new C,t=new ln,n=new ri,r=new C(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new $e}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(Ma,e)}rotateY(e){return this.rotateOnAxis(Ea,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return wa.copy(e).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ma,e)}translateY(e){return this.translateOnAxis(Ea,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Wi,_r,this.up):_n.lookAt(_r,Wi,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(_n),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Aa),gi.child=e,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rh),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Aa),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new C(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new C,yn=new C,wo=new C,xn=new C,vi=new C,_i=new C,Ca=new C,Mo=new C,Eo=new C,To=new C,Ao=new nt,Co=new nt,Ro=new nt;class qt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nn.subVectors(e,t),r.cross(nn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){nn.subVectors(r,t),yn.subVectors(n,t),wo.subVectors(e,t);const s=nn.dot(nn),a=nn.dot(yn),l=nn.dot(wo),c=yn.dot(yn),h=yn.dot(wo),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,v=(s*h-a*l)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,xn.x),l.addScaledVector(s,xn.y),l.addScaledVector(a,xn.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Ao.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Ao,o.x),s.addScaledVector(Co,o.y),s.addScaledVector(Ro,o.z),s}static isFrontFacing(e,t,n,r){return nn.subVectors(n,t),yn.subVectors(e,t),nn.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),nn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;vi.subVectors(r,n),_i.subVectors(o,n),Mo.subVectors(e,n);const l=vi.dot(Mo),c=_i.dot(Mo);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,r);const h=vi.dot(Eo),u=_i.dot(Eo);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(vi,s);To.subVectors(e,o);const m=vi.dot(To),v=_i.dot(To);if(v>=0&&m<=v)return t.copy(o);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(_i,a);const p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return Ca.subVectors(o,r),a=(u-h)/(u-h+(m-v)),t.copy(r).addScaledVector(Ca,a);const d=1/(p+y+f);return s=y*d,a=f*d,t.copy(n).addScaledVector(vi,s).addScaledVector(_i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Io(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=uh(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Io(s,o,e+1/3),this.g=Io(s,o,e),this.b=Io(s,o,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Yl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Qe.workingToColorSpace(Ct.copy(this),e),Math.round(ke(Ct.r*255,0,255))*65536+Math.round(ke(Ct.g*255,0,255))*256+Math.round(ke(Ct.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,o=Ct.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const h=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Wt){Qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(yr);const n=fo(In.h,yr.h,t),r=fo(In.s,yr.s,t),o=fo(In.l,yr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new He;He.NAMES=Yl;let Ih=0;class ai extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ri,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Zo,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ea extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new C,xr=new Re;let Dh=0;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Os,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),o=rt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Os&&(e.usage=this.usage),e}}class Lh extends Ht{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Hl extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gl extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nh=0;const Qt=new at,Do=new yt,yi=new C,kt=new zi,qi=new zi,wt=new C;class Kt extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?Gl:Hl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new $e().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];kt.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(kt.min,qi.min),kt.expandByPoint(wt),wt.addVectors(kt.max,qi.max),kt.expandByPoint(wt)):(kt.expandByPoint(qi.min),kt.expandByPoint(qi.max))}kt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)wt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wt.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(e,c),wt.add(yi)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new C,l[L]=new C;const c=new C,h=new C,u=new C,f=new Re,m=new Re,v=new Re,y=new C,p=new C;function d(L,P,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),f.fromBufferAttribute(o,L),m.fromBufferAttribute(o,P),v.fromBufferAttribute(o,x),h.sub(c),u.sub(c),m.sub(f),v.sub(f);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(R),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(R),a[L].add(y),a[P].add(y),a[x].add(y),l[L].add(p),l[P].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,P=M.length;L<P;++L){const x=M[L],R=x.start,Y=x.count;for(let X=R,q=R+Y;X<q;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new C,b=new C,N=new C,D=new C;function E(L){N.fromBufferAttribute(r,L),D.copy(N);const P=a[L];w.copy(P),w.sub(N.multiplyScalar(N.dot(P))).normalize(),b.crossVectors(D,P);const R=b.dot(l[L])<0?-1:1;s.setXYZW(L,w.x,w.y,w.z,R)}for(let L=0,P=M.length;L<P;++L){const x=M[L],R=x.start,Y=x.count;for(let X=R,q=R+Y;X<q;X+=3)E(e.getX(X+0)),E(e.getX(X+1)),E(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new C,o=new C,s=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,y),s.fromBufferAttribute(t,p),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*h;for(let d=0;d<h;d++)f[v++]=c[m++]}return new Ht(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new at,Vn=new oo,br=new ki,Ia=new C,Pr=new C,Sr=new C,wr=new C,Lo=new C,Mr=new C,Da=new C,Er=new C;class un extends yt{constructor(e=new Kt,t=new ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Mr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Lo.fromBufferAttribute(u,e),s?Mr.addScaledVector(Lo,h):Mr.addScaledVector(Lo.sub(t),h))}t.add(Mr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(o),Vn.copy(e.ray).recast(e.near),!(br.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(br,Ia)===null||Vn.origin.distanceToSquared(Ia)>(e.far-e.near)**2))&&(Ra.copy(o).invert(),Vn.copy(e.ray).applyMatrix4(Ra),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,y=f.length;v<y;v++){const p=f[v],d=s[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,N=w;b<N;b+=3){const D=a.getX(b),E=a.getX(b+1),L=a.getX(b+2);r=Tr(this,d,e,n,c,h,u,D,E,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,d=y;p<d;p+=3){const M=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);r=Tr(this,s,e,n,c,h,u,M,w,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,y=f.length;v<y;v++){const p=f[v],d=s[p.materialIndex],M=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,N=w;b<N;b+=3){const D=b,E=b+1,L=b+2;r=Tr(this,d,e,n,c,h,u,D,E,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=v,d=y;p<d;p+=3){const M=p,w=p+1,b=p+2;r=Tr(this,s,e,n,c,h,u,M,w,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Uh(i,e,t,n,r,o,s,a){let l;if(e.side===Bt?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===Bn,a),l===null)return null;Er.copy(a),Er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:i}}function Tr(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,wr);const h=Uh(i,e,t,n,Pr,Sr,wr,Da);if(h){const u=new C;qt.getBarycoord(Da,Pr,Sr,wr,u),r&&(h.uv=qt.getInterpolatedAttribute(r,a,l,c,u,new Re)),o&&(h.uv1=qt.getInterpolatedAttribute(o,a,l,c,u,new Re)),s&&(h.normal=qt.getInterpolatedAttribute(s,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};qt.getNormal(Pr,Sr,wr,f.normal),h.face=f,h.barycoord=u}return h}class Yi extends Kt{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],h=[],u=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,o,0),v("z","y","x",1,-1,n,t,-e,s,o,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(u,2));function v(y,p,d,M,w,b,N,D,E,L,P){const x=b/E,R=N/L,Y=b/2,X=N/2,q=D/2,V=E+1,Q=L+1;let Z=0,z=0;const le=new C;for(let ue=0;ue<Q;ue++){const we=ue*R-X;for(let ze=0;ze<V;ze++){const st=ze*x-Y;le[y]=st*M,le[p]=we*w,le[d]=q,c.push(le.x,le.y,le.z),le[y]=0,le[p]=0,le[d]=D>0?1:-1,h.push(le.x,le.y,le.z),u.push(ze/E),u.push(1-ue/L),Z+=1}}for(let ue=0;ue<L;ue++)for(let we=0;we<E;we++){const ze=f+we+V*ue,st=f+we+V*(ue+1),G=f+(we+1)+V*(ue+1),ne=f+(we+1)+V*ue;l.push(ze,st,ne),l.push(st,G,ne),z+=6}a.addGroup(m,z,P),m+=z,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Oi(i[t]);for(const r in n)e[r]=n[r]}return e}function Oh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const $h={clone:Oi,merge:Lt};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ql extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new C,La=new Re,Na=new Re;class Yt extends Ql{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,La,Na),t.subVectors(Na,La)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,bi=1;class Xh extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(xi,bi,e,t);r.layers=this.layers,this.add(r);const o=new Yt(xi,bi,e,t);o.layers=this.layers,this.add(o);const s=new Yt(xi,bi,e,t);s.layers=this.layers,this.add(s);const a=new Yt(xi,bi,e,t);a.layers=this.layers,this.add(a);const l=new Yt(xi,bi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(xi,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Wl extends Tt{constructor(e=[],t=Li,n,r,o,s,a,l,c,h){super(e,t,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Wl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yi(5,5,5),o=new pn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Mn});o.uniforms.tEquirect.value=t;const s=new un(r,o),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=on),new Xh(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}class Ar extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kh={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ql extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Os,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new C;class eo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),r=rt(r,this.array),o=rt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jl extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Pi;const ji=new C,Si=new C,wi=new C,Mi=new Re,Ki=new Re,Kl=new at,Cr=new C,Zi=new C,Rr=new C,Ua=new Re,Uo=new Re,Oa=new Re;class Hh extends yt{constructor(e=new jl){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yh(t,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new eo(n,3,0,!1)),Pi.setAttribute("uv",new eo(n,2,3,!1))}this.geometry=Pi,this.material=e,this.center=new Re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),Kl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-wi.z);const n=this.material.rotation;let r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));const s=this.center;Ir(Cr.set(-.5,-.5,0),wi,s,Si,r,o),Ir(Zi.set(.5,-.5,0),wi,s,Si,r,o),Ir(Rr.set(.5,.5,0),wi,s,Si,r,o),Ua.set(0,0),Uo.set(1,0),Oa.set(1,1);let a=e.ray.intersectTriangle(Cr,Zi,Rr,!1,ji);if(a===null&&(Ir(Zi.set(-.5,.5,0),wi,s,Si,r,o),Uo.set(0,1),a=e.ray.intersectTriangle(Cr,Rr,Zi,!1,ji),a===null))return;const l=e.ray.origin.distanceTo(ji);l<e.near||l>e.far||t.push({distance:l,point:ji.clone(),uv:qt.getInterpolation(ji,Cr,Zi,Rr,Ua,Uo,Oa,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ir(i,e,t,n,r,o){Mi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ki.x=o*Mi.x-r*Mi.y,Ki.y=r*Mi.x+o*Mi.y):Ki.copy(Mi),i.copy(e),i.x+=Ki.x,i.y+=Ki.y,i.applyMatrix4(Kl)}class Gh extends Tt{constructor(e=null,t=1,n=1,r,o,s,a,l,c=Ft,h=Ft,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oo=new C,Vh=new C,Qh=new $e;class Ln{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Oo.subVectors(n,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qh.getNormalMatrix(e),r=this.coplanarPoint(Oo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new ki,Dr=new C;class so{constructor(e=new Ln,t=new Ln,n=new Ln,r=new Ln,o=new Ln,s=new Ln){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],v=r[9],y=r[10],p=r[11],d=r[12],M=r[13],w=r[14],b=r[15];if(n[0].setComponents(l-o,f-c,p-m,b-d).normalize(),n[1].setComponents(l+o,f+c,p+m,b+d).normalize(),n[2].setComponents(l+s,f+h,p+v,b+M).normalize(),n[3].setComponents(l-s,f-h,p-v,b-M).normalize(),n[4].setComponents(l-a,f-u,p-y,b-w).normalize(),t===wn)n[5].setComponents(l+a,f+u,p+y,b+w).normalize();else if(t===Zr)n[5].setComponents(a,u,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new C,no=new C,$a=new at,Ji=new oo,Lr=new ki,$o=new C,Ba=new C;class Wh extends yt{constructor(e=new Kt,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)to.fromBufferAttribute(t,r-1),no.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=to.distanceTo(no);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Lr.radius+=o,e.ray.intersectsSphere(Lr)===!1)return;$a.copy(r).invert(),Ji.copy(e.ray).applyMatrix4($a);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,s.start),v=Math.min(h.count,s.start+s.count);for(let y=m,p=v-1;y<p;y+=c){const d=h.getX(y),M=h.getX(y+1),w=Nr(this,e,Ji,l,d,M,y);w&&t.push(w)}if(this.isLineLoop){const y=h.getX(v-1),p=h.getX(m),d=Nr(this,e,Ji,l,y,p,v-1);d&&t.push(d)}}else{const m=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let y=m,p=v-1;y<p;y+=c){const d=Nr(this,e,Ji,l,y,y+1,y);d&&t.push(d)}if(this.isLineLoop){const y=Nr(this,e,Ji,l,v-1,m,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Nr(i,e,t,n,r,o,s){const a=i.geometry.attributes.position;if(to.fromBufferAttribute(a,r),no.fromBufferAttribute(a,o),t.distanceSqToSegment(to,no,$o,Ba)>n)return;$o.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($o);if(!(c<e.near||c>e.far))return{distance:c,point:Ba.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Fa=new C,Xa=new C;class Zl extends Wh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Fa.fromBufferAttribute(t,r),Xa.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fa.distanceTo(Xa);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qh extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const za=new at,Fs=new oo,Ur=new ki,Or=new C;class jh extends yt{constructor(e=new Kt,t=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=o,e.ray.intersectsSphere(Ur)===!1)return;za.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(za);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let v=f,y=m;v<y;v++){const p=c.getX(v);Or.fromBufferAttribute(u,p),ka(Or,p,l,r,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let v=f,y=m;v<y;v++)Or.fromBufferAttribute(u,v),ka(Or,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ka(i,e,t,n,r,o,s){const a=Fs.distanceSqToPoint(i);if(a<t){const l=new C;Fs.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Jl extends Tt{constructor(e,t,n,r,o,s,a,l,c){super(e,t,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ec extends Tt{constructor(e,t,n=ii,r,o,s,a=Ft,l=Ft,c,h=sr,u=1){if(h!==sr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ao extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,m=[],v=[],y=[],p=[];for(let d=0;d<h;d++){const M=d*f-s;for(let w=0;w<c;w++){const b=w*u-o;v.push(b,-M,0),y.push(0,0,1),p.push(w/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const w=M+c*d,b=M+c*(d+1),N=M+1+c*(d+1),D=M+1+c*d;m.push(w,b,D),m.push(b,N,D)}this.setIndex(m),this.setAttribute("position",new an(v,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kh extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zh extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jh extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class na extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Bo=new at,Ya=new C,Ha=new C;class tc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Ha.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ha),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ga=new at,er=new C,Fo=new C;class ed extends tc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),n.position.copy(er),Fo.copy(n.position),Fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fo),n.updateMatrixWorld(),r.makeTranslation(-er.x,-er.y,-er.z),Ga.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga)}}class td extends na{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ed}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nc extends Ql{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nd extends tc{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class id extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new nd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rd extends na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class od extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Va{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sd extends Zl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Kt;r.setAttribute("position",new an(t,3)),r.setAttribute("color",new an(n,3));const o=new ta({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new He,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ad extends zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qa(i,e,t,n){const r=ld(n);switch(t){case Nl:return i*e;case Ol:return i*e/r.components*r.byteLength;case js:return i*e/r.components*r.byteLength;case $l:return i*e*2/r.components*r.byteLength;case Ks:return i*e*2/r.components*r.byteLength;case Ul:return i*e*3/r.components*r.byteLength;case jt:return i*e*4/r.components*r.byteLength;case Zs:return i*e*4/r.components*r.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ds:case fs:return Math.max(i,16)*Math.max(e,8)/4;case hs:case us:return Math.max(i,8)*Math.max(e,8)/2;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _s:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ws:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ms:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Es:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case As:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wr:case Is:case Ds:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bl:case Ls:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ns:case Us:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ld(i){switch(i){case fn:case Il:return{byteLength:1,components:1};case rr:case Dl:case lr:return{byteLength:2,components:1};case Ws:case qs:return{byteLength:2,components:4};case ii:case Qs:case Sn:return{byteLength:4,components:1};case Ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vs);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ic(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function cd(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<u.length;m++){const v=u[f],y=u[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,u[f]=y)}u.length=f+1;for(let m=0,v=u.length;m<v;m++){const y=u[m];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,au=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,du=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Su=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,If=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:hd,alphahash_pars_fragment:dd,alphamap_fragment:ud,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:vd,batching_pars_vertex:_d,batching_vertex:yd,begin_vertex:xd,beginnormal_vertex:bd,bsdfs:Pd,iridescence_fragment:Sd,bumpmap_pars_fragment:wd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:Cd,color_pars_fragment:Rd,color_pars_vertex:Id,color_vertex:Dd,common:Ld,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Od,displacementmap_vertex:$d,emissivemap_fragment:Bd,emissivemap_pars_fragment:Fd,colorspace_fragment:Xd,colorspace_pars_fragment:zd,envmap_fragment:kd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:nu,envmap_vertex:Vd,fog_vertex:Qd,fog_pars_vertex:Wd,fog_fragment:qd,fog_pars_fragment:jd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:eu,lights_pars_begin:tu,lights_toon_fragment:iu,lights_toon_pars_fragment:ru,lights_phong_fragment:ou,lights_phong_pars_fragment:su,lights_physical_fragment:au,lights_physical_pars_fragment:lu,lights_fragment_begin:cu,lights_fragment_maps:hu,lights_fragment_end:du,logdepthbuf_fragment:uu,logdepthbuf_pars_fragment:fu,logdepthbuf_pars_vertex:pu,logdepthbuf_vertex:mu,map_fragment:gu,map_pars_fragment:vu,map_particle_fragment:_u,map_particle_pars_fragment:yu,metalnessmap_fragment:xu,metalnessmap_pars_fragment:bu,morphinstance_vertex:Pu,morphcolor_vertex:Su,morphnormal_vertex:wu,morphtarget_pars_vertex:Mu,morphtarget_vertex:Eu,normal_fragment_begin:Tu,normal_fragment_maps:Au,normal_pars_fragment:Cu,normal_pars_vertex:Ru,normal_vertex:Iu,normalmap_pars_fragment:Du,clearcoat_normal_fragment_begin:Lu,clearcoat_normal_fragment_maps:Nu,clearcoat_pars_fragment:Uu,iridescence_pars_fragment:Ou,opaque_fragment:$u,packing:Bu,premultiplied_alpha_fragment:Fu,project_vertex:Xu,dithering_fragment:zu,dithering_pars_fragment:ku,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:Hu,shadowmap_pars_fragment:Gu,shadowmap_pars_vertex:Vu,shadowmap_vertex:Qu,shadowmask_pars_fragment:Wu,skinbase_vertex:qu,skinning_pars_vertex:ju,skinning_vertex:Ku,skinnormal_vertex:Zu,specularmap_fragment:Ju,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:rf,transmission_pars_fragment:of,uv_pars_fragment:sf,uv_pars_vertex:af,uv_vertex:lf,worldpos_vertex:cf,background_vert:hf,background_frag:df,backgroundCube_vert:uf,backgroundCube_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:vf,distanceRGBA_vert:_f,distanceRGBA_frag:yf,equirect_vert:xf,equirect_frag:bf,linedashed_vert:Pf,linedashed_frag:Sf,meshbasic_vert:wf,meshbasic_frag:Mf,meshlambert_vert:Ef,meshlambert_frag:Tf,meshmatcap_vert:Af,meshmatcap_frag:Cf,meshnormal_vert:Rf,meshnormal_frag:If,meshphong_vert:Df,meshphong_frag:Lf,meshphysical_vert:Nf,meshphysical_frag:Uf,meshtoon_vert:Of,meshtoon_frag:$f,points_vert:Bf,points_frag:Ff,shadow_vert:Xf,shadow_frag:zf,sprite_vert:kf,sprite_frag:Yf},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},hn={basic:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Lt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Lt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Lt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Lt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Lt([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};hn.physical={uniforms:Lt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const $r={r:0,b:0,g:0},Wn=new ln,Hf=new at;function Gf(i,e,t,n,r,o,s){const a=new He(0);let l=o===!0?0:1,c,h,u=null,f=0,m=null;function v(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function y(w){let b=!1;const N=v(w);N===null?d(a,l):N&&N.isColor&&(d(N,1),b=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,b){const N=v(b);N&&(N.isCubeTexture||N.mapping===ro)?(h===void 0&&(h=new un(new Yi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Oi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Wn.copy(b.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(Wn)),h.material.toneMapped=Qe.getTransfer(N.colorSpace)!==it,(u!==N||f!==N.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=N,f=N.version,m=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new un(new ao(2,2),new pn({name:"BackgroundMaterial",uniforms:Oi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(N.colorSpace)!==it,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(u!==N||f!==N.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=N,f=N.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,b){w.getRGB($r,Vl(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,b,s)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:y,addToRenderList:p,dispose:M}}function Vf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,s=!1;function a(x,R,Y,X,q){let V=!1;const Q=u(X,Y,R);o!==Q&&(o=Q,c(o.object)),V=m(x,X,Y,q),V&&v(x,X,Y,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,b(x,R,Y,X),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,Y){const X=Y.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let V=q[R.id];V===void 0&&(V={},q[R.id]=V);let Q=V[X];return Q===void 0&&(Q=f(l()),V[X]=Q),Q}function f(x){const R=[],Y=[],X=[];for(let q=0;q<t;q++)R[q]=0,Y[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:X,object:x,attributes:{},index:null}}function m(x,R,Y,X){const q=o.attributes,V=R.attributes;let Q=0;const Z=Y.getAttributes();for(const z in Z)if(Z[z].location>=0){const ue=q[z];let we=V[z];if(we===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(we=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(we=x.instanceColor)),ue===void 0||ue.attribute!==we||we&&ue.data!==we.data)return!0;Q++}return o.attributesNum!==Q||o.index!==X}function v(x,R,Y,X){const q={},V=R.attributes;let Q=0;const Z=Y.getAttributes();for(const z in Z)if(Z[z].location>=0){let ue=V[z];ue===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const we={};we.attribute=ue,ue&&ue.data&&(we.data=ue.data),q[z]=we,Q++}o.attributes=q,o.attributesNum=Q,o.index=X}function y(){const x=o.newAttributes;for(let R=0,Y=x.length;R<Y;R++)x[R]=0}function p(x){d(x,0)}function d(x,R){const Y=o.newAttributes,X=o.enabledAttributes,q=o.attributeDivisors;Y[x]=1,X[x]===0&&(i.enableVertexAttribArray(x),X[x]=1),q[x]!==R&&(i.vertexAttribDivisor(x,R),q[x]=R)}function M(){const x=o.newAttributes,R=o.enabledAttributes;for(let Y=0,X=R.length;Y<X;Y++)R[Y]!==x[Y]&&(i.disableVertexAttribArray(Y),R[Y]=0)}function w(x,R,Y,X,q,V,Q){Q===!0?i.vertexAttribIPointer(x,R,Y,q,V):i.vertexAttribPointer(x,R,Y,X,q,V)}function b(x,R,Y,X){y();const q=X.attributes,V=Y.getAttributes(),Q=R.defaultAttributeValues;for(const Z in V){const z=V[Z];if(z.location>=0){let le=q[Z];if(le===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){const ue=le.normalized,we=le.itemSize,ze=e.get(le);if(ze===void 0)continue;const st=ze.buffer,G=ze.type,ne=ze.bytesPerElement,be=G===i.INT||G===i.UNSIGNED_INT||le.gpuType===Qs;if(le.isInterleavedBufferAttribute){const ce=le.data,Pe=ce.stride,qe=le.offset;if(ce.isInstancedInterleavedBuffer){for(let De=0;De<z.locationSize;De++)d(z.location+De,ce.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<z.locationSize;De++)p(z.location+De);i.bindBuffer(i.ARRAY_BUFFER,st);for(let De=0;De<z.locationSize;De++)w(z.location+De,we/z.locationSize,G,ue,Pe*ne,(qe+we/z.locationSize*De)*ne,be)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)d(z.location+ce,le.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<z.locationSize;ce++)p(z.location+ce);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ce=0;ce<z.locationSize;ce++)w(z.location+ce,we/z.locationSize,G,ue,we*ne,we/z.locationSize*ce*ne,be)}}else if(Q!==void 0){const ue=Q[Z];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}M()}function N(){L();for(const x in n){const R=n[x];for(const Y in R){const X=R[Y];for(const q in X)h(X[q].object),delete X[q];delete R[Y]}delete n[x]}}function D(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const Y in R){const X=R[Y];for(const q in X)h(X[q].object),delete X[q];delete R[Y]}delete n[x.id]}function E(x){for(const R in n){const Y=n[R];if(Y[x.id]===void 0)continue;const X=Y[x.id];for(const q in X)h(X[q].object),delete X[q];delete Y[x.id]}}function L(){P(),s=!0,o!==r&&(o=r,c(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Qf(i,e,t){let n;function r(c){n=c}function o(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function s(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let y=0;y<u;y++)v+=h[y]*f[y];t.update(v,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wf(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==jt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const L=E===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==fn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Sn&&!L)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:N,maxSamples:D}}function qf(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new Ln,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const v=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||v===null||v.length===0||o&&!p)o?h(null):c();else{const M=o?0:n,w=M*4;let b=d.clippingState||null;l.value=b,b=h(v,f,w,m);for(let N=0;N!==w;++N)b[N]=t[N];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,v){const y=u!==null?u.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const d=m+y*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let w=0,b=m;w!==y;++w,b+=4)s.copy(u[w]).applyMatrix4(M,a),s.normal.toArray(p,b),p[b+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function jf(i){let e=new WeakMap;function t(s,a){return a===ss?s.mapping=Li:a===as&&(s.mapping=Ni),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===ss||a===as)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new zh(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ai=4,Wa=[.125,.215,.35,.446,.526,.582],Zn=20,Xo=new nc,qa=new He;let zo=null,ko=0,Yo=0,Ho=!1;const jn=(1+Math.sqrt(5))/2,Ei=1/jn,ja=[new C(-jn,Ei,0),new C(jn,Ei,0),new C(-Ei,0,jn),new C(Ei,0,jn),new C(0,jn,-Ei),new C(0,jn,Ei),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Kf=new C;class Ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,o={}){const{size:s=256,position:a=Kf}=o;zo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,ko,Yo),this._renderer.xr.enabled=Ho,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:lr,format:jt,colorSpace:Ui,depthBuffer:!1},r=Za(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zf(o)),this._blurMaterial=Jf(o,e,t)}return r}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,r,o){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(qa),u.toneMapping=Un,u.autoClear=!1;const v=new ea({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),y=new un(new Yi,v);let p=!1;const d=e.background;d?d.isColor&&(v.color.copy(d),e.background=null,p=!0):(v.color.copy(qa),p=!0);for(let M=0;M<6;M++){const w=M%3;w===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):w===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const b=this._cubeSize;Br(r,w*b,M>2?b:0,b,b),u.setRenderTarget(r),p&&u.render(y,l),u.render(e,l)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=m,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Li||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ja());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new un(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ja[(r-o-1)%ja.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new un(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),y=o/v,p=isFinite(o)?1+Math.floor(h*y):Zn;p>Zn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const d=[];let M=0;for(let E=0;E<Zn;++E){const L=E/y,P=Math.exp(-L*L/2);d.push(P),E===0?M+=P:E<p&&(M+=2*P)}for(let E=0;E<d.length;E++)d[E]=d[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=v,f.mipInt.value=w-n;const b=this._sizeLods[r],N=3*b*(r>w-Ai?r-w+Ai:0),D=4*(this._cubeSize-b);Br(t,N,D,3*b,2*b),l.setRenderTarget(t),l.render(u,Xo)}}function Zf(i){const e=[],t=[],n=[];let r=i;const o=i-Ai+1+Wa.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Ai?l=Wa[s-i+Ai-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,y=3,p=2,d=1,M=new Float32Array(y*v*m),w=new Float32Array(p*v*m),b=new Float32Array(d*v*m);for(let D=0;D<m;D++){const E=D%3*2/3-1,L=D>2?0:-1,P=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];M.set(P,y*v*D),w.set(f,p*v*D);const x=[D,D,D,D,D,D];b.set(x,d*v*D)}const N=new Kt;N.setAttribute("position",new Ht(M,y)),N.setAttribute("uv",new Ht(w,p)),N.setAttribute("faceIndex",new Ht(b,d)),e.push(N),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Za(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jf(i,e,t){const n=new Float32Array(Zn),r=new C(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ja(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function el(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ep(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ss||l===as,h=l===Li||l===Ni;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ka(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Ka(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ii("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function np(i,e,t,n){const r={},o=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,v=u.attributes.position;let y=0;if(m!==null){const M=m.array;y=m.version;for(let w=0,b=M.length;w<b;w+=3){const N=M[w+0],D=M[w+1],E=M[w+2];f.push(N,D,D,E,E,N)}}else if(v!==void 0){const M=v.array;y=v.version;for(let w=0,b=M.length/3-1;w<b;w+=3){const N=w+0,D=w+1,E=w+2;f.push(N,D,D,E,E,N)}}else return;const p=new(Xl(f)?Gl:Hl)(f,1);p.version=y;const d=o.get(u);d&&e.remove(d),o.set(u,p)}function h(u){const f=o.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ip(i,e,t){let n;function r(f){n=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,o,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,o,f*s,v),t.update(m,n,v))}function h(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];t.update(p,n,1)}function u(f,m,v,y){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/s,m[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,y,0,v);let d=0;for(let M=0;M<v;M++)d+=m[M]*y[M];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function op(i,e,t){const n=new WeakMap,r=new nt;function o(s,a,l){const c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),p===!0&&(b=3);let N=a.attributes.position.count*b,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const E=new Float32Array(N*D*4*u),L=new zl(E,N,D,u);L.type=Sn,L.needsUpdate=!0;const P=b*4;for(let R=0;R<u;R++){const Y=d[R],X=M[R],q=w[R],V=N*D*4*R;for(let Q=0;Q<Y.count;Q++){const Z=Q*P;v===!0&&(r.fromBufferAttribute(Y,Q),E[V+Z+0]=r.x,E[V+Z+1]=r.y,E[V+Z+2]=r.z,E[V+Z+3]=0),y===!0&&(r.fromBufferAttribute(X,Q),E[V+Z+4]=r.x,E[V+Z+5]=r.y,E[V+Z+6]=r.z,E[V+Z+7]=0),p===!0&&(r.fromBufferAttribute(q,Q),E[V+Z+8]=r.x,E[V+Z+9]=r.y,E[V+Z+10]=r.z,E[V+Z+11]=q.itemSize===4?r.w:1)}}f={count:u,texture:L,size:new Re(N,D)},n.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function sp(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const rc=new Tt,tl=new ec(1,1),oc=new zl,sc=new Sh,ac=new Wl,nl=[],il=[],rl=new Float32Array(16),ol=new Float32Array(9),sl=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=nl[r];if(o===void 0&&(o=new Float32Array(r),nl[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Pt(t,n))return;sl.set(n),i.uniformMatrix2fv(this.addr,!1,sl),St(t,n)}}function up(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Pt(t,n))return;ol.set(n),i.uniformMatrix3fv(this.addr,!1,ol),St(t,n)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Pt(t,n))return;rl.set(n),i.uniformMatrix4fv(this.addr,!1,rl),St(t,n)}}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function _p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=Fl,o=tl):o=rc,t.setTexture2D(e||o,r)}function Sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sc,r)}function wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ac,r)}function Mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||oc,r)}function Ep(i){switch(i){case 5126:return ap;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return dp;case 35675:return up;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return vp;case 5125:return _p;case 36294:return yp;case 36295:return xp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Mp}}function Tp(i,e){i.uniform1fv(this.addr,e)}function Ap(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Cp(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Rp(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Ip(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dp(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lp(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Np(i,e){i.uniform1iv(this.addr,e)}function Up(i,e){i.uniform2iv(this.addr,e)}function Op(i,e){i.uniform3iv(this.addr,e)}function $p(i,e){i.uniform4iv(this.addr,e)}function Bp(i,e){i.uniform1uiv(this.addr,e)}function Fp(i,e){i.uniform2uiv(this.addr,e)}function Xp(i,e){i.uniform3uiv(this.addr,e)}function zp(i,e){i.uniform4uiv(this.addr,e)}function kp(i,e,t){const n=this.cache,r=e.length,o=lo(t,r);Pt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||rc,o[s])}function Yp(i,e,t){const n=this.cache,r=e.length,o=lo(t,r);Pt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||sc,o[s])}function Hp(i,e,t){const n=this.cache,r=e.length,o=lo(t,r);Pt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||ac,o[s])}function Gp(i,e,t){const n=this.cache,r=e.length,o=lo(t,r);Pt(n,o)||(i.uniform1iv(this.addr,o),St(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||oc,o[s])}function Vp(i){switch(i){case 5126:return Tp;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Ip;case 35675:return Dp;case 35676:return Lp;case 5124:case 35670:return Np;case 35667:case 35671:return Up;case 35668:case 35672:return Op;case 35669:case 35673:return $p;case 5125:return Bp;case 36294:return Fp;case 36295:return Xp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}class Qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ep(t.type)}}class Wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function al(i,e){i.seq.push(e),i.map[e.id]=e}function jp(i,e,t){const n=i.name,r=n.length;for(Go.lastIndex=0;;){const o=Go.exec(n),s=Go.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){al(t,c===void 0?new Qp(a,i,e):new Wp(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new qp(a),al(t,u)),t=u}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);jp(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kp=37297;let Zp=0;function Jp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const cl=new $e;function em(i){Qe._getMatrix(cl,Qe.workingColorSpace,i);const e=`mat3( ${cl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Kr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Jp(i.getShaderSource(e),s)}else return r}function tm(i,e){const t=em(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nm(i,e){let t;switch(e){case Qc:t="Linear";break;case Wc:t="Reinhard";break;case qc:t="Cineon";break;case jc:t="ACESFilmic";break;case Zc:t="AgX";break;case Jc:t="Neutral";break;case Kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new C;function im(){Qe.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function om(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function nr(i){return i!==""}function dl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(i){return i.replace(am,cm)}const lm=new Map;function cm(i,e){let t=Fe[e];if(t===void 0){const n=lm.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xs(t)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(hm,dm)}function dm(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function pl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function um(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function fm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Ni:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function mm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Gc:e="ENVMAP_BLENDING_MIX";break;case Vc:e="ENVMAP_BLENDING_ADD";break}return e}function gm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vm(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=um(t),c=fm(t),h=pm(t),u=mm(t),f=gm(t),m=rm(t),v=om(o),y=r.createProgram();let p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(nr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(nr).join(`
`),d.length>0&&(d+=`
`)):(p=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),d=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Un?nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,tm("linearToOutputTexel",t.outputColorSpace),im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),s=Xs(s),s=dl(s,t),s=ul(s,t),a=Xs(a),a=dl(a,t),a=ul(a,t),s=fl(s),a=fl(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===$s?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=M+p+s,b=M+d+a,N=ll(r,r.VERTEX_SHADER,w),D=ll(r,r.FRAGMENT_SHADER,b);r.attachShader(y,N),r.attachShader(y,D),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function E(R){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(y).trim(),X=r.getShaderInfoLog(N).trim(),q=r.getShaderInfoLog(D).trim();let V=!0,Q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,N,D);else{const Z=hl(r,N,"vertex"),z=hl(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+Z+`
`+z)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||q==="")&&(Q=!1);Q&&(R.diagnostics={runnable:V,programLog:Y,vertexShader:{log:X,prefix:p},fragmentShader:{log:q,prefix:d}})}r.deleteShader(N),r.deleteShader(D),L=new jr(r,y),P=sm(r,y)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let P;this.getAttributes=function(){return P===void 0&&E(this),P};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Kp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=D,this}let _m=0;class ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xm(e),t.set(e,n)),n}}class xm{constructor(e){this.id=_m++,this.code=e,this.usedTimes=0}}function bm(i,e,t,n,r,o,s){const a=new kl,l=new ym,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(P){return c.add(P),P===0?"uv":`uv${P}`}function p(P,x,R,Y,X){const q=Y.fog,V=X.geometry,Q=P.isMeshStandardMaterial?Y.environment:null,Z=(P.isMeshStandardMaterial?t:e).get(P.envMap||Q),z=Z&&Z.mapping===ro?Z.image.height:null,le=v[P.type];P.precision!==null&&(m=r.getMaxPrecision(P.precision),m!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",m,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,we=ue!==void 0?ue.length:0;let ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let st,G,ne,be;if(le){const Je=hn[le];st=Je.vertexShader,G=Je.fragmentShader}else st=P.vertexShader,G=P.fragmentShader,l.update(P),ne=l.getVertexShaderID(P),be=l.getFragmentShaderID(P);const ce=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),qe=X.isInstancedMesh===!0,De=X.isBatchedMesh===!0,ut=!!P.map,ft=!!P.matcap,je=!!Z,T=!!P.aoMap,Rt=!!P.lightMap,Ke=!!P.bumpMap,lt=!!P.normalMap,_e=!!P.displacementMap,Ge=!!P.emissiveMap,Te=!!P.metalnessMap,Be=!!P.roughnessMap,xt=P.anisotropy>0,S=P.clearcoat>0,g=P.dispersion>0,$=P.iridescence>0,H=P.sheen>0,j=P.transmission>0,k=xt&&!!P.anisotropyMap,ye=S&&!!P.clearcoatMap,oe=S&&!!P.clearcoatNormalMap,ve=S&&!!P.clearcoatRoughnessMap,xe=$&&!!P.iridescenceMap,K=$&&!!P.iridescenceThicknessMap,he=H&&!!P.sheenColorMap,Ie=H&&!!P.sheenRoughnessMap,Ce=!!P.specularMap,ie=!!P.specularColorMap,Ue=!!P.specularIntensityMap,A=j&&!!P.transmissionMap,se=j&&!!P.thicknessMap,J=!!P.gradientMap,fe=!!P.alphaMap,ee=P.alphaTest>0,W=!!P.alphaHash,me=!!P.extensions;let Oe=Un;P.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const ct={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:st,fragmentShader:G,defines:P.defines,customVertexShaderID:ne,customFragmentShaderID:be,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:m,batching:De,batchingColor:De&&X._colorsTexture!==null,instancing:qe,instancingColor:qe&&X.instanceColor!==null,instancingMorph:qe&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ui,alphaToCoverage:!!P.alphaToCoverage,map:ut,matcap:ft,envMap:je,envMapMode:je&&Z.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:Rt,bumpMap:Ke,normalMap:lt,displacementMap:f&&_e,emissiveMap:Ge,normalMapObjectSpace:lt&&P.normalMapType===rh,normalMapTangentSpace:lt&&P.normalMapType===ih,metalnessMap:Te,roughnessMap:Be,anisotropy:xt,anisotropyMap:k,clearcoat:S,clearcoatMap:ye,clearcoatNormalMap:oe,clearcoatRoughnessMap:ve,dispersion:g,iridescence:$,iridescenceMap:xe,iridescenceThicknessMap:K,sheen:H,sheenColorMap:he,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:ie,specularIntensityMap:Ue,transmission:j,transmissionMap:A,thicknessMap:se,gradientMap:J,opaque:P.transparent===!1&&P.blending===Ri&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:ee,alphaHash:W,combine:P.combine,mapUv:ut&&y(P.map.channel),aoMapUv:T&&y(P.aoMap.channel),lightMapUv:Rt&&y(P.lightMap.channel),bumpMapUv:Ke&&y(P.bumpMap.channel),normalMapUv:lt&&y(P.normalMap.channel),displacementMapUv:_e&&y(P.displacementMap.channel),emissiveMapUv:Ge&&y(P.emissiveMap.channel),metalnessMapUv:Te&&y(P.metalnessMap.channel),roughnessMapUv:Be&&y(P.roughnessMap.channel),anisotropyMapUv:k&&y(P.anisotropyMap.channel),clearcoatMapUv:ye&&y(P.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(P.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(P.iridescenceMap.channel),iridescenceThicknessMapUv:K&&y(P.iridescenceThicknessMap.channel),sheenColorMapUv:he&&y(P.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&y(P.sheenRoughnessMap.channel),specularMapUv:Ce&&y(P.specularMap.channel),specularColorMapUv:ie&&y(P.specularColorMap.channel),specularIntensityMapUv:Ue&&y(P.specularIntensityMap.channel),transmissionMapUv:A&&y(P.transmissionMap.channel),thicknessMapUv:se&&y(P.thicknessMap.channel),alphaMapUv:fe&&y(P.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(lt||xt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(ut||fe),fog:!!q,useFog:P.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ut&&P.map.isVideoTexture===!0&&Qe.getTransfer(P.map.colorSpace)===it,decodeVideoTextureEmissive:Ge&&P.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(P.emissiveMap.colorSpace)===it,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Pn,flipSided:P.side===Bt,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:me&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&P.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function d(P){const x=[];if(P.shaderID?x.push(P.shaderID):(x.push(P.customVertexShaderID),x.push(P.customFragmentShaderID)),P.defines!==void 0)for(const R in P.defines)x.push(R),x.push(P.defines[R]);return P.isRawShaderMaterial===!1&&(M(x,P),w(x,P),x.push(i.outputColorSpace)),x.push(P.customProgramCacheKey),x.join()}function M(P,x){P.push(x.precision),P.push(x.outputColorSpace),P.push(x.envMapMode),P.push(x.envMapCubeUVHeight),P.push(x.mapUv),P.push(x.alphaMapUv),P.push(x.lightMapUv),P.push(x.aoMapUv),P.push(x.bumpMapUv),P.push(x.normalMapUv),P.push(x.displacementMapUv),P.push(x.emissiveMapUv),P.push(x.metalnessMapUv),P.push(x.roughnessMapUv),P.push(x.anisotropyMapUv),P.push(x.clearcoatMapUv),P.push(x.clearcoatNormalMapUv),P.push(x.clearcoatRoughnessMapUv),P.push(x.iridescenceMapUv),P.push(x.iridescenceThicknessMapUv),P.push(x.sheenColorMapUv),P.push(x.sheenRoughnessMapUv),P.push(x.specularMapUv),P.push(x.specularColorMapUv),P.push(x.specularIntensityMapUv),P.push(x.transmissionMapUv),P.push(x.thicknessMapUv),P.push(x.combine),P.push(x.fogExp2),P.push(x.sizeAttenuation),P.push(x.morphTargetsCount),P.push(x.morphAttributeCount),P.push(x.numDirLights),P.push(x.numPointLights),P.push(x.numSpotLights),P.push(x.numSpotLightMaps),P.push(x.numHemiLights),P.push(x.numRectAreaLights),P.push(x.numDirLightShadows),P.push(x.numPointLightShadows),P.push(x.numSpotLightShadows),P.push(x.numSpotLightShadowsWithMaps),P.push(x.numLightProbes),P.push(x.shadowMapType),P.push(x.toneMapping),P.push(x.numClippingPlanes),P.push(x.numClipIntersection),P.push(x.depthPacking)}function w(P,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),P.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),P.push(a.mask)}function b(P){const x=v[P.type];let R;if(x){const Y=hn[x];R=$h.clone(Y.uniforms)}else R=P.uniforms;return R}function N(P,x){let R;for(let Y=0,X=h.length;Y<X;Y++){const q=h[Y];if(q.cacheKey===x){R=q,++R.usedTimes;break}}return R===void 0&&(R=new vm(i,x,P,o),h.push(R)),R}function D(P){if(--P.usedTimes===0){const x=h.indexOf(P);h[x]=h[h.length-1],h.pop(),P.destroy()}}function E(P){l.remove(P)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:N,releaseProgram:D,releaseShaderCache:E,programs:h,dispose:L}}function Pm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Sm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gl(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(u,f,m,v,y,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:y,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=y,d.group=p),e++,d}function a(u,f,m,v,y,p){const d=s(u,f,m,v,y,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,f,m,v,y,p){const d=s(u,f,m,v,y,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Sm),n.length>1&&n.sort(f||ml),r.length>1&&r.sort(f||ml)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:h,sort:c}}function wm(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new gl,i.set(n,[s])):r>=o.length?(s=new gl,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new He};break;case"SpotLight":t={position:new C,direction:new C,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Em(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tm=0;function Am(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cm(i){const e=new Mm,t=Em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,o=new at,s=new at;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let m=0,v=0,y=0,p=0,d=0,M=0,w=0,b=0,N=0,D=0,E=0;c.sort(Am);for(let P=0,x=c.length;P<x;P++){const R=c[P],Y=R.color,X=R.intensity,q=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=Y.r*X,u+=Y.g*X,f+=Y.b*X;else if(R.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(R.sh.coefficients[Q],X);E++}else if(R.isDirectionalLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=Q,m++}else if(R.isSpotLight){const Q=e.get(R);Q.position.setFromMatrixPosition(R.matrixWorld),Q.color.copy(Y).multiplyScalar(X),Q.distance=q,Q.coneCos=Math.cos(R.angle),Q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Q.decay=R.decay,n.spot[y]=Q;const Z=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,Z.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[y]=Z.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=V,b++}y++}else if(R.isRectAreaLight){const Q=e.get(R);Q.color.copy(Y).multiplyScalar(X),Q.halfWidth.set(R.width*.5,0,0),Q.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=Q,p++}else if(R.isPointLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),Q.distance=R.distance,Q.decay=R.decay,R.castShadow){const Z=R.shadow,z=t.get(R);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[v]=z,n.pointShadowMap[v]=V,n.pointShadowMatrix[v]=R.shadow.matrix,w++}n.point[v]=Q,v++}else if(R.isHemisphereLight){const Q=e.get(R);Q.skyColor.copy(R.color).multiplyScalar(X),Q.groundColor.copy(R.groundColor).multiplyScalar(X),n.hemi[d]=Q,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==b||L.numSpotMaps!==N||L.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+N-D,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=E,L.directionalLength=m,L.pointLength=v,L.spotLength=y,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=b,L.numSpotMaps=N,L.numLightProbes=E,n.version=Tm++)}function l(c,h){let u=0,f=0,m=0,v=0,y=0;const p=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const w=c[d];if(w.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(w.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),s.identity(),o.copy(w.matrixWorld),o.premultiply(p),s.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(w.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function vl(i){const e=new Cm(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function o(h){t.push(h)}function s(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Rm(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new vl(i),e.set(r,[a])):o>=s.length?(a=new vl(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lm(i,e,t){let n=new so;const r=new Re,o=new Re,s=new nt,a=new Zh({depthPacking:nh}),l=new Jh,c={},h=t.maxTextureSize,u={[Bn]:Bt,[Bt]:Bn,[Pn]:Pn},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Im,fragmentShader:Dm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Kt;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new un(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let d=this.type;this.render=function(D,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const P=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Mn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const X=d!==bn&&this.type===bn,q=d===bn&&this.type!==bn;for(let V=0,Q=D.length;V<Q;V++){const Z=D[V],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const le=z.getFrameExtents();if(r.multiply(le),o.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/le.x),r.x=o.x*le.x,z.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/le.y),r.y=o.y*le.y,z.mapSize.y=o.y)),z.map===null||X===!0||q===!0){const we=this.type!==bn?{minFilter:Ft,magFilter:Ft}:{};z.map!==null&&z.map.dispose(),z.map=new Fn(r.x,r.y,we),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let we=0;we<ue;we++){const ze=z.getViewport(we);s.set(o.x*ze.x,o.y*ze.y,o.x*ze.z,o.y*ze.w),Y.viewport(s),z.updateMatrices(Z,we),n=z.getFrustum(),b(E,L,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===bn&&M(z,L),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(P,x,R)};function M(D,E){const L=e.update(y);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Fn(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(E,null,L,f,y,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(E,null,L,m,y,null)}function w(D,E,L,P){let x=null;const R=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)x=R;else if(x=L.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const Y=x.uuid,X=E.uuid;let q=c[Y];q===void 0&&(q={},c[Y]=q);let V=q[X];V===void 0&&(V=x.clone(),q[X]=V,E.addEventListener("dispose",N)),x=V}if(x.visible=E.visible,x.wireframe=E.wireframe,P===bn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=i.properties.get(x);Y.light=L}return x}function b(D,E,L,P,x){if(D.visible===!1)return;if(D.layers.test(E.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===bn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const X=e.update(D),q=D.material;if(Array.isArray(q)){const V=X.groups;for(let Q=0,Z=V.length;Q<Z;Q++){const z=V[Q],le=q[z.materialIndex];if(le&&le.visible){const ue=w(D,le,P,x);D.onBeforeShadow(i,D,E,L,X,ue,z),i.renderBufferDirect(L,null,X,ue,D,z),D.onAfterShadow(i,D,E,L,X,ue,z)}}}else if(q.visible){const V=w(D,q,P,x);D.onBeforeShadow(i,D,E,L,X,V,null),i.renderBufferDirect(L,null,X,V,D,null),D.onAfterShadow(i,D,E,L,X,V,null)}}const Y=D.children;for(let X=0,q=Y.length;X<q;X++)b(Y[X],E,L,P,x)}function N(D){D.target.removeEventListener("dispose",N);for(const L in c){const P=c[L],x=D.target.uuid;x in P&&(P[x].dispose(),delete P[x])}}}const Nm={[Jo]:es,[ts]:rs,[ns]:os,[ni]:is,[es]:Jo,[rs]:ts,[os]:ns,[is]:ni};function Um(i,e){function t(){let A=!1;const se=new nt;let J=null;const fe=new nt(0,0,0,0);return{setMask:function(ee){J!==ee&&!A&&(i.colorMask(ee,ee,ee,ee),J=ee)},setLocked:function(ee){A=ee},setClear:function(ee,W,me,Oe,ct){ct===!0&&(ee*=Oe,W*=Oe,me*=Oe),se.set(ee,W,me,Oe),fe.equals(se)===!1&&(i.clearColor(ee,W,me,Oe),fe.copy(se))},reset:function(){A=!1,J=null,fe.set(-1,0,0,0)}}}function n(){let A=!1,se=!1,J=null,fe=null,ee=null;return{setReversed:function(W){if(se!==W){const me=e.get("EXT_clip_control");W?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),se=W;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(W){W?ce(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(W){J!==W&&!A&&(i.depthMask(W),J=W)},setFunc:function(W){if(se&&(W=Nm[W]),fe!==W){switch(W){case Jo:i.depthFunc(i.NEVER);break;case es:i.depthFunc(i.ALWAYS);break;case ts:i.depthFunc(i.LESS);break;case ni:i.depthFunc(i.LEQUAL);break;case ns:i.depthFunc(i.EQUAL);break;case is:i.depthFunc(i.GEQUAL);break;case rs:i.depthFunc(i.GREATER);break;case os:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=W}},setLocked:function(W){A=W},setClear:function(W){ee!==W&&(se&&(W=1-W),i.clearDepth(W),ee=W)},reset:function(){A=!1,J=null,fe=null,ee=null,se=!1}}}function r(){let A=!1,se=null,J=null,fe=null,ee=null,W=null,me=null,Oe=null,ct=null;return{setTest:function(Je){A||(Je?ce(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Je){se!==Je&&!A&&(i.stencilMask(Je),se=Je)},setFunc:function(Je,Zt,mn){(J!==Je||fe!==Zt||ee!==mn)&&(i.stencilFunc(Je,Zt,mn),J=Je,fe=Zt,ee=mn)},setOp:function(Je,Zt,mn){(W!==Je||me!==Zt||Oe!==mn)&&(i.stencilOp(Je,Zt,mn),W=Je,me=Zt,Oe=mn)},setLocked:function(Je){A=Je},setClear:function(Je){ct!==Je&&(i.clearStencil(Je),ct=Je)},reset:function(){A=!1,se=null,J=null,fe=null,ee=null,W=null,me=null,Oe=null,ct=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],v=null,y=!1,p=null,d=null,M=null,w=null,b=null,N=null,D=null,E=new He(0,0,0),L=0,P=!1,x=null,R=null,Y=null,X=null,q=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Z=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),Q=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Q=Z>=2);let le=null,ue={};const we=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),st=new nt().fromArray(we),G=new nt().fromArray(ze);function ne(A,se,J,fe){const ee=new Uint8Array(4),W=i.createTexture();i.bindTexture(A,W),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<J;me++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(se+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return W}const be={};be[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),s.setFunc(ni),Ke(!1),lt(pa),ce(i.CULL_FACE),T(Mn);function ce(A){h[A]!==!0&&(i.enable(A),h[A]=!0)}function Pe(A){h[A]!==!1&&(i.disable(A),h[A]=!1)}function qe(A,se){return u[A]!==se?(i.bindFramebuffer(A,se),u[A]=se,A===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),A===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function De(A,se){let J=m,fe=!1;if(A){J=f.get(se),J===void 0&&(J=[],f.set(se,J));const ee=A.textures;if(J.length!==ee.length||J[0]!==i.COLOR_ATTACHMENT0){for(let W=0,me=ee.length;W<me;W++)J[W]=i.COLOR_ATTACHMENT0+W;J.length=ee.length,fe=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,fe=!0);fe&&i.drawBuffers(J)}function ut(A){return v!==A?(i.useProgram(A),v=A,!0):!1}const ft={[Kn]:i.FUNC_ADD,[Ac]:i.FUNC_SUBTRACT,[Cc]:i.FUNC_REVERSE_SUBTRACT};ft[Rc]=i.MIN,ft[Ic]=i.MAX;const je={[Dc]:i.ZERO,[Lc]:i.ONE,[Nc]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[Xc]:i.SRC_ALPHA_SATURATE,[Bc]:i.DST_COLOR,[Oc]:i.DST_ALPHA,[Uc]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[$c]:i.ONE_MINUS_DST_ALPHA,[zc]:i.CONSTANT_COLOR,[kc]:i.ONE_MINUS_CONSTANT_COLOR,[Yc]:i.CONSTANT_ALPHA,[Hc]:i.ONE_MINUS_CONSTANT_ALPHA};function T(A,se,J,fe,ee,W,me,Oe,ct,Je){if(A===Mn){y===!0&&(Pe(i.BLEND),y=!1);return}if(y===!1&&(ce(i.BLEND),y=!0),A!==Tc){if(A!==p||Je!==P){if((d!==Kn||b!==Kn)&&(i.blendEquation(i.FUNC_ADD),d=Kn,b=Kn),Je)switch(A){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}M=null,w=null,N=null,D=null,E.set(0,0,0),L=0,p=A,P=Je}return}ee=ee||se,W=W||J,me=me||fe,(se!==d||ee!==b)&&(i.blendEquationSeparate(ft[se],ft[ee]),d=se,b=ee),(J!==M||fe!==w||W!==N||me!==D)&&(i.blendFuncSeparate(je[J],je[fe],je[W],je[me]),M=J,w=fe,N=W,D=me),(Oe.equals(E)===!1||ct!==L)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ct),E.copy(Oe),L=ct),p=A,P=!1}function Rt(A,se){A.side===Pn?Pe(i.CULL_FACE):ce(i.CULL_FACE);let J=A.side===Bt;se&&(J=!J),Ke(J),A.blending===Ri&&A.transparent===!1?T(Mn):T(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),o.setMask(A.colorWrite);const fe=A.stencilWrite;a.setTest(fe),fe&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ge(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(A){x!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),x=A)}function lt(A){A!==Mc?(ce(i.CULL_FACE),A!==R&&(A===pa?i.cullFace(i.BACK):A===Ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),R=A}function _e(A){A!==Y&&(Q&&i.lineWidth(A),Y=A)}function Ge(A,se,J){A?(ce(i.POLYGON_OFFSET_FILL),(X!==se||q!==J)&&(i.polygonOffset(se,J),X=se,q=J)):Pe(i.POLYGON_OFFSET_FILL)}function Te(A){A?ce(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Be(A){A===void 0&&(A=i.TEXTURE0+V-1),le!==A&&(i.activeTexture(A),le=A)}function xt(A,se,J){J===void 0&&(le===null?J=i.TEXTURE0+V-1:J=le);let fe=ue[J];fe===void 0&&(fe={type:void 0,texture:void 0},ue[J]=fe),(fe.type!==A||fe.texture!==se)&&(le!==J&&(i.activeTexture(J),le=J),i.bindTexture(A,se||be[A]),fe.type=A,fe.texture=se)}function S(){const A=ue[le];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{i.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{i.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{i.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{i.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{i.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{i.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(A){st.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),st.copy(A))}function Ie(A){G.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),G.copy(A))}function Ce(A,se){let J=c.get(se);J===void 0&&(J=new WeakMap,c.set(se,J));let fe=J.get(A);fe===void 0&&(fe=i.getUniformBlockIndex(se,A.name),J.set(A,fe))}function ie(A,se){const fe=c.get(se).get(A);l.get(se)!==fe&&(i.uniformBlockBinding(se,fe,A.__bindingPointIndex),l.set(se,fe))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ue={},u={},f=new WeakMap,m=[],v=null,y=!1,p=null,d=null,M=null,w=null,b=null,N=null,D=null,E=new He(0,0,0),L=0,P=!1,x=null,R=null,Y=null,X=null,q=null,st.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ce,disable:Pe,bindFramebuffer:qe,drawBuffers:De,useProgram:ut,setBlending:T,setMaterial:Rt,setFlipSided:Ke,setCullFace:lt,setLineWidth:_e,setPolygonOffset:Ge,setScissorTest:Te,activeTexture:Be,bindTexture:xt,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:$,texImage2D:xe,texImage3D:K,updateUBOMapping:Ce,uniformBlockBinding:ie,texStorage2D:oe,texStorage3D:ve,texSubImage2D:H,texSubImage3D:j,compressedTexSubImage2D:k,compressedTexSubImage3D:ye,scissor:he,viewport:Ie,reset:Ue}}function Om(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,g){return m?new OffscreenCanvas(S,g):Jr("canvas")}function y(S,g,$){let H=1;const j=xt(S);if((j.width>$||j.height>$)&&(H=$/Math.max(j.width,j.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(H*j.width),ye=Math.floor(H*j.height);u===void 0&&(u=v(k,ye));const oe=g?v(k,ye):u;return oe.width=k,oe.height=ye,oe.getContext("2d").drawImage(S,0,0,k,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+k+"x"+ye+")."),oe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function p(S){return S.generateMipmaps}function d(S){i.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(S,g,$,H,j=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=g;if(g===i.RED&&($===i.FLOAT&&(k=i.R32F),$===i.HALF_FLOAT&&(k=i.R16F),$===i.UNSIGNED_BYTE&&(k=i.R8)),g===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(k=i.R8UI),$===i.UNSIGNED_SHORT&&(k=i.R16UI),$===i.UNSIGNED_INT&&(k=i.R32UI),$===i.BYTE&&(k=i.R8I),$===i.SHORT&&(k=i.R16I),$===i.INT&&(k=i.R32I)),g===i.RG&&($===i.FLOAT&&(k=i.RG32F),$===i.HALF_FLOAT&&(k=i.RG16F),$===i.UNSIGNED_BYTE&&(k=i.RG8)),g===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(k=i.RG8UI),$===i.UNSIGNED_SHORT&&(k=i.RG16UI),$===i.UNSIGNED_INT&&(k=i.RG32UI),$===i.BYTE&&(k=i.RG8I),$===i.SHORT&&(k=i.RG16I),$===i.INT&&(k=i.RG32I)),g===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(k=i.RGB8UI),$===i.UNSIGNED_SHORT&&(k=i.RGB16UI),$===i.UNSIGNED_INT&&(k=i.RGB32UI),$===i.BYTE&&(k=i.RGB8I),$===i.SHORT&&(k=i.RGB16I),$===i.INT&&(k=i.RGB32I)),g===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),$===i.UNSIGNED_INT&&(k=i.RGBA32UI),$===i.BYTE&&(k=i.RGBA8I),$===i.SHORT&&(k=i.RGBA16I),$===i.INT&&(k=i.RGBA32I)),g===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),g===i.RGBA){const ye=j?Kr:Qe.getTransfer(H);$===i.FLOAT&&(k=i.RGBA32F),$===i.HALF_FLOAT&&(k=i.RGBA16F),$===i.UNSIGNED_BYTE&&(k=ye===it?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function b(S,g){let $;return S?g===null||g===ii||g===or?$=i.DEPTH24_STENCIL8:g===Sn?$=i.DEPTH32F_STENCIL8:g===rr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ii||g===or?$=i.DEPTH_COMPONENT24:g===Sn?$=i.DEPTH_COMPONENT32F:g===rr&&($=i.DEPTH_COMPONENT16),$}function N(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ft&&S.minFilter!==on?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function D(S){const g=S.target;g.removeEventListener("dispose",D),L(g),g.isVideoTexture&&h.delete(g)}function E(S){const g=S.target;g.removeEventListener("dispose",E),x(g)}function L(S){const g=n.get(S);if(g.__webglInit===void 0)return;const $=S.source,H=f.get($);if(H){const j=H[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(S),Object.keys(H).length===0&&f.delete($)}n.remove(S)}function P(S){const g=n.get(S);i.deleteTexture(g.__webglTexture);const $=S.source,H=f.get($);delete H[g.__cacheKey],s.memory.textures--}function x(S){const g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let j=0;j<g.__webglFramebuffer[H].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[H][j]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const $=S.textures;for(let H=0,j=$.length;H<j;H++){const k=n.get($[H]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),s.memory.textures--),n.remove($[H])}n.remove(S)}let R=0;function Y(){R=0}function X(){const S=R;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),R+=1,S}function q(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function V(S,g){const $=n.get(S);if(S.isVideoTexture&&Te(S),S.isRenderTargetTexture===!1&&S.version>0&&$.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be($,S,g);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+g)}function Q(S,g){const $=n.get(S);if(S.version>0&&$.__version!==S.version){be($,S,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+g)}function Z(S,g){const $=n.get(S);if(S.version>0&&$.__version!==S.version){be($,S,g);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+g)}function z(S,g){const $=n.get(S);if(S.version>0&&$.__version!==S.version){ce($,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+g)}const le={[ls]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[cs]:i.MIRRORED_REPEAT},ue={[Ft]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},we={[oh]:i.NEVER,[dh]:i.ALWAYS,[sh]:i.LESS,[Fl]:i.LEQUAL,[ah]:i.EQUAL,[hh]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function ze(S,g){if(g.type===Sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===on||g.magFilter===uo||g.magFilter===dr||g.magFilter===ei||g.minFilter===on||g.minFilter===uo||g.minFilter===dr||g.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,le[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,le[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,le[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ue[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ft||g.minFilter!==dr&&g.minFilter!==ei||g.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function st(S,g){let $=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",D));const H=g.source;let j=f.get(H);j===void 0&&(j={},f.set(H,j));const k=q(g);if(k!==S.__cacheKey){j[k]===void 0&&(j[k]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),j[k].usedTimes++;const ye=j[S.__cacheKey];ye!==void 0&&(j[S.__cacheKey].usedTimes--,ye.usedTimes===0&&P(g)),S.__cacheKey=k,S.__webglTexture=j[k].texture}return $}function G(S,g,$){return Math.floor(Math.floor(S/$)/g)}function ne(S,g,$,H){const k=S.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,$,H,g.data);else{k.sort((K,he)=>K.start-he.start);let ye=0;for(let K=1;K<k.length;K++){const he=k[ye],Ie=k[K],Ce=he.start+he.count,ie=G(Ie.start,g.width,4),Ue=G(he.start,g.width,4);Ie.start<=Ce+1&&ie===Ue&&G(Ie.start+Ie.count-1,g.width,4)===ie?he.count=Math.max(he.count,Ie.start+Ie.count-he.start):(++ye,k[ye]=Ie)}k.length=ye+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let K=0,he=k.length;K<he;K++){const Ie=k[K],Ce=Math.floor(Ie.start/4),ie=Math.ceil(Ie.count/4),Ue=Ce%g.width,A=Math.floor(Ce/g.width),se=ie,J=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,A),t.texSubImage2D(i.TEXTURE_2D,0,Ue,A,se,J,$,H,g.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function be(S,g,$){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const j=st(S,g),k=g.source;t.bindTexture(H,S.__webglTexture,i.TEXTURE0+$);const ye=n.get(k);if(k.version!==ye.__version||j===!0){t.activeTexture(i.TEXTURE0+$);const oe=Qe.getPrimaries(Qe.workingColorSpace),ve=g.colorSpace===Nn?null:Qe.getPrimaries(g.colorSpace),xe=g.colorSpace===Nn||oe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let K=y(g.image,!1,r.maxTextureSize);K=Be(g,K);const he=o.convert(g.format,g.colorSpace),Ie=o.convert(g.type);let Ce=w(g.internalFormat,he,Ie,g.colorSpace,g.isVideoTexture);ze(H,g);let ie;const Ue=g.mipmaps,A=g.isVideoTexture!==!0,se=ye.__version===void 0||j===!0,J=k.dataReady,fe=N(g,K);if(g.isDepthTexture)Ce=b(g.format===ar,g.type),se&&(A?t.texStorage2D(i.TEXTURE_2D,1,Ce,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ce,K.width,K.height,0,he,Ie,null));else if(g.isDataTexture)if(Ue.length>0){A&&se&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,Ue[0].width,Ue[0].height);for(let ee=0,W=Ue.length;ee<W;ee++)ie=Ue[ee],A?J&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ie.width,ie.height,he,Ie,ie.data):t.texImage2D(i.TEXTURE_2D,ee,Ce,ie.width,ie.height,0,he,Ie,ie.data);g.generateMipmaps=!1}else A?(se&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,K.width,K.height),J&&ne(g,K,he,Ie)):t.texImage2D(i.TEXTURE_2D,0,Ce,K.width,K.height,0,he,Ie,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){A&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ce,Ue[0].width,Ue[0].height,K.depth);for(let ee=0,W=Ue.length;ee<W;ee++)if(ie=Ue[ee],g.format!==jt)if(he!==null)if(A){if(J)if(g.layerUpdates.size>0){const me=Qa(ie.width,ie.height,g.format,g.type);for(const Oe of g.layerUpdates){const ct=ie.data.subarray(Oe*me/ie.data.BYTES_PER_ELEMENT,(Oe+1)*me/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Oe,ie.width,ie.height,1,he,ct)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ie.width,ie.height,K.depth,he,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ce,ie.width,ie.height,K.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ie.width,ie.height,K.depth,he,Ie,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ce,ie.width,ie.height,K.depth,0,he,Ie,ie.data)}else{A&&se&&t.texStorage2D(i.TEXTURE_2D,fe,Ce,Ue[0].width,Ue[0].height);for(let ee=0,W=Ue.length;ee<W;ee++)ie=Ue[ee],g.format!==jt?he!==null?A?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ie.width,ie.height,he,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ce,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?J&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ie.width,ie.height,he,Ie,ie.data):t.texImage2D(i.TEXTURE_2D,ee,Ce,ie.width,ie.height,0,he,Ie,ie.data)}else if(g.isDataArrayTexture)if(A){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Ce,K.width,K.height,K.depth),J)if(g.layerUpdates.size>0){const ee=Qa(K.width,K.height,g.format,g.type);for(const W of g.layerUpdates){const me=K.data.subarray(W*ee/K.data.BYTES_PER_ELEMENT,(W+1)*ee/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,K.width,K.height,1,he,Ie,me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,he,Ie,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,K.width,K.height,K.depth,0,he,Ie,K.data);else if(g.isData3DTexture)A?(se&&t.texStorage3D(i.TEXTURE_3D,fe,Ce,K.width,K.height,K.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,he,Ie,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,K.width,K.height,K.depth,0,he,Ie,K.data);else if(g.isFramebufferTexture){if(se)if(A)t.texStorage2D(i.TEXTURE_2D,fe,Ce,K.width,K.height);else{let ee=K.width,W=K.height;for(let me=0;me<fe;me++)t.texImage2D(i.TEXTURE_2D,me,Ce,ee,W,0,he,Ie,null),ee>>=1,W>>=1}}else if(Ue.length>0){if(A&&se){const ee=xt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,fe,Ce,ee.width,ee.height)}for(let ee=0,W=Ue.length;ee<W;ee++)ie=Ue[ee],A?J&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he,Ie,ie):t.texImage2D(i.TEXTURE_2D,ee,Ce,he,Ie,ie);g.generateMipmaps=!1}else if(A){if(se){const ee=xt(K);t.texStorage2D(i.TEXTURE_2D,fe,Ce,ee.width,ee.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ie,K)}else t.texImage2D(i.TEXTURE_2D,0,Ce,he,Ie,K);p(g)&&d(H),ye.__version=k.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ce(S,g,$){if(g.image.length!==6)return;const H=st(S,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+$);const k=n.get(j);if(j.version!==k.__version||H===!0){t.activeTexture(i.TEXTURE0+$);const ye=Qe.getPrimaries(Qe.workingColorSpace),oe=g.colorSpace===Nn?null:Qe.getPrimaries(g.colorSpace),ve=g.colorSpace===Nn||ye===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,K=g.image[0]&&g.image[0].isDataTexture,he=[];for(let W=0;W<6;W++)!xe&&!K?he[W]=y(g.image[W],!0,r.maxCubemapSize):he[W]=K?g.image[W].image:g.image[W],he[W]=Be(g,he[W]);const Ie=he[0],Ce=o.convert(g.format,g.colorSpace),ie=o.convert(g.type),Ue=w(g.internalFormat,Ce,ie,g.colorSpace),A=g.isVideoTexture!==!0,se=k.__version===void 0||H===!0,J=j.dataReady;let fe=N(g,Ie);ze(i.TEXTURE_CUBE_MAP,g);let ee;if(xe){A&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ue,Ie.width,Ie.height);for(let W=0;W<6;W++){ee=he[W].mipmaps;for(let me=0;me<ee.length;me++){const Oe=ee[me];g.format!==jt?Ce!==null?A?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,0,0,Oe.width,Oe.height,Ce,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,Ue,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,0,0,Oe.width,Oe.height,Ce,ie,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me,Ue,Oe.width,Oe.height,0,Ce,ie,Oe.data)}}}else{if(ee=g.mipmaps,A&&se){ee.length>0&&fe++;const W=xt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ue,W.width,W.height)}for(let W=0;W<6;W++)if(K){A?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,he[W].width,he[W].height,Ce,ie,he[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ue,he[W].width,he[W].height,0,Ce,ie,he[W].data);for(let me=0;me<ee.length;me++){const ct=ee[me].image[W].image;A?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,0,0,ct.width,ct.height,Ce,ie,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,Ue,ct.width,ct.height,0,Ce,ie,ct.data)}}else{A?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ce,ie,he[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ue,Ce,ie,he[W]);for(let me=0;me<ee.length;me++){const Oe=ee[me];A?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,0,0,Ce,ie,Oe.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,me+1,Ue,Ce,ie,Oe.image[W])}}}p(g)&&d(i.TEXTURE_CUBE_MAP),k.__version=j.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Pe(S,g,$,H,j,k){const ye=o.convert($.format,$.colorSpace),oe=o.convert($.type),ve=w($.internalFormat,ye,oe,$.colorSpace),xe=n.get(g),K=n.get($);if(K.__renderTarget=g,!xe.__hasExternalTextures){const he=Math.max(1,g.width>>k),Ie=Math.max(1,g.height>>k);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,k,ve,he,Ie,g.depth,0,ye,oe,null):t.texImage2D(j,k,ve,he,Ie,0,ye,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Ge(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,j,K.__webglTexture,0,_e(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,j,K.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(S,g,$){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){const H=g.depthTexture,j=H&&H.isDepthTexture?H.type:null,k=b(g.stencilBuffer,j),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_e(g);Ge(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,k,g.width,g.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,k,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,k,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,S)}else{const H=g.textures;for(let j=0;j<H.length;j++){const k=H[j],ye=o.convert(k.format,k.colorSpace),oe=o.convert(k.type),ve=w(k.internalFormat,ye,oe,k.colorSpace),xe=_e(g);$&&Ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ve,g.width,g.height):Ge(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ve,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ve,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(g.depthTexture);H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V(g.depthTexture,0);const j=H.__webglTexture,k=_e(g);if(g.depthTexture.format===sr)Ge(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(g.depthTexture.format===ar)Ge(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ut(S){const g=n.get(S),$=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",j)};H.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=H}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const H=S.texture.mipmaps;H&&H.length>0?De(g.__webglFramebuffer[0],S):De(g.__webglFramebuffer,S)}else if($){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),qe(g.__webglDepthbuffer[H],S,!1);else{const j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,k)}}else{const H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),qe(g.__webglDepthbuffer,S,!1);else{const j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(S,g,$){const H=n.get(S);g!==void 0&&Pe(H.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&ut(S)}function je(S){const g=S.texture,$=n.get(S),H=n.get(g);S.addEventListener("dispose",E);const j=S.textures,k=S.isWebGLCubeRenderTarget===!0,ye=j.length>1;if(ye||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,s.memory.textures++),k){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){$.__webglFramebuffer[oe]=[];for(let ve=0;ve<g.mipmaps.length;ve++)$.__webglFramebuffer[oe][ve]=i.createFramebuffer()}else $.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){$.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)$.__webglFramebuffer[oe]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(ye)for(let oe=0,ve=j.length;oe<ve;oe++){const xe=n.get(j[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),s.memory.textures++)}if(S.samples>0&&Ge(S)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){const ve=j[oe];$.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[oe]);const xe=o.convert(ve.format,ve.colorSpace),K=o.convert(ve.type),he=w(ve.internalFormat,xe,K,ve.colorSpace,S.isXRRenderTarget===!0),Ie=_e(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,he,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,$.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),qe($.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)Pe($.__webglFramebuffer[oe][ve],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve);else Pe($.__webglFramebuffer[oe],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,ve=j.length;oe<ve;oe++){const xe=j[oe],K=n.get(xe);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),ze(i.TEXTURE_2D,xe),Pe($.__webglFramebuffer,S,xe,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),p(xe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,H.__webglTexture),ze(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)Pe($.__webglFramebuffer[ve],S,g,i.COLOR_ATTACHMENT0,oe,ve);else Pe($.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,oe,0);p(g)&&d(oe),t.unbindTexture()}S.depthBuffer&&ut(S)}function T(S){const g=S.textures;for(let $=0,H=g.length;$<H;$++){const j=g[$];if(p(j)){const k=M(S),ye=n.get(j).__webglTexture;t.bindTexture(k,ye),d(k),t.unbindTexture()}}}const Rt=[],Ke=[];function lt(S){if(S.samples>0){if(Ge(S)===!1){const g=S.textures,$=S.width,H=S.height;let j=i.COLOR_BUFFER_BIT;const k=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(S),oe=g.length>1;if(oe)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const ve=S.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const K=n.get(g[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,$,H,0,0,$,H,j,i.NEAREST),l===!0&&(Rt.length=0,Ke.length=0,Rt.push(i.COLOR_ATTACHMENT0+xe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Rt.push(k),Ke.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const K=n.get(g[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function _e(S){return Math.min(r.maxSamples,S.samples)}function Ge(S){const g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Te(S){const g=s.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function Be(S,g){const $=S.colorSpace,H=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||$!==Ui&&$!==Nn&&(Qe.getTransfer($)===it?(H!==jt||j!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),g}function xt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=ft,this.setupRenderTarget=je,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ge}function $m(i,e){function t(n,r=Nn){let o;const s=Qe.getTransfer(r);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ws)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.BYTE;if(n===Dl)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Qs)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Ul)return i.RGB;if(n===jt)return i.RGBA;if(n===sr)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===js)return i.RED_INTEGER;if(n===$l)return i.RG;if(n===Ks)return i.RG_INTEGER;if(n===Zs)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Qr)if(s===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Hr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Hr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hs||n===ds||n===us||n===fs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===hs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ds)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===us)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ps||n===ms||n===gs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ps||n===ms)return s===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===gs)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vs||n===_s||n===ys||n===xs||n===bs||n===Ps||n===Ss||n===ws||n===Ms||n===Es||n===Ts||n===As||n===Cs||n===Rs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===vs)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_s)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ys)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xs)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bs)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ps)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ss)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ws)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ms)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Es)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ts)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===As)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cs)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rs)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===Is||n===Ds)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Wr)return s===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Is)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ds)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===Ls||n===Ns||n===Us)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Wr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ls)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ns)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Us)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Tt,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:Bm,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new ao(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zm extends zn{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,v=null;const y=new Xm,p=t.getContextAttributes();let d=null,M=null;const w=[],b=[],N=new Re;let D=null;const E=new Yt;E.viewport=new nt;const L=new Yt;L.viewport=new nt;const P=[E,L],x=new od;let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=w[G];return ne===void 0&&(ne=new No,w[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=w[G];return ne===void 0&&(ne=new No,w[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=w[G];return ne===void 0&&(ne=new No,w[G]=ne),ne.getHandSpace()};function X(G){const ne=b.indexOf(G.inputSource);if(ne===-1)return;const be=w[ne];be!==void 0&&(be.update(G.inputSource,G.frame,c||s),be.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",V);for(let G=0;G<w.length;G++){const ne=b[G];ne!==null&&(b[G]=null,w[G].disconnect(ne))}R=null,Y=null,y.reset(),e.setRenderTarget(d),m=null,f=null,u=null,r=null,M=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",q),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,ce=null,Pe=null;p.depth&&(Pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=p.stencil?ar:sr,ce=p.stencil?or:ii);const qe={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:o};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Fn(f.textureWidth,f.textureHeight,{format:jt,type:fn,depthTexture:new ec(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Fn(m.framebufferWidth,m.framebufferHeight,{format:jt,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),st.setContext(r),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(G){for(let ne=0;ne<G.removed.length;ne++){const be=G.removed[ne],ce=b.indexOf(be);ce>=0&&(b[ce]=null,w[ce].disconnect(be))}for(let ne=0;ne<G.added.length;ne++){const be=G.added[ne];let ce=b.indexOf(be);if(ce===-1){for(let qe=0;qe<w.length;qe++)if(qe>=b.length){b.push(be),ce=qe;break}else if(b[qe]===null){b[qe]=be,ce=qe;break}if(ce===-1)break}const Pe=w[ce];Pe&&Pe.connect(be)}}const Q=new C,Z=new C;function z(G,ne,be){Q.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const ce=Q.distanceTo(Z),Pe=ne.projectionMatrix.elements,qe=be.projectionMatrix.elements,De=Pe[14]/(Pe[10]-1),ut=Pe[14]/(Pe[10]+1),ft=(Pe[9]+1)/Pe[5],je=(Pe[9]-1)/Pe[5],T=(Pe[8]-1)/Pe[0],Rt=(qe[8]+1)/qe[0],Ke=De*T,lt=De*Rt,_e=ce/(-T+Rt),Ge=_e*-T;if(ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ge),G.translateZ(_e),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Pe[10]===-1)G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=De+_e,Be=ut+_e,xt=Ke-Ge,S=lt+(ce-Ge),g=ft*ut/Be*Te,$=je*ut/Be*Te;G.projectionMatrix.makePerspective(xt,S,g,$,Te,Be),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function le(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ne=G.near,be=G.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(be=y.depthFar)),x.near=L.near=E.near=ne,x.far=L.far=E.far=be,(R!==x.near||Y!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,Y=x.far),E.layers.mask=G.layers.mask|2,L.layers.mask=G.layers.mask|4,x.layers.mask=E.layers.mask|L.layers.mask;const ce=G.parent,Pe=x.cameras;le(x,ce);for(let qe=0;qe<Pe.length;qe++)le(Pe[qe],ce);Pe.length===2?z(x,E,L):x.projectionMatrix.copy(E.projectionMatrix),ue(G,x,ce)};function ue(G,ne,be){be===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(be.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Bs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let we=null;function ze(G,ne){if(h=ne.getViewerPose(c||s),v=ne,h!==null){const be=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ce=!1;be.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let De=0;De<be.length;De++){const ut=be[De];let ft=null;if(m!==null)ft=m.getViewport(ut);else{const T=u.getViewSubImage(f,ut);ft=T.viewport,De===0&&(e.setRenderTargetTextures(M,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(M))}let je=P[De];je===void 0&&(je=new Yt,je.layers.enable(De),je.viewport=new nt,P[De]=je),je.matrix.fromArray(ut.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ut.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ft.x,ft.y,ft.width,ft.height),De===0&&(x.matrix.copy(je.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(je)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const De=u.getDepthInformation(be[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let be=0;be<w.length;be++){const ce=b[be],Pe=w[be];ce!==null&&Pe!==void 0&&Pe.update(ce,ne,c||s)}we&&we(G,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const st=new ic;st.setAnimationLoop(ze),this.setAnimationLoop=function(G){we=G},this.dispose=function(){}}}const qn=new ln,km=new at;function Ym(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Vl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,M,w,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(p,d):d.isMeshToonMaterial?(o(p,d),u(p,d)):d.isMeshPhongMaterial?(o(p,d),h(p,d)):d.isMeshStandardMaterial?(o(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(o(p,d),v(p,d)):d.isMeshDepthMaterial?o(p,d):d.isMeshDistanceMaterial?(o(p,d),y(p,d)):d.isMeshNormalMaterial?o(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,w):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Bt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Bt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),w=M.envMap,b=M.envMapRotation;w&&(p.envMap.value=w,qn.copy(b),qn.x*=-1,qn.y*=-1,qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),p.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(qn)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=w*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hm(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const b=w.program;n.uniformBlockBinding(M,b)}function c(M,w){let b=r[M.id];b===void 0&&(v(M),b=h(M),r[M.id]=b,M.addEventListener("dispose",p));const N=w.program;n.updateUBOMapping(M,N);const D=e.render.frame;o[M.id]!==D&&(f(M),o[M.id]=D)}function h(M){const w=u();M.__bindingPointIndex=w;const b=i.createBuffer(),N=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,N,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function u(){for(let M=0;M<a;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const w=r[M.id],b=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let D=0,E=b.length;D<E;D++){const L=Array.isArray(b[D])?b[D]:[b[D]];for(let P=0,x=L.length;P<x;P++){const R=L[P];if(m(R,D,P,N)===!0){const Y=R.__offset,X=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let V=0;V<X.length;V++){const Q=X[V],Z=y(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Y+q,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,w,b,N){const D=M.value,E=w+"_"+b;if(N[E]===void 0)return typeof D=="number"||typeof D=="boolean"?N[E]=D:N[E]=D.clone(),!0;{const L=N[E];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return N[E]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function v(M){const w=M.uniforms;let b=0;const N=16;for(let E=0,L=w.length;E<L;E++){const P=Array.isArray(w[E])?w[E]:[w[E]];for(let x=0,R=P.length;x<R;x++){const Y=P[x],X=Array.isArray(Y.value)?Y.value:[Y.value];for(let q=0,V=X.length;q<V;q++){const Q=X[q],Z=y(Q),z=b%N,le=z%Z.boundary,ue=z+le;b+=le,ue!==0&&N-ue<Z.storage&&(b+=N-ue),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=Z.storage}}}const D=b%N;return D>0&&(b+=N-D),M.__size=b,M.__cache={},this}function y(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function p(M){const w=M.target;w.removeEventListener("dispose",p);const b=s.indexOf(w.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);s=[],r={},o={}}return{bind:l,update:c,dispose:d}}class Gm{constructor(e={}){const{canvas:t=ph(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),y=new Int32Array(4);let p=null,d=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Wt;let D=0,E=0,L=null,P=-1,x=null;const R=new nt,Y=new nt;let X=null;const q=new He(0);let V=0,Q=t.width,Z=t.height,z=1,le=null,ue=null;const we=new nt(0,0,Q,Z),ze=new nt(0,0,Q,Z);let st=!1;const G=new so;let ne=!1,be=!1;const ce=new at,Pe=new at,qe=new C,De=new nt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function je(){return L===null?z:1}let T=n;function Rt(_,U){return t.getContext(_,U)}try{const _={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vs}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",W,!1),T===null){const U="webgl2";if(T=Rt(U,_),T===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ke,lt,_e,Ge,Te,Be,xt,S,g,$,H,j,k,ye,oe,ve,xe,K,he,Ie,Ce,ie,Ue,A;function se(){Ke=new tp(T),Ke.init(),ie=new $m(T,Ke),lt=new Wf(T,Ke,e,ie),_e=new Um(T,Ke),lt.reverseDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Ge=new rp(T),Te=new Pm,Be=new Om(T,Ke,_e,Te,lt,ie,Ge),xt=new jf(b),S=new ep(b),g=new cd(T),Ue=new Vf(T,g),$=new np(T,g,Ge,Ue),H=new sp(T,$,g,Ge),he=new op(T,lt,Be),ve=new qf(Te),j=new bm(b,xt,S,Ke,lt,Ue,ve),k=new Ym(b,Te),ye=new wm,oe=new Rm(Ke),K=new Gf(b,xt,S,_e,H,m,l),xe=new Lm(b,H,lt),A=new Hm(T,Ge,lt,_e),Ie=new Qf(T,Ke,Ge),Ce=new ip(T,Ke,Ge),Ge.programs=j.programs,b.capabilities=lt,b.extensions=Ke,b.properties=Te,b.renderLists=ye,b.shadowMap=xe,b.state=_e,b.info=Ge}se();const J=new zm(b,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const _=Ke.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Ke.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(Q,Z,!1))},this.getSize=function(_){return _.set(Q,Z)},this.setSize=function(_,U,B=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=_,Z=U,t.width=Math.floor(_*z),t.height=Math.floor(U*z),B===!0&&(t.style.width=_+"px",t.style.height=U+"px"),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(Q*z,Z*z).floor()},this.setDrawingBufferSize=function(_,U,B){Q=_,Z=U,z=B,t.width=Math.floor(_*B),t.height=Math.floor(U*B),this.setViewport(0,0,_,U)},this.getCurrentViewport=function(_){return _.copy(R)},this.getViewport=function(_){return _.copy(we)},this.setViewport=function(_,U,B,F){_.isVector4?we.set(_.x,_.y,_.z,_.w):we.set(_,U,B,F),_e.viewport(R.copy(we).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(ze)},this.setScissor=function(_,U,B,F){_.isVector4?ze.set(_.x,_.y,_.z,_.w):ze.set(_,U,B,F),_e.scissor(Y.copy(ze).multiplyScalar(z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(_){_e.setScissorTest(st=_)},this.setOpaqueSort=function(_){le=_},this.setTransparentSort=function(_){ue=_},this.getClearColor=function(_){return _.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(_=!0,U=!0,B=!0){let F=0;if(_){let O=!1;if(L!==null){const te=L.texture.format;O=te===Zs||te===Ks||te===js}if(O){const te=L.texture.type,ae=te===fn||te===ii||te===rr||te===or||te===Ws||te===qs,ge=K.getClearColor(),de=K.getClearAlpha(),Le=ge.r,Ne=ge.g,Se=ge.b;ae?(v[0]=Le,v[1]=Ne,v[2]=Se,v[3]=de,T.clearBufferuiv(T.COLOR,0,v)):(y[0]=Le,y[1]=Ne,y[2]=Se,y[3]=de,T.clearBufferiv(T.COLOR,0,y))}else F|=T.COLOR_BUFFER_BIT}U&&(F|=T.DEPTH_BUFFER_BIT),B&&(F|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",W,!1),K.dispose(),ye.dispose(),oe.dispose(),Te.dispose(),xt.dispose(),S.dispose(),H.dispose(),Ue.dispose(),A.dispose(),j.dispose(),J.dispose(),J.removeEventListener("sessionstart",aa),J.removeEventListener("sessionend",la),kn.stop()};function fe(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const _=Ge.autoReset,U=xe.enabled,B=xe.autoUpdate,F=xe.needsUpdate,O=xe.type;se(),Ge.autoReset=_,xe.enabled=U,xe.autoUpdate=B,xe.needsUpdate=F,xe.type=O}function W(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function me(_){const U=_.target;U.removeEventListener("dispose",me),Oe(U)}function Oe(_){ct(_),Te.remove(_)}function ct(_){const U=Te.get(_).programs;U!==void 0&&(U.forEach(function(B){j.releaseProgram(B)}),_.isShaderMaterial&&j.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,B,F,O,te){U===null&&(U=ut);const ae=O.isMesh&&O.matrixWorld.determinant()<0,ge=yc(_,U,B,F,O);_e.setMaterial(F,ae);let de=B.index,Le=1;if(F.wireframe===!0){if(de=$.getWireframeAttribute(B),de===void 0)return;Le=2}const Ne=B.drawRange,Se=B.attributes.position;let Ye=Ne.start*Le,et=(Ne.start+Ne.count)*Le;te!==null&&(Ye=Math.max(Ye,te.start*Le),et=Math.min(et,(te.start+te.count)*Le)),de!==null?(Ye=Math.max(Ye,0),et=Math.min(et,de.count)):Se!=null&&(Ye=Math.max(Ye,0),et=Math.min(et,Se.count));const pt=et-Ye;if(pt<0||pt===1/0)return;Ue.setup(O,F,ge,B,de);let gt,Ve=Ie;if(de!==null&&(gt=g.get(de),Ve=Ce,Ve.setIndex(gt)),O.isMesh)F.wireframe===!0?(_e.setLineWidth(F.wireframeLinewidth*je()),Ve.setMode(T.LINES)):Ve.setMode(T.TRIANGLES);else if(O.isLine){let Ae=F.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*je()),O.isLineSegments?Ve.setMode(T.LINES):O.isLineLoop?Ve.setMode(T.LINE_LOOP):Ve.setMode(T.LINE_STRIP)}else O.isPoints?Ve.setMode(T.POINTS):O.isSprite&&Ve.setMode(T.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ii("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ve.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Ve.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ae=O._multiDrawStarts,Mt=O._multiDrawCounts,Ze=O._multiDrawCount,Jt=de?g.get(de).bytesPerElement:1,li=Te.get(F).currentProgram.getUniforms();for(let Xt=0;Xt<Ze;Xt++)li.setValue(T,"_gl_DrawID",Xt),Ve.render(Ae[Xt]/Jt,Mt[Xt])}else if(O.isInstancedMesh)Ve.renderInstances(Ye,pt,O.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mt=Math.min(B.instanceCount,Ae);Ve.renderInstances(Ye,pt,Mt)}else Ve.render(Ye,pt)};function Je(_,U,B){_.transparent===!0&&_.side===Pn&&_.forceSinglePass===!1?(_.side=Bt,_.needsUpdate=!0,hr(_,U,B),_.side=Bn,_.needsUpdate=!0,hr(_,U,B),_.side=Pn):hr(_,U,B)}this.compile=function(_,U,B=null){B===null&&(B=_),d=oe.get(B),d.init(U),w.push(d),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),_!==B&&_.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const F=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const te=O.material;if(te)if(Array.isArray(te))for(let ae=0;ae<te.length;ae++){const ge=te[ae];Je(ge,B,O),F.add(ge)}else Je(te,B,O),F.add(te)}),d=w.pop(),F},this.compileAsync=function(_,U,B=null){const F=this.compile(_,U,B);return new Promise(O=>{function te(){if(F.forEach(function(ae){Te.get(ae).currentProgram.isReady()&&F.delete(ae)}),F.size===0){O(_);return}setTimeout(te,10)}Ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Zt=null;function mn(_){Zt&&Zt(_)}function aa(){kn.stop()}function la(){kn.start()}const kn=new ic;kn.setAnimationLoop(mn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(_){Zt=_,J.setAnimationLoop(_),_===null?kn.stop():kn.start()},J.addEventListener("sessionstart",aa),J.addEventListener("sessionend",la),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(U),U=J.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,U,L),d=oe.get(_,w.length),d.init(U),w.push(d),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(Pe),be=this.localClippingEnabled,ne=ve.init(this.clippingPlanes,be),p=ye.get(_,M.length),p.init(),M.push(p),J.enabled===!0&&J.isPresenting===!0){const te=b.xr.getDepthSensingMesh();te!==null&&co(te,U,-1/0,b.sortObjects)}co(_,U,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(le,ue),ft=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ft&&K.addToRenderList(p,_),this.info.render.frame++,ne===!0&&ve.beginShadows();const B=d.state.shadowsArray;xe.render(B,_,U),ne===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=p.opaque,O=p.transmissive;if(d.setupLights(),U.isArrayCamera){const te=U.cameras;if(O.length>0)for(let ae=0,ge=te.length;ae<ge;ae++){const de=te[ae];ha(F,O,_,de)}ft&&K.render(_);for(let ae=0,ge=te.length;ae<ge;ae++){const de=te[ae];ca(p,_,de,de.viewport)}}else O.length>0&&ha(F,O,_,U),ft&&K.render(_),ca(p,_,U);L!==null&&E===0&&(Be.updateMultisampleRenderTarget(L),Be.updateRenderTargetMipmap(L)),_.isScene===!0&&_.onAfterRender(b,_,U),Ue.resetDefaultState(),P=-1,x=null,w.pop(),w.length>0?(d=w[w.length-1],ne===!0&&ve.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function co(_,U,B,F){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||G.intersectsSprite(_)){F&&De.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Pe);const ae=H.update(_),ge=_.material;ge.visible&&p.push(_,ae,ge,B,De.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||G.intersectsObject(_))){const ae=H.update(_),ge=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),De.copy(_.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),De.copy(ae.boundingSphere.center)),De.applyMatrix4(_.matrixWorld).applyMatrix4(Pe)),Array.isArray(ge)){const de=ae.groups;for(let Le=0,Ne=de.length;Le<Ne;Le++){const Se=de[Le],Ye=ge[Se.materialIndex];Ye&&Ye.visible&&p.push(_,ae,Ye,B,De.z,Se)}}else ge.visible&&p.push(_,ae,ge,B,De.z,null)}}const te=_.children;for(let ae=0,ge=te.length;ae<ge;ae++)co(te[ae],U,B,F)}function ca(_,U,B,F){const O=_.opaque,te=_.transmissive,ae=_.transparent;d.setupLightsView(B),ne===!0&&ve.setGlobalState(b.clippingPlanes,B),F&&_e.viewport(R.copy(F)),O.length>0&&cr(O,U,B),te.length>0&&cr(te,U,B),ae.length>0&&cr(ae,U,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ha(_,U,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new Fn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?lr:fn,minFilter:ei,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const te=d.state.transmissionRenderTarget[F.id],ae=F.viewport||R;te.setSize(ae.z*b.transmissionResolutionScale,ae.w*b.transmissionResolutionScale);const ge=b.getRenderTarget();b.setRenderTarget(te),b.getClearColor(q),V=b.getClearAlpha(),V<1&&b.setClearColor(16777215,.5),b.clear(),ft&&K.render(B);const de=b.toneMapping;b.toneMapping=Un;const Le=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),ne===!0&&ve.setGlobalState(b.clippingPlanes,F),cr(_,B,F),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Se=0,Ye=U.length;Se<Ye;Se++){const et=U[Se],pt=et.object,gt=et.geometry,Ve=et.material,Ae=et.group;if(Ve.side===Pn&&pt.layers.test(F.layers)){const Mt=Ve.side;Ve.side=Bt,Ve.needsUpdate=!0,da(pt,B,F,gt,Ve,Ae),Ve.side=Mt,Ve.needsUpdate=!0,Ne=!0}}Ne===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}b.setRenderTarget(ge),b.setClearColor(q,V),Le!==void 0&&(F.viewport=Le),b.toneMapping=de}function cr(_,U,B){const F=U.isScene===!0?U.overrideMaterial:null;for(let O=0,te=_.length;O<te;O++){const ae=_[O],ge=ae.object,de=ae.geometry,Le=ae.group;let Ne=ae.material;Ne.allowOverride===!0&&F!==null&&(Ne=F),ge.layers.test(B.layers)&&da(ge,U,B,de,Ne,Le)}}function da(_,U,B,F,O,te){_.onBeforeRender(b,U,B,F,O,te),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(b,U,B,F,_,te),O.transparent===!0&&O.side===Pn&&O.forceSinglePass===!1?(O.side=Bt,O.needsUpdate=!0,b.renderBufferDirect(B,U,F,O,_,te),O.side=Bn,O.needsUpdate=!0,b.renderBufferDirect(B,U,F,O,_,te),O.side=Pn):b.renderBufferDirect(B,U,F,O,_,te),_.onAfterRender(b,U,B,F,O,te)}function hr(_,U,B){U.isScene!==!0&&(U=ut);const F=Te.get(_),O=d.state.lights,te=d.state.shadowsArray,ae=O.state.version,ge=j.getParameters(_,O.state,te,U,B),de=j.getProgramCacheKey(ge);let Le=F.programs;F.environment=_.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(_.isMeshStandardMaterial?S:xt).get(_.envMap||F.environment),F.envMapRotation=F.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Le===void 0&&(_.addEventListener("dispose",me),Le=new Map,F.programs=Le);let Ne=Le.get(de);if(Ne!==void 0){if(F.currentProgram===Ne&&F.lightsStateVersion===ae)return fa(_,ge),Ne}else ge.uniforms=j.getUniforms(_),_.onBeforeCompile(ge,b),Ne=j.acquireProgram(ge,de),Le.set(de,Ne),F.uniforms=ge.uniforms;const Se=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Se.clippingPlanes=ve.uniform),fa(_,ge),F.needsLights=bc(_),F.lightsStateVersion=ae,F.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Ne,F.uniformsList=null,Ne}function ua(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=jr.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function fa(_,U){const B=Te.get(_);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function yc(_,U,B,F,O){U.isScene!==!0&&(U=ut),Be.resetTextureUnits();const te=U.fog,ae=F.isMeshStandardMaterial?U.environment:null,ge=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ui,de=(F.isMeshStandardMaterial?S:xt).get(F.envMap||ae),Le=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Se=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,et=!!B.morphAttributes.color;let pt=Un;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=b.toneMapping);const gt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ve=gt!==void 0?gt.length:0,Ae=Te.get(F),Mt=d.state.lights;if(ne===!0&&(be===!0||_!==x)){const It=_===x&&F.id===P;ve.setState(F,_,It)}let Ze=!1;F.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Mt.state.version||Ae.outputColorSpace!==ge||O.isBatchedMesh&&Ae.batching===!1||!O.isBatchedMesh&&Ae.batching===!0||O.isBatchedMesh&&Ae.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ae.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ae.instancing===!1||!O.isInstancedMesh&&Ae.instancing===!0||O.isSkinnedMesh&&Ae.skinning===!1||!O.isSkinnedMesh&&Ae.skinning===!0||O.isInstancedMesh&&Ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ae.instancingMorph===!1&&O.morphTexture!==null||Ae.envMap!==de||F.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ve.numPlanes||Ae.numIntersection!==ve.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Ne||Ae.morphTargets!==Se||Ae.morphNormals!==Ye||Ae.morphColors!==et||Ae.toneMapping!==pt||Ae.morphTargetsCount!==Ve)&&(Ze=!0):(Ze=!0,Ae.__version=F.version);let Jt=Ae.currentProgram;Ze===!0&&(Jt=hr(F,U,O));let li=!1,Xt=!1,Gi=!1;const dt=Jt.getUniforms(),Gt=Ae.uniforms;if(_e.useProgram(Jt.program)&&(li=!0,Xt=!0,Gi=!0),F.id!==P&&(P=F.id,Xt=!0),li||x!==_){_e.buffers.depth.getReversed()?(ce.copy(_.projectionMatrix),gh(ce),vh(ce),dt.setValue(T,"projectionMatrix",ce)):dt.setValue(T,"projectionMatrix",_.projectionMatrix),dt.setValue(T,"viewMatrix",_.matrixWorldInverse);const Ut=dt.map.cameraPosition;Ut!==void 0&&Ut.setValue(T,qe.setFromMatrixPosition(_.matrixWorld)),lt.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&dt.setValue(T,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,Xt=!0,Gi=!0)}if(O.isSkinnedMesh){dt.setOptional(T,O,"bindMatrix"),dt.setOptional(T,O,"bindMatrixInverse");const It=O.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(T,"boneTexture",It.boneTexture,Be))}O.isBatchedMesh&&(dt.setOptional(T,O,"batchingTexture"),dt.setValue(T,"batchingTexture",O._matricesTexture,Be),dt.setOptional(T,O,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",O._indirectTexture,Be),dt.setOptional(T,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",O._colorsTexture,Be));const Vt=B.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&he.update(O,B,Jt),(Xt||Ae.receiveShadow!==O.receiveShadow)&&(Ae.receiveShadow=O.receiveShadow,dt.setValue(T,"receiveShadow",O.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Gt.envMap.value=de,Gt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(Gt.envMapIntensity.value=U.environmentIntensity),Xt&&(dt.setValue(T,"toneMappingExposure",b.toneMappingExposure),Ae.needsLights&&xc(Gt,Gi),te&&F.fog===!0&&k.refreshFogUniforms(Gt,te),k.refreshMaterialUniforms(Gt,F,z,Z,d.state.transmissionRenderTarget[_.id]),jr.upload(T,ua(Ae),Gt,Be)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(jr.upload(T,ua(Ae),Gt,Be),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&dt.setValue(T,"center",O.center),dt.setValue(T,"modelViewMatrix",O.modelViewMatrix),dt.setValue(T,"normalMatrix",O.normalMatrix),dt.setValue(T,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const It=F.uniformsGroups;for(let Ut=0,ho=It.length;Ut<ho;Ut++){const Yn=It[Ut];A.update(Yn,Jt),A.bind(Yn,Jt)}}return Jt}function xc(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function bc(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(_,U,B){const F=Te.get(_);F.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Te.get(_.texture).__webglTexture=U,Te.get(_.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:B,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,U){const B=Te.get(_);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Pc=T.createFramebuffer();this.setRenderTarget=function(_,U=0,B=0){L=_,D=U,E=B;let F=!0,O=null,te=!1,ae=!1;if(_){const de=Te.get(_);if(de.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(T.FRAMEBUFFER,null),F=!1;else if(de.__webglFramebuffer===void 0)Be.setupRenderTarget(_);else if(de.__hasExternalTextures)Be.rebindTextures(_,Te.get(_.texture).__webglTexture,Te.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Se=_.depthTexture;if(de.__boundDepthTexture!==Se){if(Se!==null&&Te.has(Se)&&(_.width!==Se.image.width||_.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(_)}}const Le=_.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ae=!0);const Ne=Te.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?O=Ne[U][B]:O=Ne[U],te=!0):_.samples>0&&Be.useMultisampledRTT(_)===!1?O=Te.get(_).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[B]:O=Ne,R.copy(_.viewport),Y.copy(_.scissor),X=_.scissorTest}else R.copy(we).multiplyScalar(z).floor(),Y.copy(ze).multiplyScalar(z).floor(),X=st;if(B!==0&&(O=Pc),_e.bindFramebuffer(T.FRAMEBUFFER,O)&&F&&_e.drawBuffers(_,O),_e.viewport(R),_e.scissor(Y),_e.setScissorTest(X),te){const de=Te.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,B)}else if(ae){const de=Te.get(_.texture),Le=U;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,de.__webglTexture,B,Le)}else if(_!==null&&B!==0){const de=Te.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,de.__webglTexture,B)}P=-1},this.readRenderTargetPixels=function(_,U,B,F,O,te,ae,ge=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Te.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){_e.bindFramebuffer(T.FRAMEBUFFER,de);try{const Le=_.textures[ge],Ne=Le.format,Se=Le.type;if(!lt.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-F&&B>=0&&B<=_.height-O&&(_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ge),T.readPixels(U,B,F,O,ie.convert(Ne),ie.convert(Se),te))}finally{const Le=L!==null?Te.get(L).__webglFramebuffer:null;_e.bindFramebuffer(T.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(_,U,B,F,O,te,ae,ge=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Te.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de)if(U>=0&&U<=_.width-F&&B>=0&&B<=_.height-O){_e.bindFramebuffer(T.FRAMEBUFFER,de);const Le=_.textures[ge],Ne=Le.format,Se=Le.type;if(!lt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ye),T.bufferData(T.PIXEL_PACK_BUFFER,te.byteLength,T.STREAM_READ),_.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ge),T.readPixels(U,B,F,O,ie.convert(Ne),ie.convert(Se),0);const et=L!==null?Te.get(L).__webglFramebuffer:null;_e.bindFramebuffer(T.FRAMEBUFFER,et);const pt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await mh(T,pt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ye),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,te),T.deleteBuffer(Ye),T.deleteSync(pt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,U=null,B=0){const F=Math.pow(2,-B),O=Math.floor(_.image.width*F),te=Math.floor(_.image.height*F),ae=U!==null?U.x:0,ge=U!==null?U.y:0;Be.setTexture2D(_,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,ae,ge,O,te),_e.unbindTexture()};const Sc=T.createFramebuffer(),wc=T.createFramebuffer();this.copyTextureToTexture=function(_,U,B=null,F=null,O=0,te=null){te===null&&(O!==0?(Ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=O,O=0):te=0);let ae,ge,de,Le,Ne,Se,Ye,et,pt;const gt=_.isCompressedTexture?_.mipmaps[te]:_.image;if(B!==null)ae=B.max.x-B.min.x,ge=B.max.y-B.min.y,de=B.isBox3?B.max.z-B.min.z:1,Le=B.min.x,Ne=B.min.y,Se=B.isBox3?B.min.z:0;else{const Vt=Math.pow(2,-O);ae=Math.floor(gt.width*Vt),ge=Math.floor(gt.height*Vt),_.isDataArrayTexture?de=gt.depth:_.isData3DTexture?de=Math.floor(gt.depth*Vt):de=1,Le=0,Ne=0,Se=0}F!==null?(Ye=F.x,et=F.y,pt=F.z):(Ye=0,et=0,pt=0);const Ve=ie.convert(U.format),Ae=ie.convert(U.type);let Mt;U.isData3DTexture?(Be.setTexture3D(U,0),Mt=T.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),Mt=T.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),Mt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),li=T.getParameter(T.UNPACK_SKIP_PIXELS),Xt=T.getParameter(T.UNPACK_SKIP_ROWS),Gi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,gt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Le),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ne),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Se);const dt=_.isDataArrayTexture||_.isData3DTexture,Gt=U.isDataArrayTexture||U.isData3DTexture;if(_.isDepthTexture){const Vt=Te.get(_),It=Te.get(U),Ut=Te.get(Vt.__renderTarget),ho=Te.get(It.__renderTarget);_e.bindFramebuffer(T.READ_FRAMEBUFFER,Ut.__webglFramebuffer),_e.bindFramebuffer(T.DRAW_FRAMEBUFFER,ho.__webglFramebuffer);for(let Yn=0;Yn<de;Yn++)dt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Te.get(_).__webglTexture,O,Se+Yn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,te,pt+Yn)),T.blitFramebuffer(Le,Ne,ae,ge,Ye,et,ae,ge,T.DEPTH_BUFFER_BIT,T.NEAREST);_e.bindFramebuffer(T.READ_FRAMEBUFFER,null),_e.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||Te.has(_)){const Vt=Te.get(_),It=Te.get(U);_e.bindFramebuffer(T.READ_FRAMEBUFFER,Sc),_e.bindFramebuffer(T.DRAW_FRAMEBUFFER,wc);for(let Ut=0;Ut<de;Ut++)dt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Vt.__webglTexture,O,Se+Ut):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Vt.__webglTexture,O),Gt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,It.__webglTexture,te,pt+Ut):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,It.__webglTexture,te),O!==0?T.blitFramebuffer(Le,Ne,ae,ge,Ye,et,ae,ge,T.COLOR_BUFFER_BIT,T.NEAREST):Gt?T.copyTexSubImage3D(Mt,te,Ye,et,pt+Ut,Le,Ne,ae,ge):T.copyTexSubImage2D(Mt,te,Ye,et,Le,Ne,ae,ge);_e.bindFramebuffer(T.READ_FRAMEBUFFER,null),_e.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Gt?_.isDataTexture||_.isData3DTexture?T.texSubImage3D(Mt,te,Ye,et,pt,ae,ge,de,Ve,Ae,gt.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Mt,te,Ye,et,pt,ae,ge,de,Ve,gt.data):T.texSubImage3D(Mt,te,Ye,et,pt,ae,ge,de,Ve,Ae,gt):_.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,te,Ye,et,ae,ge,Ve,Ae,gt.data):_.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,te,Ye,et,gt.width,gt.height,Ve,gt.data):T.texSubImage2D(T.TEXTURE_2D,te,Ye,et,ae,ge,Ve,Ae,gt);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ze),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,li),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Gi),te===0&&U.generateMipmaps&&T.generateMipmap(Mt),_e.unbindTexture()},this.copyTextureToTexture3D=function(_,U,B=null,F=null,O=0){return Ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,U,B,F,O)},this.initRenderTarget=function(_){Te.get(_).__webglFramebuffer===void 0&&Be.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Be.setTextureCube(_,0):_.isData3DTexture?Be.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Be.setTexture2DArray(_,0):Be.setTexture2D(_,0),_e.unbindTexture()},this.resetState=function(){D=0,E=0,L=null,_e.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const _l={type:"change"},ra={type:"start"},lc={type:"end"},Xr=new oo,yl=new Ln,Vm=Math.cos(70*fh.DEG2RAD),bt=new C,Ot=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vo=1e-6;class Qm extends ad{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ri,this._lastTargetPosition=new C,this._quat=new ri().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Va,this._sphericalDelta=new Va,this._scale=1,this._panOffset=new C,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new C,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qm.bind(this),this._onPointerDown=Wm.bind(this),this._onPointerUp=jm.bind(this),this._onContextMenu=ig.bind(this),this._onMouseWheel=Jm.bind(this),this._onKeyDown=eg.bind(this),this._onTouchStart=tg.bind(this),this._onTouchMove=ng.bind(this),this._onMouseDown=Km.bind(this),this._onMouseMove=Zm.bind(this),this._interceptControlDown=rg.bind(this),this._interceptControlUp=og.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_l),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ot:n>Math.PI&&(n-=Ot),r<-Math.PI?r+=Ot:r>Math.PI&&(r-=Ot),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=bt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Xr.origin.copy(this.object.position),Xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xr.direction))<Vm?this.object.lookAt(this.target):(yl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xr.intersectPlane(yl,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vo||this._lastTargetPosition.distanceToSquared(this.target)>Vo?(this.dispatchEvent(_l),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ot/60*this.autoRotateSpeed*e:Ot/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;bt.copy(r).sub(this.target);let o=bt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,o=t-n.top,s=n.width,a=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Wm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lc),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Km(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case Ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case Ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(ra)}function Zm(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jm(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(ra),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lc))}function eg(i){this.enabled!==!1&&this._handleKeyDown(i)}function tg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(ra)}function ng(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function ig(i){this.enabled!==!1&&i.preventDefault()}function rg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function og(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sg={324:(i,e,t)=>{t.r(e),t.d(e,{default:()=>n});const n=`precision highp float;\r
precision highp int;\r
\r
// Uniforms for projection, screen size, and texture sampler\r
uniform mat4 projectionMatrix;\r
uniform float screenWidth;\r
uniform float screenHeight;\r
uniform sampler2D map;\r
\r
varying vec2 vUv;\r
\r
void main() {\r
	// Calculate pixel offsets\r
	float dx = 1.0 / screenWidth;\r
	float dy = 1.0 / screenHeight;\r
\r
	// Average the color of the 9 surrounding pixels\r
	vec3 color = texture2D(map, vUv + vec2(-dx, -dy)).rgb;\r
	color += texture2D(map, vUv + vec2( 0.0, -dy)).rgb;\r
	color += texture2D(map, vUv + vec2( dx, -dy)).rgb;\r
	color += texture2D(map, vUv + vec2(-dx,  0.0)).rgb;\r
	color += texture2D(map, vUv + vec2( 0.0,  0.0)).rgb;\r
	color += texture2D(map, vUv + vec2( dx,  0.0)).rgb;\r
	color += texture2D(map, vUv + vec2(-dx,  dy)).rgb;\r
	color += texture2D(map, vUv + vec2( 0.0,  dy)).rgb;\r
	color += texture2D(map, vUv + vec2( dx,  dy)).rgb;\r
\r
	// Set the output color with alpha = 1.0\r
	gl_FragColor = vec4(color / 9.0, 1.0);\r
}\r
`},652:(i,e,t)=>{t.r(e),t.d(e,{default:()=>n});const n=`// Vertex shader for blur effect.\r
precision highp float;  // Use high precision for floats.\r
precision highp int;    // Use high precision for ints.\r
\r
attribute vec3 position;    // Vertex position.\r
attribute vec2 uv;          // Texture coordinate.\r
\r
uniform mat4 modelViewMatrix;  // Model-view transformation.\r
uniform mat4 projectionMatrix; // Projection transformation.\r
\r
varying vec2 vUv;            // Pass uv coordinates to fragment shader.\r
\r
void main() {\r
	// Pass the texture coordinate.\r
	vUv = uv;\r
\r
	// Compute the vertex position.\r
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`},650:(i,e,t)=>{t.d(e,{A:()=>n});const n=`// Set precision for floats and ints\r
precision highp float;\r
precision highp int;\r
\r
// Uniforms for camera, projection and point parameters\r
uniform mat4 viewMatrix;\r
uniform vec3 cameraPosition;\r
uniform mat4 projectionMatrix;\r
uniform float opacity;\r
uniform bool useOrthographicCamera;\r
uniform float blendHardness;\r
uniform float blendDepthSupplement;\r
uniform float fov;\r
uniform float spacing;\r
uniform float pcIndex;\r
uniform float screenWidth;\r
uniform float screenHeight;\r
uniform float far;\r
uniform sampler2D depthMap;\r
\r
out vec4 fragColor;\r
\r
#ifdef highlight_point\r
	// Color used to highlight a point\r
	uniform vec4 highlightedPointColor;\r
#endif\r
\r
#ifdef new_format\r
	in vec4 vColor;\r
#else\r
	in vec3 vColor;\r
#endif\r
\r
#if !defined(color_type_point_index)\r
	// Opacity attribute when not using point index color type\r
	in float vOpacity;\r
#endif\r
\r
#if defined(weighted_splats)\r
	// Linear depth value for weighted splats\r
	in float vLinearDepth;\r
#endif\r
\r
#ifdef use_edl\r
	// Log depth for EDL rendering\r
	in float vLogDepth;\r
#endif\r
\r
in vec3 vViewPosition;\r
#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	// Radius for point shapes\r
	in float vRadius;\r
#endif\r
\r
#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	// Normal for Phong shading\r
	in vec3 vNormal;\r
#endif\r
\r
#ifdef highlight_point\r
	// Highlight flag for the point\r
	in float vHighlight;\r
#endif\r
\r
float specularStrength = 1.0;\r
\r
void main() {\r
	// Choose the proper color format\r
	#ifdef new_format\r
		vec3 actualColor = vColor.xyz;\r
	#else\r
		vec3 actualColor = vColor;\r
	#endif\r
	vec3 color = actualColor;\r
\r
	// Precompute normalized point coordinate if needed\r
	#if defined(circle_point_shape) || defined(paraboloid_point_shape) || defined(weighted_splats)\r
		vec2 pc = 2.0 * gl_PointCoord - 1.0;\r
	#endif\r
\r
	// Discard fragments outside circle for certain shapes\r
	#if defined(circle_point_shape) || defined(weighted_splats)\r
		if(dot(pc, pc) > 1.0) discard;\r
	#endif\r
\r
	// Depth comparison for weighted splats\r
	#if defined(weighted_splats)\r
		vec2 uv = gl_FragCoord.xy / vec2(screenWidth, screenHeight);\r
		if(vLinearDepth > texture2D(depthMap, uv).r + vRadius + blendDepthSupplement) discard;\r
	#endif\r
\r
	// Lighting calculations for Phong shading\r
	#if defined(color_type_phong)\r
		#if MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0\r
			vec3 normal = normalize(vNormal);\r
			normal.z = abs(normal.z);\r
			vec3 viewDir = normalize(vViewPosition);\r
		#endif\r
\r
		#if MAX_POINT_LIGHTS > 0\r
			vec3 pointDiffuse = vec3(0.0);\r
			vec3 pointSpecular = vec3(0.0);\r
			// Loop through each point light\r
			for(int i = 0; i < MAX_POINT_LIGHTS; i++) {\r
				vec4 lPos = viewMatrix * vec4(pointLightPosition[i], 1.0);\r
				vec3 lVector = normalize(lPos.xyz + vViewPosition);\r
				float lDistance = (pointLightDistance[i] > 0.0)\r
					? 1.0 - min(length(lVector)/pointLightDistance[i], 1.0)\r
					: 1.0;\r
				float dotVal = dot(normal, lVector);\r
				#ifdef WRAP_AROUND\r
					// Use wrap around lighting if enabled\r
					float fullW = max(dotVal, 0.0);\r
					float halfW = max(0.5 * dotVal + 0.5, 0.0);\r
					float diffuseW = mix(fullW, halfW, wrapRGB);\r
				#else\r
					float diffuseW = max(dotVal, 0.0);\r
				#endif\r
				pointDiffuse += diffuse * pointLightColor[i] * diffuseW * lDistance;\r
				vec3 halfVec = normalize(lVector + viewDir);\r
				float specW = specularStrength * max(pow(max(dot(normal, halfVec), 0.0), shininess), 0.0);\r
				float normFactor = (shininess + 2.0) / 8.0;\r
				vec3 schlick = specular + (vec3(1.0)-specular)*pow(max(1.0-dot(lVector, halfVec), 0.0), 5.0);\r
				pointSpecular += schlick * pointLightColor[i] * specW * diffuseW * lDistance * normFactor;\r
				// Disable specular effect if required\r
				pointSpecular = vec3(0.0);\r
			}\r
		#endif\r
\r
		#if MAX_DIR_LIGHTS > 0\r
			vec3 dirDiffuse = vec3(0.0);\r
			vec3 dirSpecular = vec3(0.0);\r
			// Loop through each directional light\r
			for(int i = 0; i < MAX_DIR_LIGHTS; i++) {\r
				vec4 lDir = viewMatrix * vec4(directionalLightDirection[i], 0.0);\r
				vec3 dVector = normalize(lDir.xyz);\r
				float dotVal = dot(normal, dVector);\r
				#ifdef WRAP_AROUND\r
					float fullW = max(dotVal, 0.0);\r
					float halfW = max(0.5 * dotVal + 0.5, 0.0);\r
					float diffuseW = mix(fullW, halfW, wrapRGB);\r
				#else\r
					float diffuseW = max(dotVal, 0.0);\r
				#endif\r
				dirDiffuse += diffuse * directionalLightColor[i] * diffuseW;\r
				vec3 halfVec = normalize(dVector + viewDir);\r
				float specW = specularStrength * max(pow(max(dot(normal, halfVec), 0.0), shininess), 0.0);\r
				float normFactor = (shininess + 2.0) / 8.0;\r
				vec3 schlick = specular + (vec3(1.0)-specular)*pow(max(1.0-dot(dVector, halfVec), 0.0), 5.0);\r
				dirSpecular += schlick * directionalLightColor[i] * specW * diffuseW * normFactor;\r
			}\r
		#endif\r
\r
		// Combine lighting contributions from both light types\r
		vec3 totalDiffuse = vec3(0.0);\r
		vec3 totalSpecular = vec3(0.0);\r
		#if MAX_POINT_LIGHTS > 0\r
			totalDiffuse += pointDiffuse;\r
			totalSpecular += pointSpecular;\r
		#endif\r
		#if MAX_DIR_LIGHTS > 0\r
			totalDiffuse += dirDiffuse;\r
			totalSpecular += dirSpecular;\r
		#endif\r
		fragColor.xyz = fragColor.xyz * (emissive + totalDiffuse + ambientLightColor * ambient) + totalSpecular;\r
	#endif\r
\r
	// Handle weighted splats or default opacity and color\r
	#if defined(weighted_splats)\r
		float wx = 2.0 * length(pc);\r
		float w = exp(-wx * wx * 0.5);\r
		fragColor.rgb *= w;\r
		fragColor.a = w;\r
	#else\r
		#if defined(color_type_point_index)\r
			fragColor = vec4(color, pcIndex / 255.0);\r
		#else\r
			fragColor = vec4(color, vOpacity);\r
		#endif\r
	#endif\r
\r
	// Compute depth from view position\r
	vec4 pos = vec4(vViewPosition, 1.0);\r
	#if defined(paraboloid_point_shape)\r
		if(!useOrthographicCamera){\r
			// Adjust depth based on point shape\r
			pos.z += -dot(pc, pc) * vRadius;\r
		}\r
	#endif\r
\r
	float linearDepth = -pos.z;\r
	vec4 clipPos = projectionMatrix * pos;\r
	clipPos /= clipPos.w;\r
	#if defined(use_log_depth)\r
		// Logarithmic depth\r
		gl_FragDepth = log2(linearDepth + 1.0) * log(2.0) / log(far + 1.0);\r
	#else\r
		// Standard depth computation\r
		gl_FragDepth = (clipPos.z + 1.0) / 2.0;\r
	#endif\r
\r
	#if defined(color_type_depth)\r
		// Render depth information into color channels\r
		fragColor.r = linearDepth;\r
		fragColor.g = clipPos.z;\r
	#endif\r
\r
	#if defined(use_edl)\r
		// For EDL, pass the log depth\r
		fragColor.a = vLogDepth;\r
	#endif\r
\r
	#if defined(highlight_point)\r
		// Override color for highlighted points\r
		if(vHighlight > 0.0) {\r
			fragColor = highlightedPointColor;\r
		}\r
	#endif\r
}\r
`},26:(i,e,t)=>{t.d(e,{A:()=>n});const n=`precision highp float;\r
precision highp int;\r
\r
#define max_clip_boxes 30  // Maximum number of clipping boxes\r
\r
// Input Attributes\r
in vec3 position;\r
in vec3 normal;\r
in float intensity;\r
in float classification;\r
in float returnNumber;\r
in float numberOfReturns;\r
in float pointSourceID;\r
in vec4 indices;\r
\r
\r
// Uniforms\r
uniform mat4 modelMatrix;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat3 normalMatrix;\r
\r
uniform float pcIndex;\r
\r
uniform float screenWidth;\r
uniform float screenHeight;\r
uniform float fov;\r
uniform float spacing;\r
uniform float viewScale;\r
\r
uniform bool useOrthographicCamera;\r
uniform float orthoWidth;\r
uniform float orthoHeight;\r
\r
#if defined use_clip_box\r
	uniform mat4 clipBoxes[max_clip_boxes]; // Clipping box transforms\r
#endif\r
\r
uniform float heightMin;\r
uniform float heightMax;\r
uniform float size; // Base pixel size\r
uniform float minSize; // Minimum point size\r
uniform float maxSize; // Maximum point size\r
uniform float octreeSize;\r
uniform vec3 bbSize;\r
uniform vec3 uColor;\r
uniform float opacity;\r
uniform float clipBoxCount;\r
uniform float level;\r
uniform float vnStart;\r
uniform bool isLeafNode;\r
\r
uniform float filterByNormalThreshold;\r
uniform vec2 intensityRange;\r
uniform float opacityAttenuation;\r
uniform float intensityGamma;\r
uniform float intensityContrast;\r
uniform float intensityBrightness;\r
uniform float rgbGamma;\r
uniform float rgbContrast;\r
uniform float rgbBrightness;\r
uniform float transition;\r
uniform float wRGB;\r
uniform float wIntensity;\r
uniform float wElevation;\r
uniform float wClassification;\r
uniform float wReturnNumber;\r
uniform float wSourceID;\r
\r
uniform sampler2D visibleNodes;\r
uniform sampler2D gradient;\r
uniform sampler2D classificationLUT;\r
uniform sampler2D depthMap;\r
\r
#ifdef highlight_point\r
	uniform vec3 highlightedPointCoordinate;\r
	uniform bool enablePointHighlighting;\r
	uniform float highlightedPointScale;\r
#endif\r
\r
#ifdef new_format\r
	in vec4 rgba;\r
	out vec4 vColor;\r
#else\r
	in vec3 color;\r
	out vec3 vColor;\r
#endif\r
\r
#if !defined(color_type_point_index)\r
	out float vOpacity;\r
#endif\r
\r
#if defined(weighted_splats)\r
	out float vLinearDepth;\r
#endif\r
\r
#ifdef use_edl\r
	out float vLogDepth;\r
#endif\r
\r
out vec3 vViewPosition;\r
\r
#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	out float vRadius;\r
#endif\r
\r
#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	out vec3 vNormal;\r
#endif\r
\r
#ifdef highlight_point\r
	out float vHighlight;\r
#endif\r
\r
\r
// OCTREE LOD FUNCTIONS\r
#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)\r
\r
// Returns count of bits set up to a given index\r
int numberOfOnes(int number, int index) {\r
	int numOnes = 0;\r
	int tmp = 128;\r
	for (int i = 7; i >= 0; i--) {\r
		if (number >= tmp) {\r
			number -= tmp;\r
			if (i <= index) { numOnes++; }\r
		}\r
		tmp /= 2;\r
	}\r
	return numOnes;\r
}\r
\r
// Checks if bit at specific index is set\r
bool isBitSet(int number, int index){\r
	int powi = (index == 0) ? 1 :\r
			   (index == 1) ? 2 :\r
			   (index == 2) ? 4 :\r
			   (index == 3) ? 8 :\r
			   (index == 4) ? 16 :\r
			   (index == 5) ? 32 :\r
			   (index == 6) ? 64 : 128;\r
	return mod(float(number / powi), 2.0) != 0.0;\r
}\r
\r
// Computes level-of-detail based on octree visibility\r
float getLOD() {\r
	vec3 offset = vec3(0.0);\r
	int iOffset = int(vnStart);\r
	float depth = level;\r
\r
	for (float i = 0.0; i <= 30.0; i++) {\r
		float nodeSizeAtLevel = octreeSize / pow(2.0, i + level);\r
		vec3 index3d = floor((position - offset) / nodeSizeAtLevel + 0.5);\r
		int index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));\r
		\r
		vec4 value = texture(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));\r
		int mask = int(round(value.r * 255.0));\r
\r
		if (isBitSet(mask, index)) {\r
			int advanceG = int(round(value.g * 255.0)) * 256;\r
			int advanceB = int(round(value.b * 255.0));\r
			int advanceChild = numberOfOnes(mask, index - 1);\r
			int advance = advanceG + advanceB + advanceChild;\r
			iOffset += advance;\r
			depth++;\r
		} else {\r
			return value.a * 255.0;\r
		}\r
		offset += (vec3(1.0) * nodeSizeAtLevel * 0.5) * index3d;\r
	}\r
	return depth;\r
}\r
\r
float getPointSizeAttenuation() {\r
	return 0.5 * pow(2.0, getLOD());\r
}\r
\r
#endif\r
\r
\r
// KD-TREE LOD FUNCTIONS\r
\r
#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)\r
\r
float getLOD() {\r
	vec3 offset = vec3(0.0);\r
	float intOffset = 0.0;\r
	float depth = 0.0;\r
	vec3 size_ = bbSize;\r
	vec3 pos = position;\r
		\r
	for (float i = 0.0; i <= 1000.0; i++) {\r
		vec4 value = texture(visibleNodes, vec2(intOffset / 2048.0, 0.0));\r
		int children = int(value.r * 255.0);\r
		float next = value.g * 255.0;\r
		int split = int(value.b * 255.0);\r
		\r
		if (next == 0.0) { return depth; }\r
		\r
		vec3 splitv = (split == 1) ? vec3(1.0, 0.0, 0.0) :\r
					 (split == 2) ? vec3(0.0, 1.0, 0.0) :\r
					 (split == 4) ? vec3(0.0, 0.0, 1.0) : vec3(0.0);\r
		\r
		intOffset += next;\r
		\r
		float factor = length((pos * splitv) / size_);\r
		if (factor < 0.5) {\r
			if (children == 0 || children == 2) { return depth; }\r
		} else {\r
			pos -= size_ * splitv * 0.5;\r
			if (children == 0 || children == 1) { return depth; }\r
			if (children == 3) { intOffset += 1.0; }\r
		}\r
		size_ *= ((1.0 - (splitv + 1.0) / 2.0) + 0.5);\r
		depth++;\r
	}\r
	return depth;	\r
}\r
\r
float getPointSizeAttenuation() {\r
	return 0.5 * pow(1.3, getLOD());\r
}\r
\r
#endif\r
\r
\r
// COLOR/BRIGHTNESS FUNCTIONS\r
\r
float getContrastFactor(float contrast) {\r
	return 1.0158730158730156 * (contrast + 1.0) / (1.0158730158730156 - contrast);\r
}\r
\r
#ifndef new_format\r
// Adjusts RGB values with gamma, contrast and brightness factors\r
vec3 getRGB() {\r
	#if defined(use_rgb_gamma_contrast_brightness)\r
		vec3 rgb = pow(color, vec3(rgbGamma));\r
		rgb += rgbBrightness;\r
		rgb = (rgb - 0.5) * getContrastFactor(rgbContrast) + 0.5;\r
		return clamp(rgb, 0.0, 1.0);\r
	#else\r
		return color;\r
	#endif\r
}\r
#endif\r
\r
// Adjusts intensity value based on settings\r
float getIntensity() {\r
	float w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);\r
	w = pow(w, intensityGamma) + intensityBrightness;\r
	w = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;\r
	return clamp(w, 0.0, 1.0);\r
}\r
\r
// Maps elevation to a gradient color\r
vec3 getElevation() {\r
	vec4 world = modelMatrix * vec4(position, 1.0);\r
	float w = (world.z - heightMin) / (heightMax - heightMin);\r
	return texture(gradient, vec2(w, 1.0 - w)).rgb;\r
}\r
\r
// Gets classification color and transparency from texture LUT\r
vec4 getClassification() {\r
	vec2 uv = vec2(classification / 255.0, 0.5);\r
	return texture(classificationLUT, uv);\r
}\r
\r
// Returns color based on number of returns and return number\r
vec3 getReturnNumber() {\r
	return (numberOfReturns == 1.0) ? vec3(1.0, 1.0, 0.0) :\r
		   (returnNumber == 1.0)    ? vec3(1.0, 0.0, 0.0) :\r
		   (returnNumber == numberOfReturns) ? vec3(0.0, 0.0, 1.0) :\r
										vec3(0.0, 1.0, 0.0);\r
}\r
\r
// Gets source ID color from gradient\r
vec3 getSourceID() {\r
	float w = mod(pointSourceID, 10.0) / 10.0;\r
	return texture(gradient, vec2(w, 1.0 - w)).rgb;\r
}\r
\r
#ifndef new_format\r
// Combines multiple color sources into one composite color\r
vec3 getCompositeColor() {\r
	vec3 c = wRGB * getRGB();\r
	float w = wRGB;\r
	c += wIntensity * getIntensity() * vec3(1.0);\r
	w += wIntensity;\r
	c += wElevation * getElevation();\r
	w += wElevation;\r
	c += wReturnNumber * getReturnNumber();\r
	w += wReturnNumber;\r
	c += wSourceID * getSourceID();\r
	w += wSourceID;\r
\r
	vec4 cl = wClassification * getClassification();\r
	c += cl.a * cl.rgb;\r
	w += wClassification * cl.a;\r
\r
	c /= w;\r
	if (w == 0.0) {\r
		gl_Position = vec4(100.0, 100.0, 100.0, 0.0);\r
	}\r
	return c;\r
}\r
#endif\r
\r
#ifdef new_format\r
// sRGB conversion functions\r
vec4 fromLinear(vec4 linearRGB) {\r
	bvec4 cutoff = lessThan(linearRGB, vec4(0.0031308));\r
	return mix(linearRGB * vec4(12.92), vec4(1.055) * pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055), cutoff);\r
} \r
vec4 toLinear(vec4 sRGB) {\r
	bvec4 cutoff = lessThan(sRGB, vec4(0.04045));\r
	return mix(sRGB/vec4(12.92), pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4)), cutoff);\r
}\r
#else\r
vec3 fromLinear(vec3 linearRGB) {\r
	bvec3 cutoff = lessThan(linearRGB, vec3(0.0031308));\r
	return mix(linearRGB * vec3(12.92), vec3(1.055) * pow(linearRGB, vec3(1.0/2.4)) - vec3(0.055), cutoff);\r
}\r
vec3 toLinear(vec3 sRGB) {\r
	bvec3 cutoff = lessThan(sRGB, vec3(0.04045));\r
	return mix(sRGB/vec3(12.92), pow((sRGB + vec3(0.055))/vec3(1.055), vec3(2.4)), cutoff);\r
}\r
#endif\r
\r
void main() {\r
	// Compute model-view position and projected position\r
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\r
	gl_Position = projectionMatrix * mvPosition;\r
	vViewPosition = mvPosition.xyz;\r
\r
	#if defined weighted_splats\r
		vLinearDepth = gl_Position.w;\r
	#endif\r
\r
	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
		vNormal = normalize(normalMatrix * normal);\r
	#endif\r
\r
	#ifdef use_edl\r
		vLogDepth = log2(-mvPosition.z);\r
	#endif\r
\r
\r
	// POINT SIZE COMPUTATION\r
	float tanHalfFOV = tan(fov * 0.5);\r
	float projFactor = -0.5 * screenHeight / (tanHalfFOV * mvPosition.z);\r
	// Scale compensation based on transformation difference \r
	float scale = length(modelViewMatrix * vec4(0, 0, 0, 1) - modelViewMatrix * vec4(spacing, 0, 0, 1)) / spacing;\r
	projFactor *= scale;\r
	\r
	float pointSize = 1.0;\r
	#if defined fixed_point_size\r
		pointSize = size;\r
	#elif defined attenuated_point_size\r
		pointSize = useOrthographicCamera ? size : size * spacing * projFactor;\r
	#elif defined adaptive_point_size\r
		float worldSpaceSize = 2.0 * size * spacing / getPointSizeAttenuation();\r
		pointSize = useOrthographicCamera ? (worldSpaceSize / orthoWidth) * screenWidth : worldSpaceSize * projFactor;\r
	#endif\r
\r
	pointSize = clamp(pointSize, minSize, maxSize);\r
	#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
		vRadius = pointSize / projFactor;\r
	#endif\r
	\r
	pointSize *= viewScale;\r
	gl_PointSize = pointSize;\r
\r
\r
	// HIGHLIGHTING\r
	#ifdef highlight_point\r
		vec4 mPosition = modelMatrix * vec4(position, 1.0);\r
		if (enablePointHighlighting &&\r
			abs(mPosition.x - highlightedPointCoordinate.x) < 0.0001 &&\r
			abs(mPosition.y - highlightedPointCoordinate.y) < 0.0001 &&\r
			abs(mPosition.z - highlightedPointCoordinate.z) < 0.0001) {\r
			vHighlight = 1.0;\r
			gl_PointSize = pointSize * highlightedPointScale;\r
		} else {\r
			vHighlight = 0.0;\r
		}\r
	#endif\r
\r
\r
	// OPACITY\r
	#ifndef color_type_point_index\r
		#ifdef attenuated_opacity\r
			vOpacity = opacity * exp(-length(-mvPosition.xyz) / opacityAttenuation);\r
		#else\r
			vOpacity = opacity;\r
		#endif\r
	#endif\r
\r
\r
	// NORMAL FILTERING\r
	#ifdef use_filter_by_normal\r
		if(abs((modelViewMatrix * vec4(normal, 0.0)).z) > filterByNormalThreshold) {\r
			gl_Position = vec4(0.0, 0.0, 2.0, 1.0); // Cull point\r
		}\r
	#endif\r
\r
\r
	// POINT COLOR SELECTION\r
	#ifdef new_format\r
		vColor = rgba;\r
	#elif defined color_type_rgb\r
		vColor = getRGB();\r
	#elif defined color_type_height\r
		vColor = getElevation();\r
	#elif defined color_type_rgb_height\r
		vec3 cHeight = getElevation();\r
		vColor = mix(getRGB(), cHeight, transition);\r
	#elif defined color_type_depth\r
		float linearDepth = -mvPosition.z;\r
		float expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;\r
		vColor = vec3(linearDepth, expDepth, 0.0);\r
	#elif defined color_type_intensity\r
		float w = getIntensity();\r
		vColor = vec3(w);\r
	#elif defined color_type_intensity_gradient\r
		float w = getIntensity();\r
		vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_color\r
		vColor = uColor;\r
	#elif defined color_type_lod\r
		float w = getLOD() / 10.0;\r
		vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_point_index\r
		vColor = indices.rgb;\r
	#elif defined color_type_classification\r
		vec4 cl = getClassification();\r
		vColor = cl.rgb;\r
	#elif defined color_type_return_number\r
		vColor = getReturnNumber();\r
	#elif defined color_type_source\r
		vColor = getSourceID();\r
	#elif defined color_type_normal\r
		vColor = (modelMatrix * vec4(normal, 0.0)).xyz;\r
	#elif defined color_type_phong\r
		vColor = color;\r
	#elif defined color_type_composite\r
		vColor = getCompositeColor();\r
	#endif\r
	\r
	#if !defined color_type_composite && defined color_type_classification\r
		if (getClassification().a == 0.0) {\r
			gl_Position = vec4(100.0, 100.0, 100.0, 0.0); // Cull point if classification alpha is zero\r
			return;\r
		}\r
	#endif\r
\r
\r
	// CLIPPING\r
	#if defined use_clip_box\r
		bool insideAny = false;\r
		for (int i = 0; i < max_clip_boxes; i++) {\r
			if (i == int(clipBoxCount)) break;\r
			vec4 clipPosition = clipBoxes[i] * modelMatrix * vec4(position, 1.0);\r
			bool inside = abs(clipPosition.x) <= 0.5 && abs(clipPosition.y) <= 0.5 && abs(clipPosition.z) <= 0.5;\r
			insideAny = insideAny || inside;\r
		}\r
\r
		#if defined clip_outside\r
			if (!insideAny) { gl_Position = vec4(1000.0); } // Cull if outside any clip box\r
		#elif defined clip_inside\r
			if (insideAny) { gl_Position = vec4(1000.0); } // Cull if inside any clip box\r
		#elif defined clip_highlight_inside && !defined(color_type_depth)\r
			if (!insideAny) { /* additional processing if needed */ }\r
		#endif\r
\r
		#if defined clip_highlight_inside\r
			if (insideAny) { vColor.r += 0.5; }\r
		#endif\r
	#endif\r
\r
\r
	// COLOR ENCODING ADJUSTMENTS\r
	#if defined(output_color_encoding_sRGB) && defined(input_color_encoding_linear) && !defined(color_type_point_index)\r
		vColor = toLinear(vColor);\r
	#endif\r
\r
	#if defined(output_color_encoding_linear) && defined(input_color_encoding_sRGB) && !defined(color_type_point_index)\r
		vColor = fromLinear(vColor);\r
	#endif\r
}\r
`},512:i=>{i.exports=function(e,t,n,r){var o=self||window;try{try{var s;try{s=new o.Blob([e])}catch{(s=new(o.BlobBuilder||o.WebKitBlobBuilder||o.MozBlobBuilder||o.MSBlobBuilder)).append(e),s=s.getBlob()}var a=o.URL||o.webkitURL,l=a.createObjectURL(s),c=new o[t](l,n);return a.revokeObjectURL(l),c}catch{return new o[t]("data:application/javascript,".concat(encodeURIComponent(e)),n)}}catch{if(!r)throw Error("Inline worker is not supported");return new o[t](r,n)}}},290:(i,e,t)=>{t.d(e,{A:()=>r});var n=t(512);function r(){return n('const e={DATA_TYPE_DOUBLE:{ordinal:0,name:"double",size:8},DATA_TYPE_FLOAT:{ordinal:1,name:"float",size:4},DATA_TYPE_INT8:{ordinal:2,name:"int8",size:1},DATA_TYPE_UINT8:{ordinal:3,name:"uint8",size:1},DATA_TYPE_INT16:{ordinal:4,name:"int16",size:2},DATA_TYPE_UINT16:{ordinal:5,name:"uint16",size:2},DATA_TYPE_INT32:{ordinal:6,name:"int32",size:4},DATA_TYPE_UINT32:{ordinal:7,name:"uint32",size:4},DATA_TYPE_INT64:{ordinal:8,name:"int64",size:8},DATA_TYPE_UINT64:{ordinal:9,name:"uint64",size:8}};let t=0;for(let n in e)e[t]=e[n],t++;class n{constructor(e,t,n,i=[1/0,-1/0]){this.name=e,this.type=t,this.numElements=n,this.range=i,this.byteSize=this.numElements*this.type.size,this.description=""}}new n("POSITION_CARTESIAN",e.DATA_TYPE_FLOAT,3),new n("COLOR_PACKED",e.DATA_TYPE_INT8,4),new n("COLOR_PACKED",e.DATA_TYPE_INT8,4),new n("COLOR_PACKED",e.DATA_TYPE_INT8,3),new n("NORMAL_FLOATS",e.DATA_TYPE_FLOAT,3),new n("INTENSITY",e.DATA_TYPE_UINT16,1),new n("CLASSIFICATION",e.DATA_TYPE_UINT8,1),new n("NORMAL_SPHEREMAPPED",e.DATA_TYPE_UINT8,2),new n("NORMAL_OCT16",e.DATA_TYPE_UINT8,2),new n("NORMAL",e.DATA_TYPE_FLOAT,3),new n("RETURN_NUMBER",e.DATA_TYPE_UINT8,1),new n("NUMBER_OF_RETURNS",e.DATA_TYPE_UINT8,1),new n("SOURCE_ID",e.DATA_TYPE_UINT16,1),new n("INDICES",e.DATA_TYPE_UINT32,1),new n("SPACING",e.DATA_TYPE_FLOAT,1),new n("GPS_TIME",e.DATA_TYPE_DOUBLE,1);const i=function(){var e=new Int8Array(0);function t(e){this.data=e,this.offset=0}var n=Int32Array.from([256,402,436,468,500,534,566,598,630,662,694,726,758,790,822,854,886,920,952,984,1016,1048,1080]),i=Int32Array.from([1,2,3,4,0,5,17,6,16,7,8,9,10,11,12,13,14,15]),a=Int32Array.from([0,3,2,1,0,0,0,0,0,0,3,3,3,3,3,3]),o=Int32Array.from([0,0,0,0,-1,1,-2,2,-3,3,-1,1,-2,2,-3,3]),r=Int32Array.from([131072,131076,131075,196610,131072,131076,131075,262145,131072,131076,131075,196610,131072,131076,131075,262149]),s=Int32Array.from([0,0,0,0,0,4096,9216,21504,35840,44032,53248,63488,74752,87040,93696,100864,104704,106752,108928,113536,115968,118528,119872,121280,122016]),l=Int32Array.from([0,0,0,0,10,10,11,11,10,10,10,10,10,9,9,8,7,7,8,7,7,6,6,5,5]),c=Int32Array.from([1,5,9,13,17,25,33,41,49,65,81,97,113,145,177,209,241,305,369,497,753,1265,2289,4337,8433,16625]),d=Int32Array.from([2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,7,8,9,10,11,12,13,24]),h=Int16Array.from([0,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,7,8,9,10,12,14,24]),f=Int16Array.from([0,0,0,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,7,8,9,10,24]),u=new Int16Array(2816);function p(e){for(var t=-1,n=16;n>0;)e>>>n!=0&&(t+=n,e>>>=n),n>>=1;return t+e}function m(e,t,n){return 16+t+2*(n<<e)}function g(e,t,n){if(e<n+(2<<t))throw"maxDistance is too small";var i=4+(e-n>>t),a=p(i)-1;return((a-1<<1|i>>a&1)-1<<t)+(1<<t)+n+16}function P(e){if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0!=U(e,1)){var t=U(e,3);return 0==t?1:U(e,t)+(1<<t)}return 0}function $(e,t,n){var i=e[t],a=n.accumulator32>>>n.bitOffset,o=e[i+=255&a]>>16,r=65535&e[i];return o<=8?(n.bitOffset+=o,r):(i+=r,i+=(a&(1<<o)-1)>>>8,n.bitOffset+=8+(e[i]>>16),65535&e[i])}function b(e,t,n){n.bitOffset>=16&&(n.accumulator32=n.shortBuffer[n.halfOffset++]<<16|n.accumulator32>>>16,n.bitOffset-=16);var i=$(e,t,n),a=d[i];return n.bitOffset>=16&&(n.accumulator32=n.shortBuffer[n.halfOffset++]<<16|n.accumulator32>>>16,n.bitOffset-=16),c[i]+(a<=16?U(n,a):_(n,a))}function v(e,t){for(var n=e[t];t>0;t--)e[t]=e[t-1];e[0]=n}function y(e,t,n,a,o){o.halfOffset>2030&&N(o),o.bitOffset>=16&&(o.accumulator32=o.shortBuffer[o.halfOffset++]<<16|o.accumulator32>>>16,o.bitOffset-=16);var s=U(o,2);return 1==s?function(e,t,n,i,a){for(var o=new Int32Array(t),r=new Int32Array(4),s=1+p(e-1),l=U(a,2)+1,c=0;c<l;c++){a.bitOffset>=16&&(a.accumulator32=a.shortBuffer[a.halfOffset++]<<16|a.accumulator32>>>16,a.bitOffset-=16);var d=U(a,s);if(d>=t)throw"Can\'t readHuffmanCode";r[c]=d}!function(e,t){for(var n=0;n<t-1;++n)for(var i=n+1;i<t;++i)if(e[n]==e[i])throw"Duplicate simple Huffman code symbol"}(r,l);var h=l;switch(4==l&&(h+=U(a,1)),h){case 1:o[r[0]]=1;break;case 2:o[r[0]]=1,o[r[1]]=1;break;case 3:o[r[0]]=1,o[r[1]]=2,o[r[2]]=2;break;case 4:o[r[0]]=2,o[r[1]]=2,o[r[2]]=2,o[r[3]]=2;break;case 5:o[r[0]]=1,o[r[1]]=2,o[r[2]]=3,o[r[3]]=3}return L(n,i,8,o,t)}(e,t,n,a,o):function(e,t,n,a,o){for(var s=new Int32Array(e),l=new Int32Array(18),c=32,d=0,h=t;h<18&&c>0;h++){var f=i[h];o.bitOffset>=16&&(o.accumulator32=o.shortBuffer[o.halfOffset++]<<16|o.accumulator32>>>16,o.bitOffset-=16);var u=o.accumulator32>>>o.bitOffset&15;o.bitOffset+=r[u]>>16;var p=65535&r[u];l[f]=p,0!=p&&(c-=32>>p,d++)}if(0!=c&&1!=d)throw"Corrupted Huffman code histogram";return function(e,t,n,i){var a=0,o=8,r=0,s=0,l=32768,c=new Int32Array(33);for(L(c,c.length-1,5,e,18);a<t&&l>0;){i.halfOffset>2030&&N(i),i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var d=i.accumulator32>>>i.bitOffset&31;i.bitOffset+=c[d]>>16;var h=65535&c[d];if(h<16)r=0,n[a++]=h,0!=h&&(o=h,l-=32768>>h);else{var f=h-14,u=0;16==h&&(u=o),s!=u&&(r=0,s=u);var p=r;r>0&&(r-=2,r<<=f),i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var m=(r+=U(i,f)+3)-p;if(a+m>t)throw"symbol + repeatDelta > numSymbols";for(var g=0;g<m;g++)n[a++]=s;0!=s&&(l-=m<<15-s)}}if(0!=l)throw"Unused space";n.fill(0,a,t)}(l,e,s,o),L(n,a,8,s,e)}(t,s,n,a,o)}function X(e,t,i){i.halfOffset>2030&&N(i);var a=P(i)+1;if(1==a)return t.fill(0,0,e),a;i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var o=0;0!=U(i,1)&&(o=U(i,4)+1);var r=a+o,s=n[r+31>>5],l=new Int32Array(s+1),c=l.length-1;y(r,r,l,c,i);for(var d=0;d<e;){i.halfOffset>2030&&N(i),i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var h=$(l,c,i);if(0==h)t[d]=0,d++;else if(h<=o){i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);for(var f=(1<<h)+U(i,h);0!=f;){if(d>=e)throw"Corrupted context map";t[d]=0,d++,f--}}else t[d]=h-o,d++}return i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16),1==U(i,1)&&function(e,t){for(var n=new Int32Array(256),i=0;i<256;i++)n[i]=i;for(i=0;i<t;i++){var a=255&e[i];e[i]=n[a],0!=a&&v(n,a)}}(t,e),a}function w(e,t,n){var i=e.rings,a=4+2*t;e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16);var o=$(e.blockTrees,2*t,e),r=b(e.blockTrees,2*t+1,e);return 1==o?o=i[a+1]+1:0==o?o=i[a]:o-=2,o>=n&&(o-=n),i[a]=i[a+1],i[a+1]=o,r}function Y(e){e.literalBlockLength=w(e,0,e.numLiteralBlockTypes);var t=e.rings[5];e.contextMapSlice=t<<6,e.literalTreeIdx=255&e.contextMap[e.contextMapSlice];var n=e.contextModes[t];e.contextLookupOffset1=n<<9,e.contextLookupOffset2=e.contextLookupOffset1+256}function Q(e){e.commandBlockLength=w(e,1,e.numCommandBlockTypes),e.commandTreeIdx=e.rings[7]}function x(e){e.distanceBlockLength=w(e,2,e.numDistanceBlockTypes),e.distContextMapSlice=e.rings[9]<<2}function k(e){if(0!=e.inputEnd)return e.nextRunningState=10,void(e.runningState=12);e.literalTreeGroup=new Int32Array(0),e.commandTreeGroup=new Int32Array(0),e.distanceTreeGroup=new Int32Array(0),e.halfOffset>2030&&N(e),function(e){if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),e.inputEnd=U(e,1),e.metaBlockLength=0,e.isUncompressed=0,e.isMetadata=0,0==e.inputEnd||0==U(e,1)){var t=U(e,2)+4;if(7==t){if(e.isMetadata=1,0!=U(e,1))throw"Corrupted reserved bit";var n=U(e,2);if(0==n)return;for(var i=0;i<n;i++){if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0==(a=U(e,8))&&i+1==n&&n>1)throw"Exuberant nibble";e.metaBlockLength|=a<<8*i}}else for(i=0;i<t;i++){var a;if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0==(a=U(e,4))&&i+1==t&&t>4)throw"Exuberant nibble";e.metaBlockLength|=a<<4*i}e.metaBlockLength++,0==e.inputEnd&&(e.isUncompressed=U(e,1))}}(e),0==e.metaBlockLength&&0==e.isMetadata||(0!=e.isUncompressed||0!=e.isMetadata?(H(e),e.runningState=0!=e.isMetadata?5:6):e.runningState=3,0==e.isMetadata&&(e.expectedTotalSize+=e.metaBlockLength,e.expectedTotalSize>1<<30&&(e.expectedTotalSize=1<<30),e.ringBufferSize<e.maxRingBufferSize&&function(e){var t=e.maxRingBufferSize;if(t>e.expectedTotalSize){for(var n=e.expectedTotalSize;t>>1>n;)t>>=1;0==e.inputEnd&&t<16384&&e.maxRingBufferSize>=16384&&(t=16384)}if(!(t<=e.ringBufferSize)){var i=new Int8Array(t+37);0!=e.ringBuffer.length&&i.set(e.ringBuffer.subarray(0,0+e.ringBufferSize),0),e.ringBuffer=i,e.ringBufferSize=t}}(e)))}function C(e,t,n){var i=e.blockTrees[2*t];if(n<=1)return e.blockTrees[2*t+1]=i,e.blockTrees[2*t+2]=i,1<<28;var a=n+2;return i+=y(a,a,e.blockTrees,2*t,e),e.blockTrees[2*t+1]=i,i+=y(26,26,e.blockTrees,2*t+1,e),e.blockTrees[2*t+2]=i,b(e.blockTrees,2*t+1,e)}function A(e){e.numLiteralBlockTypes=P(e)+1,e.literalBlockLength=C(e,0,e.numLiteralBlockTypes),e.numCommandBlockTypes=P(e)+1,e.commandBlockLength=C(e,1,e.numCommandBlockTypes),e.numDistanceBlockTypes=P(e)+1,e.distanceBlockLength=C(e,2,e.numDistanceBlockTypes),e.halfOffset>2030&&N(e),e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),e.distancePostfixBits=U(e,2),e.numDirectDistanceCodes=U(e,4)<<e.distancePostfixBits,e.distancePostfixMask=(1<<e.distancePostfixBits)-1,e.contextModes=new Int8Array(e.numLiteralBlockTypes);for(var t=0;t<e.numLiteralBlockTypes;){for(var n=V(t+96,e.numLiteralBlockTypes);t<n;++t)e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),e.contextModes[t]=U(e,2);e.halfOffset>2030&&N(e)}e.contextMap=new Int8Array(e.numLiteralBlockTypes<<6);var i=X(e.numLiteralBlockTypes<<6,e.contextMap,e);e.trivialLiteralContext=1;for(var a=0;a<e.numLiteralBlockTypes<<6;a++)if(e.contextMap[a]!=a>>6){e.trivialLiteralContext=0;break}e.distContextMap=new Int8Array(e.numDistanceBlockTypes<<2);var o=X(e.numDistanceBlockTypes<<2,e.distContextMap,e);e.literalTreeGroup=I(256,256,i,e),e.commandTreeGroup=I(704,704,e.numCommandBlockTypes,e);var r=m(e.distancePostfixBits,e.numDirectDistanceCodes,24),s=r;1==e.isLargeWindow&&(r=m(e.distancePostfixBits,e.numDirectDistanceCodes,62),s=g(2147483644,e.distancePostfixBits,e.numDirectDistanceCodes)),e.distanceTreeGroup=I(r,s,o,e),function(e,t){for(var n=e.distExtraBits,i=e.distOffset,a=e.distancePostfixBits,o=e.numDirectDistanceCodes,r=1<<a,s=1,l=0,c=16,d=0;d<o;++d)n[c]=0,i[c]=d+1,++c;for(;c<t;){var h=o+((2+l<<s)-4<<a)+1;for(d=0;d<r;++d)n[c]=s,i[c]=h+d,++c;s+=l,l^=1}}(e,s),e.contextMapSlice=0,e.distContextMapSlice=0,e.contextLookupOffset1=512*e.contextModes[0],e.contextLookupOffset2=e.contextLookupOffset1+256,e.literalTreeIdx=0,e.commandTreeIdx=0,e.rings[4]=1,e.rings[5]=0,e.rings[6]=1,e.rings[7]=0,e.rings[8]=1,e.rings[9]=0}function T(e){var t=e.ringBuffer;if(e.metaBlockLength<=0)return F(e),void(e.runningState=2);var n=V(e.ringBufferSize-e.pos,e.metaBlockLength);if(function(e,t,n,i){if(7&e.bitOffset)throw"Unaligned copyBytes";for(;32!=e.bitOffset&&0!=i;)t[n++]=e.accumulator32>>>e.bitOffset,e.bitOffset+=8,i--;if(0!=i){var a=V(W(e),i>>1);if(a>0){var o=e.halfOffset<<1,r=a<<1;t.set(e.byteBuffer.subarray(o,o+r),n),n+=r,i-=r,e.halfOffset+=a}if(0!=i)if(W(e)>0){for(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16);0!=i;)t[n++]=e.accumulator32>>>e.bitOffset,e.bitOffset+=8,i--;M(e,0)}else for(;i>0;){var s=Z(e.input,t,n,i);if(-1==s)throw"Unexpected end of input";n+=s,i-=s}}}(e,t,e.pos,n),e.metaBlockLength-=n,e.pos+=n,e.pos==e.ringBufferSize)return e.nextRunningState=6,void(e.runningState=12);F(e),e.runningState=2}function B(e){var t=V(e.outputLength-e.outputUsed,e.ringBufferBytesReady-e.ringBufferBytesWritten);return 0!=t&&(e.output.set(e.ringBuffer.subarray(e.ringBufferBytesWritten,e.ringBufferBytesWritten+t),e.outputOffset+e.outputUsed),e.outputUsed+=t,e.ringBufferBytesWritten+=t),e.outputUsed<e.outputLength?1:0}function I(e,t,i,a){for(var o=n[t+31>>5],r=new Int32Array(i+i*o),s=i,l=0;l<i;++l)r[l]=s,s+=y(e,t,r,l,a);return r}function O(e){var t=e.ringBufferSize;return 0!=e.isEager&&(t=V(t,e.ringBufferBytesWritten+e.outputLength-e.outputUsed)),t}function S(t){if(0==t.runningState)throw"Can\'t decompress until initialized";if(11==t.runningState)throw"Can\'t decompress after close";if(1==t.runningState){var n=function(e){var t=e.isLargeWindow;if(e.isLargeWindow=0,e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0==U(e,1))return 16;var n=U(e,3);return 0!=n?17+n:0!=(n=U(e,3))?1==n?0==t?-1:(e.isLargeWindow=1,1==U(e,1)||(n=U(e,6))<10||n>30?-1:n):8+n:17}(t);if(-1==n)throw"Invalid \'windowBits\' code";t.maxRingBufferSize=1<<n,t.maxBackwardDistance=t.maxRingBufferSize-16,t.runningState=2}for(var i=O(t),r=t.ringBufferSize-1,c=t.ringBuffer;10!=t.runningState;)switch(t.runningState){case 2:if(t.metaBlockLength<0)throw"Invalid metablock length";k(t),i=O(t),r=t.ringBufferSize-1,c=t.ringBuffer;continue;case 3:A(t),t.runningState=4;case 4:if(t.metaBlockLength<=0){t.runningState=2;continue}t.halfOffset>2030&&N(t),0==t.commandBlockLength&&Q(t),t.commandBlockLength--,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16);var d=$(t.commandTreeGroup,t.commandTreeIdx,t)<<2,h=u[d],f=u[d+1],p=u[d+2];t.distanceCode=u[d+3],t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16);var m=255&h;t.insertLength=f+(m<=16?U(t,m):_(t,m)),t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),m=h>>8,t.copyLength=p+(m<=16?U(t,m):_(t,m)),t.j=0,t.runningState=7;case 7:if(0!=t.trivialLiteralContext){for(;t.j<t.insertLength;)if(t.halfOffset>2030&&N(t),0==t.literalBlockLength&&Y(t),t.literalBlockLength--,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),c[t.pos]=$(t.literalTreeGroup,t.literalTreeIdx,t),t.pos++,t.j++,t.pos>=i){t.nextRunningState=7,t.runningState=12;break}}else for(var g=255&c[t.pos-1&r],P=255&c[t.pos-2&r];t.j<t.insertLength;){t.halfOffset>2030&&N(t),0==t.literalBlockLength&&Y(t);var b=G[t.contextLookupOffset1+g]|G[t.contextLookupOffset2+P],v=255&t.contextMap[t.contextMapSlice+b];if(t.literalBlockLength--,P=g,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),g=$(t.literalTreeGroup,v,t),c[t.pos]=g,t.pos++,t.j++,t.pos>=i){t.nextRunningState=7,t.runningState=12;break}}if(7!=t.runningState)continue;if(t.metaBlockLength-=t.insertLength,t.metaBlockLength<=0){t.runningState=4;continue}var y=t.distanceCode;if(y<0)t.distance=t.rings[t.distRbIdx];else{t.halfOffset>2030&&N(t),0==t.distanceBlockLength&&x(t),t.distanceBlockLength--,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16);var X=255&t.distContextMap[t.distContextMapSlice+y];if((y=$(t.distanceTreeGroup,X,t))<16){var w=t.distRbIdx+a[y]&3;if(t.distance=t.rings[w]+o[y],t.distance<0)throw"Negative distance"}else{var C;m=t.distExtraBits[y],t.bitOffset+m<=32?C=U(t,m):(t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),C=m<=16?U(t,m):_(t,m)),t.distance=t.distOffset[y]+(C<<t.distancePostfixBits)}}if(t.maxDistance!=t.maxBackwardDistance&&t.pos<t.maxBackwardDistance?t.maxDistance=t.pos:t.maxDistance=t.maxBackwardDistance,t.distance>t.maxDistance){t.runningState=9;continue}if(y>0&&(t.distRbIdx=t.distRbIdx+1&3,t.rings[t.distRbIdx]=t.distance),t.copyLength>t.metaBlockLength)throw"Invalid backward reference";t.j=0,t.runningState=8;case 8:var I=t.pos-t.distance&r,S=t.pos,q=t.copyLength-t.j,D=I+q,z=S+q;if(D<r&&z<r){if(q<12||D>S&&z>I)for(var L=0;L<q;L+=4)c[S++]=c[I++],c[S++]=c[I++],c[S++]=c[I++],c[S++]=c[I++];else c.copyWithin(S,I,D);t.j+=q,t.metaBlockLength-=q,t.pos+=q}else for(;t.j<t.copyLength;)if(c[t.pos]=c[t.pos-t.distance&r],t.metaBlockLength--,t.pos++,t.j++,t.pos>=i){t.nextRunningState=8,t.runningState=12;break}8==t.runningState&&(t.runningState=4);continue;case 9:if(t.distance>2147483644)throw"Invalid backward reference";if(!(t.copyLength>=4&&t.copyLength<=24))throw"Invalid backward reference";var R=s[t.copyLength],F=t.distance-t.maxDistance-1,W=l[t.copyLength],J=F>>>W;if(R+=(F&(1<<W)-1)*t.copyLength,!(J<121))throw"Invalid backward reference";var K=E(c,t.pos,e,R,t.copyLength,j,J);if(t.pos+=K,t.metaBlockLength-=K,t.pos>=i){t.nextRunningState=4,t.runningState=12;continue}t.runningState=4;continue;case 5:for(;t.metaBlockLength>0;)t.halfOffset>2030&&N(t),t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),U(t,8),t.metaBlockLength--;t.runningState=2;continue;case 6:T(t);continue;case 12:t.ringBufferBytesReady=V(t.pos,t.ringBufferSize),t.runningState=13;case 13:if(0==B(t))return;t.pos>=t.maxBackwardDistance&&(t.maxDistance=t.maxBackwardDistance),t.pos>=t.ringBufferSize&&(t.pos>t.ringBufferSize&&c.copyWithin(0,t.ringBufferSize,t.pos),t.pos&=r,t.ringBufferBytesWritten=0),t.runningState=t.nextRunningState;continue;default:throw"Unexpected state "+t.runningState}if(10==t.runningState){if(t.metaBlockLength<0)throw"Invalid metablock length";H(t),M(t,1)}}!function(e){var t=new Int16Array(24),n=new Int16Array(24);n[0]=2;for(var i=0;i<23;++i)t[i+1]=t[i]+(1<<h[i]),n[i+1]=n[i]+(1<<f[i]);for(var a=0;a<704;++a){var o=a>>>6,r=-4;o>=2&&(o-=2,r=0);var s=(170064>>>2*o&3)<<3|a>>>3&7,l=(156228>>>2*o&3)<<3|7&a,c=n[l],d=r+(c>4?3:c-2),u=4*a;e[u+0]=h[s]|f[l]<<8,e[u+1]=t[s],e[u+2]=n[l],e[u+3]=d}}(u);var j=new function(){this.numTransforms=0,this.triplets=new Int32Array(0),this.prefixSuffixStorage=new Int8Array(0),this.prefixSuffixHeads=new Int32Array(0),this.params=new Int16Array(0),this.numTransforms=121,this.triplets=new Int32Array(363),this.params=new Int16Array(121),this.prefixSuffixStorage=new Int8Array(167),this.prefixSuffixHeads=new Int32Array(51)}(121,167,50);function E(e,t,n,i,a,o,r){var s=t,l=o.triplets,c=o.prefixSuffixStorage,d=o.prefixSuffixHeads,h=3*r,f=l[h],u=l[h+1],p=l[h+2],m=d[f],g=d[f+1],P=d[p],$=d[p+1],b=u-11,v=u-0;for((b<1||b>9)&&(b=0),(v<1||v>9)&&(v=0);m!=g;)e[s++]=c[m++];b>a&&(b=a),i+=b,a-=b;for(var y=a-=v;y>0;)e[s++]=n[i++],y--;if(10==u||11==u){var X=s-a;for(10==u&&(a=1);a>0;)(x=255&e[X])<192?(x>=97&&x<=122&&(e[X]^=32),X+=1,a-=1):x<224?(e[X+1]^=32,X+=2,a-=2):(e[X+2]^=5,X+=3,a-=3)}else if(21==u||22==u)for(var w=s-a,Y=o.params[r],Q=16777216-(32768&Y)+(32767&Y);a>0;){var x,k=1;if((x=255&e[w])<128)Q+=x,e[w]=127&Q;else if(x<192);else if(x<224)a>=2?(Q+=63&(C=e[w+1])|(31&x)<<6,e[w]=192|Q>>6&31,e[w+1]=192&C|63&Q,k=2):k=a;else if(x<240)if(a>=3){var C=e[w+1];Q+=63&(A=e[w+2])|(63&C)<<6|(15&x)<<12,e[w]=224|Q>>12&15,e[w+1]=192&C|Q>>6&63,e[w+2]=192&A|63&Q,k=3}else k=a;else if(x<248)if(a>=4){C=e[w+1];var A=e[w+2],T=e[w+3];Q+=63&T|(63&A)<<6|(63&C)<<12|(7&x)<<18,e[w]=240|Q>>18&7,e[w+1]=192&C|Q>>12&63,e[w+2]=192&A|Q>>6&63,e[w+3]=192&T|63&Q,k=4}else k=a;w+=k,a-=k,21==u&&(a=0)}for(;P!=$;)e[s++]=c[P++];return s-t}function q(e,t){for(var n=1<<t-1;e&n;)n>>=1;return(e&n-1)+n}function D(e,t,n,i,a){do{e[t+(i-=n)]=a}while(i>0)}function z(e,t,n){for(var i=1<<t-n;t<15&&!((i-=e[t])<=0);)t++,i<<=1;return t-n}function L(e,t,n,i,a){var o,r,s=e[t],l=new Int32Array(a),c=new Int32Array(16),d=new Int32Array(16);for(r=0;r<a;r++)c[i[r]]++;d[1]=0;for(var h=1;h<15;h++)d[h+1]=d[h]+c[h];for(r=0;r<a;r++)0!=i[r]&&(l[d[i[r]]++]=r);var f=n,u=1<<f,p=u;if(1==d[15]){for(o=0;o<p;o++)e[s+o]=l[0];return p}o=0,r=0,h=1;for(var m=2;h<=n;h++,m<<=1)for(;c[h]>0;c[h]--)D(e,s+o,m,u,h<<16|l[r++]),o=q(o,h);var g=p-1,P=-1,$=s;for(h=n+1,m=2;h<=15;h++,m<<=1)for(;c[h]>0;c[h]--)(o&g)!=P&&($+=u,p+=u=1<<(f=z(c,h,n)),e[s+(P=o&g)]=f+n<<16|$-s-P),D(e,$+(o>>n),m,u,h-n<<16|l[r++]),o=q(o,h);return p}function N(e){if(0!=e.endOfStreamReached){if(W(e)>=-2)return;throw"No more input"}var t=e.halfOffset<<1,n=4096-t;for(e.byteBuffer.copyWithin(0,t,4096),e.halfOffset=0;n<4096;){var i=4096-n,a=Z(e.input,e.byteBuffer,n,i);if(a<=0){e.endOfStreamReached=1,e.tailBytes=n,n+=1;break}n+=a}!function(e,t){for(var n=e.byteBuffer,i=t>>1,a=e.shortBuffer,o=0;o<i;++o)a[o]=255&n[2*o]|(255&n[2*o+1])<<8}(e,n)}function M(e,t){if(0!=e.endOfStreamReached){var n=(e.halfOffset<<1)+(e.bitOffset+7>>3)-4;if(n>e.tailBytes)throw"Read after end";if(0!=t&&n!=e.tailBytes)throw"Unused bytes after end"}}function U(e,t){var n=e.accumulator32>>>e.bitOffset&(1<<t)-1;return e.bitOffset+=t,n}function _(e,t){var n=U(e,16);return e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16,n|U(e,t-16)<<16}function R(e){e.halfOffset>2030&&N(e),M(e,0),e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16,e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16}function F(e){32==e.bitOffset&&R(e)}function H(e){var t=32-e.bitOffset&7;if(0!=t&&0!=U(e,t))throw"Corrupted padding bits"}function W(e){var t=2048;return 0!=e.endOfStreamReached&&(t=e.tailBytes+1>>1),t-e.halfOffset}!function(e,t,n,i){for(var a=1,o=0,r=0;r<217;++r){var s=i.charCodeAt(r);35==s?t[a++]=o:e[o++]=s}for(r=0;r<363;++r)n[r]="     !! ! ,  *!  &!  \\" !  ) *   * -  ! # !  #!*!  +  ,$ !  -  %  .  / #   0  1 .  \\"   2  3!*   4%  ! # /   5  6  7  8 0  1 &   $   9 +   :  ;  < \'  !=  >  ?! 4  @ 4  2  &   A *# (   B  C& ) %  ) !*# *-% A +! *.  D! %\'  & E *6  F  G% ! *A *%  H! D  I!+!  J!+   K +- *4! A  L!*4  M  N +6  O!*% +.! K *G  P +%(  ! G *D +D  Q +# *K!*G!+D!+# +G +A +4!+% +K!+4!*D!+K!*K".charCodeAt(r)-32}(j.prefixSuffixStorage,j.prefixSuffixHeads,j.triplets,\'# #s #, #e #.# the #.com/#Â # of # and # in # to #"#">#\\n#]# for # a # that #. # with #\\\'# from # by #. The # on # as # is #ing #\\n\\t#:#ed #(# at #ly #="# of the #. This #,# not #er #al #=\\\'#ful #ive #less #est #ize #ous #\');var G=new Int32Array(2048);function J(){this.ringBuffer=new Int8Array(0),this.contextModes=new Int8Array(0),this.contextMap=new Int8Array(0),this.distContextMap=new Int8Array(0),this.distExtraBits=new Int8Array(0),this.output=new Int8Array(0),this.byteBuffer=new Int8Array(0),this.shortBuffer=new Int16Array(0),this.intBuffer=new Int32Array(0),this.rings=new Int32Array(0),this.blockTrees=new Int32Array(0),this.literalTreeGroup=new Int32Array(0),this.commandTreeGroup=new Int32Array(0),this.distanceTreeGroup=new Int32Array(0),this.distOffset=new Int32Array(0),this.runningState=0,this.nextRunningState=0,this.accumulator32=0,this.bitOffset=0,this.halfOffset=0,this.tailBytes=0,this.endOfStreamReached=0,this.metaBlockLength=0,this.inputEnd=0,this.isUncompressed=0,this.isMetadata=0,this.literalBlockLength=0,this.numLiteralBlockTypes=0,this.commandBlockLength=0,this.numCommandBlockTypes=0,this.distanceBlockLength=0,this.numDistanceBlockTypes=0,this.pos=0,this.maxDistance=0,this.distRbIdx=0,this.trivialLiteralContext=0,this.literalTreeIdx=0,this.commandTreeIdx=0,this.j=0,this.insertLength=0,this.contextMapSlice=0,this.distContextMapSlice=0,this.contextLookupOffset1=0,this.contextLookupOffset2=0,this.distanceCode=0,this.numDirectDistanceCodes=0,this.distancePostfixMask=0,this.distancePostfixBits=0,this.distance=0,this.copyLength=0,this.maxBackwardDistance=0,this.maxRingBufferSize=0,this.ringBufferSize=0,this.expectedTotalSize=0,this.outputOffset=0,this.outputLength=0,this.outputUsed=0,this.ringBufferBytesWritten=0,this.ringBufferBytesReady=0,this.isEager=0,this.isLargeWindow=0,this.input=null,this.ringBuffer=new Int8Array(0),this.rings=new Int32Array(10),this.rings[0]=16,this.rings[1]=15,this.rings[2]=11,this.rings[3]=4}!function(e){for(var t=0;t<256;++t)e[t]=63&t,e[512+t]=t>>2,e[1792+t]=2+(t>>6);for(t=0;t<128;++t)e[1024+t]=4*("         !!  !                  \\"#$##%#$&\'##(#)#++++++++++((&*\'##,---,---,-----,-----,-----&#\'###.///.///./////./////./////&#\'# ".charCodeAt(t)-32);for(t=0;t<64;++t)e[1152+t]=1&t,e[1216+t]=2+(1&t);for(var n=1280,i=0;i<19;++i){var a=3&i,o="A/*  \':  & : $   @".charCodeAt(i)-32;for(t=0;t<o;++t)e[n++]=a}for(t=0;t<16;++t)e[1792+t]=1,e[2032+t]=6;for(e[1792]=0,e[2047]=7,t=0;t<256;++t)e[1536+t]=e[1792+t]<<3}(G);var K=new Int8Array(122784);function V(e,t){return e<=t?e:t}function Z(e,t,n,i){if(null==e)return-1;var a=V(e.offset+i,e.data.length),o=a-e.offset;return t.set(e.data.subarray(e.offset,a),n),e.offset+=o,o}return function(e,t,n,i){var a=function(e){for(var t=e.length,n=new Int8Array(t),i=0;i<t;++i)n[i]=e.charCodeAt(i);return n}(\'timedownlifeleftbackcodedatashowonlysitecityopenjustlikefreeworktextyearoverbodyloveformbookplaylivelinehelphomesidemorewordlongthemviewfindpagedaysfullheadtermeachareafromtruemarkableuponhighdatelandnewsevennextcasebothpostusedmadehandherewhatnameLinkblogsizebaseheldmakemainuser\\\') +holdendswithNewsreadweresigntakehavegameseencallpathwellplusmenufilmpartjointhislistgoodneedwayswestjobsmindalsologorichuseslastteamarmyfoodkingwilleastwardbestfirePageknowaway.pngmovethanloadgiveselfnotemuchfeedmanyrockicononcelookhidediedHomerulehostajaxinfoclublawslesshalfsomesuchzone100%onescareTimeracebluefourweekfacehopegavehardlostwhenparkkeptpassshiproomHTMLplanTypedonesavekeepflaglinksoldfivetookratetownjumpthusdarkcardfilefearstaykillthatfallautoever.comtalkshopvotedeepmoderestturnbornbandfellroseurl(skinrolecomeactsagesmeetgold.jpgitemvaryfeltthensenddropViewcopy1.0"</a>stopelseliestourpack.gifpastcss?graymean&gt;rideshotlatesaidroadvar feeljohnrickportfast\\\'UA-dead</b>poorbilltypeU.S.woodmust2px;Inforankwidewantwalllead[0];paulwavesure$(\\\'#waitmassarmsgoesgainlangpaid!-- lockunitrootwalkfirmwifexml"songtest20pxkindrowstoolfontmailsafestarmapscorerainflowbabyspansays4px;6px;artsfootrealwikiheatsteptriporg/lakeweaktoldFormcastfansbankveryrunsjulytask1px;goalgrewslowedgeid="sets5px;.js?40pxif (soonseatnonetubezerosentreedfactintogiftharm18pxcamehillboldzoomvoideasyringfillpeakinitcost3px;jacktagsbitsrolleditknewnear\\x3c!--growJSONdutyNamesaleyou lotspainjazzcoldeyesfishwww.risktabsprev10pxrise25pxBlueding300,ballfordearnwildbox.fairlackverspairjunetechif(!pickevil$("#warmlorddoespull,000ideadrawhugespotfundburnhrefcellkeystickhourlossfuel12pxsuitdealRSS"agedgreyGET"easeaimsgirlaids8px;navygridtips#999warsladycars); }php?helltallwhomzh:e*/\\r\\n 100hall.\\n\\nA7px;pushchat0px;crew*/</hash75pxflatrare && tellcampontolaidmissskiptentfinemalegetsplot400,\\r\\n\\r\\ncoolfeet.php<br>ericmostguidbelldeschairmathatom/img&#82luckcent000;tinygonehtmlselldrugFREEnodenick?id=losenullvastwindRSS wearrelybeensamedukenasacapewishgulfT23:hitsslotgatekickblurthey15px\\\'\\\'););">msiewinsbirdsortbetaseekT18:ordstreemall60pxfarmb\\0sboys[0].\\\');"POSTbearkids);}}marytend(UK)quadzh:f-siz----prop\\\');\\rliftT19:viceandydebt>RSSpoolneckblowT16:doorevalT17:letsfailoralpollnovacolsgene b\\0softrometillross<h3>pourfadepink<tr>mini)|!(minezh:hbarshear00);milk --\\x3eironfreddiskwentsoilputs/js/holyT22:ISBNT20:adamsees<h2>json\\\', \\\'contT21: RSSloopasiamoon</p>soulLINEfortcartT14:<h1>80px!--<9px;T04:mike:46ZniceinchYorkricezh:d\\\'));puremageparatonebond:37Z_of_\\\']);000,zh:gtankyardbowlbush:56ZJava30px\\n|}\\n%C3%:34ZjeffEXPIcashvisagolfsnowzh:iquer.csssickmeatmin.binddellhirepicsrent:36ZHTTP-201fotowolfEND xbox:54ZBODYdick;\\n}\\nexit:35Zvarsbeat\\\'});diet999;anne}}</[i].LangkmB2wiretoysaddssealalex;\\n\\t}echonine.org005)tonyjewssandlegsroof000) 200winegeardogsbootgarycutstyletemption.xmlcockgang$(\\\'.50pxPh.Dmiscalanloandeskmileryanunixdisc);}\\ndustclip).\\n\\n70px-200DVDs7]><tapedemoi++)wageeurophiloptsholeFAQsasin-26TlabspetsURL bulkcook;}\\r\\nHEAD[0])abbrjuan(198leshtwin</i>sonyguysfuckpipe|-\\n!002)ndow[1];[];\\nLog salt\\r\\n\\t\\tbangtrimbath){\\r\\n00px\\n});ko:lfeesad>\\rs:// [];tollplug(){\\n{\\r\\n .js\\\'200pdualboat.JPG);\\n}quot);\\n\\n\\\');\\n\\r\\n}\\r201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037201320122011201020092008200720062005200420032002200120001999199819971996199519941993199219911990198919881987198619851984198319821981198019791978197719761975197419731972197119701969196819671966196519641963196219611960195919581957195619551954195319521951195010001024139400009999comomC!sesteestaperotodohacecadaaC1obiendC-aasC-vidacasootroforosolootracualdijosidograntipotemadebealgoquC)estonadatrespococasabajotodasinoaguapuesunosantediceluisellamayozonaamorpisoobraclicellodioshoracasiP7P0P=P0P>P<Q\\0P0Q\\0QQP0P=P5P?P>P>QP8P7P=P>P4P>QP>P6P5P>P=P8QPP0P5P5P1Q\\vP<Q\\vPQ\\vQP>P2Q\\vP2P>PP>P>P1PP>P;P8P=P8P P$PP5PQ\\vQQ\\vPP=P8P<P4P0PP0PP0PQPP1QP5PP7P5P9P=QP<P<P"Q\\vQP6YY\\nX#YYX\\\'YX9YYX#Y\\bX1X/Y\\nX\\\'YY\\tY\x07Y\\bYYYYX\\\'Y\\bYY\x07X(X3X\\\'YX%YY\x07Y\\nX#Y\\nYX/Y\x07YX+YX(Y\x07YY\\bYY\\nX(YX\\\'Y\\nX(YX4Y\\nX\\\'YX#YYX*X(Y\\nYYX-X(Y\x07YYX4Y\\bX4firstvideolightworldmediawhitecloseblackrightsmallbooksplacemusicfieldorderpointvalueleveltableboardhousegroupworksyearsstatetodaywaterstartstyledeathpowerphonenighterrorinputabouttermstitletoolseventlocaltimeslargewordsgamesshortspacefocusclearmodelblockguideradiosharewomenagainmoneyimagenamesyounglineslatercolorgreenfront&amp;watchforcepricerulesbeginaftervisitissueareasbelowindextotalhourslabelprintpressbuiltlinksspeedstudytradefoundsenseundershownformsrangeaddedstillmovedtakenaboveflashfixedoftenotherviewschecklegalriveritemsquickshapehumanexistgoingmoviethirdbasicpeacestagewidthloginideaswrotepagesusersdrivestorebreaksouthvoicesitesmonthwherebuildwhichearthforumthreesportpartyClicklowerlivesclasslayerentrystoryusagesoundcourtyour birthpopuptypesapplyImagebeinguppernoteseveryshowsmeansextramatchtrackknownearlybegansuperpapernorthlearngivennamedendedTermspartsGroupbrandusingwomanfalsereadyaudiotakeswhile.com/livedcasesdailychildgreatjudgethoseunitsneverbroadcoastcoverapplefilescyclesceneplansclickwritequeenpieceemailframeolderphotolimitcachecivilscaleenterthemetheretouchboundroyalaskedwholesincestock namefaithheartemptyofferscopeownedmightalbumthinkbloodarraymajortrustcanonunioncountvalidstoneStyleLoginhappyoccurleft:freshquitefilmsgradeneedsurbanfightbasishoverauto;route.htmlmixedfinalYour slidetopicbrownalonedrawnsplitreachRightdatesmarchquotegoodsLinksdoubtasyncthumballowchiefyouthnovel10px;serveuntilhandsCheckSpacequeryjamesequaltwice0,000Startpanelsongsroundeightshiftworthpostsleadsweeksavoidthesemilesplanesmartalphaplantmarksratesplaysclaimsalestextsstarswrong</h3>thing.org/multiheardPowerstandtokensolid(thisbringshipsstafftriedcallsfullyfactsagentThis //--\\x3eadminegyptEvent15px;Emailtrue"crossspentblogsbox">notedleavechinasizesguest</h4>robotheavytrue,sevengrandcrimesignsawaredancephase>\\x3c!--en_US&#39;200px_namelatinenjoyajax.ationsmithU.S. holdspeterindianav">chainscorecomesdoingpriorShare1990sromanlistsjapanfallstrialowneragree</h2>abusealertopera"-//WcardshillsteamsPhototruthclean.php?saintmetallouismeantproofbriefrow">genretrucklooksValueFrame.net/--\\x3e\\n<try {\\nvar makescostsplainadultquesttrainlaborhelpscausemagicmotortheir250pxleaststepsCountcouldglasssidesfundshotelawardmouthmovesparisgivesdutchtexasfruitnull,||[];top">\\n\\x3c!--POST"ocean<br/>floorspeakdepth sizebankscatchchart20px;aligndealswould50px;url="parksmouseMost ...</amongbrainbody none;basedcarrydraftreferpage_home.meterdelaydreamprovejoint</tr>drugs\\x3c!-- aprilidealallenexactforthcodeslogicView seemsblankports (200saved_linkgoalsgrantgreekhomesringsrated30px;whoseparse();" Blocklinuxjonespixel\\\');">);if(-leftdavidhorseFocusraiseboxesTrackement</em>bar">.src=toweralt="cablehenry24px;setupitalysharpminortastewantsthis.resetwheelgirls/css/100%;clubsstuffbiblevotes 1000korea});\\r\\nbandsqueue= {};80px;cking{\\r\\n\\t\\taheadclockirishlike ratiostatsForm"yahoo)[0];Aboutfinds</h1>debugtasksURL =cells})();12px;primetellsturns0x600.jpg"spainbeachtaxesmicroangel--\\x3e</giftssteve-linkbody.});\\n\\tmount (199FAQ</rogerfrankClass28px;feeds<h1><scotttests22px;drink) || lewisshall#039; for lovedwaste00px;ja:csimon<fontreplymeetsuntercheaptightBrand) != dressclipsroomsonkeymobilmain.Name platefunnytreescom/"1.jpgwmodeparamSTARTleft idden, 201);\\n}\\nform.viruschairtransworstPagesitionpatch\\x3c!--\\no-cacfirmstours,000 asiani++){adobe\\\')[0]id=10both;menu .2.mi.png"kevincoachChildbruce2.jpgURL)+.jpg|suitesliceharry120" sweettr>\\r\\nname=diegopage swiss--\\x3e\\n\\n#fff;">Log.com"treatsheet) && 14px;sleepntentfiledja:cid="cName"worseshots-box-delta\\n&lt;bears:48Z<data-rural</a> spendbakershops= "";php">ction13px;brianhellosize=o=%2F joinmaybe<img img">, fjsimg" ")[0]MTopBType"newlyDanskczechtrailknows</h5>faq">zh-cn10);\\n-1");type=bluestrulydavis.js\\\';>\\r\\n<!steel you h2>\\r\\nform jesus100% menu.\\r\\n\\t\\r\\nwalesrisksumentddingb-likteachgif" vegasdanskeestishqipsuomisobredesdeentretodospuedeaC1osestC!tienehastaotrospartedondenuevohacerformamismomejormundoaquC-dC-assC3loayudafechatodastantomenosdatosotrassitiomuchoahoralugarmayorestoshorastenerantesfotosestaspaC-snuevasaludforosmedioquienmesespoderchileserC!vecesdecirjosC)estarventagrupohechoellostengoamigocosasnivelgentemismaairesjuliotemashaciafavorjuniolibrepuntobuenoautorabrilbuenatextomarzosaberlistaluegocC3moenerojuegoperC:haberestoynuncamujervalorfueralibrogustaigualvotoscasosguC-apuedosomosavisousteddebennochebuscafaltaeurosseriedichocursoclavecasasleC3nplazolargoobrasvistaapoyojuntotratavistocrearcampohemoscincocargopisosordenhacenC!readiscopedrocercapuedapapelmenorC:tilclarojorgecalleponertardenadiemarcasigueellassiglocochemotosmadreclaserestoniC1oquedapasarbancohijosviajepabloC)stevienereinodejarfondocanalnorteletracausatomarmanoslunesautosvillavendopesartipostengamarcollevapadreunidovamoszonasambosbandamariaabusomuchasubirriojavivirgradochicaallC-jovendichaestantalessalirsuelopesosfinesllamabuscoC)stalleganegroplazahumorpagarjuntadobleislasbolsabaC1ohablaluchaCreadicenjugarnotasvalleallC!cargadolorabajoestC)gustomentemariofirmacostofichaplatahogarartesleyesaquelmuseobasespocosmitadcielochicomiedoganarsantoetapadebesplayaredessietecortecoreadudasdeseoviejodeseaaguas&quot;domaincommonstatuseventsmastersystemactionbannerremovescrollupdateglobalmediumfilternumberchangeresultpublicscreenchoosenormaltravelissuessourcetargetspringmodulemobileswitchphotosborderregionitselfsocialactivecolumnrecordfollowtitle>eitherlengthfamilyfriendlayoutauthorcreatereviewsummerserverplayedplayerexpandpolicyformatdoublepointsseriespersonlivingdesignmonthsforcesuniqueweightpeopleenergynaturesearchfigurehavingcustomoffsetletterwindowsubmitrendergroupsuploadhealthmethodvideosschoolfutureshadowdebatevaluesObjectothersrightsleaguechromesimplenoticesharedendingseasonreportonlinesquarebuttonimagesenablemovinglatestwinterFranceperiodstrongrepeatLondondetailformeddemandsecurepassedtoggleplacesdevicestaticcitiesstreamyellowattackstreetflighthiddeninfo">openedusefulvalleycausesleadersecretseconddamagesportsexceptratingsignedthingseffectfieldsstatesofficevisualeditorvolumeReportmuseummoviesparentaccessmostlymother" id="marketgroundchancesurveybeforesymbolmomentspeechmotioninsidematterCenterobjectexistsmiddleEuropegrowthlegacymannerenoughcareeransweroriginportalclientselectrandomclosedtopicscomingfatheroptionsimplyraisedescapechosenchurchdefinereasoncorneroutputmemoryiframepolicemodelsNumberduringoffersstyleskilledlistedcalledsilvermargindeletebetterbrowselimitsGlobalsinglewidgetcenterbudgetnowrapcreditclaimsenginesafetychoicespirit-stylespreadmakingneededrussiapleaseextentScriptbrokenallowschargedividefactormember-basedtheoryconfigaroundworkedhelpedChurchimpactshouldalwayslogo" bottomlist">){var prefixorangeHeader.push(couplegardenbridgelaunchReviewtakingvisionlittledatingButtonbeautythemesforgotSearchanchoralmostloadedChangereturnstringreloadMobileincomesupplySourceordersviewed&nbsp;courseAbout island<html cookiename="amazonmodernadvicein</a>: The dialoghousesBEGIN MexicostartscentreheightaddingIslandassetsEmpireSchooleffortdirectnearlymanualSelect.\\n\\nOnejoinedmenu">PhilipawardshandleimportOfficeregardskillsnationSportsdegreeweekly (e.g.behinddoctorloggedunited</b></beginsplantsassistartistissued300px|canadaagencyschemeremainBrazilsamplelogo">beyond-scaleacceptservedmarineFootercamera</h1>\\n_form"leavesstress" />\\r\\n.gif" onloadloaderOxfordsistersurvivlistenfemaleDesignsize="appealtext">levelsthankshigherforcedanimalanyoneAfricaagreedrecentPeople<br />wonderpricesturned|| {};main">inlinesundaywrap">failedcensusminutebeaconquotes150px|estateremoteemail"linkedright;signalformal1.htmlsignupprincefloat:.png" forum.AccesspaperssoundsextendHeightsliderUTF-8"&amp; Before. WithstudioownersmanageprofitjQueryannualparamsboughtfamousgooglelongeri++) {israelsayingdecidehome">headerensurebranchpiecesblock;statedtop"><racingresize--&gt;pacitysexualbureau.jpg" 10,000obtaintitlesamount, Inc.comedymenu" lyricstoday.indeedcounty_logo.FamilylookedMarketlse ifPlayerturkey);var forestgivingerrorsDomain}else{insertBlog</footerlogin.fasteragents<body 10px 0pragmafridayjuniordollarplacedcoversplugin5,000 page">boston.test(avatartested_countforumsschemaindex,filledsharesreaderalert(appearSubmitline">body">\\n* TheThoughseeingjerseyNews</verifyexpertinjurywidth=CookieSTART across_imagethreadnativepocketbox">\\nSystem DavidcancertablesprovedApril reallydriveritem">more">boardscolorscampusfirst || [];media.guitarfinishwidth:showedOther .php" assumelayerswilsonstoresreliefswedenCustomeasily your String\\n\\nWhiltaylorclear:resortfrenchthough") + "<body>buyingbrandsMembername">oppingsector5px;">vspacepostermajor coffeemartinmaturehappen</nav>kansaslink">Images=falsewhile hspace0&amp; \\n\\nIn  powerPolski-colorjordanBottomStart -count2.htmlnews">01.jpgOnline-rightmillerseniorISBN 00,000 guidesvalue)ectionrepair.xml"  rights.html-blockregExp:hoverwithinvirginphones</tr>\\rusing \\n\\tvar >\\\');\\n\\t</td>\\n</tr>\\nbahasabrasilgalegomagyarpolskisrpskiX1X/Y\\bd8-f\x07g.\\0d=g9i+d?!f/d8-e\x1B=f\\bd;,d8\\0d8*e,e8g.!gh.:e\x1Be/d;%f\\re\\n!f6i4d8*d::d:\\\'eh\x07*e71d<d8f%g\\ve7%d=hg3;f2!f\\tg=g+f\\t\\0f\\th/h.:d8-e?f\x07g+ g(f\\b7i&i!5d=h\\0f\\n\\0f/i.i"g\x1B8e3d8\\vh==fg4"d=?g(h=/d;6e(g:?d8;i"h5fh\\\'i"e\x1Be$\\rf3(e\\fg=g;f6hee.9f(h\\re8e:f6\\bf/g):i4ee8d;\\0d9\\be%=e\\vgf4;e\x1B>g\\t\x07ee1e&ff\\t\\vf:f0i;f\\0f0f9e<e\\fd:,fd>\x1Be3d:f\x1B4e$h?d8*g3;g;g%if88f\\be9?e\\ne6d;eh!(e.\\te(g,,d8\\0d<eh?\x1Bh!\\fg9e\x07;g\\t\\bfg5e-d8g\\fh.>h.!e\\rh49fh2e\\n e%f4;e\\n(d;d;,eee\\re."g0e(d8\\nf57e&d=e72g;gh(\\0h/&g;g$>e\\f:g;e=f,g+i\\0h&d;7f <f/f\\fe\x1B=ii>f%e\x1B=e.6e;:h.>f\\ve\\vih/;f3e>\\vd=\\rg=.g;f5i\\0\\tf\\v)h?f 7e=e\\t\\re\\bg1;fh!\\fe\x1B d8:d:$ff\\0ei3d9d8\\rh=i\\0h?\x07h!\\fd8g\\\'f\\n\\0e/h=h.>e$\x07e\\bd=e$\\\'e.6g$>d<g g)6d8d8e(i(i!9g\x1B.h?i\x07\\fh?f/e<\\0e\\\'\\vfe5g5hf\x07d;6eg\\t\\fe8.e\\n)f\x07e\\fh5f:e$\\\'e-&e-&d9 e0e\\0f5h\\\'\\bf\\nh5e7%g(\\vh&f1f\\0d9\\bf6e\\0e\\nh=d8;h&g\x1B.e\\t\\rh5h./ee8f9f3g5e=1f\\v\x1Bhe#0fd;;d=e%e:7f0f\\r.g>e\x1B=f1=h=&d;\\vg;\\rd=f/d:$f5gd:\\\'f\\t\\0d;%g5h/f>g$:d8\\0d:\x1Be\\rd=\\rd::ee\\bfe0e\x1B>ff88e7%e7e-&gg3;e\\bg=e\\ve8e-e/g i"if\\\'e\\b6e0e\\f:e:f,e(e\x1B=g=d8\\ni\x07\\rh&g,,d:\\fef,"h?\x1Be%e\\vfh?d:\x1Bh\\0h/eg0e9h.-d;%d8\\nf?e:f\\bd8:g/e"i&f8/e\\ff6e(1d9ei\\0d8\\0e.e<\\0ed=ef \x07e\x07f,"h?h\\\'#e3e0f9d8\\0d8\\vd;%e\\nh4#d;;f\\bh\\0e."f\\b7d;#h!(g\\\'/e\\be%3d::f0g i\\0e.e\x07:g0g&;g:?e:g(e\\bh!(d8\\re\\fg<h>g;h.!f%h/"d8\\rh&f\\te3f:fe>\\be$f-f>g;g;\x07f?g-g\x1B4f%h=e\\n\x1Bf%f:fig\\ve\\b0g-i(e3i.d8e\\f:ie88h\\v1h/-g>e:&e8\\ff\x1Bg>e%3f/h>g%h/h\\\'e.e;:h..i(i(fh\\\'g2>e=)f%f,fi+eh(\\0f9i"e:i\x07e$gfie=1g\\t\x07i6h!\\fh?f\\te\\bd:+g\\t)eg;h%f7;e\\n d8e.6h?g\\\'\\rh/i"h57f%d8e\\n!e,e\\nh.0e=g.\\0d;\\vh4(i\x07g7d::e=1e\\re<g(f\\n%e\\ni(e\\be?+i\\0e(h/"f6e0f3(fg3h/7e-&f !e:h/%ee2e*f/h?e\x1Bh4-d90e\\rg\\\'0d8:d:f\\be\\nh/4fd>\x1Be:e-)e-d8i"g(\\ve:d8\\0h\\b,fe!e*f\\te6e.d?f\\n$h\\0\\fd8d;\\ne$)g*e#e\\n(f\\0g\\n6f\\0g\\t9e\\b+h.$d8:e?i!;f\x1B4f0e0h/4f\\be\\0d=d8:e*d=e\\ff\\v,i#d9\\bd8\\0f 7e\x1B=ef/e&f 9f\\r.g5h\\\'e-&i"e7f\\th?\x07g(\\vg1d:d::f\\t\\re\x07:f%d8\\rh?\x07f-#e(fffd:\\ve3g3;f \x07i"ee\\n!h>e%d8\\0g\x1B4e:g!\\0fe-&d:h\\\'#e;:g-g;fe(gi\\0g%h.!e\\be/9d:h\\t:f/g\x1B8e\\feggge;:g+\\vg-\\tg:\\\'g1;e\\vg;i*\\fe.g0e\\b6d=f%h\x07*f \x07g->d;%d8\\vee\\b\x1Bf f3e6d8-e\\0\\vd::d8\\0e\\b\x07f\\f\x07e\\re3i-i\x1Be\x1B"g,,d8\\te3f3(e\x1B f-$g\\\'g\\t\x07f71e3ed8e9?e7f%fi+g:\\\'f\\0h?g;<e\\bh!(g$:d8h>h!\\fd8:d:$i\\0h/d;7h\\\'\\te>g2>e\\re.6e:-e.\\ff\\bfh\\\'\\te.\\th#e>e\\b0i.d;6e\\b6e:&i#eh=g6h=,h==f\\n%d;7h.0h\\0f9f!\\bh!\\ff?d::f0g(ed8h%?fe\x07:ie:g6ed;f,>g-g9d;%e\\t\\re.\\fe(ee8h.>g=.i"e/<e7%d8e\\f;i"g\\vg\\vg;e8ee\x1B e93e0eg\\\'\\re"e\\n fff0e"d9\\veh\\fd8f\\bfd;\\ne94h.:f\x07f\\be\x1B=e\\nh/\\tg\\t\\bd8;d?.f9ed8f\\te\\r0e?+d9f:f"0h\\\'g9e-e(g2>g%h7e>e\\b)g(g;\\\'g;-d= d;,h?d9\\bf(!e<h/-h(\\0h=e$i\x1Bhf\\rd=i#f <d8\\0h57g\\\'e-&d=h2g-d?!f!d;6f2;gh?e\\n(d:\\\'d8d<h..e/<h\\b*e\\bghg\x1Be/f/ei!\\fg;fd=g(h0f%h3\x07fh\x07*e\\n(h4h4#ed8h.?i.e.f=f%eh.(h.:i#d8*e\\ri&\\be\\n e<:e%3f\\0\\\'h\\fe\x1B4f\\re\\vd<i2d;\\nf%e."f\\rh\\\'\\0g\\vee\\n gh/d8\\0g9d?h/e\x1B>d9&f\\tf\\bf5\\vh/g\\\';e\\n(f\\t\\rh=e3e.h!g%(d8\\rf-i\\0f1d8\\re>e\\nf3d9\\vi4i\x07\x07g(h%i\\0f\\nh/\\tg\x1B.f \x07g\\b1ffe=1f\\td:\x1Bh$\x07h#=f\x07e-&f:d<f0e-h#d?.h4-g\\t)efe(i"g2>ee6e.d:\\vff04e93fg$:d8\\ne8h0"h0"f.i\\0fe8\\bd8\\nd< g1;e\\b+f-\\ff\x1B2f\\v%f\\te\\b\x1Bf0i\\rd;6e*h&f6d;#h3\x07h(\\nh>>e\\b0d::gh."ih\\0e8\\be1g$:e?gh44e-g62g+d8;i!\\fh\x07*g6g:\\\'e\\b+g.\\0e\\rf9i)i#d:\x1Bf%h/4f\\te<\\0d;#g e\\b i$h/e\\b8h\\ng\x1B.i\x07\\rg9f,!f8e$e0h\\\'e\\bh5i\x07f\\t>e\\b0d;%ee$\\\'e(d8;i!5f\\0d=3e\x1Bg-e$)d8\\vd?ig0d;#f#\\0f%f\\ng%(e0f6f2f\\tf-#e88gh\x073d;#gg\x1B.e=e,e<\\0e$\\re\\b6i\x07h\\re98g&g\\t\\bf,e="f\\be\x07e$\x07h!\\ffe\x1Be\\b0f\\0f3f\\0f 7e\\rh..h.$h/f\\0e%=d:\\\'gf\\f\\tg\\\'f\\rh#e9?d8e\\n(f<+i\x07\x07h4-f0f\\t\\vg;e\x1B>i"f?eh\\0f?f2;e.9fe$)e0e\\n*e\\n\x1Bd::d;,e\\r\x07g:\\\'i\\0e:&d::g\\t)h0f4f5h!\\fi\\0 f\\bf\x07e-i)e\x1B=h48fe<\\0e1g\x1B8ih!(g0e=1h\\\'e&f-$g>e.9e$\\\'e0f\\n%if!f,>e?fh.8e$f3h\\\'e.6e1d9&e:h?f%g+\\ve\\r3d8>f\\n%f\\n\\0e7\\\'e%%h?g;e%d;%f%gh.:d:\\vd;6h\x07*g1d8-e\\re\\ne,e&\\be&\\bgf-#d8\\rie(f\x07e\\be\\fd;7e\\0<e\\b+d::g\x1Bg#e7d=d8g:*e\x1B"ie\\b\x1Bd8f\\t?f\\ve"i?f\\td::d?f\\fee.6g;4d?.e0f9>e7&e3h!d;=g-f!\\be.ig5d?!g;gge=e.#d< d;;e\\n!f-#e<g\\t9h\\t2d8\\vf%e\\rd<e*h=e=g6i\x07\\rf0e\\\'e.9f\\f\x07e/<h?h!\\ff%e?h3#e.6h6h?\x07ee0f5f1f/d;f(e\x07:g+i?f-e7f\\t\\\'h!\\fe\\b6i\\0 d9\\vd8\\0f(e9?g0e:fh?0ee\\fd< g;f-\\ff\\t\\vd?i)h/>g(\\ve\\f;gg;h?\x07h?\x07e;d9\\ve\\t\\rf6e%e94e:&fe?g>d8=f\\0i+g;if*f%e\\n e7%e\\rh4#fg(\\vg\\t\\beh:+d=i\x07\\re:e\x07:e.f\\bf,e="e<eh1e\x07:e9d8f9i.g.1e\\rd:,f1h\\fee>h\\fd=\\rg\x1B8d?!i!5i"e\\big=i!5g!.e.e\x1B>d>\\vg=e\\0g\\\'/fih//g\x1B.ge.h4f:e3i#i)f\\bfgf/e. g\\t)i$d:h)h+g>ge\\nf6f1h4-g+g9e?g+%f/e$)d8-e$.h.$h/f/d8*e$)f4%e-d=e0g#g;4f\\n$f,i!5d8*f\\0\\\'e.f9e88h\\\'g\x1B8f:f\\bg%e:e=e>\\ve8\\bf9d>?f !e\x1B-h!e8f\\b?e1\\vf g\x1B.ee7%e/<h\x074g*g6ie7f,g=g;e\\bf!#f!\\be\\n3e\\n(e&e$g>ee<h57f9eg,,e\x1B\x1Bd<h.!h**fig\\\'e.e.h\\\'h\\ff6\\bh49e1e\\fe?h.0d=g3;e8&f%e\\re-g<h!(e<\\0f>e\\n g\x1Bee\\b0d:\\ff\\t\\ve$\\\'i\x07f\\bd::f0i\x07e1d:+e\\f:ee%3e-)ee\\bf\\t\\0e(g;fi\\0d?!h6g:\\\'i\\rg=.e=f6d<g\\\'\\0f\\0\\\'ff\\b?d:\\\'i\\nf\\b2e\x07:e#fd:$e01d8d?e%g(\\ve:&ef0d:\\vd8f4d8*e11d8ffg\\t9f.\\ne\\bi!fe0\\ve1d:i(f\\b7h4"e\\n!e#0i3e\\ne6h4"g;ef\\fe92i(f\\bg+\\ve\\b)g\x1B\\nh\\0hf\\bi=e\\fh#g(f\\b6f/h5\x1Bf\x07ff\\v\x1Bee.\\ff4gf/g<g\x1Bd<d<4e(f\x1Bi"ee\\r+gd<f h+e#\x07e,e1h\\t/e%=ee\\bg,&e\\bid;6g\\t9g9d8\\re/h\\v1f\x07h5d:\\\'f 9f,ff>e/g"<e,d<f0ff\x1B4e\\n d:+ee\\fe-&e/e\\n(i\\0e\\bef%i.g-f,f\x07g>i#g;?h\\t2g(3e.g;\\bd:gg\\t)d>\x1Bf1fg\\ve\\n\x1Bi\x07d8%i\x07\\rf08h?egf\\tig+d:\\te/9h1!h49g(d8\\re%=g;e/9e\\re\\bd?h?\x1Bg9h/e=1i3d<e\\n?d8\\re0f,#h5e96d8f\\tg9f9ee(f0d?!g(h.>f=e="h1!h5f <g*g 4ig\\0i\x07\\re$\\\'d:f/f/d8f:h=e\\fe7%e.\\fg>eeg;d8\\0e\x07:g\\t\\bf\\ti\\0 g"ef&e5g(d:d?ge\x1B g4 d8-e\\ve-e(h44e\x1B>f\\0f\x1Bi?fe#d;7gh4"e:e0e.\\tff-&f1\\ti\x07\\fi"e\\b\x1Be;:e$)g):i&e\\be.\\fei)1e\\n(d8\\vi"d8\\re\\rh/d?!fd9\\ti3e\\th\\v1e\x1B=f<d:.e\x1Bd:\\vg)e.6g>$d<ef0e\\r3e/e\\rg(1e.6e7e\\n(g;f3e\\b0f3(fe0e-&f\\0\\\'h=h\\0g g!,d;6h\\\'g\\vf8f%fg,i&i i;i\x07i\\0g(f1h\\vge.d8;g.!i6f.5h(;e\\ng?;h/fe\\b)ee%=d<<d9i\\0h./f=e7%g\\v\\0f\\vd9h.8g/d?e9e;f&e?5e$\\\'e\\vf:g%(gh\\\'#e\\f?e\\rcuandoenviarmadridbuscariniciotiempoporquecuentaestadopuedenjuegoscontraestC!nnombretienenperfilmaneraamigosciudadcentroaunquepuedesdentroprimerpreciosegC:nbuenosvolverpuntossemanahabC-aagostonuevosunidoscarlosequiponiC1osmuchosalgunacorreoimagenpartirarribamarC-ahombreempleoverdadcambiomuchasfueronpasadolC-neaparecenuevascursosestabaquierolibroscuantoaccesomiguelvarioscuatrotienesgruposserC!neuropamediosfrenteacercademC!sofertacochesmodeloitalialetrasalgC:ncompracualesexistecuerposiendoprensallegarviajesdineromurciapodrC!puestodiariopuebloquieremanuelpropiocrisisciertoseguromuertefuentecerrargrandeefectopartesmedidapropiaofrecetierrae-mailvariasformasfuturoobjetoseguirriesgonormasmismosC:nicocaminositiosrazC3ndebidopruebatoledotenC-ajesC:sesperococinaorigentiendacientocC!dizhablarserC-alatinafuerzaestiloguerraentrarC)xitolC3pezagendavC-deoevitarpaginametrosjavierpadresfC!cilcabezaC!reassalidaenvC-ojapC3nabusosbienestextosllevarpuedanfuertecomC:nclaseshumanotenidobilbaounidadestC!seditarcreadoP4P;QQ\x07QP>P:P0P:P8P;P8Q\\rQP>P2QP5P5P3P>P?Q\\0P8QP0P:P5Q\\tP5QP6P5PP0P:P1P5P7P1Q\\vP;P>P=P8PQP5P?P>P4P-QP>QP>P<Q\x07P5P<P=P5QP;P5QQ\\0P0P7P>P=P0P3P4P5P<P=P5PP;QPQ\\0P8P=P0QP=P8QQP5P<P:QP>P3P>P4P2P>QQP0P<P!P(PP<P0QP\\\'QP>P2P0QP2P0P<P5P<QP"P0P:P4P2P0P=P0P<Q\\rQP8Q\\rQQPP0P<QP5QP?Q\\0P>QQQP=P0P4P4P=QPP>QQQ\\0P8P=P5P9PP0QP=P8P<QP0P<QP>QQ\\0QP1PP=P8P<P8Q\\0P=P5P5PPPP;P8QQ\\rQP0PP=P0P=P5P<P4P>P<P<P>P9P4P2P5P>P=P>QQP4`$`%\x07`$9`%\\b`$`%\\0`$8`%\x07`$`$>`$`%\\v`$`$0`$*`$0`$(`%\x07`$`$`$`$?`$-`%\\0`$\x07`$8`$`$0`$$`%\\v`$9`%\\v`$`$*`$9`%\\0`$/`$9`$/`$>`$$`$`$%`$>jagran`$`$`$`%\\v`$`$,`$&`%\\v`$`$\\b`$`$>`$`$`$9`$.`$\x07`$(`$5`$9`$/`%\x07`$%`%\x07`$%`%\\0`$`$0`$`$,`$&`%\\0`$`$\\b`$`%\\0`$5`%\x07`$(`$\\b`$(`$`$9`$0`$\\t`$8`$.`%\x07`$`$.`$5`%\\v`$2`%\x07`$8`$,`$.`$\\b`$&`%\x07`$`$0`$`$.`$,`$8`$-`$0`$,`$(`$`$2`$.`$(`$`$`$8`%\\0`$2`%\\0X9YY\\tX%YY\\tY\x07X0X\\\'X"X.X1X9X/X/X\\\'YY\\tY\x07X0Y\x07X5Y\\bX1X:Y\\nX1YX\\\'YY\\bYX\\\'X(Y\\nYX9X1X6X0YYY\x07YX\\\'Y\\nY\\bYYX\\\'YX9YY\\nX\\\'YX\\\'YYYX-X*Y\\tYX(YY\\bX-X)X\\\'X.X1YYX7X9X(X/X1YYX%X0X\\\'YYX\\\'X\\\'X-X/X%YX\\\'YY\\nY\x07X(X9X6YY\\nYX(X-X+Y\\bYYY\\bY\x07Y\\bX#YX\\\'X,X/X\\\'YY\x07X\\\'X3YYX9YX/YY\\nX3X9X(X1X5YY\\tYYX0X(Y\x07X\\\'X#YY\x07YX+YYYX*X\\\'YX\\\'X-Y\\nX+YX5X1X4X1X-X-Y\\bYY\\bYY\\nX\\\'X0X\\\'YYYYX1X)X\\\'YX*X\\\'YYX#X(Y\\bX.X\\\'X5X#YX*X\\\'YY\x07X\\\'YY\\nX9X6Y\\bY\\bYX/X\\\'X(YX.Y\\nX1X(YX*YYYX4X\\\'X!Y\\bY\x07Y\\nX\\\'X(Y\\bYX5X5Y\\bYX\\\'X1YYX#X-X/YX-YX9X/YX1X#Y\\nX\\\'X-X)YX*X(X/Y\\bYY\\nX,X(YYY\x07X*X-X*X,Y\x07X)X3YX)Y\\nX*YYX1X)X:X2X)YYX3X(Y\\nX*YYY\x07YYX\\\'X*YYYYX(YYX\\\'X9YY\x07X#Y\\bYX4Y\\nX!YY\\bX1X#YX\\\'YY\\nYX(YYX0X\\\'X*X1X*X(X(X#YY\x07YX3X\\\'YYX(Y\\nX9YYX/X-X3YYY\x07YX4X9X1X#Y\x07YX4Y\x07X1YX7X1X7YX(profileservicedefaulthimselfdetailscontentsupportstartedmessagesuccessfashion<title>countryaccountcreatedstoriesresultsrunningprocesswritingobjectsvisiblewelcomearticleunknownnetworkcompanydynamicbrowserprivacyproblemServicerespectdisplayrequestreservewebsitehistoryfriendsoptionsworkingversionmillionchannelwindow.addressvisitedweathercorrectproductedirectforwardyou canremovedsubjectcontrolarchivecurrentreadinglibrarylimitedmanagerfurthersummarymachineminutesprivatecontextprogramsocietynumberswrittenenabledtriggersourcesloadingelementpartnerfinallyperfectmeaningsystemskeepingculture&quot;,journalprojectsurfaces&quot;expiresreviewsbalanceEnglishContentthroughPlease opinioncontactaverageprimaryvillageSpanishgallerydeclinemeetingmissionpopularqualitymeasuregeneralspeciessessionsectionwriterscounterinitialreportsfiguresmembersholdingdisputeearlierexpressdigitalpictureAnothermarriedtrafficleadingchangedcentralvictoryimages/reasonsstudiesfeaturelistingmust beschoolsVersionusuallyepisodeplayinggrowingobviousoverlaypresentactions</ul>\\r\\nwrapperalreadycertainrealitystorageanotherdesktopofferedpatternunusualDigitalcapitalWebsitefailureconnectreducedAndroiddecadesregular &amp; animalsreleaseAutomatgettingmethodsnothingPopularcaptionletterscapturesciencelicensechangesEngland=1&amp;History = new CentralupdatedSpecialNetworkrequirecommentwarningCollegetoolbarremainsbecauseelectedDeutschfinanceworkersquicklybetweenexactlysettingdiseaseSocietyweaponsexhibit&lt;!--Controlclassescoveredoutlineattacksdevices(windowpurposetitle="Mobile killingshowingItaliandroppedheavilyeffects-1\\\']);\\nconfirmCurrentadvancesharingopeningdrawingbillionorderedGermanyrelated</form>includewhetherdefinedSciencecatalogArticlebuttonslargestuniformjourneysidebarChicagoholidayGeneralpassage,&quot;animatefeelingarrivedpassingnaturalroughly.\\n\\nThe but notdensityBritainChineselack oftributeIreland" data-factorsreceivethat isLibraryhusbandin factaffairsCharlesradicalbroughtfindinglanding:lang="return leadersplannedpremiumpackageAmericaEdition]&quot;Messageneed tovalue="complexlookingstationbelievesmaller-mobilerecordswant tokind ofFirefoxyou aresimilarstudiedmaximumheadingrapidlyclimatekingdomemergedamountsfoundedpioneerformuladynastyhow to SupportrevenueeconomyResultsbrothersoldierlargelycalling.&quot;AccountEdward segmentRobert effortsPacificlearnedup withheight:we haveAngelesnations_searchappliedacquiremassivegranted: falsetreatedbiggestbenefitdrivingStudiesminimumperhapsmorningsellingis usedreversevariant role="missingachievepromotestudentsomeoneextremerestorebottom:evolvedall thesitemapenglishway to  AugustsymbolsCompanymattersmusicalagainstserving})();\\r\\npaymenttroubleconceptcompareparentsplayersregionsmonitor \\\'\\\'The winningexploreadaptedGalleryproduceabilityenhancecareers). The collectSearch ancientexistedfooter handlerprintedconsoleEasternexportswindowsChannelillegalneutralsuggest_headersigning.html">settledwesterncausing-webkitclaimedJusticechaptervictimsThomas mozillapromisepartieseditionoutside:false,hundredOlympic_buttonauthorsreachedchronicdemandssecondsprotectadoptedprepareneithergreatlygreateroverallimprovecommandspecialsearch.worshipfundingthoughthighestinsteadutilityquarterCulturetestingclearlyexposedBrowserliberal} catchProjectexamplehide();FloridaanswersallowedEmperordefenseseriousfreedomSeveral-buttonFurtherout of != nulltrainedDenmarkvoid(0)/all.jspreventRequestStephen\\n\\nWhen observe</h2>\\r\\nModern provide" alt="borders.\\n\\nFor \\n\\nMany artistspoweredperformfictiontype ofmedicalticketsopposedCouncilwitnessjusticeGeorge Belgium...</a>twitternotablywaitingwarfare Other rankingphrasesmentionsurvivescholar</p>\\r\\n Countryignoredloss ofjust asGeorgiastrange<head><stopped1\\\']);\\r\\nislandsnotableborder:list ofcarried100,000</h3>\\n severalbecomesselect wedding00.htmlmonarchoff theteacherhighly biologylife ofor evenrise of&raquo;plusonehunting(thoughDouglasjoiningcirclesFor theAncientVietnamvehiclesuch ascrystalvalue =Windowsenjoyeda smallassumed<a id="foreign All rihow theDisplayretiredhoweverhidden;battlesseekingcabinetwas notlook atconductget theJanuaryhappensturninga:hoverOnline French lackingtypicalextractenemieseven ifgeneratdecidedare not/searchbeliefs-image:locatedstatic.login">convertviolententeredfirst">circuitFinlandchemistshe was10px;">as suchdivided</span>will beline ofa greatmystery/index.fallingdue to railwaycollegemonsterdescentit withnuclearJewish protestBritishflowerspredictreformsbutton who waslectureinstantsuicidegenericperiodsmarketsSocial fishingcombinegraphicwinners<br /><by the NaturalPrivacycookiesoutcomeresolveSwedishbrieflyPersianso muchCenturydepictscolumnshousingscriptsnext tobearingmappingrevisedjQuery(-width:title">tooltipSectiondesignsTurkishyounger.match(})();\\n\\nburningoperatedegreessource=Richardcloselyplasticentries</tr>\\r\\ncolor:#ul id="possessrollingphysicsfailingexecutecontestlink toDefault<br />\\n: true,chartertourismclassicproceedexplain</h1>\\r\\nonline.?xml vehelpingdiamonduse theairlineend --\\x3e).attr(readershosting#ffffffrealizeVincentsignals src="/ProductdespitediversetellingPublic held inJoseph theatreaffects<style>a largedoesn\\\'tlater, ElementfaviconcreatorHungaryAirportsee theso thatMichaelSystemsPrograms, and  width=e&quot;tradingleft">\\npersonsGolden Affairsgrammarformingdestroyidea ofcase ofoldest this is.src = cartoonregistrCommonsMuslimsWhat isin manymarkingrevealsIndeed,equally/show_aoutdoorescape(Austriageneticsystem,In the sittingHe alsoIslandsAcademy\\n\\t\\t\\x3c!--Daniel bindingblock">imposedutilizeAbraham(except{width:putting).html(|| [];\\nDATA[ *kitchenmountedactual dialectmainly _blank\\\'installexpertsif(typeIt also&copy; ">Termsborn inOptionseasterntalkingconcerngained ongoingjustifycriticsfactoryits ownassaultinvitedlastinghis ownhref="/" rel="developconcertdiagramdollarsclusterphp?id=alcohol);})();using a><span>vesselsrevivalAddressamateurandroidallegedillnesswalkingcentersqualifymatchesunifiedextinctDefensedied in\\n\\t\\x3c!-- customslinkingLittle Book ofeveningmin.js?are thekontakttoday\\\'s.html" target=wearingAll Rig;\\n})();raising Also, crucialabout">declare--\\x3e\\n<scfirefoxas muchappliesindex, s, but type = \\n\\r\\n\\x3c!--towardsRecordsPrivateForeignPremierchoicesVirtualreturnsCommentPoweredinline;povertychamberLiving volumesAnthonylogin" RelatedEconomyreachescuttinggravitylife inChapter-shadowNotable</td>\\r\\n returnstadiumwidgetsvaryingtravelsheld bywho arework infacultyangularwho hadairporttown of\\n\\nSome \\\'click\\\'chargeskeywordit willcity of(this);Andrew unique checkedor more300px; return;rsion="pluginswithin herselfStationFederalventurepublishsent totensionactresscome tofingersDuke ofpeople,exploitwhat isharmonya major":"httpin his menu">\\nmonthlyofficercouncilgainingeven inSummarydate ofloyaltyfitnessand wasemperorsupremeSecond hearingRussianlongestAlbertalateralset of small">.appenddo withfederalbank ofbeneathDespiteCapitalgrounds), and percentit fromclosingcontainInsteadfifteenas well.yahoo.respondfighterobscurereflectorganic= Math.editingonline paddinga wholeonerroryear ofend of barrierwhen itheader home ofresumedrenamedstrong>heatingretainscloudfrway of March 1knowingin partBetweenlessonsclosestvirtuallinks">crossedEND --\\x3efamous awardedLicenseHealth fairly wealthyminimalAfricancompetelabel">singingfarmersBrasil)discussreplaceGregoryfont copursuedappearsmake uproundedboth ofblockedsaw theofficescoloursif(docuwhen heenforcepush(fuAugust UTF-8">Fantasyin mostinjuredUsuallyfarmingclosureobject defenceuse of Medical<body>\\nevidentbe usedkeyCodesixteenIslamic#000000entire widely active (typeofone cancolor =speakerextendsPhysicsterrain<tbody>funeralviewingmiddle cricketprophetshifteddoctorsRussell targetcompactalgebrasocial-bulk ofman and</td>\\n he left).val()false);logicalbankinghome tonaming Arizonacredits);\\n});\\nfounderin turnCollinsbefore But thechargedTitle">CaptainspelledgoddessTag --\\x3eAdding:but wasRecent patientback in=false&Lincolnwe knowCounterJudaismscript altered\\\']);\\n  has theunclearEvent\\\',both innot all\\n\\n\\x3c!-- placinghard to centersort ofclientsstreetsBernardassertstend tofantasydown inharbourFreedomjewelry/about..searchlegendsis mademodern only ononly toimage" linear painterand notrarely acronymdelivershorter00&amp;as manywidth="/* <![Ctitle =of the lowest picked escapeduses ofpeoples PublicMatthewtacticsdamagedway forlaws ofeasy to windowstrong  simple}catch(seventhinfoboxwent topaintedcitizenI don\\\'tretreat. Some ww.");\\nbombingmailto:made in. Many carries||{};wiwork ofsynonymdefeatsfavoredopticalpageTraunless sendingleft"><comScorAll thejQuery.touristClassicfalse" Wilhelmsuburbsgenuinebishops.split(global followsbody ofnominalContactsecularleft tochiefly-hidden-banner</li>\\n\\n. When in bothdismissExplorealways via thespaC1olwelfareruling arrangecaptainhis sonrule ofhe tookitself,=0&amp;(calledsamplesto makecom/pagMartin Kennedyacceptsfull ofhandledBesides//--\\x3e</able totargetsessencehim to its by common.mineralto takeways tos.org/ladvisedpenaltysimple:if theyLettersa shortHerbertstrikes groups.lengthflightsoverlapslowly lesser social </p>\\n\\t\\tit intoranked rate oful>\\r\\n  attemptpair ofmake itKontaktAntoniohaving ratings activestreamstrapped").css(hostilelead tolittle groups,Picture--\\x3e\\r\\n\\r\\n rows=" objectinverse<footerCustomV><\\\\/scrsolvingChamberslaverywoundedwhereas!= \\\'undfor allpartly -right:Arabianbacked centuryunit ofmobile-Europe,is homerisk ofdesiredClintoncost ofage of become none ofp&quot;Middle ead\\\')[0Criticsstudios>&copy;group">assemblmaking pressedwidget.ps:" ? rebuiltby someFormer editorsdelayedCanonichad thepushingclass="but arepartialBabylonbottom carrierCommandits useAs withcoursesa thirddenotesalso inHouston20px;">accuseddouble goal ofFamous ).bind(priests Onlinein Julyst + "gconsultdecimalhelpfulrevivedis veryr\\\'+\\\'iptlosing femalesis alsostringsdays ofarrivalfuture <objectforcingString(" />\\n\\t\\there isencoded.  The balloondone by/commonbgcolorlaw of Indianaavoidedbut the2px 3pxjquery.after apolicy.men andfooter-= true;for usescreen.Indian image =family,http:// &nbsp;driverseternalsame asnoticedviewers})();\\n is moreseasonsformer the newis justconsent Searchwas thewhy theshippedbr><br>width: height=made ofcuisineis thata very Admiral fixed;normal MissionPress, ontariocharsettry to invaded="true"spacingis mosta more totallyfall of});\\r\\n  immensetime inset outsatisfyto finddown tolot of Playersin Junequantumnot thetime todistantFinnishsrc = (single help ofGerman law andlabeledforestscookingspace">header-well asStanleybridges/globalCroatia About [0];\\n  it, andgroupedbeing a){throwhe madelighterethicalFFFFFF"bottom"like a employslive inas seenprintermost ofub-linkrejectsand useimage">succeedfeedingNuclearinformato helpWomen\\\'sNeitherMexicanprotein<table by manyhealthylawsuitdevised.push({sellerssimply Through.cookie Image(older">us.js"> Since universlarger open to!-- endlies in\\\']);\\r\\n  marketwho is ("DOMComanagedone fortypeof Kingdomprofitsproposeto showcenter;made itdressedwere inmixtureprecisearisingsrc = \\\'make a securedBaptistvoting \\n\\t\\tvar March 2grew upClimate.removeskilledway the</head>face ofacting right">to workreduceshas haderectedshow();action=book ofan area== "htt<header\\n<html>conformfacing cookie.rely onhosted .customhe wentbut forspread Family a meansout theforums.footage">MobilClements" id="as highintense--\\x3e\\x3c!--female is seenimpliedset thea stateand hisfastestbesidesbutton_bounded"><img Infoboxevents,a youngand areNative cheaperTimeoutand hasengineswon the(mostlyright: find a -bottomPrince area ofmore ofsearch_nature,legallyperiod,land ofor withinducedprovingmissilelocallyAgainstthe wayk&quot;px;">\\r\\npushed abandonnumeralCertainIn thismore inor somename isand, incrownedISBN 0-createsOctobermay notcenter late inDefenceenactedwish tobroadlycoolingonload=it. TherecoverMembersheight assumes<html>\\npeople.in one =windowfooter_a good reklamaothers,to this_cookiepanel">London,definescrushedbaptismcoastalstatus title" move tolost inbetter impliesrivalryservers SystemPerhapses and contendflowinglasted rise inGenesisview ofrising seem tobut in backinghe willgiven agiving cities.flow of Later all butHighwayonly bysign ofhe doesdiffersbattery&amp;lasinglesthreatsintegertake onrefusedcalled =US&ampSee thenativesby thissystem.head of:hover,lesbiansurnameand allcommon/header__paramsHarvard/pixel.removalso longrole ofjointlyskyscraUnicodebr />\\r\\nAtlantanucleusCounty,purely count">easily build aonclicka givenpointerh&quot;events else {\\nditionsnow the, with man whoorg/Webone andcavalryHe diedseattle00,000 {windowhave toif(windand itssolely m&quot;renewedDetroitamongsteither them inSenatorUs</a><King ofFrancis-produche usedart andhim andused byscoringat hometo haverelatesibilityfactionBuffalolink"><what hefree toCity ofcome insectorscountedone daynervoussquare };if(goin whatimg" alis onlysearch/tuesdaylooselySolomonsexual - <a hrmedium"DO NOT France,with a war andsecond take a >\\r\\n\\r\\n\\r\\nmarket.highwaydone inctivity"last">obligedrise to"undefimade to Early praisedin its for hisathleteJupiterYahoo! termed so manyreally s. The a woman?value=direct right" bicycleacing="day andstatingRather,higher Office are nowtimes, when a pay foron this-link">;borderaround annual the Newput the.com" takin toa brief(in thegroups.; widthenzymessimple in late{returntherapya pointbanninginks">\\n();" rea place\\\\u003Caabout atr>\\r\\n\\t\\tccount gives a<SCRIPTRailwaythemes/toolboxById("xhumans,watchesin some if (wicoming formats Under but hashanded made bythan infear ofdenoted/iframeleft involtagein eacha&quot;base ofIn manyundergoregimesaction </p>\\r\\n<ustomVa;&gt;</importsor thatmostly &amp;re size="</a></ha classpassiveHost = WhetherfertileVarious=[];(fucameras/></td>acts asIn some>\\r\\n\\r\\n<!organis <br />BeijingcatalC deutscheuropeueuskaragaeilgesvenskaespaC1amensajeusuariotrabajomC)xicopC!ginasiempresistemaoctubreduranteaC1adirempresamomentonuestroprimeratravC)sgraciasnuestraprocesoestadoscalidadpersonanC:meroacuerdomC:sicamiembroofertasalgunospaC-sesejemploderechoademC!sprivadoagregarenlacesposiblehotelessevillaprimeroC:ltimoeventosarchivoculturamujeresentradaanuncioembargomercadograndesestudiomejoresfebrerodiseC1oturismocC3digoportadaespaciofamiliaantoniopermiteguardaralgunaspreciosalguiensentidovisitastC-tuloconocersegundoconsejofranciaminutossegundatenemosefectosmC!lagasesiC3nrevistagranadacompraringresogarcC-aacciC3necuadorquienesinclusodeberC!materiahombresmuestrapodrC-amaC1anaC:ltimaestamosoficialtambienningC:nsaludospodemosmejorarpositionbusinesshomepagesecuritylanguagestandardcampaignfeaturescategoryexternalchildrenreservedresearchexchangefavoritetemplatemilitaryindustryservicesmaterialproductsz-index:commentssoftwarecompletecalendarplatformarticlesrequiredmovementquestionbuildingpoliticspossiblereligionphysicalfeedbackregisterpicturesdisabledprotocolaudiencesettingsactivityelementslearninganythingabstractprogressoverviewmagazineeconomictrainingpressurevarious <strong>propertyshoppingtogetheradvancedbehaviordownloadfeaturedfootballselectedLanguagedistanceremembertrackingpasswordmodifiedstudentsdirectlyfightingnortherndatabasefestivalbreakinglocationinternetdropdownpracticeevidencefunctionmarriageresponseproblemsnegativeprogramsanalysisreleasedbanner">purchasepoliciesregionalcreativeargumentbookmarkreferrerchemicaldivisioncallbackseparateprojectsconflicthardwareinterestdeliverymountainobtained= false;for(var acceptedcapacitycomputeridentityaircraftemployedproposeddomesticincludesprovidedhospitalverticalcollapseapproachpartnerslogo"><adaughterauthor" culturalfamilies/images/assemblypowerfulteachingfinisheddistrictcriticalcgi-bin/purposesrequireselectionbecomingprovidesacademicexerciseactuallymedicineconstantaccidentMagazinedocumentstartingbottom">observed: &quot;extendedpreviousSoftwarecustomerdecisionstrengthdetailedslightlyplanningtextareacurrencyeveryonestraighttransferpositiveproducedheritageshippingabsolutereceivedrelevantbutton" violenceanywherebenefitslaunchedrecentlyalliancefollowedmultiplebulletinincludedoccurredinternal$(this).republic><tr><tdcongressrecordedultimatesolution<ul id="discoverHome</a>websitesnetworksalthoughentirelymemorialmessagescontinueactive">somewhatvictoriaWestern  title="LocationcontractvisitorsDownloadwithout right">\\nmeasureswidth = variableinvolvedvirginianormallyhappenedaccountsstandingnationalRegisterpreparedcontrolsaccuratebirthdaystrategyofficialgraphicscriminalpossiblyconsumerPersonalspeakingvalidateachieved.jpg" />machines</h2>\\n  keywordsfriendlybrotherscombinedoriginalcomposedexpectedadequatepakistanfollow" valuable</label>relativebringingincreasegovernorplugins/List of Header">" name=" (&quot;graduate</head>\\ncommercemalaysiadirectormaintain;height:schedulechangingback to catholicpatternscolor: #greatestsuppliesreliable</ul>\\n\\t\\t<select citizensclothingwatching<li id="specificcarryingsentence<center>contrastthinkingcatch(e)southernMichael merchantcarouselpadding:interior.split("lizationOctober ){returnimproved--&gt;\\n\\ncoveragechairman.png" />subjectsRichard whateverprobablyrecoverybaseballjudgmentconnect..css" /> websitereporteddefault"/></a>\\r\\nelectricscotlandcreationquantity. ISBN 0did not instance-search-" lang="speakersComputercontainsarchivesministerreactiondiscountItalianocriteriastrongly: \\\'http:\\\'script\\\'coveringofferingappearedBritish identifyFacebooknumerousvehiclesconcernsAmericanhandlingdiv id="William provider_contentaccuracysection andersonflexibleCategorylawrence<script>layout="approved maximumheader"></table>Serviceshamiltoncurrent canadianchannels/themes//articleoptionalportugalvalue=""intervalwirelessentitledagenciesSearch" measuredthousandspending&hellip;new Date" size="pageNamemiddle" " /></a>hidden">sequencepersonaloverflowopinionsillinoislinks">\\n\\t<title>versionssaturdayterminalitempropengineersectionsdesignerproposal="false"EspaC1olreleasessubmit" er&quot;additionsymptomsorientedresourceright"><pleasurestationshistory.leaving  border=contentscenter">.\\n\\nSome directedsuitablebulgaria.show();designedGeneral conceptsExampleswilliamsOriginal"><span>search">operatorrequestsa &quot;allowingDocumentrevision. \\n\\nThe yourselfContact michiganEnglish columbiapriorityprintingdrinkingfacilityreturnedContent officersRussian generate-8859-1"indicatefamiliar qualitymargin:0 contentviewportcontacts-title">portable.length eligibleinvolvesatlanticonload="default.suppliedpaymentsglossary\\n\\nAfter guidance</td><tdencodingmiddle">came to displaysscottishjonathanmajoritywidgets.clinicalthailandteachers<head>\\n\\taffectedsupportspointer;toString</small>oklahomawill be investor0" alt="holidaysResourcelicensed (which . After considervisitingexplorerprimary search" android"quickly meetingsestimate;return ;color:# height=approval, &quot; checked.min.js"magnetic></a></hforecast. While thursdaydvertise&eacute;hasClassevaluateorderingexistingpatients Online coloradoOptions"campbell\\x3c!-- end</span><<br />\\r\\n_popups|sciences,&quot; quality Windows assignedheight: <b classle&quot; value=" Companyexamples<iframe believespresentsmarshallpart of properly).\\n\\nThe taxonomymuch of </span>\\n" data-srtuguC*sscrollTo project<head>\\r\\nattorneyemphasissponsorsfancyboxworld\\\'s wildlifechecked=sessionsprogrammpx;font- Projectjournalsbelievedvacationthompsonlightingand the special border=0checking</tbody><button Completeclearfix\\n<head>\\narticle <sectionfindingsrole in popular  Octoberwebsite exposureused to  changesoperatedclickingenteringcommandsinformed numbers  </div>creatingonSubmitmarylandcollegesanalyticlistingscontact.loggedInadvisorysiblingscontent"s&quot;)s. This packagescheckboxsuggestspregnanttomorrowspacing=icon.pngjapanesecodebasebutton">gamblingsuch as , while </span> missourisportingtop:1px .</span>tensionswidth="2lazyloadnovemberused in height="cript">\\n&nbsp;</<tr><td height:2/productcountry include footer" &lt;!-- title"></jquery.</form>\\n(g.\\0d=)(g9i+)hrvatskiitalianoromC"nDtC<rkC\\\'eX\\\'X1X/Y\\btambiC)nnoticiasmensajespersonasderechosnacionalserviciocontactousuariosprogramagobiernoempresasanunciosvalenciacolombiadespuC)sdeportesproyectoproductopC:bliconosotroshistoriapresentemillonesmediantepreguntaanteriorrecursosproblemasantiagonuestrosopiniC3nimprimirmientrasamC)ricavendedorsociedadrespectorealizarregistropalabrasinterC)sentoncesespecialmiembrosrealidadcC3rdobazaragozapC!ginassocialesbloqueargestiC3nalquilersistemascienciascompletoversiC3ncompletaestudiospC:blicaobjetivoalicantebuscadorcantidadentradasaccionesarchivossuperiormayorC-aalemaniafunciC3nC:ltimoshaciendoaquellosediciC3nfernandoambientefacebooknuestrasclientesprocesosbastantepresentareportarcongresopublicarcomerciocontratojC3venesdistritotC)cnicaconjuntoenergC-atrabajarasturiasrecienteutilizarboletC-nsalvadorcorrectatrabajosprimerosnegocioslibertaddetallespantallaprC3ximoalmerC-aanimalesquiC)nescorazC3nsecciC3nbuscandoopcionesexteriorconceptotodavC-agalerC-aescribirmedicinalicenciaconsultaaspectoscrC-ticadC3laresjusticiadeberC!nperC-odonecesitamantenerpequeC1orecibidatribunaltenerifecanciC3ncanariasdescargadiversosmallorcarequieretC)cnicodeberC-aviviendafinanzasadelantefuncionaconsejosdifC-cilciudadesantiguasavanzadatC)rminounidadessC!nchezcampaC1asoftonicrevistascontienesectoresmomentosfacultadcrC)ditodiversassupuestofactoressegundospequeC1aP3P>P4P0P5QP;P8P5QQQ\\fP1Q\\vP;P>P1Q\\vQQ\\fQ\\rQP>P<PQP;P8QP>P3P>P<P5P=QP2QP5QQ\\rQP>P9P4P0P6P5P1Q\\vP;P8P3P>P4QP4P5P=Q\\fQ\\rQP>QP1Q\\vP;P0QP5P1QP>P4P8P=QP5P1P5P=P0P4P>QP0P9QQP>QP>P=P5P3P>QP2P>P8QP2P>P9P8P3Q\\0Q\\vQP>P6P5P2QP5P<QP2P>QP;P8Q\\bQ\\fQ\\rQP8QP?P>P:P0P4P=P5P9P4P>P<P0P<P8Q\\0P0P;P8P1P>QP5P<QQP>QQP4P2QQQP5QP8P;QP4P8P4P5P;P>P<P8Q\\0P5QP5P1QQP2P>P5P2P8P4P5Q\x07P5P3P>Q\\rQP8P<QQ\x07P5QQP5P<Q\\vQP5P=Q\\vQQP0P;P2P5P4Q\\fQP5P<P5P2P>P4Q\\vQP5P1P5P2Q\\vQ\\bP5P=P0P<P8QP8P?P0QP>P<QP?Q\\0P0P2P;P8QP0P>P4P=P0P3P>P4Q\\vP7P=P0QP<P>P3QP4Q\\0QP3P2QP5P9P8P4P5QP:P8P=P>P>P4P=P>P4P5P;P0P4P5P;P5QQ\\0P>P:P8QP=QP2P5QQ\\fPQQQ\\fQ\\0P0P7P0P=P0Q\\bP8X\\\'YYY\x07X\\\'YX*Y\\nX,YY\\nX9X.X\\\'X5X)X\\\'YX0Y\\nX9YY\\nY\x07X,X/Y\\nX/X\\\'YX"YX\\\'YX1X/X*X-YYX5YX-X)YX\\\'YX*X\\\'YYY\\nY\\nYY\\bYX4X(YX)YY\\nY\x07X\\\'X(YX\\\'X*X-Y\\bX\\\'X!X#YX+X1X.YX\\\'YX\\\'YX-X(X/YY\\nYX/X1Y\\bX3X\\\'X6X:X7X*YY\\bYY\x07YX\\\'YX3X\\\'X-X)YX\\\'X/Y\\nX\\\'YX7X(X9YY\\nYX4YX1X\\\'Y\\nYYYYYY\x07X\\\'X4X1YX)X1X&Y\\nX3YX4Y\\nX7YX\\\'X0X\\\'X\\\'YYYX4X(X\\\'X(X*X9X(X1X1X-YX)YX\\\'YX)Y\\nYY\\bYYX1YX2YYYX)X#X-YX/YYX(Y\\nY\\nX9YY\\nX5Y\\bX1X)X7X1Y\\nYX4X\\\'X1YX,Y\\bX\\\'YX#X.X1Y\\tYX9YX\\\'X\\\'X(X-X+X9X1Y\\bX6X(X4YYYX3X,YX(YX\\\'YX.X\\\'YX/YX*X\\\'X(YYY\\nX)X(X/Y\\bYX#Y\\nX6X\\\'Y\\nY\\bX,X/YX1Y\\nYYX*X(X*X#YX6YYX7X(X.X\\\'YX+X1X(X\\\'X1YX\\\'YX6YX\\\'X-YY\\tYYX3Y\x07X#Y\\nX\\\'YX1X/Y\\bX/X#YY\x07X\\\'X/Y\\nYX\\\'X\\\'YX\\\'YYX9X1X6X*X9YYX/X\\\'X.YYYYY\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\x07\x07\\0\\b\\t\\n\\v\\f\\r\\r\\f\\v\\n\\t\\b\x1B\x1B\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\b\\0\\b\\0\\b\\0\\b\\0\\0\\0\\0\\0\\0\\0\\0\\0\x07resourcescountriesquestionsequipmentcommunityavailablehighlightDTD/xhtmlmarketingknowledgesomethingcontainerdirectionsubscribeadvertisecharacter" value="</select>Australia" class="situationauthorityfollowingprimarilyoperationchallengedevelopedanonymousfunction functionscompaniesstructureagreement" title="potentialeducationargumentssecondarycopyrightlanguagesexclusivecondition</form>\\r\\nstatementattentionBiography} else {\\nsolutionswhen the Analyticstemplatesdangeroussatellitedocumentspublisherimportantprototypeinfluence&raquo;</effectivegenerallytransformbeautifultransportorganizedpublishedprominentuntil thethumbnailNational .focus();over the migrationannouncedfooter">\\nexceptionless thanexpensiveformationframeworkterritoryndicationcurrentlyclassNamecriticismtraditionelsewhereAlexanderappointedmaterialsbroadcastmentionedaffiliate</option>treatmentdifferent/default.Presidentonclick="biographyotherwisepermanentFranC\\\'aisHollywoodexpansionstandards</style>\\nreductionDecember preferredCambridgeopponentsBusiness confusion>\\n<title>presentedexplaineddoes not worldwideinterfacepositionsnewspaper</table>\\nmountainslike the essentialfinancialselectionaction="/abandonedEducationparseInt(stabilityunable to</title>\\nrelationsNote thatefficientperformedtwo yearsSince thethereforewrapper">alternateincreasedBattle ofperceivedtrying tonecessaryportrayedelectionsElizabeth</iframe>discoveryinsurances.length;legendaryGeographycandidatecorporatesometimesservices.inherited</strong>CommunityreligiouslocationsCommitteebuildingsthe worldno longerbeginningreferencecannot befrequencytypicallyinto the relative;recordingpresidentinitiallytechniquethe otherit can beexistenceunderlinethis timetelephoneitemscopepracticesadvantage);return For otherprovidingdemocracyboth the extensivesufferingsupportedcomputers functionpracticalsaid thatit may beEnglish</from the scheduleddownloads</label>\\nsuspectedmargin: 0spiritual</head>\\n\\nmicrosoftgraduallydiscussedhe becameexecutivejquery.jshouseholdconfirmedpurchasedliterallydestroyedup to thevariationremainingit is notcenturiesJapanese among thecompletedalgorithminterestsrebellionundefinedencourageresizableinvolvingsensitiveuniversalprovision(althoughfeaturingconducted), which continued-header">February numerous overflow:componentfragmentsexcellentcolspan="technicalnear the Advanced source ofexpressedHong Kong Facebookmultiple mechanismelevationoffensive</form>\\n\\tsponsoreddocument.or &quot;there arethose whomovementsprocessesdifficultsubmittedrecommendconvincedpromoting" width=".replace(classicalcoalitionhis firstdecisionsassistantindicatedevolution-wrapper"enough toalong thedelivered--\\x3e\\r\\n\\x3c!--American protectedNovember </style><furnitureInternet  onblur="suspendedrecipientbased on Moreover,abolishedcollectedwere madeemotionalemergencynarrativeadvocatespx;bordercommitteddir="ltr"employeesresearch. selectedsuccessorcustomersdisplayedSeptemberaddClass(Facebook suggestedand lateroperatingelaborateSometimesInstitutecertainlyinstalledfollowersJerusalemthey havecomputinggeneratedprovincesguaranteearbitraryrecognizewanted topx;width:theory ofbehaviourWhile theestimatedbegan to it becamemagnitudemust havemore thanDirectoryextensionsecretarynaturallyoccurringvariablesgiven theplatform.</label><failed tocompoundskinds of societiesalongside --&gt;\\n\\nsouthwestthe rightradiationmay have unescape(spoken in" href="/programmeonly the come fromdirectoryburied ina similarthey were</font></Norwegianspecifiedproducingpassenger(new DatetemporaryfictionalAfter theequationsdownload.regularlydeveloperabove thelinked tophenomenaperiod oftooltip">substanceautomaticaspect ofAmong theconnectedestimatesAir Forcesystem ofobjectiveimmediatemaking itpaintingsconqueredare stillproceduregrowth ofheaded byEuropean divisionsmoleculesfranchiseintentionattractedchildhoodalso useddedicatedsingaporedegree offather ofconflicts</a></p>\\ncame fromwere usednote thatreceivingExecutiveeven moreaccess tocommanderPoliticalmusiciansdeliciousprisonersadvent ofUTF-8" /><![CDATA[">ContactSouthern bgcolor="series of. It was in Europepermittedvalidate.appearingofficialsseriously-languageinitiatedextendinglong-terminflationsuch thatgetCookiemarked by</button>implementbut it isincreasesdown the requiringdependent--\\x3e\\n\\x3c!-- interviewWith the copies ofconsensuswas builtVenezuela(formerlythe statepersonnelstrategicfavour ofinventionWikipediacontinentvirtuallywhich wasprincipleComplete identicalshow thatprimitiveaway frommolecularpreciselydissolvedUnder theversion=">&nbsp;</It is the This is will haveorganismssome timeFriedrichwas firstthe only fact thatform id="precedingTechnicalphysicistoccurs innavigatorsection">span id="sought tobelow thesurviving}</style>his deathas in thecaused bypartiallyexisting using thewas givena list oflevels ofnotion ofOfficial dismissedscientistresemblesduplicateexplosiverecoveredall othergalleries{padding:people ofregion ofaddressesassociateimg alt="in modernshould bemethod ofreportingtimestampneeded tothe Greatregardingseemed toviewed asimpact onidea thatthe Worldheight ofexpandingThese arecurrent">carefullymaintainscharge ofClassicaladdressedpredictedownership<div id="right">\\r\\nresidenceleave thecontent">are often  })();\\r\\nprobably Professor-button" respondedsays thathad to beplaced inHungarianstatus ofserves asUniversalexecutionaggregatefor whichinfectionagreed tohowever, popular">placed onconstructelectoralsymbol ofincludingreturn toarchitectChristianprevious living ineasier toprofessor\\n&lt;!-- effect ofanalyticswas takenwhere thetook overbelief inAfrikaansas far aspreventedwork witha special<fieldsetChristmasRetrieved\\n\\nIn the back intonortheastmagazines><strong>committeegoverninggroups ofstored inestablisha generalits firsttheir ownpopulatedan objectCaribbeanallow thedistrictswisconsinlocation.; width: inhabitedSocialistJanuary 1</footer>similarlychoice ofthe same specific business The first.length; desire todeal withsince theuserAgentconceivedindex.phpas &quot;engage inrecently,few yearswere also\\n<head>\\n<edited byare knowncities inaccesskeycondemnedalso haveservices,family ofSchool ofconvertednature of languageministers</object>there is a popularsequencesadvocatedThey wereany otherlocation=enter themuch morereflectedwas namedoriginal a typicalwhen theyengineerscould notresidentswednesdaythe third productsJanuary 2what theya certainreactionsprocessorafter histhe last contained"></div>\\n</a></td>depend onsearch">\\npieces ofcompetingReferencetennesseewhich has version=</span> <</header>gives thehistorianvalue="">padding:0view thattogether,the most was foundsubset ofattack onchildren,points ofpersonal position:allegedlyClevelandwas laterand afterare givenwas stillscrollingdesign ofmakes themuch lessAmericans.\\n\\nAfter , but theMuseum oflouisiana(from theminnesotaparticlesa processDominicanvolume ofreturningdefensive00px|righmade frommouseover" style="states of(which iscontinuesFranciscobuilding without awith somewho woulda form ofa part ofbefore itknown as  Serviceslocation and oftenmeasuringand it ispaperbackvalues of\\r\\n<title>= window.determineer&quot; played byand early</center>from thisthe threepower andof &quot;innerHTML<a href="y:inline;Church ofthe eventvery highofficial -height: content="/cgi-bin/to createafrikaansesperantofranC\\\'aislatvieE!ulietuviE3D\\feE!tinaD\\reE!tina`9`8`8"f%f,h*g.\\0d=e-g9i+e-mj5-l4d8:d;\\0d9\\bh.!g.f:g,h.0f,h(h+e\\r\\0f\\re\\n!e(d:hg=f\\b?e0d:\\\'d?1d9i(e\x07:g\\t\\bg$>fh!\\ff&i(h=f <h?\x1Bd8\\0f-%f/d;e.i*\\fh/g e\\\'ed<f0f\\r.e:f6\\bh49h\\0e\\ne,e.$h.(h.:e\\f:f71e3e8f-f>e(e\\fd:,e8e$\\\'e-&gh6\\nf%h6\\ng.!ged?!f/g=serviciosartC-culoargentinabarcelonacualquierpublicadoproductospolC-ticarespuestawikipediasiguientebC:squedacomunidadseguridadprincipalpreguntascontenidorespondervenezuelaproblemasdiciembrerelaciC3nnoviembresimilaresproyectosprogramasinstitutoactividadencuentraeconomC-aimC!genescontactardescargarnecesarioatenciC3ntelC)fonocomisiC3ncancionescapacidadencontraranC!lisisfavoritostC)rminosprovinciaetiquetaselementosfuncionesresultadocarC!cterpropiedadprincipionecesidadmunicipalcreaciC3ndescargaspresenciacomercialopinionesejercicioeditorialsalamancagonzC!lezdocumentopelC-cularecientesgeneralestarragonaprC!cticanovedadespropuestapacientestC)cnicasobjetivoscontactos`$.`%\x07`$`$2`$?`$`$9`%\\b`$`$`$/`$>`$8`$>`$%`$`$5`$`$0`$9`%\x07`$`%\\v`$\\b`$`%`$\x1B`$0`$9`$>`$,`$>`$&`$`$9`$>`$8`$-`%\\0`$9`%`$`$0`$9`%\\0`$.`%\\b`$`$&`$?`$(`$,`$>`$$diplodocs`$8`$.`$/`$0`%`$*`$(`$>`$.`$*`$$`$>`$+`$?`$0`$`$8`$$`$$`$0`$9`$2`%\\v`$`$9`%`$`$,`$>`$0`$&`%\x07`$6`$9`%`$\\b`$`%\x07`$2`$/`$&`$?`$`$>`$.`$5`%\x07`$,`$$`%\\0`$(`$,`%\\0`$`$.`%\\f`$$`$8`$>`$2`$2`%\x07`$`$`%\\t`$,`$.`$&`$&`$$`$%`$>`$(`$9`%\\0`$6`$9`$0`$`$2`$`$`$-`%\\0`$(`$`$0`$*`$>`$8`$0`$>`$$`$`$?`$`$\\t`$8`%\x07`$`$/`%\\0`$9`%`$`$`$`%\x07`$`%\\0`$.`$`%\\v`$`$`$>`$0`$`$-`%\\0`$`$/`%\x07`$$`%`$.`$5`%\\v`$`$&`%\x07`$`$`$`$0`$`$8`%\x07`$.`%\x07`$2`$2`$`$>`$9`$>`$2`$\\n`$*`$0`$`$>`$0`$`$8`$>`$&`%\x07`$0`$`$?`$8`$&`$?`$2`$,`$`$&`$,`$(`$>`$9`%`$`$2`$>`$`$`%\\0`$$`$,`$`$(`$.`$?`$2`$\x07`$8`%\x07`$`$(`%\x07`$(`$/`$>`$`%`$2`$2`%\\t`$`$-`$>`$`$0`%\x07`$2`$`$`$9`$0`$>`$.`$2`$`%\x07`$*`%\x07`$`$9`$>`$%`$\x07`$8`%\\0`$8`$9`%\\0`$`$2`$>`$ `%\\0`$`$9`$>`$`$&`%`$0`$$`$9`$$`$8`$>`$$`$/`$>`$&`$`$/`$>`$*`$>`$`$`%\\f`$(`$6`$>`$.`$&`%\x07`$`$/`$9`%\\0`$0`$>`$/`$`%`$&`$2`$`%\\0categoriesexperience</title>\\r\\nCopyright javascriptconditionseverything<p class="technologybackground<a class="management&copy; 201javaScriptcharactersbreadcrumbthemselveshorizontalgovernmentCaliforniaactivitiesdiscoveredNavigationtransitionconnectionnavigationappearance</title><mcheckbox" techniquesprotectionapparentlyas well asunt\\\', \\\'UA-resolutionoperationstelevisiontranslatedWashingtonnavigator. = window.impression&lt;br&gt;literaturepopulationbgcolor="#especially content="productionnewsletterpropertiesdefinitionleadershipTechnologyParliamentcomparisonul class=".indexOf("conclusiondiscussioncomponentsbiologicalRevolution_containerunderstoodnoscript><permissioneach otheratmosphere onfocus="<form id="processingthis.valuegenerationConferencesubsequentwell-knownvariationsreputationphenomenondisciplinelogo.png" (document,boundariesexpressionsettlementBackgroundout of theenterprise("https:" unescape("password" democratic<a href="/wrapper">\\nmembershiplinguisticpx;paddingphilosophyassistanceuniversityfacilitiesrecognizedpreferenceif (typeofmaintainedvocabularyhypothesis.submit();&amp;nbsp;annotationbehind theFoundationpublisher"assumptionintroducedcorruptionscientistsexplicitlyinstead ofdimensions onClick="considereddepartmentoccupationsoon afterinvestmentpronouncedidentifiedexperimentManagementgeographic" height="link rel=".replace(/depressionconferencepunishmenteliminatedresistanceadaptationoppositionwell knownsupplementdeterminedh1 class="0px;marginmechanicalstatisticscelebratedGovernment\\n\\nDuring tdevelopersartificialequivalentoriginatedCommissionattachment<span id="there wereNederlandsbeyond theregisteredjournalistfrequentlyall of thelang="en" </style>\\r\\nabsolute; supportingextremely mainstream</strong> popularityemployment</table>\\r\\n colspan="</form>\\n  conversionabout the </p></div>integrated" lang="enPortuguesesubstituteindividualimpossiblemultimediaalmost allpx solid #apart fromsubject toin Englishcriticizedexcept forguidelinesoriginallyremarkablethe secondh2 class="<a title="(includingparametersprohibited= "http://dictionaryperceptionrevolutionfoundationpx;height:successfulsupportersmillenniumhis fatherthe &quot;no-repeat;commercialindustrialencouragedamount of unofficialefficiencyReferencescoordinatedisclaimerexpeditiondevelopingcalculatedsimplifiedlegitimatesubstring(0" class="completelyillustratefive yearsinstrumentPublishing1" class="psychologyconfidencenumber of absence offocused onjoined thestructurespreviously></iframe>once againbut ratherimmigrantsof course,a group ofLiteratureUnlike the</a>&nbsp;\\nfunction it was theConventionautomobileProtestantaggressiveafter the Similarly," /></div>collection\\r\\nfunctionvisibilitythe use ofvolunteersattractionunder the threatened*<![CDATA[importancein generalthe latter</form>\\n</.indexOf(\\\'i = 0; i <differencedevoted totraditionssearch forultimatelytournamentattributesso-called }\\n</style>evaluationemphasizedaccessible</section>successionalong withMeanwhile,industries</a><br />has becomeaspects ofTelevisionsufficientbasketballboth sidescontinuingan article<img alt="adventureshis mothermanchesterprinciplesparticularcommentaryeffects ofdecided to"><strong>publishersJournal ofdifficultyfacilitateacceptablestyle.css"\\tfunction innovation>Copyrightsituationswould havebusinessesDictionarystatementsoften usedpersistentin Januarycomprising</title>\\n\\tdiplomaticcontainingperformingextensionsmay not beconcept of onclick="It is alsofinancial making theLuxembourgadditionalare calledengaged in"script");but it waselectroniconsubmit="\\n\\x3c!-- End electricalofficiallysuggestiontop of theunlike theAustralianOriginallyreferences\\n</head>\\r\\nrecognisedinitializelimited toAlexandriaretirementAdventuresfour years\\n\\n&lt;!-- increasingdecorationh3 class="origins ofobligationregulationclassified(function(advantagesbeing the historians<base hrefrepeatedlywilling tocomparabledesignatednominationfunctionalinside therevelationend of thes for the authorizedrefused totake placeautonomouscompromisepolitical restauranttwo of theFebruary 2quality ofswfobject.understandnearly allwritten byinterviews" width="1withdrawalfloat:leftis usuallycandidatesnewspapersmysteriousDepartmentbest knownparliamentsuppressedconvenientremembereddifferent systematichas led topropagandacontrolledinfluencesceremonialproclaimedProtectionli class="Scientificclass="no-trademarksmore than widespreadLiberationtook placeday of theas long asimprisonedAdditional\\n<head>\\n<mLaboratoryNovember 2exceptionsIndustrialvariety offloat: lefDuring theassessmenthave been deals withStatisticsoccurrence/ul></div>clearfix">the publicmany yearswhich wereover time,synonymouscontent">\\npresumablyhis familyuserAgent.unexpectedincluding challengeda minorityundefined"belongs totaken fromin Octoberposition: said to bereligious Federation rowspan="only a fewmeant thatled to the--\\x3e\\r\\n<div <fieldset>Archbishop class="nobeing usedapproachesprivilegesnoscript>\\nresults inmay be theEaster eggmechanismsreasonablePopulationCollectionselected">noscript>\\r/index.phparrival of-jssdk\\\'));managed toincompletecasualtiescompletionChristiansSeptember arithmeticproceduresmight haveProductionit appearsPhilosophyfriendshipleading togiving thetoward theguaranteeddocumentedcolor:#000video gamecommissionreflectingchange theassociatedsans-serifonkeypress; padding:He was theunderlyingtypically , and the srcElementsuccessivesince the should be networkingaccountinguse of thelower thanshows that</span>\\n\\t\\tcomplaintscontinuousquantitiesastronomerhe did notdue to itsapplied toan averageefforts tothe futureattempt toTherefore,capabilityRepublicanwas formedElectronickilometerschallengespublishingthe formerindigenousdirectionssubsidiaryconspiracydetails ofand in theaffordablesubstancesreason forconventionitemtype="absolutelysupposedlyremained aattractivetravellingseparatelyfocuses onelementaryapplicablefound thatstylesheetmanuscriptstands for no-repeat(sometimesCommercialin Americaundertakenquarter ofan examplepersonallyindex.php?</button>\\npercentagebest-knowncreating a" dir="ltrLieutenant\\n<div id="they wouldability ofmade up ofnoted thatclear thatargue thatto anotherchildren\\\'spurpose offormulatedbased uponthe regionsubject ofpassengerspossession.\\n\\nIn the Before theafterwardscurrently across thescientificcommunity.capitalismin Germanyright-wingthe systemSociety ofpoliticiandirection:went on toremoval of New York apartmentsindicationduring theunless thehistoricalhad been adefinitiveingredientattendanceCenter forprominencereadyStatestrategiesbut in theas part ofconstituteclaim thatlaboratorycompatiblefailure of, such as began withusing the to providefeature offrom which/" class="geologicalseveral ofdeliberateimportant holds thating&quot; valign=topthe Germanoutside ofnegotiatedhis careerseparationid="searchwas calledthe fourthrecreationother thanpreventionwhile the education,connectingaccuratelywere builtwas killedagreementsmuch more Due to thewidth: 100some otherKingdom ofthe entirefamous forto connectobjectivesthe Frenchpeople andfeatured">is said tostructuralreferendummost oftena separate->\\n<div id Official worldwide.aria-labelthe planetand it wasd" value="looking atbeneficialare in themonitoringreportedlythe modernworking onallowed towhere the innovative</a></div>soundtracksearchFormtend to beinput id="opening ofrestrictedadopted byaddressingtheologianmethods ofvariant ofChristian very largeautomotiveby far therange frompursuit offollow thebrought toin Englandagree thataccused ofcomes frompreventingdiv style=his or hertremendousfreedom ofconcerning0 1em 1em;Basketball/style.cssan earliereven after/" title=".com/indextaking thepittsburghcontent">\\r<script>(fturned outhaving the</span>\\r\\n occasionalbecause itstarted tophysically></div>\\n  created byCurrently, bgcolor="tabindex="disastrousAnalytics also has a><div id="</style>\\n<called forsinger and.src = "//violationsthis pointconstantlyis locatedrecordingsd from thenederlandsportuguC*sW"WW(WW*YX\\\'X1X3[\\fdesarrollocomentarioeducaciC3nseptiembreregistradodirecciC3nubicaciC3npublicidadrespuestasresultadosimportantereservadosartC-culosdiferentessiguientesrepC:blicasituaciC3nministerioprivacidaddirectorioformaciC3npoblaciC3npresidentecontenidosaccesoriostechnoratipersonalescategorC-aespecialesdisponibleactualidadreferenciavalladolidbibliotecarelacionescalendariopolC-ticasanterioresdocumentosnaturalezamaterialesdiferenciaeconC3micatransporterodrC-guezparticiparencuentrandiscusiC3nestructurafundaciC3nfrecuentespermanentetotalmenteP<P>P6P=P>P1QP4P5QP<P>P6P5QP2Q\\0P5P<QQP0P:P6P5Q\x07QP>P1Q\\vP1P>P;P5P5P>Q\x07P5P=Q\\fQ\\rQP>P3P>P:P>P3P4P0P?P>QP;P5P2QP5P3P>QP0P9QP5Q\x07P5Q\\0P5P7P<P>P3QQQP0P9QP0P6P8P7P=P8P<P5P6P4QP1QP4QQPP>P8QP:P7P4P5QQ\\fP2P8P4P5P>QP2QP7P8P=QP6P=P>QP2P>P5P9P;QP4P5P9P?P>Q\\0P=P>P<P=P>P3P>P4P5QP5P9QP2P>P8QP?Q\\0P0P2P0QP0P:P>P9P<P5QQP>P8P<P5P5QP6P8P7P=Q\\fP>P4P=P>P9P;QQ\x07Q\\bP5P?P5Q\\0P5P4Q\x07P0QQP8Q\x07P0QQQ\\fQ\\0P0P1P>QP=P>P2Q\\vQP?Q\\0P0P2P>QP>P1P>P9P?P>QP>P<P<P5P=P5P5Q\x07P8QP;P5P=P>P2Q\\vP5QQP;QP3P>P:P>P;P>P=P0P7P0P4QP0P:P>P5QP>P3P4P0P?P>Q\x07QP8PP>QP;P5QP0P:P8P5P=P>P2Q\\vP9QQP>P8QQP0P:P8QQQ\\0P0P7QP!P0P=P:QQP>Q\\0QP<PP>P3P4P0P:P=P8P3P8QP;P>P2P0P=P0Q\\bP5P9P=P0P9QP8QP2P>P8P<QP2QP7Q\\fP;QP1P>P9Q\x07P0QQP>QQ\\0P5P4P8PQ\\0P>P<P5P$P>Q\\0QP<Q\\0Q\\vP=P:P5QQP0P;P8P?P>P8QP:QQ\\vQQQ\x07P<P5QQQQP5P=QQ\\0QQ\\0QP4P0QP0P<Q\\vQQ\\0Q\\vP=P:P0PP>P2Q\\vP9Q\x07P0QP>P2P<P5QQP0QP8P;Q\\fP<P<P0Q\\0QP0QQQ\\0P0P=P<P5QQP5QP5P:QQP=P0Q\\bP8QP<P8P=QQP8P<P5P=P8P8P<P5QQP=P>P<P5Q\\0P3P>Q\\0P>P4QP0P<P>P<Q\\rQP>P<QP:P>P=QP5QP2P>P5P<P:P0P:P>P9PQ\\0QP8P2YYX*X/Y\\tX%X1X3X\\\'YX1X3X\\\'YX)X\\\'YX9X\\\'YYX*X(Y\x07X\\\'X(X1X\\\'YX,X\\\'YY\\nY\\bYX\\\'YX5Y\\bX1X,X/Y\\nX/X)X\\\'YX9X6Y\\bX%X6X\\\'YX)X\\\'YYX3YX\\\'YX9X\\\'X(X*X-YY\\nYYYYX\\\'X*YYX*YY\\tX*X9X/Y\\nYX\\\'YX4X9X1X#X.X(X\\\'X1X*X7Y\\bY\\nX1X9YY\\nYYX%X1YX\\\'YX7YX(X\\\'X*X\\\'YYX:X)X*X1X*Y\\nX(X\\\'YYX\\\'X3X\\\'YX4Y\\nX.YYX*X/Y\\nX\\\'YX9X1X(X\\\'YYX5X5X\\\'YYX\\\'YX9YY\\nY\x07X\\\'X*X-X/Y\\nX+X\\\'YYY\x07YX\\\'YX9YYYYX*X(X)Y\\nYYYYX\\\'YX7YYYY\\nX/Y\\nY\\bX%X/X\\\'X1X)X*X\\\'X1Y\\nX.X\\\'YX5X-X)X*X3X,Y\\nYX\\\'YY\\bYX*X9YX/YX\\\'YX/Y\\nYX)X*X5YY\\nYX#X1X4Y\\nYX\\\'YX0Y\\nYX9X1X(Y\\nX)X(Y\\bX\\\'X(X)X#YX9X\\\'X(X\\\'YX3YX1YX4X\\\'YYX*X9X\\\'YY\\tX\\\'YX#Y\\bYX\\\'YX3YX)X,X\\\'YX9X)X\\\'YX5X-YX\\\'YX/Y\\nYYYYX\\\'X*X\\\'YX.X\\\'X5X\\\'YYYYX#X9X6X\\\'X!YX*X\\\'X(X)X\\\'YX.Y\\nX1X1X3X\\\'X&YX\\\'YYYX(X\\\'YX#X/X(YYX\\\'X7X9YX1X\\\'X3YYYX7YX)X\\\'YYX*X(X\\\'YX1X,YX\\\'X4X*X1YX\\\'YYX/YY\\nX9X7Y\\nYsByTagName(.jpg" alt="1px solid #.gif" alt="transparentinformationapplication" onclick="establishedadvertising.png" alt="environmentperformanceappropriate&amp;mdash;immediately</strong></rather thantemperaturedevelopmentcompetitionplaceholdervisibility:copyright">0" height="even thoughreplacementdestinationCorporation<ul class="AssociationindividualsperspectivesetTimeout(url(http://mathematicsmargin-top:eventually description) no-repeatcollections.JPG|thumb|participate/head><bodyfloat:left;<li class="hundreds of\\n\\nHowever, compositionclear:both;cooperationwithin the label for="border-top:New Zealandrecommendedphotographyinteresting&lt;sup&gt;controversyNetherlandsalternativemaxlength="switzerlandDevelopmentessentially\\n\\nAlthough </textarea>thunderbirdrepresented&amp;ndash;speculationcommunitieslegislationelectronics\\n\\t<div id="illustratedengineeringterritoriesauthoritiesdistributed6" height="sans-serif;capable of disappearedinteractivelooking forit would beAfghanistanwas createdMath.floor(surroundingcan also beobservationmaintenanceencountered<h2 class="more recentit has beeninvasion of).getTime()fundamentalDespite the"><div id="inspirationexaminationpreparationexplanation<input id="</a></span>versions ofinstrumentsbefore the  = \\\'http://Descriptionrelatively .substring(each of theexperimentsinfluentialintegrationmany peopledue to the combinationdo not haveMiddle East<noscript><copyright" perhaps theinstitutionin Decemberarrangementmost famouspersonalitycreation oflimitationsexclusivelysovereignty-content">\\n<td class="undergroundparallel todoctrine ofoccupied byterminologyRenaissancea number ofsupport forexplorationrecognitionpredecessor<img src="/<h1 class="publicationmay also bespecialized</fieldset>progressivemillions ofstates thatenforcementaround the one another.parentNodeagricultureAlternativeresearcherstowards theMost of themany other (especially<td width=";width:100%independent<h3 class=" onchange=").addClass(interactionOne of the daughter ofaccessoriesbranches of\\r\\n<div id="the largestdeclarationregulationsInformationtranslationdocumentaryin order to">\\n<head>\\n<" height="1across the orientation);<\\/script>implementedcan be seenthere was ademonstratecontainer">connectionsthe Britishwas written!important;px; margin-followed byability to complicatedduring the immigrationalso called<h4 class="distinctionreplaced bygovernmentslocation ofin Novemberwhether the</p>\\n</div>acquisitioncalled the persecutiondesignation{font-size:appeared ininvestigateexperiencedmost likelywidely useddiscussionspresence of (document.extensivelyIt has beenit does notcontrary toinhabitantsimprovementscholarshipconsumptioninstructionfor exampleone or morepx; paddingthe currenta series ofare usuallyrole in thepreviously derivativesevidence ofexperiencescolorschemestated thatcertificate</a></div>\\n selected="high schoolresponse tocomfortableadoption ofthree yearsthe countryin Februaryso that thepeople who provided by<param nameaffected byin terms ofappointmentISO-8859-1"was born inhistorical regarded asmeasurementis based on and other : function(significantcelebrationtransmitted/js/jquery.is known astheoretical tabindex="it could be<noscript>\\nhaving been\\r\\n<head>\\r\\n< &quot;The compilationhe had beenproduced byphilosopherconstructedintended toamong othercompared toto say thatEngineeringa differentreferred todifferencesbelief thatphotographsidentifyingHistory of Republic ofnecessarilyprobabilitytechnicallyleaving thespectacularfraction ofelectricityhead of therestaurantspartnershipemphasis onmost recentshare with saying thatfilled withdesigned toit is often"></iframe>as follows:merged withthrough thecommercial pointed outopportunityview of therequirementdivision ofprogramminghe receivedsetInterval"></span></in New Yorkadditional compression\\n\\n<div id="incorporate;<\\/script><attachEventbecame the " target="_carried outSome of thescience andthe time ofContainer">maintainingChristopherMuch of thewritings of" height="2size of theversion of mixture of between theExamples ofeducationalcompetitive onsubmit="director ofdistinctive/DTD XHTML relating totendency toprovince ofwhich woulddespite thescientific legislature.innerHTML allegationsAgriculturewas used inapproach tointelligentyears later,sans-serifdeterminingPerformanceappearances, which is foundationsabbreviatedhigher thans from the individual composed ofsupposed toclaims thatattributionfont-size:1elements ofHistorical his brotherat the timeanniversarygoverned byrelated to ultimately innovationsit is stillcan only bedefinitionstoGMTStringA number ofimg class="Eventually,was changedoccurred inneighboringdistinguishwhen he wasintroducingterrestrialMany of theargues thatan Americanconquest ofwidespread were killedscreen and In order toexpected todescendantsare locatedlegislativegenerations backgroundmost peopleyears afterthere is nothe highestfrequently they do notargued thatshowed thatpredominanttheologicalby the timeconsideringshort-lived</span></a>can be usedvery littleone of the had alreadyinterpretedcommunicatefeatures ofgovernment,</noscript>entered the" height="3Independentpopulationslarge-scale. Although used in thedestructionpossibilitystarting intwo or moreexpressionssubordinatelarger thanhistory and</option>\\r\\nContinentaleliminatingwill not bepractice ofin front ofsite of theensure thatto create amississippipotentiallyoutstandingbetter thanwhat is nowsituated inmeta name="TraditionalsuggestionsTranslationthe form ofatmosphericideologicalenterprisescalculatingeast of theremnants ofpluginspage/index.php?remained intransformedHe was alsowas alreadystatisticalin favor ofMinistry ofmovement offormulationis required<link rel="This is the <a href="/popularizedinvolved inare used toand severalmade by theseems to belikely thatPalestiniannamed afterit had beenmost commonto refer tobut this isconsecutivetemporarilyIn general,conventionstakes placesubdivisionterritorialoperationalpermanentlywas largelyoutbreak ofin the pastfollowing a xmlns:og="><a class="class="textConversion may be usedmanufactureafter beingclearfix">\\nquestion ofwas electedto become abecause of some peopleinspired bysuccessful a time whenmore commonamongst thean officialwidth:100%;technology,was adoptedto keep thesettlementslive birthsindex.html"Connecticutassigned to&amp;times;account foralign=rightthe companyalways beenreturned toinvolvementBecause thethis period" name="q" confined toa result ofvalue="" />is actuallyEnvironment\\r\\n</head>\\r\\nConversely,>\\n<div id="0" width="1is probablyhave becomecontrollingthe problemcitizens ofpoliticiansreached theas early as:none; over<table cellvalidity ofdirectly toonmousedownwhere it iswhen it wasmembers of relation toaccommodatealong with In the latethe Englishdelicious">this is notthe presentif they areand finallya matter of\\r\\n\\t</div>\\r\\n\\r\\n<\\/script>faster thanmajority ofafter whichcomparativeto maintainimprove theawarded theer" class="frameborderrestorationin the sameanalysis oftheir firstDuring the continentalsequence offunction(){font-size: work on the<\\/script>\\n<begins withjavascript:constituentwas foundedequilibriumassume thatis given byneeds to becoordinatesthe variousare part ofonly in thesections ofis a commontheories ofdiscoveriesassociationedge of thestrength ofposition inpresent-dayuniversallyto form thebut insteadcorporationattached tois commonlyreasons for &quot;the can be madewas able towhich meansbut did notonMouseOveras possibleoperated bycoming fromthe primaryaddition offor severaltransferreda period ofare able tohowever, itshould havemuch larger\\n\\t<\\/script>adopted theproperty ofdirected byeffectivelywas broughtchildren ofProgramminglonger thanmanuscriptswar againstby means ofand most ofsimilar to proprietaryoriginatingprestigiousgrammaticalexperience.to make theIt was alsois found incompetitorsin the U.S.replace thebrought thecalculationfall of thethe generalpracticallyin honor ofreleased inresidentialand some ofking of thereaction to1st Earl ofculture andprincipally</title>\\n  they can beback to thesome of hisexposure toare similarform of theaddFavoritecitizenshippart in thepeople within practiceto continue&amp;minus;approved by the first allowed theand for thefunctioningplaying thesolution toheight="0" in his bookmore than afollows thecreated thepresence in&nbsp;</td>nationalistthe idea ofa characterwere forced class="btndays of thefeatured inshowing theinterest inin place ofturn of thethe head ofLord of thepoliticallyhas its ownEducationalapproval ofsome of theeach other,behavior ofand becauseand anotherappeared onrecorded inblack&quot;may includethe world\\\'scan lead torefers to aborder="0" government winning theresulted in while the Washington,the subjectcity in the></div>\\r\\n\\t\\treflect theto completebecame moreradioactiverejected bywithout anyhis father,which couldcopy of theto indicatea politicalaccounts ofconstitutesworked wither</a></li>of his lifeaccompaniedclientWidthprevent theLegislativedifferentlytogether inhas severalfor anothertext of thefounded thee with the is used forchanged theusually theplace wherewhereas the> <a href=""><a href="themselves,although hethat can betraditionalrole of theas a resultremoveChilddesigned bywest of theSome peopleproduction,side of thenewslettersused by thedown to theaccepted bylive in theattempts tooutside thefrequenciesHowever, inprogrammersat least inapproximatealthough itwas part ofand variousGovernor ofthe articleturned into><a href="/the economyis the mostmost widelywould laterand perhapsrise to theoccurs whenunder whichconditions.the westerntheory thatis producedthe city ofin which heseen in thethe centralbuilding ofmany of hisarea of theis the onlymost of themany of thethe WesternThere is noextended toStatisticalcolspan=2 |short storypossible totopologicalcritical ofreported toa Christiandecision tois equal toproblems ofThis can bemerchandisefor most ofno evidenceeditions ofelements in&quot;. Thecom/images/which makesthe processremains theliterature,is a memberthe popularthe ancientproblems intime of thedefeated bybody of thea few yearsmuch of thethe work ofCalifornia,served as agovernment.concepts ofmovement in\\t\\t<div id="it" value="language ofas they areproduced inis that theexplain thediv></div>\\nHowever thelead to the\\t<a href="/was grantedpeople havecontinuallywas seen asand relatedthe role ofproposed byof the besteach other.Constantinepeople fromdialects ofto revisionwas renameda source ofthe initiallaunched inprovide theto the westwhere thereand similarbetween twois also theEnglish andconditions,that it wasentitled tothemselves.quantity ofransparencythe same asto join thecountry andthis is theThis led toa statementcontrast tolastIndexOfthrough hisis designedthe term isis providedprotect theng</a></li>The currentthe site ofsubstantialexperience,in the Westthey shouldslovenD\\rinacomentariosuniversidadcondicionesactividadesexperienciatecnologC-aproducciC3npuntuaciC3naplicaciC3ncontraseC1acategorC-asregistrarseprofesionaltratamientoregC-stratesecretarC-aprincipalesprotecciC3nimportantesimportanciaposibilidadinteresantecrecimientonecesidadessuscribirseasociaciC3ndisponiblesevaluaciC3nestudiantesresponsableresoluciC3nguadalajararegistradosoportunidadcomercialesfotografC-aautoridadesingenierC-atelevisiC3ncompetenciaoperacionesestablecidosimplementeactualmentenavegaciC3nconformidadline-height:font-family:" : "http://applicationslink" href="specifically//<![CDATA[\\nOrganizationdistribution0px; height:relationshipdevice-width<div class="<label for="registration</noscript>\\n/index.html"window.open( !important;application/independence//www.googleorganizationautocompleterequirementsconservative<form name="intellectualmargin-left:18th centuryan importantinstitutionsabbreviation<img class="organisationcivilization19th centuryarchitectureincorporated20th century-container">most notably/></a></div>notification\\\'undefined\\\')Furthermore,believe thatinnerHTML = prior to thedramaticallyreferring tonegotiationsheadquartersSouth AfricaunsuccessfulPennsylvaniaAs a result,<html lang="&lt;/sup&gt;dealing withphiladelphiahistorically);<\\/script>\\npadding-top:experimentalgetAttributeinstructionstechnologiespart of the =function(){subscriptionl.dtd">\\r\\n<htgeographicalConstitution\\\', function(supported byagriculturalconstructionpublicationsfont-size: 1a variety of<div style="Encyclopediaiframe src="demonstratedaccomplisheduniversitiesDemographics);<\\/script><dedicated toknowledge ofsatisfactionparticularly</div></div>English (US)appendChild(transmissions. However, intelligence" tabindex="float:right;Commonwealthranging fromin which theat least onereproductionencyclopedia;font-size:1jurisdictionat that time"><a class="In addition,description+conversationcontact withis generallyr" content="representing&lt;math&gt;presentationoccasionally<img width="navigation">compensationchampionshipmedia="all" violation ofreference toreturn true;Strict//EN" transactionsinterventionverificationInformation difficultiesChampionshipcapabilities<![endif]--\\x3e}\\n<\\/script>\\nChristianityfor example,Professionalrestrictionssuggest thatwas released(such as theremoveClass(unemploymentthe Americanstructure of/index.html published inspan class=""><a href="/introductionbelonging toclaimed thatconsequences<meta name="Guide to theoverwhelmingagainst the concentrated,\\n.nontouch observations</a>\\n</div>\\nf (document.border: 1px {font-size:1treatment of0" height="1modificationIndependencedivided intogreater thanachievementsestablishingJavaScript" neverthelesssignificanceBroadcasting>&nbsp;</td>container">\\nsuch as the influence ofa particularsrc=\\\'http://navigation" half of the substantial &nbsp;</div>advantage ofdiscovery offundamental metropolitanthe opposite" xml:lang="deliberatelyalign=centerevolution ofpreservationimprovementsbeginning inJesus ChristPublicationsdisagreementtext-align:r, function()similaritiesbody></html>is currentlyalphabeticalis sometimestype="image/many of the flow:hidden;available indescribe theexistence ofall over thethe Internet\\t<ul class="installationneighborhoodarmed forcesreducing thecontinues toNonetheless,temperatures\\n\\t\\t<a href="close to theexamples of is about the(see below)." id="searchprofessionalis availablethe official\\t\\t<\\/script>\\n\\n\\t\\t<div id="accelerationthrough the Hall of Famedescriptionstranslationsinterference type=\\\'text/recent yearsin the worldvery popular{background:traditional some of the connected toexploitationemergence ofconstitutionA History ofsignificant manufacturedexpectations><noscript><can be foundbecause the has not beenneighbouringwithout the added to the\\t<li class="instrumentalSoviet Unionacknowledgedwhich can bename for theattention toattempts to developmentsIn fact, the<li class="aimplicationssuitable formuch of the colonizationpresidentialcancelBubble Informationmost of the is describedrest of the more or lessin SeptemberIntelligencesrc="http://px; height: available tomanufacturerhuman rightslink href="/availabilityproportionaloutside the astronomicalhuman beingsname of the are found inare based onsmaller thana person whoexpansion ofarguing thatnow known asIn the earlyintermediatederived fromScandinavian</a></div>\\r\\nconsider thean estimatedthe National<div id="pagresulting incommissionedanalogous toare required/ul>\\n</div>\\nwas based onand became a&nbsp;&nbsp;t" value="" was capturedno more thanrespectivelycontinue to >\\r\\n<head>\\r\\n<were createdmore generalinformation used for theindependent the Imperialcomponent ofto the northinclude the Constructionside of the would not befor instanceinvention ofmore complexcollectivelybackground: text-align: its originalinto accountthis processan extensivehowever, thethey are notrejected thecriticism ofduring whichprobably thethis article(function(){It should bean agreementaccidentallydiffers fromArchitecturebetter knownarrangementsinfluence onattended theidentical tosouth of thepass throughxml" title="weight:bold;creating thedisplay:nonereplaced the<img src="/ihttps://www.World War IItestimonialsfound in therequired to and that thebetween the was designedconsists of considerablypublished bythe languageConservationconsisted ofrefer to theback to the css" media="People from available onproved to besuggestions"was known asvarieties oflikely to becomprised ofsupport the hands of thecoupled withconnect and border:none;performancesbefore beinglater becamecalculationsoften calledresidents ofmeaning that><li class="evidence forexplanationsenvironments"></a></div>which allowsIntroductiondeveloped bya wide rangeon behalf ofvalign="top"principle ofat the time,</noscript>\\rsaid to havein the firstwhile othershypotheticalphilosopherspower of thecontained inperformed byinability towere writtenspan style="input name="the questionintended forrejection ofimplies thatinvented thethe standardwas probablylink betweenprofessor ofinteractionschanging theIndian Ocean class="lastworking with\\\'http://www.years beforeThis was therecreationalentering themeasurementsan extremelyvalue of thestart of the\\n<\\/script>\\n\\nan effort toincrease theto the southspacing="0">sufficientlythe Europeanconverted toclearTimeoutdid not haveconsequentlyfor the nextextension ofeconomic andalthough theare producedand with theinsufficientgiven by thestating thatexpenditures</span></a>\\nthought thaton the basiscellpadding=image of thereturning toinformation,separated byassassinateds" content="authority ofnorthwestern</div>\\n<div "></div>\\r\\n  consultationcommunity ofthe nationalit should beparticipants align="leftthe greatestselection ofsupernaturaldependent onis mentionedallowing thewas inventedaccompanyinghis personalavailable atstudy of theon the otherexecution ofHuman Rightsterms of theassociationsresearch andsucceeded bydefeated theand from thebut they arecommander ofstate of theyears of agethe study of<ul class="splace in thewhere he was<li class="fthere are nowhich becamehe publishedexpressed into which thecommissionerfont-weight:territory ofextensions">Roman Empireequal to theIn contrast,however, andis typicallyand his wife(also called><ul class="effectively evolved intoseem to havewhich is thethere was noan excellentall of thesedescribed byIn practice,broadcastingcharged withreflected insubjected tomilitary andto the pointeconomicallysetTargetingare actuallyvictory over();<\\/script>continuouslyrequired forevolutionaryan effectivenorth of the, which was front of theor otherwisesome form ofhad not beengenerated byinformation.permitted toincludes thedevelopment,entered intothe previousconsistentlyare known asthe field ofthis type ofgiven to thethe title ofcontains theinstances ofin the northdue to theirare designedcorporationswas that theone of thesemore popularsucceeded insupport fromin differentdominated bydesigned forownership ofand possiblystandardizedresponseTextwas intendedreceived theassumed thatareas of theprimarily inthe basis ofin the senseaccounts fordestroyed byat least twowas declaredcould not beSecretary ofappear to bemargin-top:1/^\\\\s+|\\\\s+$/ge){throw e};the start oftwo separatelanguage andwho had beenoperation ofdeath of thereal numbers\\t<link rel="provided thethe story ofcompetitionsenglish (UK)english (US)PP>P=P3P>P;P!Q\\0P?QP:P8QQ\\0P?QP:P8QQ\\0P?QP:P>YX9X1X(Y\\nX)f-#i+d8-f\x07g.\\0d=d8-f\x07g9d=d8-f\x07f\\tie,e8d::f0f?e:i?i\x07\\fe74e74g$>d<d8;d9\\tf\\rd=g3;g;f?g-f3h\\\'informaciC3nherramientaselectrC3nicodescripciC3nclasificadosconocimientopublicaciC3nrelacionadasinformC!ticarelacionadosdepartamentotrabajadoresdirectamenteayuntamientomercadoLibrecontC!ctenoshabitacionescumplimientorestaurantesdisposiciC3nconsecuenciaelectrC3nicaaplicacionesdesconectadoinstalaciC3nrealizaciC3nutilizaciC3nenciclopediaenfermedadesinstrumentosexperienciasinstituciC3nparticularessubcategoriaQP>P;Q\\fP:P>P P>QQP8P8Q\\0P0P1P>QQ\\vP1P>P;Q\\fQ\\bP5P?Q\\0P>QQP>P<P>P6P5QP5P4Q\\0QP3P8QQP;QQ\x07P0P5QP5P9Q\x07P0QP2QP5P3P4P0P P>QQP8QPP>QP:P2P5P4Q\\0QP3P8P5P3P>Q\\0P>P4P0P2P>P?Q\\0P>QP4P0P=P=Q\\vQP4P>P;P6P=Q\\vP8P<P5P=P=P>PP>QP:P2Q\\vQ\\0QP1P;P5P9PP>QP:P2P0QQQ\\0P0P=Q\\vP=P8Q\x07P5P3P>Q\\0P0P1P>QP5P4P>P;P6P5P=QQP;QP3P8QP5P?P5Q\\0Q\\fPP4P=P0P:P>P?P>QP>P<QQ\\0P0P1P>QQP0P?Q\\0P5P;QP2P>P>P1Q\\tP5P>P4P=P>P3P>QP2P>P5P3P>QQP0QQ\\fP8P4Q\\0QP3P>P9QP>Q\\0QP<P5QP>Q\\0P>Q\\bP>P?Q\\0P>QP8P2QQQ\\vP;P:P0P:P0P6P4Q\\vP9P2P;P0QQP8P3Q\\0QP?P?Q\\vP2P<P5QQP5Q\\0P0P1P>QP0QP:P0P7P0P;P?P5Q\\0P2Q\\vP9P4P5P;P0QQ\\fP4P5P=Q\\fP3P8P?P5Q\\0P8P>P4P1P8P7P=P5QP>QP=P>P2P5P<P>P<P5P=QP:QP?P8QQ\\fP4P>P;P6P=P0Q\\0P0P<P:P0QP=P0Q\x07P0P;P>P P0P1P>QP0P"P>P;Q\\fP:P>QP>P2QP5P<P2QP>Q\\0P>P9P=P0Q\x07P0P;P0QP?P8QP>P:QP;QP6P1Q\\vQP8QQP5P<P?P5Q\x07P0QP8P=P>P2P>P3P>P?P>P<P>Q\\tP8QP0P9QP>P2P?P>Q\x07P5P<QP?P>P<P>Q\\tQ\\fP4P>P;P6P=P>QQQ\\vP;P:P8P1Q\\vQQQ\\0P>P4P0P=P=Q\\vP5P<P=P>P3P8P5P?Q\\0P>P5P:QP!P5P9Q\x07P0QP<P>P4P5P;P8QP0P:P>P3P>P>P=P;P0P9P=P3P>Q\\0P>P4P5P2P5Q\\0QP8QQQQ\\0P0P=P5QP8P;Q\\fP<Q\\vQQ\\0P>P2P=QQ\\0P0P7P=Q\\vQP8QP:P0QQ\\fP=P5P4P5P;QQP=P2P0Q\\0QP<P5P=Q\\fQ\\bP5P<P=P>P3P8QP4P0P=P=P>P9P7P=P0Q\x07P8QP=P5P;Q\\fP7QQP>Q\\0QP<P0P"P5P?P5Q\\0Q\\fP<P5QQQP0P7P0Q\\tP8QQ\\vP\x1BQQ\x07Q\\bP8P5`$(`$9`%\\0`$`$`$0`$(`%\x07`$`$*`$(`%\x07`$`$?`$/`$>`$`$0`%\x07`$`$`$(`%\\r`$/`$`%\\r`$/`$>`$`$>`$\x07`$!`$,`$>`$0`%\x07`$`$?`$8`%\\0`$&`$?`$/`$>`$*`$9`$2`%\x07`$8`$?`$`$9`$-`$>`$0`$$`$`$*`$(`%\\0`$5`$>`$2`%\x07`$8`%\x07`$5`$>`$`$0`$$`%\x07`$.`%\x07`$0`%\x07`$9`%\\v`$(`%\x07`$8`$`$$`%\x07`$,`$9`%`$$`$8`$>`$\x07`$`$9`%\\v`$`$>`$`$>`$(`%\x07`$.`$?`$(`$`$`$0`$$`$>`$`$0`$(`$>`$\\t`$(`$`%\x07`$/`$9`$>`$`$8`$,`$8`%\x07`$-`$>`$7`$>`$`$*`$`%\x07`$2`$?`$/`%\x07`$6`%`$0`%`$\x07`$8`$`%\x07`$`$`$`%\x07`$.`%\x07`$0`%\\0`$8`$`$$`$>`$.`%\x07`$0`$>`$2`%\x07`$`$0`$`$\\\'`$?`$`$`$*`$(`$>`$8`$.`$>`$`$.`%`$`%\x07`$`$>`$0`$#`$9`%\\v`$$`$>`$`$!`$<`%\\0`$/`$9`$>`$`$9`%\\v`$`$2`$6`$,`%\\r`$&`$2`$?`$/`$>`$`%\\0`$5`$(`$`$>`$$`$>`$`%\\b`$8`%\x07`$`$*`$`$>`$5`$>`$2`%\\0`$&`%\x07`$(`%\x07`$*`%`$0`%\\0`$*`$>`$(`%\\0`$\\t`$8`$`%\x07`$9`%\\v`$`%\\0`$,`%\\b`$ `$`$`$*`$`%\\0`$5`$0`%\\r`$7`$`$>`$`$5`$`$*`$`%\\v`$`$?`$2`$>`$`$>`$(`$>`$8`$9`$.`$$`$9`$.`%\x07`$`$\\t`$(`$`%\\0`$/`$>`$9`%`$&`$0`%\\r`$`$8`%`$`%\\0`$*`$8`$`$&`$8`$5`$>`$2`$9`%\\v`$(`$>`$9`%\\v`$$`%\\0`$`%\\b`$8`%\x07`$5`$>`$*`$8`$`$(`$$`$>`$(`%\x07`$$`$>`$`$>`$0`%\\0`$`$>`$/`$2`$`$?`$2`%\x07`$(`%\\0`$`%\x07`$`$>`$`$`$*`$$`%\\r`$0`$`%`$`$2`$`$>`$$`%\x07`$,`$>`$9`$0`$`$*`$(`%\x07`$5`$>`$9`$(`$\x07`$8`$`$>`$8`%`$,`$9`$0`$9`$(`%\x07`$\x07`$8`$8`%\x07`$8`$9`$?`$$`$,`$!`$<`%\x07`$`$`$(`$>`$$`$2`$>`$6`$*`$>`$`$`$6`%\\r`$0`%\\0`$,`$!`$<`%\\0`$9`%\\v`$$`%\x07`$8`$>`$\\b`$`$6`$>`$/`$&`$8`$`$$`%\\0`$`$>`$$`%\\0`$5`$>`$2`$>`$9`$`$>`$0`$*`$`$(`$>`$0`$`$(`%\x07`$8`$!`$<`$`$.`$?`$2`$>`$\\t`$8`$`%\\0`$`%\x07`$5`$2`$2`$`$$`$>`$`$>`$(`$>`$`$0`%\\r`$%`$`$9`$>`$`$&`%\x07`$`$>`$*`$9`$2`%\\0`$(`$?`$/`$.`$,`$?`$(`$>`$,`%\\b`$`$`$`$9`%\\0`$`$`$9`$(`$>`$&`%\x07`$$`$>`$9`$.`$2`%\x07`$`$>`$+`%\\0`$`$,`$`$?`$$`%`$0`$$`$.`$>`$`$`$5`$9`%\\0`$`$0`%\\v`$`$<`$.`$?`$2`%\\0`$`$0`%\\v`$*`$8`%\x07`$(`$>`$/`$>`$&`$5`$2`%\x07`$(`%\x07`$`$>`$$`$>`$`$0`%\\0`$,`$\\t`$(`$`$>`$`$5`$>`$,`$*`%`$0`$>`$,`$!`$<`$>`$8`%\\f`$&`$>`$6`%\x07`$/`$0`$`$?`$/`%\x07`$`$9`$>`$`$`$`$8`$0`$,`$(`$>`$`$5`$9`$>`$`$8`%\\r`$%`$2`$.`$?`$2`%\x07`$2`%\x07`$`$`$5`$?`$7`$/`$`%\\r`$0`$`$8`$.`%`$9`$%`$>`$(`$>X*X3X*X7Y\\nX9YX4X\\\'X1YX)X(Y\\bX\\\'X3X7X)X\\\'YX5YX-X)YY\\bX\\\'X6Y\\nX9X\\\'YX.X\\\'X5X)X\\\'YYX2Y\\nX/X\\\'YX9X\\\'YX)X\\\'YYX\\\'X*X(X\\\'YX1X/Y\\bX/X(X1YX\\\'YX,X\\\'YX/Y\\bYX)X\\\'YX9X\\\'YYX\\\'YYY\\bYX9X\\\'YX9X1X(Y\\nX\\\'YX3X1Y\\nX9X\\\'YX,Y\\bX\\\'YX\\\'YX0Y\x07X\\\'X(X\\\'YX-Y\\nX\\\'X)X\\\'YX-YY\\bYX\\\'YYX1Y\\nYX\\\'YX9X1X\\\'YYX-YY\\bX8X)X\\\'YX+X\\\'YY\\nYX4X\\\'Y\x07X/X)X\\\'YYX1X#X)X\\\'YYX1X"YX\\\'YX4X(X\\\'X(X\\\'YX-Y\\bX\\\'X1X\\\'YX,X/Y\\nX/X\\\'YX#X3X1X)X\\\'YX9YY\\bYYX,YY\\bX9X)X\\\'YX1X-YYX\\\'YYYX\\\'X7YYX3X7Y\\nYX\\\'YYY\\bY\\nX*X\\\'YX/YY\\nX\\\'X(X1YX\\\'X*Y\x07X\\\'YX1Y\\nX\\\'X6X*X-Y\\nX\\\'X*Y\\nX(X*Y\\bYY\\nX*X\\\'YX#Y\\bYY\\tX\\\'YX(X1Y\\nX/X\\\'YYYX\\\'YX\\\'YX1X\\\'X(X7X\\\'YX4X.X5Y\\nX3Y\\nX\\\'X1X\\\'X*X\\\'YX+X\\\'YX+X\\\'YX5YX\\\'X)X\\\'YX-X/Y\\nX+X\\\'YX2Y\\bX\\\'X1X\\\'YX.YY\\nX,X\\\'YX,YY\\nX9X\\\'YX9X\\\'YY\x07X\\\'YX,YX\\\'YX\\\'YX3X\\\'X9X)YX4X\\\'Y\x07X/Y\x07X\\\'YX1X&Y\\nX3X\\\'YX/X.Y\\bYX\\\'YYYY\\nX)X\\\'YYX*X\\\'X(X\\\'YX/Y\\bX1Y\\nX\\\'YX/X1Y\\bX3X\\\'X3X*X:X1YX*X5X\\\'YY\\nYX\\\'YX(YX\\\'X*X\\\'YX9X8Y\\nYentertainmentunderstanding = function().jpg" width="configuration.png" width="<body class="Math.random()contemporary United Statescircumstances.appendChild(organizations<span class=""><img src="/distinguishedthousands of communicationclear"></div>investigationfavicon.ico" margin-right:based on the Massachusettstable border=internationalalso known aspronunciationbackground:#fpadding-left:For example, miscellaneous&lt;/math&gt;psychologicalin particularearch" type="form method="as opposed toSupreme Courtoccasionally Additionally,North Americapx;backgroundopportunitiesEntertainment.toLowerCase(manufacturingprofessional combined withFor instance,consisting of" maxlength="return false;consciousnessMediterraneanextraordinaryassassinationsubsequently button type="the number ofthe original comprehensiverefers to the</ul>\\n</div>\\nphilosophicallocation.hrefwas publishedSan Francisco(function(){\\n<div id="mainsophisticatedmathematical /head>\\r\\n<bodysuggests thatdocumentationconcentrationrelationshipsmay have been(for example,This article in some casesparts of the definition ofGreat Britain cellpadding=equivalent toplaceholder="; font-size: justificationbelieved thatsuffered fromattempted to leader of thecript" src="/(function() {are available\\n\\t<link rel=" src=\\\'http://interested inconventional " alt="" /></are generallyhas also beenmost popular correspondingcredited withtyle="border:</a></span></.gif" width="<iframe src="table class="inline-block;according to together withapproximatelyparliamentarymore and moredisplay:none;traditionallypredominantly&nbsp;|&nbsp;&nbsp;</span> cellspacing=<input name="or" content="controversialproperty="og:/x-shockwave-demonstrationsurrounded byNevertheless,was the firstconsiderable Although the collaborationshould not beproportion of<span style="known as the shortly afterfor instance,described as /head>\\n<body starting withincreasingly the fact thatdiscussion ofmiddle of thean individualdifficult to point of viewhomosexualityacceptance of</span></div>manufacturersorigin of thecommonly usedimportance ofdenominationsbackground: #length of thedeterminationa significant" border="0">revolutionaryprinciples ofis consideredwas developedIndo-Europeanvulnerable toproponents ofare sometimescloser to theNew York City name="searchattributed tocourse of themathematicianby the end ofat the end of" border="0" technological.removeClass(branch of theevidence that![endif]--\\x3e\\r\\nInstitute of into a singlerespectively.and thereforeproperties ofis located insome of whichThere is alsocontinued to appearance of &amp;ndash; describes theconsiderationauthor of theindependentlyequipped withdoes not have</a><a href="confused with<link href="/at the age ofappear in theThese includeregardless ofcould be used style=&quot;several timesrepresent thebody>\\n</html>thought to bepopulation ofpossibilitiespercentage ofaccess to thean attempt toproduction ofjquery/jquerytwo differentbelong to theestablishmentreplacing thedescription" determine theavailable forAccording to wide range of\\t<div class="more commonlyorganisationsfunctionalitywas completed &amp;mdash; participationthe characteran additionalappears to befact that thean example ofsignificantlyonmouseover="because they async = true;problems withseems to havethe result of src="http://familiar withpossession offunction () {took place inand sometimessubstantially<span></span>is often usedin an attemptgreat deal ofEnvironmentalsuccessfully virtually all20th century,professionalsnecessary to determined bycompatibilitybecause it isDictionary ofmodificationsThe followingmay refer to:Consequently,Internationalalthough somethat would beworld\\\'s firstclassified asbottom of the(particularlyalign="left" most commonlybasis for thefoundation ofcontributionspopularity ofcenter of theto reduce thejurisdictionsapproximation onmouseout="New Testamentcollection of</span></a></in the Unitedfilm director-strict.dtd">has been usedreturn to thealthough thischange in theseveral otherbut there areunprecedentedis similar toespecially inweight: bold;is called thecomputationalindicate thatrestricted to\\t<meta name="are typicallyconflict withHowever, the An example ofcompared withquantities ofrather than aconstellationnecessary forreported thatspecificationpolitical and&nbsp;&nbsp;<references tothe same yearGovernment ofgeneration ofhave not beenseveral yearscommitment to\\t\\t<ul class="visualization19th century,practitionersthat he wouldand continuedoccupation ofis defined ascentre of thethe amount of><div style="equivalent ofdifferentiatebrought aboutmargin-left: automaticallythought of asSome of these\\n<div class="input class="replaced withis one of theeducation andinfluenced byreputation as\\n<meta name="accommodation</div>\\n</div>large part ofInstitute forthe so-called against the In this case,was appointedclaimed to beHowever, thisDepartment ofthe remainingeffect on theparticularly deal with the\\n<div style="almost alwaysare currentlyexpression ofphilosophy offor more thancivilizationson the islandselectedIndexcan result in" value="" />the structure /></a></div>Many of thesecaused by theof the Unitedspan class="mcan be tracedis related tobecame one ofis frequentlyliving in thetheoreticallyFollowing theRevolutionarygovernment inis determinedthe politicalintroduced insufficient todescription">short storiesseparation ofas to whetherknown for itswas initiallydisplay:blockis an examplethe principalconsists of arecognized as/body></html>a substantialreconstructedhead of stateresistance toundergraduateThere are twogravitationalare describedintentionallyserved as theclass="headeropposition tofundamentallydominated theand the otheralliance withwas forced torespectively,and politicalin support ofpeople in the20th century.and publishedloadChartbeatto understandmember statesenvironmentalfirst half ofcountries andarchitecturalbe consideredcharacterizedclearIntervalauthoritativeFederation ofwas succeededand there area consequencethe Presidentalso includedfree softwaresuccession ofdeveloped thewas destroyedaway from the;\\n<\\/script>\\n<although theyfollowed by amore powerfulresulted in aUniversity ofHowever, manythe presidentHowever, someis thought tountil the endwas announcedare importantalso includes><input type=the center of DO NOT ALTERused to referthemes/?sort=that had beenthe basis forhas developedin the summercomparativelydescribed thesuch as thosethe resultingis impossiblevarious otherSouth Africanhave the sameeffectivenessin which case; text-align:structure and; background:regarding thesupported theis also knownstyle="marginincluding thebahasa Melayunorsk bokmC%lnorsk nynorskslovenE!D\\rinainternacionalcalificaciC3ncomunicaciC3nconstrucciC3n"><div class="disambiguationDomainName\\\', \\\'administrationsimultaneouslytransportationInternational margin-bottom:responsibility<![endif]--\\x3e\\n</><meta name="implementationinfrastructurerepresentationborder-bottom:</head>\\n<body>=http%3A%2F%2F<form method="method="post" /favicon.ico" });\\n<\\/script>\\n.setAttribute(Administration= new Array();<![endif]--\\x3e\\r\\ndisplay:block;Unfortunately,">&nbsp;</div>/favicon.ico">=\\\'stylesheet\\\' identification, for example,<li><a href="/an alternativeas a result ofpt"><\\/script>\\ntype="submit" \\n(function() {recommendationform action="/transformationreconstruction.style.display According to hidden" name="along with thedocument.body.approximately Communicationspost" action="meaning &quot;--<![endif]--\\x3ePrime Ministercharacteristic</a> <a class=the history of onmouseover="the governmenthref="https://was originallywas introducedclassificationrepresentativeare considered<![endif]--\\x3e\\n\\ndepends on theUniversity of in contrast to placeholder="in the case ofinternational constitutionalstyle="border-: function() {Because of the-strict.dtd">\\n<table class="accompanied byaccount of the<script src="/nature of the the people in in addition tos); js.id = id" width="100%"regarding the Roman Catholican independentfollowing the .gif" width="1the following discriminationarchaeologicalprime minister.js"><\\/script>combination of marginwidth="createElement(w.attachEvent(</a></td></tr>src="https://aIn particular, align="left" Czech RepublicUnited Kingdomcorrespondenceconcluded that.html" title="(function () {comes from theapplication of<span class="sbelieved to beement(\\\'script\\\'</a>\\n</li>\\n<livery different><span class="option value="(also known as\\t<li><a href="><input name="separated fromreferred to as valign="top">founder of theattempting to carbon dioxide\\n\\n<div class="class="search-/body>\\n</html>opportunity tocommunications</head>\\r\\n<body style="width:Tia:?ng Via;\x07tchanges in theborder-color:#0" border="0" </span></div><was discovered" type="text" );\\n<\\/script>\\n\\nDepartment of ecclesiasticalthere has beenresulting from</body></html>has never beenthe first timein response toautomatically </div>\\n\\n<div iwas consideredpercent of the" /></a></div>collection of descended fromsection of theaccept-charsetto be confusedmember of the padding-right:translation ofinterpretation href=\\\'http://whether or notThere are alsothere are manya small numberother parts ofimpossible to  class="buttonlocated in the. However, theand eventuallyAt the end of because of itsrepresents the<form action=" method="post"it is possiblemore likely toan increase inhave also beencorresponds toannounced thatalign="right">many countriesfor many yearsearliest knownbecause it waspt"><\\/script>\\r valign="top" inhabitants offollowing year\\r\\n<div class="million peoplecontroversial concerning theargue that thegovernment anda reference totransferred todescribing the style="color:although therebest known forsubmit" name="multiplicationmore than one recognition ofCouncil of theedition of the  <meta name="Entertainment away from the ;margin-right:at the time ofinvestigationsconnected withand many otheralthough it isbeginning with <span class="descendants of<span class="i align="right"</head>\\n<body aspects of thehas since beenEuropean Unionreminiscent ofmore difficultVice Presidentcomposition ofpassed throughmore importantfont-size:11pxexplanation ofthe concept ofwritten in the\\t<span class="is one of the resemblance toon the groundswhich containsincluding the defined by thepublication ofmeans that theoutside of thesupport of the<input class="<span class="t(Math.random()most prominentdescription ofConstantinoplewere published<div class="seappears in the1" height="1" most importantwhich includeswhich had beendestruction ofthe population\\n\\t<div class="possibility ofsometimes usedappear to havesuccess of theintended to bepresent in thestyle="clear:b\\r\\n<\\/script>\\r\\n<was founded ininterview with_id" content="capital of the\\r\\n<link rel="srelease of thepoint out thatxMLHttpRequestand subsequentsecond largestvery importantspecificationssurface of theapplied to theforeign policy_setDomainNameestablished inis believed toIn addition tomeaning of theis named afterto protect theis representedDeclaration ofmore efficientClassificationother forms ofhe returned to<span class="cperformance of(function() {\\rif and only ifregions of theleading to therelations withUnited Nationsstyle="height:other than theype" content="Association of\\n</head>\\n<bodylocated on theis referred to(including theconcentrationsthe individualamong the mostthan any other/>\\n<link rel=" return false;the purpose ofthe ability to;color:#fff}\\n.\\n<span class="the subject ofdefinitions of>\\r\\n<link rel="claim that thehave developed<table width="celebration ofFollowing the to distinguish<span class="btakes place inunder the namenoted that the><![endif]--\\x3e\\nstyle="margin-instead of theintroduced thethe process ofincreasing thedifferences inestimated thatespecially the/div><div id="was eventuallythroughout histhe differencesomething thatspan></span></significantly ><\\/script>\\r\\n\\r\\nenvironmental to prevent thehave been usedespecially forunderstand theis essentiallywere the firstis the largesthave been made" src="http://interpreted assecond half ofcrolling="no" is composed ofII, Holy Romanis expected tohave their owndefined as thetraditionally have differentare often usedto ensure thatagreement withcontaining theare frequentlyinformation onexample is theresulting in a</a></li></ul> class="footerand especiallytype="button" </span></span>which included>\\n<meta name="considered thecarried out byHowever, it isbecame part ofin relation topopular in thethe capital ofwas officiallywhich has beenthe History ofalternative todifferent fromto support thesuggested thatin the process  <div class="the foundationbecause of hisconcerned withthe universityopposed to thethe context of<span class="ptext" name="q"\\t\\t<div class="the scientificrepresented bymathematicianselected by thethat have been><div class="cdiv id="headerin particular,converted into);\\n<\\/script>\\n<philosophical srpskohrvatskitia:?ng Via;\x07tP QQQP:P8P9Q\\0QQQP:P8P9investigaciC3nparticipaciC3nP:P>QP>Q\\0Q\\vP5P>P1P;P0QQP8P:P>QP>Q\\0Q\\vP9Q\x07P5P;P>P2P5P:QP8QQP5P<Q\\vPP>P2P>QQP8P:P>QP>Q\\0Q\\vQP>P1P;P0QQQ\\fP2Q\\0P5P<P5P=P8P:P>QP>Q\\0P0QQP5P3P>P4P=QQP:P0Q\x07P0QQ\\fP=P>P2P>QQP8P#P:Q\\0P0P8P=Q\\vP2P>P?Q\\0P>QQ\\vP:P>QP>Q\\0P>P9QP4P5P;P0QQ\\fP?P>P<P>Q\\tQ\\fQQQ\\0P5P4QQP2P>P1Q\\0P0P7P>P<QQP>Q\\0P>P=Q\\vQQ\x07P0QQP8P5QP5Q\x07P5P=P8P5PP;P0P2P=P0QP8QQP>Q\\0P8P8QP8QQP5P<P0Q\\0P5Q\\bP5P=P8QP!P:P0Q\x07P0QQ\\fP?P>Q\\rQP>P<QQP;P5P4QP5QQP:P0P7P0QQ\\fQP>P2P0Q\\0P>P2P:P>P=P5Q\x07P=P>Q\\0P5Q\\bP5P=P8P5P:P>QP>Q\\0P>P5P>Q\\0P3P0P=P>P2P:P>QP>Q\\0P>P<P P5P:P;P0P<P0X\\\'YYYX*X/Y\\tYYX*X/Y\\nX\\\'X*X\\\'YYY\\bX6Y\\bX9X\\\'YX(X1X\\\'YX,X\\\'YYY\\bX\\\'YX9X\\\'YX1X3X\\\'X&YYX4X\\\'X1YX\\\'X*X\\\'YX#X9X6X\\\'X!X\\\'YX1Y\\nX\\\'X6X)X\\\'YX*X5YY\\nYX\\\'YX\\\'X9X6X\\\'X!X\\\'YYX*X\\\'X&X,X\\\'YX#YX9X\\\'X(X\\\'YX*X3X,Y\\nYX\\\'YX#YX3X\\\'YX\\\'YX6X:X7X\\\'X*X\\\'YYY\\nX/Y\\nY\\bX\\\'YX*X1X-Y\\nX(X\\\'YX,X/Y\\nX/X)X\\\'YX*X9YY\\nYX\\\'YX#X.X(X\\\'X1X\\\'YX\\\'YYX\\\'YX\\\'YX#YYX\\\'YX\\\'YX*X\\\'X1Y\\nX.X\\\'YX*YYY\\nX)X\\\'YX\\\'YX9X\\\'X(X\\\'YX.Y\\bX\\\'X7X1X\\\'YYX,X*YX9X\\\'YX/Y\\nYY\\bX1X\\\'YX3Y\\nX\\\'X-X)X9X(X/X\\\'YYY\x07X\\\'YX*X1X(Y\\nX)X\\\'YX1Y\\bX\\\'X(X7X\\\'YX#X/X(Y\\nX)X\\\'YX\\\'X.X(X\\\'X1X\\\'YYX*X-X/X)X\\\'YX\\\'X:X\\\'YY\\ncursor:pointer;</title>\\n<meta " href="http://"><span class="members of the window.locationvertical-align:/a> | <a href="<!doctype html>media="screen" <option value="favicon.ico" />\\n\\t\\t<div class="characteristics" method="get" /body>\\n</html>\\nshortcut icon" document.write(padding-bottom:representativessubmit" value="align="center" throughout the science fiction\\n  <div class="submit" class="one of the most valign="top"><was established);\\r\\n<\\/script>\\r\\nreturn false;">).style.displaybecause of the document.cookie<form action="/}body{margin:0;Encyclopedia ofversion of the .createElement(name" content="</div>\\n</div>\\n\\nadministrative </body>\\n</html>history of the "><input type="portion of the as part of the &nbsp;<a href="other countries">\\n<div class="</span></span><In other words,display: block;control of the introduction of/>\\n<meta name="as well as the in recent years\\r\\n\\t<div class="</div>\\n\\t</div>\\ninspired by thethe end of the compatible withbecame known as style="margin:.js"><\\/script>< International there have beenGerman language style="color:#Communist Partyconsistent withborder="0" cell marginheight="the majority of" align="centerrelated to the many different Orthodox Churchsimilar to the />\\n<link rel="swas one of the until his death})();\\n<\\/script>other languagescompared to theportions of thethe Netherlandsthe most commonbackground:url(argued that thescrolling="no" included in theNorth American the name of theinterpretationsthe traditionaldevelopment of frequently useda collection ofvery similar tosurrounding theexample of thisalign="center">would have beenimage_caption =attached to thesuggesting thatin the form of involved in theis derived fromnamed after theIntroduction torestrictions on style="width: can be used to the creation ofmost important information andresulted in thecollapse of theThis means thatelements of thewas replaced byanalysis of theinspiration forregarded as themost successfulknown as &quot;a comprehensiveHistory of the were consideredreturned to theare referred toUnsourced image>\\n\\t<div class="consists of thestopPropagationinterest in theavailability ofappears to haveelectromagneticenableServices(function of theIt is important<\\/script></div>function(){var relative to theas a result of the position ofFor example, in method="post" was followed by&amp;mdash; thethe applicationjs"><\\/script>\\r\\nul></div></div>after the deathwith respect tostyle="padding:is particularlydisplay:inline; type="submit" is divided intod8-f\x07 (g.\\0d=)responsabilidadadministraciC3ninternacionalescorrespondiente`$\\t`$*`$/`%\\v`$`$*`%`$0`%\\r`$5`$9`$.`$>`$0`%\x07`$2`%\\v`$`%\\v`$`$`%`$(`$>`$5`$2`%\x07`$`$?`$(`$8`$0`$`$>`$0`$*`%`$2`$?`$8`$`%\\v`$`%\x07`$`$`$>`$9`$?`$`$-`%\x07`$`%\x07`$`$6`$>`$.`$?`$2`$9`$.`$>`$0`%\\0`$`$>`$`$0`$#`$,`$(`$>`$(`%\x07`$`%`$.`$>`$0`$,`%\\r`$2`%\\t`$`$.`$>`$2`$?`$`$.`$9`$?`$2`$>`$*`%`$7`%\\r`$ `$,`$"`$<`$$`%\x07`$-`$>`$`$*`$>`$`%\\r`$2`$?`$`$`%\\r`$0`%\x07`$(`$`$?`$2`$>`$+`$&`%\\f`$0`$>`$(`$.`$>`$.`$2`%\x07`$.`$$`$&`$>`$(`$,`$>`$`$>`$0`$5`$?`$`$>`$8`$`%\\r`$/`%\\v`$`$`$>`$9`$$`%\x07`$*`$9`%`$`$`$,`$$`$>`$/`$>`$8`$`$5`$>`$&`$&`%\x07`$`$(`%\x07`$*`$?`$\x1B`$2`%\x07`$5`$?`$6`%\x07`$7`$0`$>`$`%\\r`$/`$\\t`$$`%\\r`$$`$0`$.`%`$`$,`$\\b`$&`%\\v`$(`%\\v`$`$\\t`$*`$`$0`$#`$*`$"`$<`%\x07`$`$8`%\\r`$%`$?`$$`$+`$?`$2`%\\r`$.`$.`%`$`%\\r`$/`$`$`%\\r`$\x1B`$>`$\x1B`%`$`$$`%\\0`$8`$`$`%\\0`$$`$`$>`$`$`$>`$5`$?`$-`$>`$`$`$#`%\\r`$`%\x07`$&`%`$8`$0`%\x07`$&`$?`$(`%\\v`$`$9`$$`%\\r`$/`$>`$8`%\x07`$`%\\r`$8`$`$>`$`$\\\'`%\\0`$5`$?`$6`%\\r`$5`$0`$>`$$`%\x07`$`$&`%\\b`$`%\\r`$8`$(`$`%\\r`$6`$>`$8`$>`$.`$(`%\x07`$`$&`$>`$2`$$`$,`$?`$`$2`%\\0`$*`%`$0`%`$7`$9`$?`$`$&`%\\0`$.`$?`$$`%\\r`$0`$`$5`$?`$$`$>`$0`%`$*`$/`%\x07`$8`%\\r`$%`$>`$(`$`$0`%\\v`$!`$<`$.`%`$`%\\r`$$`$/`%\\v`$`$(`$>`$`%`$*`$/`$>`$*`%\\v`$8`%\\r`$`$`$0`%\x07`$2`%`$`$>`$0`%\\r`$/`$5`$?`$`$>`$0`$8`%`$`$(`$>`$.`%`$2`%\\r`$/`$&`%\x07`$`%\x07`$`$9`$.`%\x07`$6`$>`$8`%\\r`$`%`$2`$.`%\\b`$`$(`%\x07`$$`%\\b`$/`$>`$0`$`$?`$8`$`%\x07rss+xml" title="-type" content="title" content="at the same time.js"><\\/script>\\n<" method="post" </span></a></li>vertical-align:t/jquery.min.js">.click(function( style="padding-})();\\n<\\/script>\\n</span><a href="<a href="http://); return false;text-decoration: scrolling="no" border-collapse:associated with Bahasa IndonesiaEnglish language<text xml:space=.gif" border="0"</body>\\n</html>\\noverflow:hidden;img src="http://addEventListenerresponsible for s.js"><\\/script>\\n/favicon.ico" />operating system" style="width:1target="_blank">State Universitytext-align:left;\\ndocument.write(, including the around the world);\\r\\n<\\/script>\\r\\n<" style="height:;overflow:hiddenmore informationan internationala member of the one of the firstcan be found in </div>\\n\\t\\t</div>\\ndisplay: none;">" />\\n<link rel="\\n  (function() {the 15th century.preventDefault(large number of Byzantine Empire.jpg|thumb|left|vast majority ofmajority of the  align="center">University Pressdominated by theSecond World Wardistribution of style="position:the rest of the characterized by rel="nofollow">derives from therather than the a combination ofstyle="width:100English-speakingcomputer scienceborder="0" alt="the existence ofDemocratic Party" style="margin-For this reason,.js"><\\/script>\\n\\tsByTagName(s)[0]js"><\\/script>\\r\\n<.js"><\\/script>\\r\\nlink rel="icon" \\\' alt=\\\'\\\' class=\\\'formation of theversions of the </a></div></div>/page>\\n  <page>\\n<div class="contbecame the firstbahasa Indonesiaenglish (simple)NN;N;N7N=N9N:N,QQ\\0P2P0QQP:P8P:P>P<P?P0P=P8P8QP2P;QP5QQQPP>P1P0P2P8QQ\\fQ\x07P5P;P>P2P5P:P0Q\\0P0P7P2P8QP8QPP=QP5Q\\0P=P5QPQP2P5QP8QQ\\fP=P0P?Q\\0P8P<P5Q\\0P8P=QP5Q\\0P=P5QP:P>QP>Q\\0P>P3P>QQQ\\0P0P=P8QQ\\vP:P0Q\x07P5QQP2P5QQP;P>P2P8QQP?Q\\0P>P1P;P5P<Q\\vP?P>P;QQ\x07P8QQ\\fQP2P;QQQQQP=P0P8P1P>P;P5P5P:P>P<P?P0P=P8QP2P=P8P<P0P=P8P5QQ\\0P5P4QQP2P0X\\\'YYY\\bX\\\'X6Y\\nX9X\\\'YX1X&Y\\nX3Y\\nX)X\\\'YX\\\'YX*YX\\\'YYX4X\\\'X1YX\\\'X*YX\\\'YX3Y\\nX\\\'X1X\\\'X*X\\\'YYYX*Y\\bX(X)X\\\'YX3X9Y\\bX/Y\\nX)X\\\'X-X5X\\\'X&Y\\nX\\\'X*X\\\'YX9X\\\'YYY\\nX)X\\\'YX5Y\\bX*Y\\nX\\\'X*X\\\'YX\\\'YX*X1YX*X\\\'YX*X5X\\\'YY\\nYX\\\'YX%X3YX\\\'YY\\nX\\\'YYX4X\\\'X1YX)X\\\'YYX1X&Y\\nX\\\'X*robots" content="<div id="footer">the United States<img src="http://.jpg|right|thumb|.js"><\\/script>\\r\\n<location.protocolframeborder="0" s" />\\n<meta name="</a></div></div><font-weight:bold;&quot; and &quot;depending on the margin:0;padding:" rel="nofollow" President of the twentieth centuryevision>\\n  </pageInternet Explorera.async = true;\\r\\ninformation about<div id="header">" action="http://<a href="https://<div id="content"</div>\\r\\n</div>\\r\\n<derived from the <img src=\\\'http://according to the \\n</body>\\n</html>\\nstyle="font-size:script language="Arial, Helvetica,</a><span class="<\\/script><script political partiestd></tr></table><href="http://www.interpretation ofrel="stylesheet" document.write(\\\'<charset="utf-8">\\nbeginning of the revealed that thetelevision series" rel="nofollow"> target="_blank">claiming that thehttp%3A%2F%2Fwww.manifestations ofPrime Minister ofinfluenced by theclass="clearfix">/div>\\r\\n</div>\\r\\n\\r\\nthree-dimensionalChurch of Englandof North Carolinasquare kilometres.addEventListenerdistinct from thecommonly known asPhonetic Alphabetdeclared that thecontrolled by theBenjamin Franklinrole-playing gamethe University ofin Western Europepersonal computerProject Gutenbergregardless of thehas been proposedtogether with the></li><li class="in some countriesmin.js"><\\/script>of the populationofficial language<img src="images/identified by thenatural resourcesclassification ofcan be consideredquantum mechanicsNevertheless, themillion years ago</body>\\r\\n</html>\\rNN;N;N7N=N9N:N,\\ntake advantage ofand, according toattributed to theMicrosoft Windowsthe first centuryunder the controldiv class="headershortly after thenotable exceptiontens of thousandsseveral differentaround the world.reaching militaryisolated from theopposition to thethe Old TestamentAfrican Americansinserted into theseparate from themetropolitan areamakes it possibleacknowledged thatarguably the mosttype="text/css">\\nthe InternationalAccording to the pe="text/css" />\\ncoincide with thetwo-thirds of theDuring this time,during the periodannounced that hethe internationaland more recentlybelieved that theconsciousness andformerly known assurrounded by thefirst appeared inoccasionally usedposition:absolute;" target="_blank" position:relative;text-align:center;jax/libs/jquery/1.background-color:#type="application/anguage" content="<meta http-equiv="Privacy Policy</a>e("%3Cscript src=\\\'" target="_blank">On the other hand,.jpg|thumb|right|2</div><div class="<div style="float:nineteenth century</body>\\r\\n</html>\\r\\n<img src="http://s;text-align:centerfont-weight: bold; According to the difference between" frameborder="0" " style="position:link href="http://html4/loose.dtd">\\nduring this period</td></tr></table>closely related tofor the first time;font-weight:bold;input type="text" <span style="font-onreadystatechange\\t<div class="cleardocument.location. For example, the a wide variety of <!DOCTYPE html>\\r\\n<&nbsp;&nbsp;&nbsp;"><a href="http://style="float:left;concerned with the=http%3A%2F%2Fwww.in popular culturetype="text/css" />it is possible to Harvard Universitytylesheet" href="/the main characterOxford University  name="keywords" cstyle="text-align:the United Kingdomfederal government<div style="margin depending on the description of the<div class="header.min.js"><\\/script>destruction of theslightly differentin accordance withtelecommunicationsindicates that theshortly thereafterespecially in the European countriesHowever, there aresrc="http://staticsuggested that the" src="http://www.a large number of Telecommunications" rel="nofollow" tHoly Roman Emperoralmost exclusively" border="0" alt="Secretary of Stateculminating in theCIA World Factbookthe most importantanniversary of thestyle="background-<li><em><a href="/the Atlantic Oceanstrictly speaking,shortly before thedifferent types ofthe Ottoman Empire><img src="http://An Introduction toconsequence of thedeparture from theConfederate Statesindigenous peoplesProceedings of theinformation on thetheories have beeninvolvement in thedivided into threeadjacent countriesis responsible fordissolution of thecollaboration withwidely regarded ashis contemporariesfounding member ofDominican Republicgenerally acceptedthe possibility ofare also availableunder constructionrestoration of thethe general publicis almost entirelypasses through thehas been suggestedcomputer and videoGermanic languages according to the different from theshortly afterwardshref="https://www.recent developmentBoard of Directors<div class="search| <a href="http://In particular, theMultiple footnotesor other substancethousands of yearstranslation of the</div>\\r\\n</div>\\r\\n\\r\\n<a href="index.phpwas established inmin.js"><\\/script>\\nparticipate in thea strong influencestyle="margin-top:represented by thegraduated from theTraditionally, theElement("script");However, since the/div>\\n</div>\\n<div left; margin-left:protection against0; vertical-align:Unfortunately, thetype="image/x-icon/div>\\n<div class=" class="clearfix"><div class="footer\\t\\t</div>\\n\\t\\t</div>\\nthe motion picturePQ\\nP;P3P0Q\\0QP:P8P1Q\\nP;P3P0Q\\0QP:P8P$P5P4P5Q\\0P0QP8P8P=P5QP:P>P;Q\\fP:P>QP>P>P1Q\\tP5P=P8P5QP>P>P1Q\\tP5P=P8QP?Q\\0P>P3Q\\0P0P<P<Q\\vPQP?Q\\0P0P2P8QQ\\fP1P5QP?P;P0QP=P>P<P0QP5Q\\0P8P0P;Q\\vP?P>P7P2P>P;QP5QP?P>QP;P5P4P=P8P5Q\\0P0P7P;P8Q\x07P=Q\\vQP?Q\\0P>P4QP:QP8P8P?Q\\0P>P3Q\\0P0P<P<P0P?P>P;P=P>QQQ\\fQP=P0QP>P4P8QQQP8P7P1Q\\0P0P=P=P>P5P=P0QP5P;P5P=P8QP8P7P<P5P=P5P=P8QP:P0QP5P3P>Q\\0P8P8PP;P5P:QP0P=P4Q\\0`$&`%\\r`$5`$>`$0`$>`$.`%\\b`$(`%`$`$2`$*`%\\r`$0`$&`$>`$(`$-`$>`$0`$$`%\\0`$/`$`$(`%`$&`%\x07`$6`$9`$?`$(`%\\r`$&`%\\0`$\x07`$`$!`$?`$/`$>`$&`$?`$2`%\\r`$2`%\\0`$`$\\\'`$?`$`$>`$0`$5`%\\0`$!`$?`$/`%\\v`$`$?`$`%\\r`$ `%\x07`$8`$.`$>`$`$>`$0`$`$`$`%\\r`$6`$(`$&`%`$(`$?`$/`$>`$*`%\\r`$0`$/`%\\v`$`$`$(`%`$8`$>`$0`$`$(`$2`$>`$\x07`$(`$*`$>`$0`%\\r`$`%\\0`$6`$0`%\\r`$$`%\\v`$`$2`%\\v`$`$8`$-`$>`$+`$<`%\\r`$2`%\\b`$6`$6`$0`%\\r`$$`%\x07`$`$*`%\\r`$0`$&`%\x07`$6`$*`%\\r`$2`%\x07`$/`$0`$`%\x07`$`$&`%\\r`$0`$8`%\\r`$%`$?`$$`$?`$\\t`$$`%\\r`$*`$>`$&`$\\t`$(`%\\r`$9`%\x07`$`$`$?`$`%\\r`$ `$>`$/`$>`$$`%\\r`$0`$>`$`%\\r`$/`$>`$&`$>`$*`%`$0`$>`$(`%\x07`$`%\\v`$!`$<`%\x07`$`$`$(`%`$5`$>`$&`$6`%\\r`$0`%\x07`$#`%\\0`$6`$?`$`%\\r`$7`$>`$8`$0`$`$>`$0`%\\0`$8`$`$`%\\r`$0`$9`$*`$0`$?`$#`$>`$.`$,`%\\r`$0`$>`$`$!`$,`$`%\\r`$`%\\v`$`$\\t`$*`$2`$,`%\\r`$\\\'`$.`$`$$`%\\r`$0`%\\0`$8`$`$*`$0`%\\r`$`$\\t`$.`%\\r`$.`%\\0`$&`$.`$>`$\\\'`%\\r`$/`$.`$8`$9`$>`$/`$$`$>`$6`$,`%\\r`$&`%\\v`$`$.`%\\0`$!`$?`$/`$>`$`$\\b`$*`%\\0`$`$2`$.`%\\v`$,`$>`$\x07`$2`$8`$`$`%\\r`$/`$>`$`$*`$0`%\x07`$6`$(`$`$(`%`$,`$`$\\\'`$,`$>`$`$<`$>`$0`$(`$5`%\\0`$(`$$`$.`$*`%\\r`$0`$.`%`$`$*`%\\r`$0`$6`%\\r`$(`$*`$0`$?`$5`$>`$0`$(`%`$`$8`$>`$(`$8`$.`$0`%\\r`$%`$(`$`$/`%\\v`$`$?`$$`$8`%\\v`$.`$5`$>`$0X\\\'YYX4X\\\'X1YX\\\'X*X\\\'YYYX*X/Y\\nX\\\'X*X\\\'YYYX(Y\\nY\\bX*X1X\\\'YYX4X\\\'Y\x07X/X\\\'X*X9X/X/X\\\'YX2Y\\bX\\\'X1X9X/X/X\\\'YX1X/Y\\bX/X\\\'YX%X3YX\\\'YY\\nX)X\\\'YYY\\bX*Y\\bX4Y\\bX(X\\\'YYX3X\\\'X(YX\\\'X*X\\\'YYX9YY\\bYX\\\'X*X\\\'YYX3YX3YX\\\'X*X\\\'YX,X1X\\\'YY\\nYX3X\\\'YX\\\'X3YX\\\'YY\\nX)X\\\'YX\\\'X*X5X\\\'YX\\\'X*keywords" content="w3.org/1999/xhtml"><a target="_blank" text/html; charset=" target="_blank"><table cellpadding="autocomplete="off" text-align: center;to last version by background-color: #" href="http://www./div></div><div id=<a href="#" class=""><img src="http://cript" src="http://\\n<script language="//EN" "http://www.wencodeURIComponent(" href="javascript:<div class="contentdocument.write(\\\'<scposition: absolute;script src="http:// style="margin-top:.min.js"><\\/script>\\n</div>\\n<div class="w3.org/1999/xhtml" \\n\\r\\n</body>\\r\\n</html>distinction between/" target="_blank"><link href="http://encoding="utf-8"?>\\nw.addEventListener?action="http://www.icon" href="http:// style="background:type="text/css" />\\nmeta property="og:t<input type="text"  style="text-align:the development of tylesheet" type="tehtml; charset=utf-8is considered to betable width="100%" In addition to the contributed to the differences betweendevelopment of the It is important to <\\/script>\\n\\n<script  style="font-size:1></span><span id=gbLibrary of Congress<img src="http://imEnglish translationAcademy of Sciencesdiv style="display:construction of the.getElementById(id)in conjunction withElement(\\\'script\\\'); <meta property="og:PQ\\nP;P3P0Q\\0QP:P8\\n type="text" name=">Privacy Policy</a>administered by theenableSingleRequeststyle=&quot;margin:</div></div></div><><img src="http://i style=&quot;float:referred to as the total population ofin Washington, D.C. style="background-among other things,organization of theparticipated in thethe introduction ofidentified with thefictional character Oxford University misunderstanding ofThere are, however,stylesheet" href="/Columbia Universityexpanded to includeusually referred toindicating that thehave suggested thataffiliated with thecorrelation betweennumber of different></td></tr></table>Republic of Ireland\\n<\\/script>\\n<script under the influencecontribution to theOfficial website ofheadquarters of thecentered around theimplications of thehave been developedFederal Republic ofbecame increasinglycontinuation of theNote, however, thatsimilar to that of capabilities of theaccordance with theparticipants in thefurther developmentunder the directionis often consideredhis younger brother</td></tr></table><a http-equiv="X-UA-physical propertiesof British Columbiahas been criticized(with the exceptionquestions about thepassing through the0" cellpadding="0" thousands of peopleredirects here. Forhave children under%3E%3C/script%3E"));<a href="http://www.<li><a href="http://site_name" content="text-decoration:nonestyle="display: none<meta http-equiv="X-new Date().getTime() type="image/x-icon"</span><span class="language="javascriptwindow.location.href<a href="javascript:--\\x3e\\r\\n<script type="t<a href=\\\'http://www.hortcut icon" href="</div>\\r\\n<div class="<script src="http://" rel="stylesheet" t</div>\\n<script type=/a> <a href="http:// allowTransparency="X-UA-Compatible" conrelationship between\\n<\\/script>\\r\\n<script </a></li></ul></div>associated with the programming language</a><a href="http://</a></li><li class="form action="http://<div style="display:type="text" name="q"<table width="100%" background-position:" border="0" width="rel="shortcut icon" h6><ul><li><a href="  <meta http-equiv="css" media="screen" responsible for the " type="application/" style="background-html; charset=utf-8" allowtransparency="stylesheet" type="te\\r\\n<meta http-equiv="></span><span class="0" cellspacing="0">;\\n<\\/script>\\n<script sometimes called thedoes not necessarilyFor more informationat the beginning of <!DOCTYPE html><htmlparticularly in the type="hidden" name="javascript:void(0);"effectiveness of the autocomplete="off" generally considered><input type="text" "><\\/script>\\r\\n<scriptthroughout the worldcommon misconceptionassociation with the</div>\\n</div>\\n<div cduring his lifetime,corresponding to thetype="image/x-icon" an increasing numberdiplomatic relationsare often consideredmeta charset="utf-8" <input type="text" examples include the"><img src="http://iparticipation in thethe establishment of\\n</div>\\n<div class="&amp;nbsp;&amp;nbsp;to determine whetherquite different frommarked the beginningdistance between thecontributions to theconflict between thewidely considered towas one of the firstwith varying degreeshave speculated that(document.getElementparticipating in theoriginally developedeta charset="utf-8"> type="text/css" />\\ninterchangeably withmore closely relatedsocial and politicalthat would otherwiseperpendicular to thestyle type="text/csstype="submit" name="families residing indeveloping countriescomputer programmingeconomic developmentdetermination of thefor more informationon several occasionsportuguC*s (Europeu)P#P:Q\\0P0QP=QQ\\fP:P0QP:Q\\0P0QP=QQ\\fP:P0P P>QQP8P9QP:P>P9P<P0QP5Q\\0P8P0P;P>P2P8P=QP>Q\\0P<P0QP8P8QP?Q\\0P0P2P;P5P=P8QP=P5P>P1QP>P4P8P<P>P8P=QP>Q\\0P<P0QP8QPP=QP>Q\\0P<P0QP8QP P5QP?QP1P;P8P:P8P:P>P;P8Q\x07P5QQP2P>P8P=QP>Q\\0P<P0QP8QQP5Q\\0Q\\0P8QP>Q\\0P8P8P4P>QQP0QP>Q\x07P=P>X\\\'YYX*Y\\bX\\\'X,X/Y\\bYX\\\'YX\\\'X4X*X1X\\\'YX\\\'X*X\\\'YX\\\'YX*X1X\\\'X-X\\\'X*html; charset=UTF-8" setTimeout(function()display:inline-block;<input type="submit" type = \\\'text/javascri<img src="http://www." "http://www.w3.org/shortcut icon" href="" autocomplete="off" </a></div><div class=</a></li>\\n<li class="css" type="text/css" <form action="http://xt/css" href="http://link rel="alternate" \\r\\n<script type="text/ onclick="javascript:(new Date).getTime()}height="1" width="1" People\\\'s Republic of  <a href="http://www.text-decoration:underthe beginning of the </div>\\n</div>\\n</div>\\nestablishment of the </div></div></div></d#viewport{min-height:\\n<script src="http://option><option value=often referred to as /option>\\n<option valu<!DOCTYPE html>\\n\\x3c!--[International Airport>\\n<a href="http://www</a><a href="http://w`8 `82`8)`82`9`8`8"a%aa aa#aaf-#i+d8-f\x07 (g9i+)`$(`$?`$0`%\\r`$&`%\x07`$6`$!`$>`$\\t`$(`$2`%\\v`$!`$`%\\r`$7`%\x07`$$`%\\r`$0`$`$>`$(`$`$>`$0`%\\0`$8`$`$,`$`$\\\'`$?`$$`$8`%\\r`$%`$>`$*`$(`$>`$8`%\\r`$5`%\\0`$`$>`$0`$8`$`$8`%\\r`$`$0`$#`$8`$>`$.`$`%\\r`$0`%\\0`$`$?`$`%\\r`$ `%\\v`$`$5`$?`$`%\\r`$`$>`$(`$`$.`%\x07`$0`$?`$`$>`$5`$?`$-`$?`$(`%\\r`$(`$`$>`$!`$?`$/`$>`$`$`%\\r`$/`%\\v`$`$`$?`$8`%`$0`$`%\\r`$7`$>`$*`$9`%`$`$`$$`%\\0`$*`%\\r`$0`$,`$`$\\\'`$(`$`$?`$*`%\\r`$*`$#`%\\0`$`%\\r`$0`$?`$`%\x07`$`$*`%\\r`$0`$>`$0`$`$-`$*`%\\r`$0`$>`$*`%\\r`$$`$.`$>`$2`$?`$`%\\v`$`$0`$+`$<`%\\r`$$`$>`$0`$(`$?`$0`%\\r`$.`$>`$#`$2`$?`$.`$?`$`%\x07`$!description" content="document.location.prot.getElementsByTagName(<!DOCTYPE html>\\n<html <meta charset="utf-8">:url" content="http://.css" rel="stylesheet"style type="text/css">type="text/css" href="w3.org/1999/xhtml" xmltype="text/javascript" method="get" action="link rel="stylesheet"  = document.getElementtype="image/x-icon" />cellpadding="0" cellsp.css" type="text/css" </a></li><li><a href="" width="1" height="1""><a href="http://www.style="display:none;">alternate" type="appli-//W3C//DTD XHTML 1.0 ellspacing="0" cellpad type="hidden" value="/a>&nbsp;<span role="s\\n<input type="hidden" language="JavaScript"  document.getElementsBg="0" cellspacing="0" ype="text/css" media="type=\\\'text/javascript\\\'with the exception of ype="text/css" rel="st height="1" width="1" =\\\'+encodeURIComponent(<link rel="alternate" \\nbody, tr, input, textmeta name="robots" conmethod="post" action=">\\n<a href="http://www.css" rel="stylesheet" </div></div><div classlanguage="javascript">aria-hidden="true">B7<ript" type="text/javasl=0;})();\\n(function(){background-image: url(/a></li><li><a href="h\\t\\t<li><a href="http://ator" aria-hidden="tru> <a href="http://www.language="javascript" /option>\\n<option value/div></div><div class=rator" aria-hidden="tre=(new Date).getTime()portuguC*s (do Brasil)P>Q\\0P3P0P=P8P7P0QP8P8P2P>P7P<P>P6P=P>QQQ\\fP>P1Q\\0P0P7P>P2P0P=P8QQ\\0P5P3P8QQQ\\0P0QP8P8P2P>P7P<P>P6P=P>QQP8P>P1QP7P0QP5P;Q\\fP=P0<!DOCTYPE html PUBLIC "nt-Type" content="text/<meta http-equiv="Conteransitional//EN" "http:<html xmlns="http://www-//W3C//DTD XHTML 1.0 TDTD/xhtml1-transitional//www.w3.org/TR/xhtml1/pe = \\\'text/javascript\\\';<meta name="descriptionparentNode.insertBefore<input type="hidden" najs" type="text/javascri(document).ready(functiscript type="text/javasimage" content="http://UA-Compatible" content=tml; charset=utf-8" />\\nlink rel="shortcut icon<link rel="stylesheet" <\\/script>\\n<script type== document.createElemen<a target="_blank" href= document.getElementsBinput type="text" name=a.type = \\\'text/javascrinput type="hidden" namehtml; charset=utf-8" />dtd">\\n<html xmlns="http-//W3C//DTD HTML 4.01 TentsByTagName(\\\'script\\\')input type="hidden" nam<script type="text/javas" style="display:none;">document.getElementById(=document.createElement(\\\' type=\\\'text/javascript\\\'input type="text" name="d.getElementsByTagName(snical" href="http://www.C//DTD HTML 4.01 Transit<style type="text/css">\\n\\n<style type="text/css">ional.dtd">\\n<html xmlns=http-equiv="Content-Typeding="0" cellspacing="0"html; charset=utf-8" />\\n style="display:none;"><<li><a href="http://www. type=\\\'text/javascript\\\'>P4P5QQP5P;Q\\fP=P>QQP8QP>P>QP2P5QQQP2P8P8P?Q\\0P>P8P7P2P>P4QQP2P0P1P5P7P>P?P0QP=P>QQP8`$*`%`$8`%\\r`$$`$?`$`$>`$`$>`$`$`%\\r`$0`%\x07`$8`$\\t`$(`%\\r`$9`%\\v`$`$(`%\x07`$5`$?`$\\\'`$>`$(`$8`$-`$>`$+`$?`$`%\\r`$8`$?`$`$`$8`%`$0`$`%\\r`$7`$?`$$`$`%\\t`$*`%\\0`$0`$>`$\x07`$`$5`$?`$`%\\r`$`$>`$*`$(`$`$>`$0`%\\r`$0`$5`$>`$\\b`$8`$`%\\r`$0`$?`$/`$$`$>\');if(a.length!=e.length)throw"Corrupted brotli dictionary";for(var o=0,r=0;r<502;r+=2){var s=i.charCodeAt(r)-36,l=i.charCodeAt(r+1)-36;o+=s;for(var c=0;c<l;++c)a[o]|=128,o++}e.set(a)}(K,0,0,"۷%ƌ\'T%\'W%×%O%g%¦&Ɠ%ǥ&>&*&\'&^&Ÿా&ƭ&ƒ&)&^&%&\'&&P&1&±&3&]&m&u&E&t&C&Ï&V&V&/&>&6&ྲྀ᝼o&p&@&E&M&P&x&@&F&e&Ì&7&:&(&D&0&C&)&.&F&-&1&(&L&F&1ɞ*Ϫ⇳&፲&K&;&)&E&H&P&0&?&9&V&&-&v&a&,&E&)&?&=&\'&\'&B&മ&ԃ&̖*&*8&%&%&&&%,)&&>&&7&]&F&2&>&J&6&n&2&%&?&&2&6&J&g&-&0&,&*&J&*&O&)&6&(&<&B&N&.&P&@&2&.&W&M&%Լ(,(<&,&Ϛ&ᣇ&-&,(%&(&%&(Ļ0&X&D&&j&\'&J&(&.&B&3&Z&R&h&3&E&E&<Æ-͠ỳ&%8?&@&,&Z&@&0&J&,&^&x&_&6&C&6&Cܬ⨥&f&-&-&-&-&,&J&2&8&z&8&C&Y&8&-&d&ṸÌ-&7&1&F&7&t&W&7&I&.&.&^&=ྜ᧓&8(>&/&/&ݻ\')\'ၥ\')\'%@/&0&%оী*&*@&CԽהɴ׫4෗ܚӑ6඄&/Ÿ̃Z&*%ɆϿ&Ĵ&1¨ҴŴ"),e=K,function(e){var n=new J;!function(e,t){if(0!=e.runningState)throw"State MUST be uninitialized";e.blockTrees=new Int32Array(3091),e.blockTrees[0]=7,e.distRbIdx=3;var n=g(2147483644,3,120);e.distExtraBits=new Int8Array(n),e.distOffset=new Int32Array(n),e.input=t,function(e){e.byteBuffer=new Int8Array(4160),e.accumulator32=0,e.shortBuffer=new Int16Array(2080),e.bitOffset=32,e.halfOffset=2048,e.endOfStreamReached=0,R(e)}(e),e.runningState=1}(n,new t(e));for(var i=0,a=[];;){var o=new Int8Array(16384);if(a.push(o),n.output=o,n.outputOffset=0,n.outputLength=16384,n.outputUsed=0,S(n),i+=n.outputUsed,n.outputUsed<16384)break}!function(e){if(0==e.runningState)throw"State MUST be initialized";11!=e.runningState&&(e.runningState=11,null!=e.input&&(e.input,e.input=null))}(n);for(var r=new Int8Array(i),s=0,l=0;l<a.length;++l){o=a[l];var c=V(i,s+16384)-s;c<16384?r.set(o.subarray(0,c),s):r.set(o,s),s+=c}return r}}(),a={int8:Int8Array,int16:Int16Array,int32:Int32Array,int64:Float64Array,uint8:Uint8Array,uint16:Uint16Array,uint32:Uint32Array,uint64:Float64Array,float:Float32Array,double:Float64Array};function o(e){let t=e;return t=(2130440&t)>>2|266305&t,t=(786624&t)>>4|12291&t,t=(61440&t)>>8|15&t,t&=255,t}new Uint8Array([0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3]),onmessage=function(t){const{pointAttributes:r,scale:s,name:l,min:c,max:d,size:h,offset:f,numPoints:u}=t.data;performance.now();let p;if(0==u)p={buffer:new ArrayBuffer(0)};else try{p=i(new Int8Array(t.data.buffer))}catch(e){p={buffer:new ArrayBuffer(u*(r.byteSize+12))},console.error(`problem with node ${l}: `,e)}const m=new DataView(p.buffer),g={};let P=0;for(const e of r.attributes)P+=e.byteSize;const $=32,b=new Uint32Array(32768),v=(e,t,n)=>{const i=$*e/h.x,a=$*t/h.y,o=$*n/h.z,r=Math.min(parseInt(i),31),s=Math.min(parseInt(a),31),l=Math.min(parseInt(o),31);return r+s*$+l*$*$};let y=0,X=0;for(const e of r.attributes)if(["POSITION_CARTESIAN","position"].includes(e.name)){const t=new ArrayBuffer(4*u*3),n=new Float32Array(t);for(let e=0;e<u;e++){const t=m.getUint32(X+4,!0),i=m.getUint32(X+0,!0),a=m.getUint32(X+12,!0),r=m.getUint32(X+8,!0);X+=16;let l=o((16777215&r)>>>0)|o((r>>>24|a<<8)>>>0)<<8,d=o((16777215&r)>>>1)|o((r>>>24|a<<8)>>>1)<<8,h=o((16777215&r)>>>2)|o((r>>>24|a<<8)>>>2)<<8;0==i&&0==a||(l=l|o((16777215&i)>>>0)<<16|o((i>>>24|t<<8)>>>0)<<24,d=d|o((16777215&i)>>>1)<<16|o((i>>>24|t<<8)>>>1)<<24,h=h|o((16777215&i)>>>2)<<16|o((i>>>24|t<<8)>>>2)<<24);const u=parseInt(l)*s[0]+f[0]-c.x,p=parseInt(d)*s[1]+f[1]-c.y,g=parseInt(h)*s[2]+f[2]-c.z;0==b[v(u,p,g)]++&&y++,n[3*e+0]=u,n[3*e+1]=p,n[3*e+2]=g}g[e.name]={buffer:t,attribute:e}}else if(["RGBA","rgba"].includes(e.name)){const t=new ArrayBuffer(4*u),n=new Uint8Array(t);for(let e=0;e<u;e++){const t=m.getUint32(X+4,!0),i=m.getUint32(X+0,!0);X+=8;const a=o((16777215&i)>>>0)|o((i>>>24|t<<8)>>>0)<<8,r=o((16777215&i)>>>1)|o((i>>>24|t<<8)>>>1)<<8,s=o((16777215&i)>>>2)|o((i>>>24|t<<8)>>>2)<<8;n[4*e+0]=a>255?a/256:a,n[4*e+1]=r>255?r/256:r,n[4*e+2]=s>255?s/256:s}g[e.name]={buffer:t,attribute:e}}else{const t=new ArrayBuffer(4*u),n=new Float32Array(t),i=new(0,a[e.type.name])(u);let[o,r]=[0,1];const s={int8:m.getInt8,int16:m.getInt16,int32:m.getInt32,uint8:m.getUint8,uint16:m.getUint16,uint32:m.getUint32,float:m.getFloat32,double:m.getFloat64}[e.type.name].bind(m);if(e.type.size>4){const[t,n]=e.range;o=t,r=1/(n-t)}for(let t=0;t<u;t++){const a=s(X,!0);X+=e.byteSize,n[t]=(a-o)*r,i[t]=a}g[e.name]={buffer:t,preciseBuffer:i,attribute:e,offset:o,scale:r}}const w=parseInt(u/y);{const e=new ArrayBuffer(4*u),t=new Uint32Array(e);for(let e=0;e<u;e++)t[e]=e;g.INDICES={buffer:e,attribute:n.INDICES}}{const t=r.vectors;for(const i of t){const{name:t,attributes:a}=i,o=a.length,r=new ArrayBuffer(o*u*4),s=new Float32Array(r);let l=0;for(const e of a){const t=g[e],{offset:n,scale:i}=t,a=new DataView(t.buffer),r=a.getFloat32.bind(a);for(let e=0;e<u;e++){const t=r(4*e,!0);s[e*o+l]=t/i+n}l++}const c=new n(t,e.DATA_TYPE_FLOAT,3);g[t]={buffer:r,attribute:c}}}performance.now();const Y={buffer:p,attributeBuffers:g,density:w},Q=[];for(const e in Y.attributeBuffers)Q.push(Y.attributeBuffers[e].buffer);postMessage(Y,Q)};',"Worker",void 0,void 0)}},761:(i,e,t)=>{t.d(e,{A:()=>r});var n=t(512);function r(){return n('const t={DATA_TYPE_DOUBLE:{ordinal:0,name:"double",size:8},DATA_TYPE_FLOAT:{ordinal:1,name:"float",size:4},DATA_TYPE_INT8:{ordinal:2,name:"int8",size:1},DATA_TYPE_UINT8:{ordinal:3,name:"uint8",size:1},DATA_TYPE_INT16:{ordinal:4,name:"int16",size:2},DATA_TYPE_UINT16:{ordinal:5,name:"uint16",size:2},DATA_TYPE_INT32:{ordinal:6,name:"int32",size:4},DATA_TYPE_UINT32:{ordinal:7,name:"uint32",size:4},DATA_TYPE_INT64:{ordinal:8,name:"int64",size:8},DATA_TYPE_UINT64:{ordinal:9,name:"uint64",size:8}};let e=0;for(let n in t)t[e]=t[n],e++;class n{constructor(t,e,n,r=[1/0,-1/0]){this.name=t,this.type=e,this.numElements=n,this.range=r,this.byteSize=this.numElements*this.type.size,this.description=""}}new n("POSITION_CARTESIAN",t.DATA_TYPE_FLOAT,3),new n("COLOR_PACKED",t.DATA_TYPE_INT8,4),new n("COLOR_PACKED",t.DATA_TYPE_INT8,4),new n("COLOR_PACKED",t.DATA_TYPE_INT8,3),new n("NORMAL_FLOATS",t.DATA_TYPE_FLOAT,3),new n("INTENSITY",t.DATA_TYPE_UINT16,1),new n("CLASSIFICATION",t.DATA_TYPE_UINT8,1),new n("NORMAL_SPHEREMAPPED",t.DATA_TYPE_UINT8,2),new n("NORMAL_OCT16",t.DATA_TYPE_UINT8,2),new n("NORMAL",t.DATA_TYPE_FLOAT,3),new n("RETURN_NUMBER",t.DATA_TYPE_UINT8,1),new n("NUMBER_OF_RETURNS",t.DATA_TYPE_UINT8,1),new n("SOURCE_ID",t.DATA_TYPE_UINT16,1),new n("INDICES",t.DATA_TYPE_UINT32,1),new n("SPACING",t.DATA_TYPE_FLOAT,1),new n("GPS_TIME",t.DATA_TYPE_DOUBLE,1);const r={int8:Int8Array,int16:Int16Array,int32:Int32Array,int64:Float64Array,uint8:Uint8Array,uint16:Uint16Array,uint32:Uint32Array,uint64:Float64Array,float:Float32Array,double:Float64Array};onmessage=function(e){const{buffer:i,pointAttributes:a,scale:A,name:T,min:s,max:o,size:_,offset:f,numPoints:u}=e.data,I=(performance.now(),new DataView(i)),E={};let l=0,c=0;for(const t of a.attributes)c+=t.byteSize;const D=32,N=new Uint32Array(32768),P=(t,e,n)=>{const r=D*t/_.x,i=D*e/_.y,a=D*n/_.z,A=Math.min(parseInt(r),31),T=Math.min(parseInt(i),31),s=Math.min(parseInt(a),31);return A+T*D+s*D*D};let w=0;for(const t of a.attributes){if(["POSITION_CARTESIAN","position"].includes(t.name)){const e=new ArrayBuffer(4*u*3),n=new Float32Array(e);for(let t=0;t<u;t++){const e=t*c,r=I.getInt32(e+l+0,!0)*A[0]+f[0]-s.x,i=I.getInt32(e+l+4,!0)*A[1]+f[1]-s.y,a=I.getInt32(e+l+8,!0)*A[2]+f[2]-s.z;0==N[P(r,i,a)]++&&w++,n[3*t+0]=r,n[3*t+1]=i,n[3*t+2]=a}E[t.name]={buffer:e,attribute:t}}else if(["RGBA","rgba"].includes(t.name)){const e=new ArrayBuffer(4*u),n=new Uint8Array(e);for(let t=0;t<u;t++){const e=t*c,r=I.getUint16(e+l+0,!0),i=I.getUint16(e+l+2,!0),a=I.getUint16(e+l+4,!0);n[4*t+0]=r>255?r/256:r,n[4*t+1]=i>255?i/256:i,n[4*t+2]=a>255?a/256:a}E[t.name]={buffer:e,attribute:t}}else{const e=new ArrayBuffer(4*u),n=new Float32Array(e),i=new(0,r[t.type.name])(u);let[a,A]=[0,1];const T={int8:I.getInt8,int16:I.getInt16,int32:I.getInt32,uint8:I.getUint8,uint16:I.getUint16,uint32:I.getUint32,float:I.getFloat32,double:I.getFloat64}[t.type.name].bind(I);if(t.type.size>4){const[e,n]=t.range;a=e,A=1/(n-e)}for(let t=0;t<u;t++){const e=T(t*c+l,!0);n[t]=(e-a)*A,i[t]=e}E[t.name]={buffer:e,preciseBuffer:i,attribute:t,offset:a,scale:A}}l+=t.byteSize}const m=parseInt(u/w);{const t=new ArrayBuffer(4*u),e=new Uint32Array(t);for(let t=0;t<u;t++)e[t]=t;E.INDICES={buffer:t,attribute:n.INDICES}}{const e=a.vectors;for(const r of e){const{name:e,attributes:i}=r,a=i.length,A=new ArrayBuffer(a*u*4),T=new Float32Array(A);let s=0;for(const t of i){const e=E[t],{offset:n,scale:r}=e,i=new DataView(e.buffer),A=i.getFloat32.bind(i);for(let t=0;t<u;t++){const e=A(4*t,!0);T[t*a+s]=e/r+n}s++}const o=new n(e,t.DATA_TYPE_FLOAT,3);E[e]={buffer:A,attribute:o}}}const y={buffer:i,attributeBuffers:E,density:m},U=[];for(const t in y.attributeBuffers)U.push(y.attributeBuffers[t].buffer);U.push(i),postMessage(y,U)};',"Worker",void 0,void 0)}},318:(i,e,t)=>{t.d(e,{A:()=>r});var n=t(512);function r(){return n('var t;!function(t){t[t.POSITION_CARTESIAN=0]="POSITION_CARTESIAN",t[t.COLOR_PACKED=1]="COLOR_PACKED",t[t.COLOR_FLOATS_1=2]="COLOR_FLOATS_1",t[t.COLOR_FLOATS_255=3]="COLOR_FLOATS_255",t[t.NORMAL_FLOATS=4]="NORMAL_FLOATS",t[t.FILLER=5]="FILLER",t[t.INTENSITY=6]="INTENSITY",t[t.CLASSIFICATION=7]="CLASSIFICATION",t[t.NORMAL_SPHEREMAPPED=8]="NORMAL_SPHEREMAPPED",t[t.NORMAL_OCT16=9]="NORMAL_OCT16",t[t.NORMAL=10]="NORMAL"}(t||(t={}));const e={ordinal:1,size:4},n={ordinal:2,size:1},r={ordinal:3,size:1};function i(t,e,n){return{name:t,type:e,numElements:n,byteSize:n*e.size}}const s=i(t.COLOR_PACKED,n,4),a={POSITION_CARTESIAN:i(t.POSITION_CARTESIAN,e,3),RGBA_PACKED:s,COLOR_PACKED:s,RGB_PACKED:i(t.COLOR_PACKED,n,3),NORMAL_FLOATS:i(t.NORMAL_FLOATS,e,3),FILLER_1B:i(t.FILLER,r,1),INTENSITY:i(t.INTENSITY,{ordinal:5,size:2},1),CLASSIFICATION:i(t.CLASSIFICATION,r,1),NORMAL_SPHEREMAPPED:i(t.NORMAL_SPHEREMAPPED,r,2),NORMAL_OCT16:i(t.NORMAL_OCT16,r,2),NORMAL:i(t.NORMAL,e,3)};class o{constructor(t){this.versionMinor=0,this.version=t;const e=-1===t.indexOf(".")?t.length:t.indexOf(".");this.versionMajor=parseInt(t.substr(0,e),10),this.versionMinor=parseInt(t.substr(e+1),10),isNaN(this.versionMinor)&&(this.versionMinor=0)}newerThan(t){const e=new o(t);return this.versionMajor>e.versionMajor||this.versionMajor===e.versionMajor&&this.versionMinor>e.versionMinor}equalOrHigher(t){const e=new o(t);return this.versionMajor>e.versionMajor||this.versionMajor===e.versionMajor&&this.versionMinor>=e.versionMinor}upTo(t){return!this.newerThan(t)}}class u{constructor(t){this.tmp=new ArrayBuffer(4),this.tmpf=new Float32Array(this.tmp),this.tmpu8=new Uint8Array(this.tmp),this.u8=new Uint8Array(t)}getUint32(t){return this.u8[t+3]<<24|this.u8[t+2]<<16|this.u8[t+1]<<8|this.u8[t]}getUint16(t){return this.u8[t+1]<<8|this.u8[t]}getFloat32(t){const e=this.tmpu8,n=this.u8,r=this.tmpf;return e[0]=n[t+0],e[1]=n[t+1],e[2]=n[t+2],e[3]=n[t+3],r[0]}getUint8(t){return this.u8[t]}}const f=Math.sign||function(t){return 0==(t=Number(t))||t!=t?t:t<0?-1:1};function A(e,n){const r=function(e,n){switch(e.name){case t.POSITION_CARTESIAN:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){let n,i,s;e.version.newerThan("1.3")?(n=e.data.getUint32(e.currentOffset+t*e.pointAttributes.byteSize+0)*e.scale,i=e.data.getUint32(e.currentOffset+t*e.pointAttributes.byteSize+4)*e.scale,s=e.data.getUint32(e.currentOffset+t*e.pointAttributes.byteSize+8)*e.scale):(n=e.data.getFloat32(t*e.pointAttributes.byteSize+0)+e.nodeOffset[0],i=e.data.getFloat32(t*e.pointAttributes.byteSize+4)+e.nodeOffset[1],s=e.data.getFloat32(t*e.pointAttributes.byteSize+8)+e.nodeOffset[2]),r[3*t+0]=n,r[3*t+1]=i,r[3*t+2]=s,e.mean[0]+=n/e.numPoints,e.mean[1]+=i/e.numPoints,e.mean[2]+=s/e.numPoints,e.tightBoxMin[0]=Math.min(e.tightBoxMin[0],n),e.tightBoxMin[1]=Math.min(e.tightBoxMin[1],i),e.tightBoxMin[2]=Math.min(e.tightBoxMin[2],s),e.tightBoxMax[0]=Math.max(e.tightBoxMax[0],n),e.tightBoxMax[1]=Math.max(e.tightBoxMax[1],i),e.tightBoxMax[2]=Math.max(e.tightBoxMax[2],s)}return{buffer:n,attribute:t}}(e,n);case t.COLOR_PACKED:return function(t,e){const n=new ArrayBuffer(3*e.numPoints),r=new Uint8Array(n);for(let t=0;t<e.numPoints;t++)r[3*t+0]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+0),r[3*t+1]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+1),r[3*t+2]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+2);return{buffer:n,attribute:t}}(e,n);case t.INTENSITY:return function(t,e){const n=new ArrayBuffer(4*e.numPoints),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++)r[t]=e.data.getUint16(e.currentOffset+t*e.pointAttributes.byteSize);return{buffer:n,attribute:t}}(e,n);case t.CLASSIFICATION:return function(t,e){const n=new ArrayBuffer(e.numPoints),r=new Uint8Array(n);for(let t=0;t<e.numPoints;t++)r[t]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize);return{buffer:n,attribute:t}}(e,n);case t.NORMAL_SPHEREMAPPED:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){let n=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+0)/255*2-1,i=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+1)/255*2-1,s=1;const a=n*-n+i*-i+1*s;s=a,n*=Math.sqrt(a),i*=Math.sqrt(a),n*=2,i*=2,s=2*s-1,r[3*t+0]=n,r[3*t+1]=i,r[3*t+2]=s}return{buffer:n,attribute:t}}(e,n);case t.NORMAL_OCT16:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){const n=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+0)/255*2-1,i=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+1)/255*2-1;let s=1-Math.abs(n)-Math.abs(i),a=0,o=0;s>=0?(a=n,o=i):(a=-(i/f(i)-1)/f(n),o=-(n/f(n)-1)/f(i));const u=Math.sqrt(a*a+o*o+s*s);a/=u,o/=u,s/=u,r[3*t+0]=a,r[3*t+1]=o,r[3*t+2]=s}return{buffer:n,attribute:t}}(e,n);case t.NORMAL:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){const n=e.data.getFloat32(e.currentOffset+t*e.pointAttributes.byteSize+0),i=e.data.getFloat32(e.currentOffset+t*e.pointAttributes.byteSize+4),s=e.data.getFloat32(e.currentOffset+t*e.pointAttributes.byteSize+8);r[3*t+0]=n,r[3*t+1]=i,r[3*t+2]=s}return{buffer:n,attribute:t}}(e,n);default:return}}(e,n);void 0!==r&&(n.attributeBuffers[r.attribute.name]=r,n.transferables.push(r.buffer))}onmessage=function(e){const n=e.data.buffer,r=e.data.pointAttributes,i={attributeBuffers:{},currentOffset:0,data:new u(n),mean:[0,0,0],nodeOffset:e.data.offset,numPoints:e.data.buffer.byteLength/r.byteSize,pointAttributes:r,scale:e.data.scale,tightBoxMax:[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],tightBoxMin:[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],transferables:[],version:new o(e.data.version)};for(const t of i.pointAttributes.attributes)A(t,i),i.currentOffset+=t.byteSize;const s=new ArrayBuffer(4*i.numPoints),f=new Uint32Array(s);for(let t=0;t<i.numPoints;t++)f[t]=t;i.attributeBuffers[t.CLASSIFICATION]||function(e){const n=new ArrayBuffer(4*e.numPoints),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++)r[t]=0;e.attributeBuffers[t.CLASSIFICATION]={buffer:n,attribute:a.CLASSIFICATION}}(i);const O={buffer:n,mean:i.mean,attributeBuffers:i.attributeBuffers,tightBoundingBox:{min:i.tightBoxMin,max:i.tightBoxMax},indices:s};postMessage(O,i.transferables)};',"Worker",void 0,void 0)}}},xl={};function Nt(i){var e=xl[i];if(e!==void 0)return e.exports;var t=xl[i]={exports:{}};return sg[i](t,t.exports,Nt),t.exports}Nt.d=(i,e)=>{for(var t in e)Nt.o(e,t)&&!Nt.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},Nt.o=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),Nt.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var We={};Nt.d(We,{BS:()=>ag,u8:()=>sn,C2:()=>dg,QB:()=>ug,bA:()=>fg,Fn:()=>uc,qG:()=>rn,mo:()=>ht,SA:()=>oa,zs:()=>pe,IR:()=>Hs,QN:()=>pc,sP:()=>si,mA:()=>mc,uT:()=>mt,Ay:()=>vc,E5:()=>vt,UG:()=>$i,uZ:()=>ti,uo:()=>$n,aC:()=>ir,xT:()=>Gs,PR:()=>pg,zd:()=>hc,Pf:()=>oi,V9:()=>mg,Rx:()=>Xi,Zk:()=>gg,Nk:()=>Ys,xC:()=>dc,J0:()=>ks});const I=(bl={AdditiveBlending:()=>jo,Box3:()=>zi,BufferAttribute:()=>Ht,BufferGeometry:()=>Kt,CanvasTexture:()=>Jl,Color:()=>He,DataTexture:()=>Gh,EventDispatcher:()=>zn,Frustum:()=>so,GLSL3:()=>$s,LessEqualDepth:()=>ni,LineBasicMaterial:()=>ta,LineSegments:()=>Zl,LinearFilter:()=>on,Matrix4:()=>at,NearestFilter:()=>Ft,NoBlending:()=>Mn,Object3D:()=>yt,Points:()=>jh,RGBAFormat:()=>jt,RawShaderMaterial:()=>Kh,Scene:()=>ql,ShaderMaterial:()=>pn,Sphere:()=>ki,Texture:()=>Tt,Uint8BufferAttribute:()=>Lh,Vector2:()=>Re,Vector3:()=>C,Vector4:()=>nt,WebGLRenderTarget:()=>Fn},Qo={},Nt.d(Qo,bl),Qo);var bl,Qo,sn,$n,ti,oi,$i,vt;class ag extends I.ShaderMaterial{constructor(){super(...arguments),this.vertexShader=Nt(652),this.fragmentShader=Nt(324),this.uniforms={screenWidth:{type:"f",value:0},screenHeight:{type:"f",value:0},map:{type:"t",value:null}}}}(function(i){i[i.DISABLED=0]="DISABLED",i[i.CLIP_OUTSIDE=1]="CLIP_OUTSIDE",i[i.CLIP_INSIDE=2]="CLIP_INSIDE",i[i.HIGHLIGHT_INSIDE=3]="HIGHLIGHT_INSIDE"})(sn||(sn={})),function(i){i[i.FIXED=0]="FIXED",i[i.ATTENUATED=1]="ATTENUATED",i[i.ADAPTIVE=2]="ADAPTIVE"}($n||($n={})),function(i){i[i.SQUARE=0]="SQUARE",i[i.CIRCLE=1]="CIRCLE",i[i.PARABOLOID=2]="PARABOLOID"}(ti||(ti={})),function(i){i[i.OCTREE=0]="OCTREE",i[i.KDTREE=1]="KDTREE"}(oi||(oi={})),function(i){i[i.FIXED=0]="FIXED",i[i.ATTENUATED=1]="ATTENUATED"}($i||($i={})),function(i){i[i.RGB=0]="RGB",i[i.COLOR=1]="COLOR",i[i.DEPTH=2]="DEPTH",i[i.HEIGHT=3]="HEIGHT",i[i.ELEVATION=3]="ELEVATION",i[i.INTENSITY=4]="INTENSITY",i[i.INTENSITY_GRADIENT=5]="INTENSITY_GRADIENT",i[i.LOD=6]="LOD",i[i.LEVEL_OF_DETAIL=6]="LEVEL_OF_DETAIL",i[i.POINT_INDEX=7]="POINT_INDEX",i[i.CLASSIFICATION=8]="CLASSIFICATION",i[i.RETURN_NUMBER=9]="RETURN_NUMBER",i[i.SOURCE=10]="SOURCE",i[i.NORMAL=11]="NORMAL",i[i.PHONG=12]="PHONG",i[i.RGB_HEIGHT=13]="RGB_HEIGHT",i[i.COMPOSITE=50]="COMPOSITE"}(vt||(vt={}));const cc="PerspectiveCamera",lg=new I.Color(0,0,0),cg=new I.Vector4(1,0,0,1);function zs(i){return parseInt(i.charAt(i.length-1),10)}function hg(i,e){const t=i.name,n=e.name;return t.length!==n.length?t.length-n.length:t<n?-1:t>n?1:0}const Pl={0:new I.Vector4(.5,.5,.5,1),1:new I.Vector4(.5,.5,.5,1),2:new I.Vector4(.63,.32,.18,1),3:new I.Vector4(0,1,0,1),4:new I.Vector4(0,.8,0,1),5:new I.Vector4(0,.6,0,1),6:new I.Vector4(1,.66,0,1),7:new I.Vector4(1,0,1,1),8:new I.Vector4(1,0,0,1),9:new I.Vector4(0,0,1,1),12:new I.Vector4(1,1,0,1),DEFAULT:new I.Vector4(.3,.6,.6,.5)},dg=[[0,new I.Color(0,0,0)],[1,new I.Color(1,1,1)]],ug=[[0,new I.Color(.077,.042,.206)],[.1,new I.Color(.225,.036,.388)],[.2,new I.Color(.373,.074,.432)],[.3,new I.Color(.522,.128,.42)],[.4,new I.Color(.665,.182,.37)],[.5,new I.Color(.797,.255,.287)],[.6,new I.Color(.902,.364,.184)],[.7,new I.Color(.969,.516,.063)],[.8,new I.Color(.988,.683,.072)],[.9,new I.Color(.961,.859,.298)],[1,new I.Color(.988,.998,.645)]],fg=[[0,new I.Color(.241,.015,.61)],[.1,new I.Color(.387,.001,.654)],[.2,new I.Color(.524,.025,.653)],[.3,new I.Color(.651,.125,.596)],[.4,new I.Color(.752,.227,.513)],[.5,new I.Color(.837,.329,.431)],[.6,new I.Color(.907,.435,.353)],[.7,new I.Color(.963,.554,.272)],[.8,new I.Color(.992,.681,.195)],[.9,new I.Color(.987,.822,.144)],[1,new I.Color(.94,.975,.131)]],pg=[[0,new I.Color(.278,0,.714)],[1/6,new I.Color(0,0,1)],[2/6,new I.Color(0,1,1)],[.5,new I.Color(0,1,0)],[4/6,new I.Color(1,1,0)],[5/6,new I.Color(1,.64,0)],[1,new I.Color(1,0,0)]],hc=[[0,new I.Color(.3686,.3098,.6353)],[.1,new I.Color(.1961,.5333,.7412)],[.2,new I.Color(.4,.7608,.6471)],[.3,new I.Color(.6706,.8667,.6431)],[.4,new I.Color(.902,.9608,.5961)],[.5,new I.Color(1,1,.749)],[.6,new I.Color(.9961,.8784,.5451)],[.7,new I.Color(.9922,.6824,.3804)],[.8,new I.Color(.9569,.4275,.2627)],[.9,new I.Color(.8353,.2431,.3098)],[1,new I.Color(.6196,.0039,.2588)]],mg=[[0,new I.Color(.267,.005,.329)],[.1,new I.Color(.283,.141,.458)],[.2,new I.Color(.254,.265,.53)],[.3,new I.Color(.207,.372,.553)],[.4,new I.Color(.164,.471,.558)],[.5,new I.Color(.128,.567,.551)],[.6,new I.Color(.135,.659,.518)],[.7,new I.Color(.267,.749,.441)],[.8,new I.Color(.478,.821,.318)],[.9,new I.Color(.741,.873,.15)],[1,new I.Color(.993,.906,.144)]],gg=[[0,new I.Color(.1647,.2824,.3451)],[.1,new I.Color(.1338,.3555,.4227)],[.2,new I.Color(.061,.4319,.4864)],[.3,new I.Color(0,.5099,.5319)],[.4,new I.Color(0,.5881,.5569)],[.5,new I.Color(.137,.665,.5614)],[.6,new I.Color(.2906,.7395,.5477)],[.7,new I.Color(.4453,.8099,.5201)],[.8,new I.Color(.6102,.8748,.485)],[.9,new I.Color(.7883,.9323,.4514)],[1,new I.Color(.9804,.9804,.4314)]];function dc(i,e,t){const n=i*e,r=new Uint8Array(4*n),o=Math.floor(255*t.r),s=Math.floor(255*t.g),a=Math.floor(255*t.b);for(let c=0;c<n;c++)r[3*c]=o,r[3*c+1]=s,r[3*c+2]=a;const l=new I.DataTexture(r,i,e,I.RGBAFormat);return l.needsUpdate=!0,l.magFilter=I.NearestFilter,l}function ks(i){if(typeof window>"u"||typeof document>"u")return new I.Texture;const e=64,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");n.rect(0,0,e,e);const r=n.createLinearGradient(0,0,e,e);for(let s=0;s<i.length;s++){const a=i[s];r.addColorStop(a[0],`#${a[1].getHexString()}`)}n.fillStyle=r,n.fill();const o=new I.CanvasTexture(t);return o.needsUpdate=!0,o.minFilter=I.LinearFilter,o}function Ys(i){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let r=0;r<256;r++){const o=n+256*r;let s;s=i[n]?i[n]:i[n%32]?i[n%32]:i.DEFAULT,e[4*o+0]=255*s.x,e[4*o+1]=255*s.y,e[4*o+2]=255*s.z,e[4*o+3]=255*s.w}const t=new I.DataTexture(e,256,256,I.RGBAFormat);return t.magFilter=I.NearestFilter,t.needsUpdate=!0,t}var Xn;(function(i){i[i.LINEAR=0]="LINEAR",i[i.SRGB=1]="SRGB"})(Xn||(Xn={}));var Me=function(i,e,t,n){var r,o=arguments.length,s=o<3?e:n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};const vg=Nt(26).A,_g=Nt(650).A,yg={[oi.OCTREE]:"tree_type_octree",[oi.KDTREE]:"tree_type_kdtree"},xg={[$n.FIXED]:"fixed_point_size",[$n.ATTENUATED]:"attenuated_point_size",[$n.ADAPTIVE]:"adaptive_point_size"},bg={[$i.ATTENUATED]:"attenuated_opacity",[$i.FIXED]:"fixed_opacity"},Pg={[ti.SQUARE]:"square_point_shape",[ti.CIRCLE]:"circle_point_shape",[ti.PARABOLOID]:"paraboloid_point_shape"},Sg={[vt.RGB]:"color_type_rgb",[vt.COLOR]:"color_type_color",[vt.DEPTH]:"color_type_depth",[vt.HEIGHT]:"color_type_height",[vt.INTENSITY]:"color_type_intensity",[vt.INTENSITY_GRADIENT]:"color_type_intensity_gradient",[vt.LOD]:"color_type_lod",[vt.POINT_INDEX]:"color_type_point_index",[vt.CLASSIFICATION]:"color_type_classification",[vt.RETURN_NUMBER]:"color_type_return_number",[vt.SOURCE]:"color_type_source",[vt.NORMAL]:"color_type_normal",[vt.PHONG]:"color_type_phong",[vt.RGB_HEIGHT]:"color_type_rgb_height",[vt.COMPOSITE]:"color_type_composite"},wg={[sn.DISABLED]:"clip_disabled",[sn.CLIP_OUTSIDE]:"clip_outside",[sn.CLIP_INSIDE]:"clip_inside",[sn.HIGHLIGHT_INSIDE]:"clip_highlight_inside"},Mg={[Xn.LINEAR]:"input_color_encoding_linear",[Xn.SRGB]:"input_color_encoding_sRGB"},Eg={[Xn.LINEAR]:"output_color_encoding_linear",[Xn.SRGB]:"output_color_encoding_sRGB"};class pe extends I.RawShaderMaterial{constructor(e={}){super(),this.lights=!1,this.fog=!1,this.numClipBoxes=0,this.clipBoxes=[],this.visibleNodeTextureOffsets=new Map,this._gradient=hc,this.gradientTexture=ks(this._gradient),this._classification=Pl,this.classificationTexture=Ys(this._classification),this.uniforms={bbSize:Ee("fv",[0,0,0]),blendDepthSupplement:Ee("f",0),blendHardness:Ee("f",2),classificationLUT:Ee("t",this.classificationTexture||new I.Texture),clipBoxCount:Ee("f",0),clipBoxes:Ee("Matrix4fv",[]),depthMap:Ee("t",null),diffuse:Ee("fv",[1,1,1]),fov:Ee("f",1),gradient:Ee("t",this.gradientTexture||new I.Texture),heightMax:Ee("f",1),heightMin:Ee("f",0),intensityBrightness:Ee("f",0),intensityContrast:Ee("f",0),intensityGamma:Ee("f",1),intensityRange:Ee("fv",[0,65e3]),isLeafNode:Ee("b",0),level:Ee("f",0),maxSize:Ee("f",50),minSize:Ee("f",2),octreeSize:Ee("f",0),opacity:Ee("f",1),pcIndex:Ee("f",0),rgbBrightness:Ee("f",0),rgbContrast:Ee("f",0),rgbGamma:Ee("f",1),screenHeight:Ee("f",1),screenWidth:Ee("f",1),useOrthographicCamera:Ee("b",!1),orthoHeight:Ee("f",1),orthoWidth:Ee("f",1),far:Ee("f",1e3),size:Ee("f",1),spacing:Ee("f",1),toModel:Ee("Matrix4f",[]),transition:Ee("f",.5),uColor:Ee("c",new I.Color(16777215)),visibleNodes:Ee("t",this.visibleNodesTexture||new I.Texture),vnStart:Ee("f",0),wClassification:Ee("f",0),wElevation:Ee("f",0),wIntensity:Ee("f",0),wReturnNumber:Ee("f",0),wRGB:Ee("f",1),wSourceID:Ee("f",0),opacityAttenuation:Ee("f",1),filterByNormalThreshold:Ee("f",0),highlightedPointCoordinate:Ee("fv",new I.Vector3),highlightedPointColor:Ee("fv",cg.clone()),enablePointHighlighting:Ee("b",!0),highlightedPointScale:Ee("f",2),viewScale:Ee("f",1)},this.useClipBox=!1,this.weighted=!1,this.pointColorType=vt.RGB,this.pointSizeType=$n.ADAPTIVE,this.clipMode=sn.DISABLED,this.useEDL=!1,this.shape=ti.SQUARE,this.treeType=oi.OCTREE,this.pointOpacityType=$i.FIXED,this.useFilterByNormal=!1,this.highlightPoint=!1,this.inputColorEncoding=Xn.SRGB,this.outputColorEncoding=Xn.LINEAR,this.useLogDepth=!1,this.attributes={position:{type:"fv",value:[]},color:{type:"fv",value:[]},normal:{type:"fv",value:[]},intensity:{type:"f",value:[]},classification:{type:"f",value:[]},returnNumber:{type:"f",value:[]},numberOfReturns:{type:"f",value:[]},pointSourceID:{type:"f",value:[]},indices:{type:"fv",value:[]}};const t=this.visibleNodesTexture=dc(2048,1,new I.Color(16777215));t.minFilter=I.NearestFilter,t.magFilter=I.NearestFilter,this.setUniform("visibleNodes",t),this.treeType=zr(e.treeType,oi.OCTREE),this.size=zr(e.size,1),this.minSize=zr(e.minSize,2),this.maxSize=zr(e.maxSize,50),this.newFormat=!!e.newFormat,this.classification=Pl,this.defaultAttributeValues.normal=[0,0,0],this.defaultAttributeValues.classification=[0,0,0],this.defaultAttributeValues.indices=[0,0,0,0],this.vertexColors=!0,this.updateShaderSource()}dispose(){super.dispose(),this.gradientTexture&&(this.gradientTexture.dispose(),this.gradientTexture=void 0),this.visibleNodesTexture&&(this.visibleNodesTexture.dispose(),this.visibleNodesTexture=void 0),this.clearVisibleNodeTextureOffsets(),this.classificationTexture&&(this.classificationTexture.dispose(),this.classificationTexture=void 0),this.depthMap&&(this.depthMap.dispose(),this.depthMap=void 0)}clearVisibleNodeTextureOffsets(){this.visibleNodeTextureOffsets.clear()}updateShaderSource(){this.glslVersion=I.GLSL3,this.vertexShader=this.applyDefines(vg),this.fragmentShader=this.applyDefines(_g),this.opacity===1?(this.blending=I.NoBlending,this.transparent=!1,this.depthTest=!0,this.depthWrite=!0,this.depthFunc=I.LessEqualDepth):this.opacity<1&&!this.useEDL&&(this.blending=I.AdditiveBlending,this.transparent=!0,this.depthTest=!1,this.depthWrite=!0),this.weighted&&(this.blending=I.AdditiveBlending,this.transparent=!0,this.depthTest=!0,this.depthWrite=!1,this.depthFunc=I.LessEqualDepth),this.needsUpdate=!0}applyDefines(e){const t=[];function n(o){o&&t.push(`#define ${o}`)}n(yg[this.treeType]),n(xg[this.pointSizeType]),n(Pg[this.shape]),n(Sg[this.pointColorType]),n(wg[this.clipMode]),n(bg[this.pointOpacityType]),n(Eg[this.outputColorEncoding]),n(Mg[this.inputColorEncoding]),this.rgbGamma===1&&this.rgbBrightness===0&&this.rgbContrast===0||n("use_rgb_gamma_contrast_brightness"),this.useFilterByNormal&&n("use_filter_by_normal"),this.useEDL&&n("use_edl"),this.useLogDepth&&n("use_log_depth"),this.weighted&&n("weighted_splats"),this.numClipBoxes>0&&n("use_clip_box"),this.highlightPoint&&n("highlight_point"),n("MAX_POINT_LIGHTS 0"),n("MAX_DIR_LIGHTS 0"),this.newFormat&&n("new_format");const r=e.match(/^\s*#version\s+300\s+es\s*\n/);return r&&(t.unshift(r[0]),e=e.replace(r[0],"")),t.push(e),t.join(`
`)}setClipBoxes(e){if(!e)return;this.clipBoxes=e;const t=this.numClipBoxes!==e.length&&(e.length===0||this.numClipBoxes===0);this.numClipBoxes=e.length,this.setUniform("clipBoxCount",this.numClipBoxes),t&&this.updateShaderSource();const n=16*this.numClipBoxes,r=new Float32Array(n);for(let o=0;o<this.numClipBoxes;o++)r.set(e[o].inverse.elements,16*o);for(let o=0;o<n;o++)isNaN(r[o])&&(r[o]=1/0);this.setUniform("clipBoxes",r)}get gradient(){return this._gradient}set gradient(e){this._gradient!==e&&(this._gradient=e,this.gradientTexture=ks(this._gradient),this.setUniform("gradient",this.gradientTexture))}get classification(){return this._classification}set classification(e){const t={};for(const r of Object.keys(e))t[r]=e[r].clone();let n=!1;if(this._classification===void 0)n=!1;else{n=Object.keys(t).length===Object.keys(this._classification).length;for(const r of Object.keys(t))n=n&&this._classification[r]!==void 0,n=n&&t[r].equals(this._classification[r])}n||(this._classification=t,this.recomputeClassification())}recomputeClassification(){this.classificationTexture=Ys(this._classification),this.setUniform("classificationLUT",this.classificationTexture)}get elevationRange(){return[this.heightMin,this.heightMax]}set elevationRange(e){this.heightMin=e[0],this.heightMax=e[1]}getUniform(e){return this.uniforms===void 0?void 0:this.uniforms[e].value}setUniform(e,t){if(this.uniforms===void 0)return;const n=this.uniforms[e];n.type==="c"?n.value.copy(t):t!==n.value&&(n.value=t)}updateMaterial(e,t,n,r){const o=r.getPixelRatio();if(n.type===cc)this.useOrthographicCamera=!1,this.fov=n.fov*(Math.PI/180),this.far=n.far,this.useLogDepth=r.capabilities.logarithmicDepthBuffer;else{const c=n;this.useOrthographicCamera=!0,this.orthoWidth=(c.right-c.left)/c.zoom,this.orthoHeight=(c.top-c.bottom)/c.zoom,this.fov=Math.PI/2,this.far=n.far,this.useLogDepth=!1}const s=r.getRenderTarget();s!==null&&s instanceof I.WebGLRenderTarget?(this.screenWidth=s.width,this.screenHeight=s.height):(this.screenWidth=r.domElement.clientWidth*o,this.screenHeight=r.domElement.clientHeight*o);const a=Math.max(e.scale.x,e.scale.y,e.scale.z);this.spacing=e.pcoGeometry.spacing*a,this.octreeSize=e.pcoGeometry.boundingBox.getSize(pe.helperVec3).x;const l=n.view;this.viewScale=l!=null&&l.enabled?l.fullWidth/l.width:1,this.pointSizeType!==$n.ADAPTIVE&&this.pointColorType!==vt.LOD||this.updateVisibilityTextureData(t)}updateVisibilityTextureData(e){e.sort(hg);const t=new Uint8Array(4*e.length),n=new Array(e.length).fill(1/0);this.visibleNodeTextureOffsets.clear();for(let o=0;o<e.length;o++){const s=e[o];if(this.visibleNodeTextureOffsets.set(s.name,o),o>0){const a=s.name.slice(0,-1),l=this.visibleNodeTextureOffsets.get(a),c=o-l;n[l]=Math.min(n[l],c);const h=4*l;t[h]=t[h]|1<<s.index,t[h+1]=n[l]>>8,t[h+2]=n[l]%256}t[4*o+3]=s.name.length}const r=this.visibleNodesTexture;r&&(r.image.data.set(t),r.needsUpdate=!0)}static makeOnBeforeRender(e,t,n){return(r,o,s,a,l)=>{if(l instanceof pe){const c=l.uniforms;c.level.value=t.level,c.isLeafNode.value=t.isLeafNode;const h=l.visibleNodeTextureOffsets.get(t.name);h!==void 0&&(c.vnStart.value=h),c.pcIndex.value=n!==void 0?n:e.visibleNodes.indexOf(t),l.uniformsNeedUpdate=!0}}}}function Ee(i,e){return{type:i,value:e}}function zr(i,e){return i===void 0?e:i}function Xe(i,e=!1){return(t,n)=>{Object.defineProperty(t,n,{get:function(){return this.getUniform(i)},set:function(r){r!==this.getUniform(i)&&(this.setUniform(i,r),e&&this.updateShaderSource())}})}}function $t(){return(i,e)=>{const t=`_${e.toString()}`;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){n!==this[t]&&(this[t]=n,this.updateShaderSource())}})}}var ht;pe.helperVec3=new I.Vector3,Me([Xe("bbSize")],pe.prototype,"bbSize",void 0),Me([Xe("depthMap")],pe.prototype,"depthMap",void 0),Me([Xe("fov")],pe.prototype,"fov",void 0),Me([Xe("heightMax")],pe.prototype,"heightMax",void 0),Me([Xe("heightMin")],pe.prototype,"heightMin",void 0),Me([Xe("intensityBrightness")],pe.prototype,"intensityBrightness",void 0),Me([Xe("intensityContrast")],pe.prototype,"intensityContrast",void 0),Me([Xe("intensityGamma")],pe.prototype,"intensityGamma",void 0),Me([Xe("intensityRange")],pe.prototype,"intensityRange",void 0),Me([Xe("maxSize")],pe.prototype,"maxSize",void 0),Me([Xe("minSize")],pe.prototype,"minSize",void 0),Me([Xe("octreeSize")],pe.prototype,"octreeSize",void 0),Me([Xe("opacity",!0)],pe.prototype,"opacity",void 0),Me([Xe("rgbBrightness",!0)],pe.prototype,"rgbBrightness",void 0),Me([Xe("rgbContrast",!0)],pe.prototype,"rgbContrast",void 0),Me([Xe("rgbGamma",!0)],pe.prototype,"rgbGamma",void 0),Me([Xe("screenHeight")],pe.prototype,"screenHeight",void 0),Me([Xe("screenWidth")],pe.prototype,"screenWidth",void 0),Me([Xe("orthoWidth")],pe.prototype,"orthoWidth",void 0),Me([Xe("orthoHeight")],pe.prototype,"orthoHeight",void 0),Me([Xe("useOrthographicCamera")],pe.prototype,"useOrthographicCamera",void 0),Me([Xe("far")],pe.prototype,"far",void 0),Me([Xe("size")],pe.prototype,"size",void 0),Me([Xe("spacing")],pe.prototype,"spacing",void 0),Me([Xe("transition")],pe.prototype,"transition",void 0),Me([Xe("uColor")],pe.prototype,"color",void 0),Me([Xe("wClassification")],pe.prototype,"weightClassification",void 0),Me([Xe("wElevation")],pe.prototype,"weightElevation",void 0),Me([Xe("wIntensity")],pe.prototype,"weightIntensity",void 0),Me([Xe("wReturnNumber")],pe.prototype,"weightReturnNumber",void 0),Me([Xe("wRGB")],pe.prototype,"weightRGB",void 0),Me([Xe("wSourceID")],pe.prototype,"weightSourceID",void 0),Me([Xe("opacityAttenuation")],pe.prototype,"opacityAttenuation",void 0),Me([Xe("filterByNormalThreshold")],pe.prototype,"filterByNormalThreshold",void 0),Me([Xe("highlightedPointCoordinate")],pe.prototype,"highlightedPointCoordinate",void 0),Me([Xe("highlightedPointColor")],pe.prototype,"highlightedPointColor",void 0),Me([Xe("enablePointHighlighting")],pe.prototype,"enablePointHighlighting",void 0),Me([Xe("highlightedPointScale")],pe.prototype,"highlightedPointScale",void 0),Me([Xe("viewScale")],pe.prototype,"viewScale",void 0),Me([$t()],pe.prototype,"useClipBox",void 0),Me([$t()],pe.prototype,"weighted",void 0),Me([$t()],pe.prototype,"pointColorType",void 0),Me([$t()],pe.prototype,"pointSizeType",void 0),Me([$t()],pe.prototype,"clipMode",void 0),Me([$t()],pe.prototype,"useEDL",void 0),Me([$t()],pe.prototype,"shape",void 0),Me([$t()],pe.prototype,"treeType",void 0),Me([$t()],pe.prototype,"pointOpacityType",void 0),Me([$t()],pe.prototype,"useFilterByNormal",void 0),Me([$t()],pe.prototype,"highlightPoint",void 0),Me([$t()],pe.prototype,"inputColorEncoding",void 0),Me([$t()],pe.prototype,"outputColorEncoding",void 0),Me([$t()],pe.prototype,"useLogDepth",void 0),function(i){i[i.POSITION_CARTESIAN=0]="POSITION_CARTESIAN",i[i.COLOR_PACKED=1]="COLOR_PACKED",i[i.COLOR_FLOATS_1=2]="COLOR_FLOATS_1",i[i.COLOR_FLOATS_255=3]="COLOR_FLOATS_255",i[i.NORMAL_FLOATS=4]="NORMAL_FLOATS",i[i.FILLER=5]="FILLER",i[i.INTENSITY=6]="INTENSITY",i[i.CLASSIFICATION=7]="CLASSIFICATION",i[i.NORMAL_SPHEREMAPPED=8]="NORMAL_SPHEREMAPPED",i[i.NORMAL_OCT16=9]="NORMAL_OCT16",i[i.NORMAL=10]="NORMAL"}(ht||(ht={}));const rn={DATA_TYPE_DOUBLE:{ordinal:0,size:8},DATA_TYPE_FLOAT:{ordinal:1,size:4},DATA_TYPE_INT8:{ordinal:2,size:1},DATA_TYPE_UINT8:{ordinal:3,size:1},DATA_TYPE_INT16:{ordinal:4,size:2},DATA_TYPE_UINT16:{ordinal:5,size:2},DATA_TYPE_INT32:{ordinal:6,size:4},DATA_TYPE_UINT32:{ordinal:7,size:4},DATA_TYPE_INT64:{ordinal:8,size:8},DATA_TYPE_UINT64:{ordinal:9,size:8}};function cn(i,e,t){return{name:i,type:e,numElements:t,byteSize:t*e.size}}const Sl=cn(ht.COLOR_PACKED,rn.DATA_TYPE_INT8,4),uc={POSITION_CARTESIAN:cn(ht.POSITION_CARTESIAN,rn.DATA_TYPE_FLOAT,3),RGBA_PACKED:Sl,COLOR_PACKED:Sl,RGB_PACKED:cn(ht.COLOR_PACKED,rn.DATA_TYPE_INT8,3),NORMAL_FLOATS:cn(ht.NORMAL_FLOATS,rn.DATA_TYPE_FLOAT,3),FILLER_1B:cn(ht.FILLER,rn.DATA_TYPE_UINT8,1),INTENSITY:cn(ht.INTENSITY,rn.DATA_TYPE_UINT16,1),CLASSIFICATION:cn(ht.CLASSIFICATION,rn.DATA_TYPE_UINT8,1),NORMAL_SPHEREMAPPED:cn(ht.NORMAL_SPHEREMAPPED,rn.DATA_TYPE_UINT8,2),NORMAL_OCT16:cn(ht.NORMAL_OCT16,rn.DATA_TYPE_UINT8,2),NORMAL:cn(ht.NORMAL,rn.DATA_TYPE_FLOAT,3)};class oa{constructor(e=[]){this.attributes=[],this.byteSize=0,this.size=0;for(let t=0;t<e.length;t++){const n=e[t],r=uc[n];try{this.attributes.push(r),this.byteSize+=r.byteSize,this.size++}catch{}}}add(e){this.attributes.push(e),this.byteSize+=e.byteSize,this.size++}hasColors(){return this.attributes.find(Tg)!==void 0}hasNormals(){return this.attributes.find(Ag)!==void 0}}function Tg({name:i}){return i===ht.COLOR_PACKED}function Ag({name:i}){return i===ht.NORMAL_SPHEREMAPPED||i===ht.NORMAL_FLOATS||i===ht.NORMAL||i===ht.NORMAL_OCT16}function wl(i,e){return new I.Box3().setFromPoints([new I.Vector3(i.min.x,i.min.y,i.min.z).applyMatrix4(e),new I.Vector3(i.min.x,i.min.y,i.min.z).applyMatrix4(e),new I.Vector3(i.max.x,i.min.y,i.min.z).applyMatrix4(e),new I.Vector3(i.min.x,i.max.y,i.min.z).applyMatrix4(e),new I.Vector3(i.min.x,i.min.y,i.max.z).applyMatrix4(e),new I.Vector3(i.min.x,i.max.y,i.max.z).applyMatrix4(e),new I.Vector3(i.max.x,i.max.y,i.min.z).applyMatrix4(e),new I.Vector3(i.max.x,i.min.y,i.max.z).applyMatrix4(e),new I.Vector3(i.max.x,i.max.y,i.max.z).applyMatrix4(e)])}function fc(i,e){const t=i.min.clone(),n=i.max.clone(),r=new I.Vector3().subVectors(n,t);return(1&e)>0?t.z+=r.z/2:n.z-=r.z/2,(2&e)>0?t.y+=r.y/2:n.y-=r.y/2,(4&e)>0?t.x+=r.x/2:n.x-=r.x/2,new I.Box3(t,n)}class si extends I.EventDispatcher{constructor(e,t,n){super(),this.id=si.idCount++,this.level=0,this.spacing=0,this.hasChildren=!1,this.children=[null,null,null,null,null,null,null,null],this.mean=new I.Vector3,this.numPoints=0,this.loaded=!1,this.loading=!1,this.failed=!1,this.parent=null,this.oneTimeDisposeHandlers=[],this.isLeafNode=!0,this.isTreeNode=!1,this.isGeometryNode=!0,this.name=e,this.index=zs(e),this.pcoGeometry=t,this.boundingBox=n,this.tightBoundingBox=n.clone(),this.boundingSphere=n.getBoundingSphere(new I.Sphere)}dispose(){this.geometry&&this.parent&&(this.geometry.dispose(),this.geometry=void 0,this.loaded=!1,this.oneTimeDisposeHandlers.forEach(e=>e()),this.oneTimeDisposeHandlers=[])}getUrl(){const e=this.pcoGeometry,t=e.loader.version,n=[e.octreeDir];return e.loader&&t.equalOrHigher("1.5")?(n.push(this.getHierarchyBaseUrl()),n.push(this.name)):(t.equalOrHigher("1.4")||t.upTo("1.3"))&&n.push(this.name),n.join("/")}getHierarchyUrl(){return`${this.pcoGeometry.octreeDir}/${this.getHierarchyBaseUrl()}/${this.name}.hrc`}addChild(e){this.children[e.index]=e,this.isLeafNode=!1,e.parent=this}traverse(e,t=!0){const n=t?[this]:[];let r;for(;(r=n.pop())!==void 0;){e(r);for(const o of r.children)o!==null&&n.push(o)}}load(){if(!this.canLoad())return Promise.resolve();let e;return this.loading=!0,this.pcoGeometry.numNodesLoading++,this.pcoGeometry.needsUpdate=!0,e=this.pcoGeometry.loader.version.equalOrHigher("1.5")&&this.level%this.pcoGeometry.hierarchyStepSize==0&&this.hasChildren?this.loadHierachyThenPoints():this.loadPoints(),e.catch(t=>{throw this.loading=!1,this.failed=!0,this.pcoGeometry.numNodesLoading--,t})}canLoad(){return!this.loading&&!this.loaded&&!this.pcoGeometry.disposed&&!this.pcoGeometry.loader.disposed&&this.pcoGeometry.numNodesLoading<this.pcoGeometry.maxNumNodesLoading}loadPoints(){return this.pcoGeometry.needsUpdate=!0,this.pcoGeometry.loader.load(this)}loadHierachyThenPoints(){return this.level%this.pcoGeometry.hierarchyStepSize!=0?Promise.resolve():Promise.resolve(this.pcoGeometry.loader.getUrl(this.getHierarchyUrl())).then(e=>this.pcoGeometry.xhrRequest(e,{mode:"cors"})).then(e=>e.arrayBuffer()).then(e=>this.loadHierarchy(this,e))}getHierarchyBaseUrl(){const e=this.pcoGeometry.hierarchyStepSize,t=this.name.substr(1),n=Math.floor(t.length/e);let r="r/";for(let o=0;o<n;o++)r+=`${t.substr(o*e,e)}/`;return r.slice(0,-1)}loadHierarchy(e,t){const n=new DataView(t),r=this.getNodeData(e.name,0,n);e.numPoints=r.numPoints;const o=[r],s=[];let a=5;for(;o.length>0;){const c=o.shift();let h=1;for(let u=0;u<8&&a+1<t.byteLength;u++){if(c.children&h){const f=this.getNodeData(c.name+u,a,n);s.push(f),o.push(f),a+=5}h*=2}}e.pcoGeometry.needsUpdate=!0;const l=new Map;l.set(e.name,e),s.forEach(c=>this.addNode(c,e.pcoGeometry,l)),e.loadPoints()}getNodeData(e,t,n){return{children:n.getUint8(t),numPoints:n.getUint32(t+1,!0),name:e}}addNode({name:e,numPoints:t,children:n},r,o){const s=zs(e),a=e.substring(0,e.length-1),l=o.get(a),c=e.length-1,h=fc(l.boundingBox,s),u=new si(e,r,h);u.level=c,u.numPoints=t,u.hasChildren=n>0,u.spacing=r.spacing/Math.pow(2,c),l.addChild(u),o.set(e,u)}}si.idCount=0;class pc{constructor(e,t,n,r,o){this.loader=e,this.boundingBox=t,this.tightBoundingBox=n,this.offset=r,this.xhrRequest=o,this.disposed=!1,this.needsUpdate=!0,this.octreeDir="",this.hierarchyStepSize=-1,this.nodes={},this.numNodesLoading=0,this.maxNumNodesLoading=3,this.spacing=0,this.pointAttributes=new oa([]),this.projection=null,this.url=null}dispose(){this.loader.dispose(),this.root.traverse(e=>e.dispose()),this.disposed=!0}addNodeLoadedCallback(e){this.loader.callbacks.push(e)}clearNodeLoadedCallbacks(){this.loader.callbacks=[]}}class mc extends I.EventDispatcher{constructor(e,t){super(),this.pcIndex=void 0,this.boundingBoxNode=null,this.loaded=!0,this.isTreeNode=!0,this.isGeometryNode=!1,this.geometryNode=e,this.sceneNode=t,this.children=e.children.slice()}dispose(){this.geometryNode.dispose()}disposeSceneNode(){const e=this.sceneNode;if(e.geometry instanceof I.BufferGeometry){const t=e.geometry.attributes;for(const n in t)n==="position"&&delete t[n].array,delete t[n];e.geometry.dispose(),e.geometry=void 0}}traverse(e,t){this.geometryNode.traverse(e,t)}get id(){return this.geometryNode.id}get name(){return this.geometryNode.name}get level(){return this.geometryNode.level}get isLeafNode(){return this.geometryNode.isLeafNode}get numPoints(){return this.geometryNode.numPoints}get index(){return this.geometryNode.index}get boundingSphere(){return this.geometryNode.boundingSphere}get boundingBox(){return this.geometryNode.boundingBox}get spacing(){return this.geometryNode.spacing}}function Ml(i,e,t){return Math.min(Math.max(e,i),t)}class mt{dispose(){this.pickState&&(this.pickState.material.dispose(),this.pickState.renderTarget.dispose())}pick(e,t,n,r,o={}){if(r.length===0)return null;const s=this.pickState?this.pickState:this.pickState=mt.getPickState(),a=s.material,l=e.getPixelRatio(),c=Math.ceil(e.domElement.clientWidth*l),h=Math.ceil(e.domElement.clientHeight*l);mt.updatePickRenderTarget(this.pickState,c,h);const u=mt.helperVec3;o.pixelPosition?u.copy(o.pixelPosition):(u.addVectors(t.position,n.direction).project(t),u.x=(u.x+1)*c*.5,u.y=(u.y+1)*h*.5);const f=Math.floor((o.pickWindowSize||15)*l),m=(f-1)/2,v=Math.floor(Ml(u.x-m,0,c)),y=Math.floor(Ml(u.y-m,0,h));mt.prepareRender(e,v,y,f,a,s);const p=mt.render(e,t,a,r,n,s,o);a.clearVisibleNodeTextureOffsets();const d=mt.readPixels(e,v,y,f),M=mt.findHit(d,f);return mt.getPickPoint(M,p)}static prepareRender(e,t,n,r,o,s){e.setRenderTarget(s.renderTarget),e.setScissor(t,n,r,r),e.setScissorTest(!0),e.state.buffers.depth.setTest(o.depthTest),e.state.buffers.depth.setMask(o.depthWrite),e.state.setBlending(I.NoBlending),e.getClearColor(this.clearColor);const a=e.getClearAlpha();e.setClearColor(lg,0),e.clear(!0,!0,!0),e.setClearColor(this.clearColor,a)}static render(e,t,n,r,o,s,a){const l=[];for(const c of r){const h=mt.nodesOnRay(c,o);h.length&&(mt.updatePickMaterial(n,c.material,a),n.updateMaterial(c,h,t,e),a.onBeforePickRender&&a.onBeforePickRender(n,s.renderTarget),s.scene.children=mt.createTempNodes(c,h,n,l.length),e.render(s.scene,t),h.forEach(u=>l.push({node:u,octree:c})))}return l}static nodesOnRay(e,t){const n=[],r=t.clone();for(const o of e.visibleNodes){const s=mt.helperSphere.copy(o.boundingSphere).applyMatrix4(e.matrixWorld);r.intersectsSphere(s)&&n.push(o)}return n}static readPixels(e,t,n,r){const o=new Uint8Array(4*r*r);return e.readRenderTargetPixels(e.getRenderTarget(),t,n,r,r,o),e.setScissorTest(!1),e.setRenderTarget(null),o}static createTempNodes(e,t,n,r){const o=[];for(let s=0;s<t.length;s++){const a=t[s],l=a.sceneNode,c=new I.Points(l.geometry,n);c.matrix=l.matrixWorld,c.matrixWorld=l.matrixWorld,c.matrixAutoUpdate=!1,c.frustumCulled=!1;const h=r+s+1;if(h>255)throw Error("More than 255 nodes for pick are not supported.");c.onBeforeRender=pe.makeOnBeforeRender(e,a,h),o.push(c)}return o}static updatePickMaterial(e,t,n){e.pointSizeType=t.pointSizeType,e.shape=t.shape,e.size=t.size,e.minSize=t.minSize,e.maxSize=t.maxSize,e.classification=t.classification,e.useFilterByNormal=t.useFilterByNormal,e.filterByNormalThreshold=t.filterByNormalThreshold,n.pickOutsideClipRegion?e.clipMode=sn.DISABLED:(e.clipMode=t.clipMode,e.setClipBoxes(t.clipMode===sn.CLIP_OUTSIDE?t.clipBoxes:[]))}static updatePickRenderTarget(e,t,n){e.renderTarget.width===t&&e.renderTarget.height===n||(e.renderTarget.dispose(),e.renderTarget=mt.makePickRenderTarget(),e.renderTarget.setSize(t,n))}static makePickRenderTarget(){return new I.WebGLRenderTarget(1,1,{minFilter:I.LinearFilter,magFilter:I.NearestFilter,format:I.RGBAFormat})}static findHit(e,t){const n=new Uint32Array(e.buffer);let r=Number.MAX_VALUE,o=null;for(let s=0;s<t;s++)for(let a=0;a<t;a++){const l=s+a*t,c=Math.pow(s-(t-1)/2,2)+Math.pow(a-(t-1)/2,2),h=e[4*l+3];e[4*l+3]=0;const u=n[l];h>0&&c<r&&(o={pIndex:u,pcIndex:h-1},r=c)}return o}static getPickPoint(e,t){if(!e)return null;const n={},r=t[e.pcIndex]&&t[e.pcIndex].node.sceneNode;if(!r)return null;n.pointCloud=t[e.pcIndex].octree;const o=r.geometry.attributes;for(const s in o){if(!o.hasOwnProperty(s))continue;const a=o[s];if(s==="position")mt.addPositionToPickPoint(n,e,a,r);else if(s==="normal")mt.addNormalToPickPoint(n,e,a,r);else if(s!=="indices")if(a.itemSize===1)n[s]=a.array[e.pIndex];else{const l=[];for(let c=0;c<a.itemSize;c++)l.push(a.array[a.itemSize*e.pIndex+c]);n[s]=l}}return n}static addPositionToPickPoint(e,t,n,r){e.position=new I.Vector3().fromBufferAttribute(n,t.pIndex).applyMatrix4(r.matrixWorld)}static addNormalToPickPoint(e,t,n,r){const o=new I.Vector3().fromBufferAttribute(n,t.pIndex),s=new I.Vector4(o.x,o.y,o.z,0).applyMatrix4(r.matrixWorld);o.set(s.x,s.y,s.z),e.normal=o}static getPickState(){const e=new I.Scene;e.autoUpdate=!1;const t=new pe;return t.pointColorType=vt.POINT_INDEX,{renderTarget:mt.makePickRenderTarget(),material:t,scene:e}}}mt.helperVec3=new I.Vector3,mt.helperSphere=new I.Sphere,mt.clearColor=new I.Color;class gc{constructor(e,t){this.loader=e,this.boundingBox=t,this.url=null,this.pointAttributes=null,this.spacing=0,this.numNodesLoading=0,this.maxNumNodesLoading=3,this.disposed=!1,this.tightBoundingBox=this.boundingBox.clone(),this.boundingSphere=this.boundingBox.getBoundingSphere(new I.Sphere),this.tightBoundingSphere=this.boundingBox.getBoundingSphere(new I.Sphere)}dispose(){this.root.traverse(e=>e.dispose()),this.disposed=!0}}class vc extends I.Object3D{constructor(){super(...arguments),this.root=null}initialized(){return this.root!==null}}class Hs extends vc{constructor(e,t,n){super(),this.disposed=!1,this.level=0,this.maxLevel=1/0,this.minNodePixelSize=50,this.root=null,this.boundingBoxNodes=[],this.visibleNodes=[],this.visibleGeometry=[],this.numVisiblePoints=0,this.showBoundingBox=!1,this._material=null,this.visibleBounds=new I.Box3,this.name="",this.potree=e,this.root=t.root,this.pcoGeometry=t,this.boundingBox=t.boundingBox,this.boundingSphere=this.boundingBox.getBoundingSphere(new I.Sphere),this.position.copy(t.offset),this.updateMatrix(),this.material=n||(t instanceof gc?new pe({newFormat:!0}):new pe)}dispose(){this.root&&this.root.dispose(),this.pcoGeometry.root.traverse(e=>this.potree.lru.remove(e)),this.pcoGeometry.dispose(),this.material.dispose(),this.visibleNodes=[],this.visibleGeometry=[],this.picker&&(this.picker.dispose(),this.picker=void 0),this.disposed=!0}get material(){return this._material}set material(e){this._material=e,this.updateMatrixWorld(!0);const{min:t,max:n}=wl(this.pcoGeometry.tightBoundingBox||this.getBoundingBoxWorld(),this.matrixWorld),r=n.z-t.z;this.material.heightMin=t.z-.2*r,this.material.heightMax=n.z+.2*r}get pointSizeType(){return this.material.pointSizeType}set pointSizeType(e){this.material.pointSizeType=e}toTreeNode(e,t){const n=new I.Points(e.geometry,this.material),r=new mc(e,n);return n.name=e.name,n.position.copy(e.boundingBox.min),n.frustumCulled=!1,n.onBeforeRender=pe.makeOnBeforeRender(this,r),t?(t.sceneNode.add(n),t.children[e.index]=r,e.oneTimeDisposeHandlers.push(()=>{r.disposeSceneNode(),t.sceneNode.remove(r.sceneNode),t.children[e.index]=e})):(this.root=r,this.add(n)),r}updateVisibleBounds(){const e=this.visibleBounds;e.min.set(1/0,1/0,1/0),e.max.set(-1/0,-1/0,-1/0);for(const t of this.visibleNodes)t.isLeafNode&&(e.expandByPoint(t.boundingBox.min),e.expandByPoint(t.boundingBox.max))}updateBoundingBoxes(){if(!this.showBoundingBox||!this.parent)return;let e=this.parent.getObjectByName("bbroot");e||(e=new I.Object3D,e.name="bbroot",this.parent.add(e));const t=[];for(const n of this.visibleNodes)n.boundingBoxNode!==void 0&&n.isLeafNode&&t.push(n.boundingBoxNode);e.children=t}updateMatrixWorld(e){this.matrixAutoUpdate===!0&&this.updateMatrix(),this.matrixWorldNeedsUpdate!==!0&&e!==!0||(this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0)}hideDescendants(e){const t=[];for(n(e);t.length>0;){const r=t.shift();r.visible=!1,n(r)}function n(r){for(const o of r.children)o.visible&&t.push(o)}}moveToOrigin(){this.position.set(0,0,0),this.position.set(0,0,0).sub(this.getBoundingBoxWorld().getCenter(new I.Vector3))}moveToGroundPlane(){this.position.y+=-this.getBoundingBoxWorld().min.y}getBoundingBoxWorld(){return this.updateMatrixWorld(!0),wl(this.boundingBox,this.matrixWorld)}getVisibleExtent(){return this.visibleBounds.applyMatrix4(this.matrixWorld)}pick(e,t,n,r={}){return this.picker=this.picker||new mt,this.picker.pick(e,t,n,[this],r)}get progress(){return this.visibleGeometry.length===0?0:this.visibleNodes.length/this.visibleGeometry.length}}const tt={DATA_TYPE_DOUBLE:{ordinal:0,name:"double",size:8},DATA_TYPE_FLOAT:{ordinal:1,name:"float",size:4},DATA_TYPE_INT8:{ordinal:2,name:"int8",size:1},DATA_TYPE_UINT8:{ordinal:3,name:"uint8",size:1},DATA_TYPE_INT16:{ordinal:4,name:"int16",size:2},DATA_TYPE_UINT16:{ordinal:5,name:"uint16",size:2},DATA_TYPE_INT32:{ordinal:6,name:"int32",size:4},DATA_TYPE_UINT32:{ordinal:7,name:"uint32",size:4},DATA_TYPE_INT64:{ordinal:8,name:"int64",size:8},DATA_TYPE_UINT64:{ordinal:9,name:"uint64",size:8}};let El=0;for(let i in tt)tt[El]=tt[i],El++;class Et{constructor(e,t,n,r=[1/0,-1/0]){this.name=e,this.type=t,this.numElements=n,this.range=r,this.byteSize=this.numElements*this.type.size,this.description=""}}const tr={POSITION_CARTESIAN:new Et("POSITION_CARTESIAN",tt.DATA_TYPE_FLOAT,3),RGBA_PACKED:new Et("COLOR_PACKED",tt.DATA_TYPE_INT8,4),COLOR_PACKED:new Et("COLOR_PACKED",tt.DATA_TYPE_INT8,4),RGB_PACKED:new Et("COLOR_PACKED",tt.DATA_TYPE_INT8,3),NORMAL_FLOATS:new Et("NORMAL_FLOATS",tt.DATA_TYPE_FLOAT,3),INTENSITY:new Et("INTENSITY",tt.DATA_TYPE_UINT16,1),CLASSIFICATION:new Et("CLASSIFICATION",tt.DATA_TYPE_UINT8,1),NORMAL_SPHEREMAPPED:new Et("NORMAL_SPHEREMAPPED",tt.DATA_TYPE_UINT8,2),NORMAL_OCT16:new Et("NORMAL_OCT16",tt.DATA_TYPE_UINT8,2),NORMAL:new Et("NORMAL",tt.DATA_TYPE_FLOAT,3),RETURN_NUMBER:new Et("RETURN_NUMBER",tt.DATA_TYPE_UINT8,1),NUMBER_OF_RETURNS:new Et("NUMBER_OF_RETURNS",tt.DATA_TYPE_UINT8,1),SOURCE_ID:new Et("SOURCE_ID",tt.DATA_TYPE_UINT16,1),INDICES:new Et("INDICES",tt.DATA_TYPE_UINT32,1),SPACING:new Et("SPACING",tt.DATA_TYPE_FLOAT,1),GPS_TIME:new Et("GPS_TIME",tt.DATA_TYPE_DOUBLE,1)};class Cg{constructor(e,t=[],n=0,r=0,o=[]){if(this.attributes=t,this.byteSize=n,this.size=r,this.vectors=o,e!=null)for(let s=0;s<e.length;s++){let a=e[s],l=tr[a];this.attributes.push(l),this.byteSize+=l.byteSize,this.size++}}add(e){this.attributes.push(e),this.byteSize+=e.byteSize,this.size++}addVector(e){this.vectors.push(e)}hasNormals(){for(let e in this.attributes){let t=this.attributes[e];if(t===tr.NORMAL_SPHEREMAPPED||t===tr.NORMAL_FLOATS||t===tr.NORMAL||t===tr.NORMAL_OCT16)return!0}return!1}}const Rg=Nt(290).A,Ig=Nt(761).A;var Bi;(function(i){i.DECODER_WORKER_BROTLI="DECODER_WORKER_BROTLI",i.DECODER_WORKER="DECODER_WORKER"})(Bi||(Bi={}));class Dg{constructor(){this.workers={DECODER_WORKER:[],DECODER_WORKER_BROTLI:[]}}getWorker(e){if(this.workers[e]===void 0)throw new Error("Unknown worker type");if(this.workers[e].length===0){let n=function(r){switch(r){case Bi.DECODER_WORKER_BROTLI:return new Rg;case Bi.DECODER_WORKER:return new Ig;default:throw new Error("Unknown worker type")}}(e);this.workers[e].push(n)}let t=this.workers[e].pop();if(t===void 0)throw new Error("No workers available");return t}returnWorker(e,t){this.workers[e].push(t)}}class Fi{constructor(e,t,n){this.name=e,this.octreeGeometry=t,this.boundingBox=n,this.loaded=!1,this.loading=!1,this.parent=null,this.geometry=null,this.hasChildren=!1,this.isLeafNode=!0,this.isTreeNode=!1,this.isGeometryNode=!0,this.children=[null,null,null,null,null,null,null,null],this.id=Fi.IDCount++,this.index=parseInt(e.charAt(e.length-1)),this.boundingSphere=n.getBoundingSphere(new I.Sphere),this.numPoints=0,this.oneTimeDisposeHandlers=[]}getLevel(){return this.level}isLoaded(){return this.loaded}getBoundingSphere(){return this.boundingSphere}getBoundingBox(){return this.boundingBox}load(){this.octreeGeometry.numNodesLoading>=this.octreeGeometry.maxNumNodesLoading||this.octreeGeometry.loader&&this.octreeGeometry.loader.load(this)}getNumPoints(){return this.numPoints}dispose(){if(this.geometry&&this.parent!=null){this.geometry.dispose(),this.geometry=null,this.loaded=!1;for(let e=0;e<this.oneTimeDisposeHandlers.length;e++)(0,this.oneTimeDisposeHandlers[e])();this.oneTimeDisposeHandlers=[]}}traverse(e,t=!0){const n=t?[this]:[];let r;for(;(r=n.pop())!==void 0;){e(r);for(const o of r.children)o!==null&&n.push(o)}}}Fi.IDCount=0,Fi.IDCount=0;class Lg{constructor(e,t,n,r){this.url=e,this.workerPool=t,this.metadata=n,this.requestManager=r}async load(e){if(!e.loaded&&!e.loading){e.loading=!0,e.octreeGeometry.numNodesLoading++;try{e.nodeType===2&&await this.loadHierarchy(e);let{byteOffset:t,byteSize:n}=e;if(t===void 0||n===void 0)throw new Error("byteOffset and byteSize are required");let r,o=(await this.requestManager.getUrl(this.url)).replace("/metadata.json","/octree.bin"),s=t,a=t+n-BigInt(1);n===BigInt(0)?(r=new ArrayBuffer(0),console.warn(`loaded node with 0 bytes: ${e.name}`)):r=await(await this.requestManager.fetch(o,{headers:{"content-type":"multipart/byteranges",Range:`bytes=${s}-${a}`}})).arrayBuffer();const l=this.metadata.encoding==="BROTLI"?Bi.DECODER_WORKER_BROTLI:Bi.DECODER_WORKER,c=this.workerPool.getWorker(l);c.onmessage=w=>{let b=w.data,N=b.attributeBuffers;this.workerPool.returnWorker(l,c);let D=new I.BufferGeometry;for(let E in N){let L=N[E].buffer;if(E==="position")D.setAttribute("position",new I.BufferAttribute(new Float32Array(L),3));else if(E==="rgba")D.setAttribute("rgba",new I.BufferAttribute(new Uint8Array(L),4,!0));else if(E==="NORMAL")D.setAttribute("normal",new I.BufferAttribute(new Float32Array(L),3));else if(E==="INDICES"){let P=new I.BufferAttribute(new Uint8Array(L),4);P.normalized=!0,D.setAttribute("indices",P)}else{const P=new I.BufferAttribute(new Float32Array(L),1);let x=N[E].attribute;P.potree={offset:N[E].offset,scale:N[E].scale,preciseBuffer:N[E].preciseBuffer,range:x.range},D.setAttribute(E,P)}}e.density=b.density,e.geometry=D,e.loaded=!0,e.loading=!1,e.octreeGeometry.numNodesLoading--};let h=e.octreeGeometry.pointAttributes,u=e.octreeGeometry.scale,f=e.boundingBox,m=e.octreeGeometry.offset.clone().add(f.min),v=f.max.clone().sub(f.min),y=m.clone().add(v),p=e.numPoints,d=e.octreeGeometry.loader.offset,M={name:e.name,buffer:r,pointAttributes:h,scale:u,min:m,max:y,size:v,offset:d,numPoints:p};c.postMessage(M,[M.buffer])}catch{e.loaded=!1,e.loading=!1,e.octreeGeometry.numNodesLoading--}}}parseHierarchy(e,t){let n=new DataView(t),r=22,o=t.byteLength/r,s=e.octreeGeometry,a=new Array(o);a[0]=e;let l=1;for(let c=0;c<o;c++){let h=a[c],u=n.getUint8(c*r+0),f=n.getUint8(c*r+1),m=n.getUint32(c*r+2,!0),v=n.getBigInt64(c*r+6,!0),y=n.getBigInt64(c*r+14,!0);if(h.nodeType===2?(h.byteOffset=v,h.byteSize=y,h.numPoints=m):u===2?(h.hierarchyByteOffset=v,h.hierarchyByteSize=y,h.numPoints=m):(h.byteOffset=v,h.byteSize=y,h.numPoints=m),h.nodeType=u,h.nodeType!==2)for(let p=0;p<8;p++){if(!(1<<p&f))continue;let d=h.name+p,M=Ug(h.boundingBox,p),w=new Fi(d,s,M);w.name=d,w.spacing=h.spacing/2,w.level=h.level+1,h.children[p]=w,w.parent=h,a[l]=w,l++}}}async loadHierarchy(e){let{hierarchyByteOffset:t,hierarchyByteSize:n}=e;if(t===void 0||n===void 0)throw new Error(`hierarchyByteOffset and hierarchyByteSize are undefined for node ${e.name}`);let r=(await this.requestManager.getUrl(this.url)).replace("/metadata.json","/hierarchy.bin"),o=t,s=o+n-BigInt(1),a=await this.requestManager.fetch(r,{headers:{"content-type":"multipart/byteranges",Range:`bytes=${o}-${s}`}}),l=await a.arrayBuffer();this.parseHierarchy(e,l)}}let Ng=new I.Vector3;function Ug(i,e){let t=i.min.clone(),n=i.max.clone(),r=Ng.subVectors(n,t);return(1&e)>0?t.z+=r.z/2:n.z-=r.z/2,(2&e)>0?t.y+=r.y/2:n.y-=r.y/2,(4&e)>0?t.x+=r.x/2:n.x-=r.x/2,new I.Box3(t,n)}let Og={double:tt.DATA_TYPE_DOUBLE,float:tt.DATA_TYPE_FLOAT,int8:tt.DATA_TYPE_INT8,uint8:tt.DATA_TYPE_UINT8,int16:tt.DATA_TYPE_INT16,uint16:tt.DATA_TYPE_UINT16,int32:tt.DATA_TYPE_INT32,uint32:tt.DATA_TYPE_UINT32,int64:tt.DATA_TYPE_INT64,uint64:tt.DATA_TYPE_UINT64};class io{constructor(){this.workerPool=new Dg}static parseAttributes(e){let t=new Cg,n={rgb:"rgba"};for(const r of e){let{name:o,numElements:s,min:a,max:l}=r,c=Og[r.type],h=new Et(n[o]?n[o]:o,c,s);h.range=s===1?[a[0],l[0]]:[a,l],o==="gps-time"&&typeof h.range[0]=="number"&&h.range[0]===h.range[1]&&(h.range[1]+=1),h.initialRange=h.range,t.add(h)}if(t.attributes.find(r=>r.name==="NormalX")!==void 0&&t.attributes.find(r=>r.name==="NormalY")!==void 0&&t.attributes.find(r=>r.name==="NormalZ")!==void 0){let r={name:"NORMAL",attributes:["NormalX","NormalY","NormalZ"]};t.addVector(r)}return t}async load(e,t){let n=await t.fetch(await t.getUrl(e)),r=await n.json(),o=io.parseAttributes(r.attributes),s=new Lg(e,this.workerPool,r,t);s.attributes=o,s.scale=r.scale,s.offset=r.offset;let a=new gc(s,new I.Box3(new I.Vector3(...r.boundingBox.min),new I.Vector3(...r.boundingBox.max)));a.url=await t.getUrl(e),a.spacing=r.spacing,a.scale=r.scale;let l=new I.Vector3(...r.boundingBox.min),c=new I.Vector3(...r.boundingBox.max),h=new I.Box3(l,c),u=l.clone();h.min.sub(u),h.max.sub(u),a.projection=r.projection,a.boundingBox=h,a.tightBoundingBox=h.clone(),a.boundingSphere=h.getBoundingSphere(new I.Sphere),a.tightBoundingSphere=h.getBoundingSphere(new I.Sphere),a.offset=u,a.pointAttributes=io.parseAttributes(r.attributes);let f=new Fi("r",a,h);return f.level=0,f.nodeType=2,f.hierarchyByteOffset=BigInt(0),f.hierarchyByteSize=BigInt(r.hierarchy.firstChunkSize),f.spacing=a.spacing,f.byteOffset=BigInt(0),a.root=f,s.load(f),{geometry:a}}}let kr=null;function sa(){return kr||(typeof document>"u"?null:(kr=document.createElement("canvas").getContext("webgl"),kr))}function Yr(i){const e=sa();return e!==null&&!!e.getExtension(i)}function Wo(i){const e=sa();return e!==null&&e.getParameter(e.MAX_VARYING_VECTORS)>=i}function $g(){const i=sa();if(i===null)return"";const e=i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT),t=i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT),n=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT),r=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT),o=e&&n&&e.precision>0&&n.precision>0,s=t&&r&&t.precision>0&&r.precision>0;return o?"highp":s?"mediump":"lowp"}class Xi{constructor(e){this.versionMinor=0,this.version=e;const t=e.indexOf(".")===-1?e.length:e.indexOf(".");this.versionMajor=parseInt(e.substr(0,t),10),this.versionMinor=parseInt(e.substr(t+1),10),isNaN(this.versionMinor)&&(this.versionMinor=0)}newerThan(e){const t=new Xi(e);return this.versionMajor>t.versionMajor||this.versionMajor===t.versionMajor&&this.versionMinor>t.versionMinor}equalOrHigher(e){const t=new Xi(e);return this.versionMajor>t.versionMajor||this.versionMajor===t.versionMajor&&this.versionMinor>=t.versionMinor}upTo(e){return!this.newerThan(e)}}const Bg=Nt(318).A;class Fg{constructor({getUrl:e=s=>Promise.resolve(s),version:t,boundingBox:n,scale:r,xhrRequest:o}){this.disposed=!1,this.workers=[],this.version=typeof t=="string"?new Xi(t):t,this.xhrRequest=o,this.getUrl=e,this.boundingBox=n,this.scale=r,this.callbacks=[]}dispose(){this.workers.forEach(e=>e.terminate()),this.workers=[],this.disposed=!0}load(e){return e.loaded||this.disposed?Promise.resolve():Promise.resolve(this.getUrl(this.getNodeUrl(e))).then(t=>this.xhrRequest(t,{mode:"cors"})).then(t=>t.arrayBuffer()).then(t=>new Promise(n=>this.parse(e,t,n)))}getNodeUrl(e){let t=e.getUrl();return this.version.equalOrHigher("1.4")&&(t+=".bin"),t}parse(e,t,n){if(this.disposed)return void n();const r=this.getWorker(),o=e.pcoGeometry.pointAttributes,s=t.byteLength/o.byteSize;this.version.upTo("1.5")&&(e.numPoints=s),r.onmessage=l=>{if(this.disposed)return void n();const c=l.data,h=e.geometry=e.geometry||new I.BufferGeometry;h.boundingBox=e.boundingBox,this.addBufferAttributes(h,c.attributeBuffers),this.addIndices(h,c.indices),this.addNormalAttribute(h,s),e.mean=new I.Vector3().fromArray(c.mean),e.tightBoundingBox=this.getTightBoundingBox(c.tightBoundingBox),e.loaded=!0,e.loading=!1,e.failed=!1,e.pcoGeometry.numNodesLoading--,e.pcoGeometry.needsUpdate=!0,this.releaseWorker(r),this.callbacks.forEach(u=>u(e)),n()};const a={buffer:t,pointAttributes:o,version:this.version.version,min:e.boundingBox.min.toArray(),offset:e.pcoGeometry.offset.toArray(),scale:this.scale,spacing:e.spacing,hasChildren:e.hasChildren};r.postMessage(a,[a.buffer])}getWorker(){return this.workers.pop()||new Bg}releaseWorker(e){this.workers.push(e)}getTightBoundingBox({min:e,max:t}){const n=new I.Box3(new I.Vector3().fromArray(e),new I.Vector3().fromArray(t));return n.max.sub(n.min),n.min.set(0,0,0),n}addBufferAttributes(e,t){Object.keys(t).forEach(n=>{const r=t[n].buffer;this.isAttribute(n,ht.POSITION_CARTESIAN)?e.setAttribute("position",new I.BufferAttribute(new Float32Array(r),3)):this.isAttribute(n,ht.COLOR_PACKED)?e.setAttribute("color",new I.BufferAttribute(new Uint8Array(r),3,!0)):this.isAttribute(n,ht.INTENSITY)?e.setAttribute("intensity",new I.BufferAttribute(new Float32Array(r),1)):this.isAttribute(n,ht.CLASSIFICATION)?e.setAttribute("classification",new I.BufferAttribute(new Uint8Array(r),1)):(this.isAttribute(n,ht.NORMAL_SPHEREMAPPED)||this.isAttribute(n,ht.NORMAL_OCT16)||this.isAttribute(n,ht.NORMAL))&&e.setAttribute("normal",new I.BufferAttribute(new Float32Array(r),3))})}addIndices(e,t){const n=new I.Uint8BufferAttribute(t,4);n.normalized=!0,e.setAttribute("indices",n)}addNormalAttribute(e,t){if(!e.getAttribute("normal")){const n=new Float32Array(3*t);e.setAttribute("normal",new I.BufferAttribute(new Float32Array(n),3))}}isAttribute(e,t){return parseInt(e,10)===t}}function Xg(i){return{index:zs(i),parentName:i.substring(0,i.length-1),level:i.length-1}}function zg(i){return i!=null&&i.isGeometryNode}function qo(i){return i!=null&&i.isTreeNode}function _c(i){this.content=[],this.scoreFunction=i}_c.prototype={push:function(i){this.content.push(i),this.bubbleUp(this.content.length-1)},pop:function(){var i=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),i},remove:function(i){for(var e=this.content.length,t=0;t<e;t++)if(this.content[t]===i){var n=this.content.pop();if(t===e-1)break;this.content[t]=n,this.bubbleUp(t),this.sinkDown(t);break}},size:function(){return this.content.length},bubbleUp:function(i){for(var e=this.content[i],t=this.scoreFunction(e);i>0;){var n=Math.floor((i+1)/2)-1,r=this.content[n];if(t>=this.scoreFunction(r))break;this.content[n]=e,this.content[i]=r,i=n}},sinkDown:function(i){for(var e=this.content.length,t=this.content[i],n=this.scoreFunction(t);;){var r=2*(i+1),o=r-1,s=null;if(o<e){var a=this.content[o],l=this.scoreFunction(a);l<n&&(s=o)}if(r<e){var c=this.content[r];this.scoreFunction(c)<(s==null?n:l)&&(s=r)}if(s==null)break;this.content[i]=this.content[s],this.content[s]=t,i=s}}};class kg extends I.LineSegments{constructor(e,t=new I.Color(16776960)){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array([e.min.x,e.min.y,e.min.z,e.max.x,e.min.y,e.min.z,e.max.x,e.min.y,e.max.z,e.min.x,e.min.y,e.max.z,e.min.x,e.max.y,e.min.z,e.max.x,e.max.y,e.min.z,e.max.x,e.max.y,e.max.z,e.min.x,e.max.y,e.max.z]),o=new I.BufferGeometry;o.setIndex(new I.BufferAttribute(n,1)),o.setAttribute("position",new I.BufferAttribute(r,3)),super(o,new I.LineBasicMaterial({color:t}))}}class Yg{constructor(e){this.node=e,this.next=null,this.previous=null}}class Hg{constructor(e=1e6){this.pointBudget=e,this.first=null,this.last=null,this.numPoints=0,this.items=new Map}get size(){return this.items.size}has(e){return this.items.has(e.id)}touch(e){if(!e.loaded)return;const t=this.items.get(e.id);t?this.touchExisting(t):this.addNew(e)}addNew(e){const t=new Yg(e);t.previous=this.last,this.last=t,t.previous&&(t.previous.next=t),this.first||(this.first=t),this.items.set(e.id,t),this.numPoints+=e.numPoints}touchExisting(e){e.previous?e.next&&(e.previous.next=e.next,e.next.previous=e.previous,e.previous=this.last,e.next=null,this.last=e,e.previous&&(e.previous.next=e)):e.next&&(this.first=e.next,this.first.previous=null,e.previous=this.last,e.next=null,this.last=e,e.previous&&(e.previous.next=e))}remove(e){const t=this.items.get(e.id);t&&(this.items.size===1?(this.first=null,this.last=null):(t.previous||(this.first=t.next,this.first.previous=null),t.next||(this.last=t.previous,this.last.next=null),t.previous&&t.next&&(t.previous.next=t.next,t.next.previous=t.previous)),this.items.delete(e.id),this.numPoints-=e.numPoints)}getLRUItem(){return this.first?this.first.node:void 0}freeMemory(){if(!(this.items.size<=1))for(;this.numPoints>2*this.pointBudget;){const e=this.getLRUItem();e&&this.disposeSubtree(e)}}disposeSubtree(e){const t=[e];e.traverse(n=>{n.loaded&&t.push(n)});for(const n of t)n.dispose(),this.remove(n)}}class Gs{constructor(e,t,n,r){this.pointCloudIndex=e,this.weight=t,this.node=n,this.parent=r}}class ir{constructor(){this._pointBudget=1e6,this._rendererSize=new I.Vector2,this.maxNumNodesLoading=4,this.lru=new Hg(this._pointBudget),this.updateVisibilityStructures=(()=>{const e=new I.Matrix4,t=new I.Matrix4,n=new I.Matrix4;return(r,o)=>{var c;const s=[],a=[],l=new _c(h=>1/h.weight);for(let h=0;h<r.length;h++){const u=r[h];if(!u.initialized())continue;u.numVisiblePoints=0,u.visibleNodes=[],u.visibleGeometry=[],o.updateMatrixWorld(!1);const f=o.matrixWorldInverse,m=u.matrixWorld;if(e.identity().multiply(o.projectionMatrix).multiply(f).multiply(m),s.push(new I.Frustum().setFromProjectionMatrix(e)),t.copy(m).invert(),n.identity().multiply(t).multiply(o.matrixWorld),a.push(new I.Vector3().setFromMatrixPosition(n)),u.visible&&u.root!==null){const v=Number.MAX_VALUE;l.push(new Gs(h,v,u.root))}qo(u.root)&&u.hideDescendants((c=u==null?void 0:u.root)==null?void 0:c.sceneNode);for(const v of u.boundingBoxNodes)v.visible=!1}return{frustums:s,cameraPositions:a,priorityQueue:l}}})()}get features(){return{SHADER_INTERPOLATION:Yr("EXT_frag_depth")&&Wo(8),SHADER_SPLATS:Yr("EXT_frag_depth")&&Yr("OES_texture_float")&&Wo(8),SHADER_EDL:Yr("OES_texture_float")&&Wo(8),precision:$g()}}async loadPointCloud(e,t,n){if(typeof t=="string"){const r=t,o={getUrl:async s=>`${r}${s}`,fetch:async(s,a)=>fetch(s,a)};return this.loadPointCloud(e,o)}{const r=t;if(e.endsWith("cloud.js"))return await function(o,s,a){return Promise.resolve(s(o)).then(l=>a(l,{mode:"cors"}).then(c=>c.json()).then(function(c,h,u){return f=>{const{offset:m,boundingBox:v,tightBoundingBox:y}=function(b){const N=new I.Vector3(b.boundingBox.lx,b.boundingBox.ly,b.boundingBox.lz),D=new I.Vector3(b.boundingBox.ux,b.boundingBox.uy,b.boundingBox.uz),E=new I.Box3(N,D),L=E.clone(),P=N.clone();if(b.tightBoundingBox){const{lx:x,ly:R,lz:Y,ux:X,uy:q,uz:V}=b.tightBoundingBox;L.min.set(x,R,Y),L.max.set(X,q,V)}return E.min.sub(P),E.max.sub(P),L.min.sub(P),L.max.sub(P),{offset:P,boundingBox:E,tightBoundingBox:L}}(f),p=new Fg({getUrl:h,version:f.version,boundingBox:v,scale:f.scale,xhrRequest:u}),d=new pc(p,v,y,m,u);d.url=c,d.octreeDir=f.octreeDir,d.needsUpdate=!0,d.spacing=f.spacing,d.hierarchyStepSize=f.hierarchyStepSize,d.projection=f.projection,d.offset=m,d.pointAttributes=new oa(f.pointAttributes);const M={},w=new Xi(f.version);return function(b,N,D,E){const L=new si("r",b,b.boundingBox);return L.hasChildren=!0,L.spacing=b.spacing,E.upTo("1.5")?L.numPoints=N.hierarchy[0][1]:L.numPoints=0,b.root=L,D.r=L,b.root.load()}(d,f,M,w).then(()=>(w.upTo("1.4")&&function(b,N,D){for(let E=1;E<N.hierarchy.length;E++){const[L,P]=N.hierarchy[E],{index:x,parentName:R,level:Y}=Xg(L),X=D[R],q=fc(X.boundingBox,x),V=new si(L,b,q);V.level=Y,V.numPoints=P,V.spacing=b.spacing/Math.pow(2,V.level),D[L]=V,X.addChild(V)}}(d,f,M),d.nodes=M,d))}}(l,s,a)))}(e,r.getUrl,r.fetch).then(o=>new Hs(this,o,n));if(e.endsWith("metadata.json"))return await async function(o,s){const a=new io,{geometry:l}=await a.load(o,s);return l}(e,r).then(o=>new Hs(this,o,n));throw new Error("Unsupported file type")}}updatePointClouds(e,t,n){const r=this.updateVisibility(e,t,n);for(let o=0;o<e.length;o++){const s=e[o];s.disposed||(s.material.updateMaterial(s,s.visibleNodes,t,n),s.updateVisibleBounds(),s.updateBoundingBoxes())}return this.lru.freeMemory(),r}static pick(e,t,n,r,o={}){return ir.picker=ir.picker||new mt,ir.picker.pick(t,n,r,e,o)}get pointBudget(){return this._pointBudget}set pointBudget(e){e!==this._pointBudget&&(this._pointBudget=e,this.lru.pointBudget=e,this.lru.freeMemory())}updateVisibility(e,t,n){let r=0;const o=[],s=[],{frustums:a,cameraPositions:l,priorityQueue:c}=this.updateVisibilityStructures(e,t);let h,u=0,f=!1,m=!1;for(;(h=c.pop())!==void 0;){let p=h.node;if(r+p.numPoints>this.pointBudget)break;const d=h.pointCloudIndex,M=e[d],w=M.maxLevel!==void 0?M.maxLevel:1/0;if(p.level>w||!a[d].intersectsBox(p.boundingBox)||this.shouldClip(M,p.boundingBox))continue;r+=p.numPoints,M.numVisiblePoints+=p.numPoints;const b=h.parent;if(zg(p)&&(!b||qo(b)))if(p.loaded&&u<2)p=M.toTreeNode(p,b),u++;else{if(p.failed){m=!0;continue}p.loaded&&u>=2&&(f=!0),s.push(p),M.visibleGeometry.push(p)}qo(p)&&(this.updateTreeNodeVisibility(M,p,o),M.visibleGeometry.push(p.geometryNode));const N=.5*n.getSize(this._rendererSize).height*n.getPixelRatio();this.updateChildVisibility(h,c,M,p,l[d],t,N)}const v=Math.min(this.maxNumNodesLoading,s.length),y=[];for(let p=0;p<v;p++)y.push(s[p].load());return{visibleNodes:o,numVisiblePoints:r,exceededMaxLoadsToGPU:f,nodeLoadFailed:m,nodeLoadPromises:y}}updateTreeNodeVisibility(e,t,n){this.lru.touch(t.geometryNode);const r=t.sceneNode;r.visible=!0,r.material=e.material,r.updateMatrix(),r.matrixWorld.multiplyMatrices(e.matrixWorld,r.matrix),n.push(t),e.visibleNodes.push(t),this.updateBoundingBoxVisibility(e,t)}updateChildVisibility(e,t,n,r,o,s,a){const l=r.children;for(let c=0;c<l.length;c++){const h=l[c];if(h===null)continue;const u=h.boundingSphere,f=u.center.distanceTo(o),m=u.radius;let v,y,p=0;if(s.type===cc){const d=s.fov*Math.PI/180;p=a/(Math.tan(d/2)*f),y=m*p,v=f<m?Number.MAX_VALUE:y+1/f}else{const d=s;p=2*a/(d.top-d.bottom)*d.zoom,y=m*p,v=y}y<n.minNodePixelSize||t.push(new Gs(e.pointCloudIndex,v,h,r))}}updateBoundingBoxVisibility(e,t){if(e.showBoundingBox&&!t.boundingBoxNode){const n=new kg(t.boundingBox);n.matrixAutoUpdate=!1,e.boundingBoxNodes.push(n),t.boundingBoxNode=n,t.boundingBoxNode.matrix.copy(e.matrixWorld)}else e.showBoundingBox&&t.boundingBoxNode?(t.boundingBoxNode.visible=!0,t.boundingBoxNode.matrix.copy(e.matrixWorld)):!e.showBoundingBox&&t.boundingBoxNode&&(t.boundingBoxNode.visible=!1)}shouldClip(e,t){const n=e.material;if(n.numClipBoxes===0||n.clipMode!==sn.CLIP_OUTSIDE)return!1;const r=t.clone();e.updateMatrixWorld(!0),r.applyMatrix4(e.matrixWorld);const o=n.clipBoxes;for(let s=0;s<o.length;s++){const a=o[s].matrix,l=new I.Box3(new I.Vector3(-.5,-.5,-.5),new I.Vector3(.5,.5,.5)).applyMatrix4(a);if(r.intersectsBox(l))return!1}return!0}}We.BS;We.u8;We.C2;We.QB;We.bA;We.Fn;We.qG;We.mo;We.SA;We.zs;We.IR;We.QN;We.sP;We.mA;We.uT;We.Ay;We.E5;We.UG;We.uZ;We.uo;var Gg=We.aC;We.xT;We.PR;We.zd;We.Pf;We.V9;We.Rx;We.Zk;We.Nk;We.xC;We.J0;class Vg{constructor(){this.scene=new ql,this.camera=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Gm({antialias:!0}),this.controls=null,this.potree=new Gg,this.pointClouds=[],this.boundingBoxes=[],this.isInitialized=!1,this.currentPointCloudIndex=0,this.init()}init(){try{const e=document.createElement("canvas");if(!(e.getContext("webgl")||e.getContext("experimental-webgl")))throw new Error("WebGL不支持，请使用支持WebGL的浏览器");this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Al,document.body.appendChild(this.renderer.domElement),console.log("渲染器初始化成功")}catch(e){throw console.error("渲染器初始化失败:",e),e}this.camera.position.set(0,20,30),this.camera.lookAt(0,0,0),this.controls=new Qm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.setupLights(),this.addAxesHelper(),this.addTestGeometry(),this.addUIControls(),this.loadPointClouds(),this.animate(),window.addEventListener("resize",()=>this.onWindowResize()),this.isInitialized=!0,console.log("PointCloud Demo initialized successfully")}setupLights(){const e=new rd(4210752,.6);this.scene.add(e);const t=new id(16777215,.8);t.position.set(10,10,5),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,this.scene.add(t);const n=new td(16777215,.5);n.position.set(-10,10,-10),this.scene.add(n)}addAxesHelper(){const e=new sd(20);this.scene.add(e);const t=(n,r,o)=>{const s=document.createElement("canvas"),a=s.getContext("2d");s.width=64,s.height=64,a.fillStyle=o,a.font="24px Arial",a.textAlign="center",a.fillText(n,32,32);const l=new Jl(s),c=new jl({map:l}),h=new Hh(c);h.position.copy(r),h.scale.set(2,2,2),this.scene.add(h)};t("X",new C(25,0,0),"#ff0000"),t("Y",new C(0,25,0),"#00ff00"),t("Z",new C(0,0,25),"#0000ff")}addTestGeometry(){const e=new Yi(1,1,1),t=new ea({color:65280,wireframe:!0,transparent:!0,opacity:.3}),n=new un(e,t);n.position.set(0,0,0),n.name="referenceCube",this.scene.add(n),console.log("参考立方体已添加到场景中心")}addUIControls(){const e=document.createElement("div");e.style.position="absolute",e.style.top="10px",e.style.left="10px",e.style.background="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.padding="15px",e.style.borderRadius="5px",e.style.fontFamily="Arial, sans-serif",e.style.fontSize="14px",e.style.zIndex="1000",e.innerHTML=`
      <h3 style="margin: 0 0 10px 0;">点云数据演示</h3>
      <div style="margin-bottom: 10px;">
        <label>点云选择: </label>
        <select id="pointCloudSelect" style="margin-left: 10px; padding: 5px;">
          <option value="0">狮子雕像 (Lion Takanawa)</option>
          <option value="1">泵设备 (Pump)</option>
        </select>
      </div>
      <div style="margin-bottom: 10px;">
        <label>点云大小: </label>
        <input type="range" id="pointSizeSlider" min="0.1" max="5" step="0.1" value="1" style="width: 100px;">
        <span id="pointSizeValue">1.0</span>
      </div>

      <div style="margin-bottom: 10px;">
        <button id="resetCamera" style="padding: 5px 10px; margin-right: 5px;">重置相机</button>
        <button id="adjustCamera" style="padding: 5px 10px; margin-right: 5px;">调整相机</button>
        <button id="toggleAnimation" style="padding: 5px 10px; margin-right: 5px;">暂停动画</button>
        <button id="updatePointClouds" style="padding: 5px 10px; margin-right: 5px;">更新点云</button>
        <button id="debugPointClouds" style="padding: 5px 10px;">调试点云</button>
      </div>
      <div id="pointCloudInfo" style="font-size: 12px; margin-top: 10px;">
        加载中...
      </div>
    `,document.body.appendChild(e),this.bindUIEvents()}bindUIEvents(){const e=document.getElementById("pointCloudSelect"),t=document.getElementById("pointSizeSlider"),n=document.getElementById("pointSizeValue"),r=document.getElementById("resetCamera"),o=document.getElementById("adjustCamera"),s=document.getElementById("toggleAnimation"),a=document.getElementById("updatePointClouds");e.addEventListener("change",l=>{this.switchPointCloud(parseInt(l.target.value))}),t.addEventListener("input",l=>{const c=parseFloat(l.target.value);n.textContent=c.toFixed(1),this.setPointSize(c)}),r.addEventListener("click",()=>{this.resetCamera()}),o.addEventListener("click",()=>{if(this.pointClouds.length>0){const l=this.pointClouds[this.currentPointCloudIndex];this.adjustCameraToPointCloud(l)}}),s.addEventListener("click",()=>{this.toggleAnimation()}),a.addEventListener("click",()=>{this.updatePointClouds()}),debugPointClouds.addEventListener("click",()=>{this.debugPointClouds()})}loadPointClouds(){console.log("开始加载点云数据..."),console.log("当前场景对象数量:",this.scene.children.length),this.loadPointCloud("/data/lion_takanawa/","cloud.js",new C(-10,0,0),new ln(0,0,0),new C(1,1,1),"狮子雕像点云"),this.loadPointCloud("/data/pump/","metadata.json",new C(10,0,0),new ln(0,0,0),new C(1,1,1),"泵设备点云")}loadPointCloud(e,t,n,r,o,s){console.log(`正在加载点云: ${s}`),console.log(`使用路径: ${e}${t}`),this.potree.loadPointCloud(t,e).then(a=>{a.material.size=2,a.material.shape=2,a.material.inputColorEncoding=1,a.material.outputColorEncoding=1,a.visible=!0,console.log("点云材质:",a.material),console.log("点云几何体:",a.pcoGeometry),console.log("点云点数:",a.pcoGeometry?a.pcoGeometry.pointCount:"unknown"),n&&a.position.copy(n),r&&a.rotation.copy(r),o&&a.scale.copy(o),console.log(`点云加载成功: ${s}`,a),console.log("点云位置:",a.position),console.log("点云可见性:",a.visible),console.log("场景对象数量:",this.scene.children.length),a.showBoundingBox=!1,a.name=s,this.scene.add(a),this.pointClouds.push(a),this.boundingBoxes.push(null),this.updatePointCloudInfo(),this.pointClouds.length===1&&(this.currentPointCloudIndex=0,a.visible=!0,this.updatePointCloudInfo(),console.log("第一个点云加载完成，设置为可见"),this.adjustCameraToPointCloud(a)),this.pointClouds.length===2&&window.dispatchEvent(new Event("pointCloudLoaded"))}).catch(a=>{console.error(`加载点云失败: ${s}`,a),console.error("错误详情:",a.message),console.error("错误堆栈:",a.stack),console.log(`尝试备用路径: ${e.replace("/public","")}${t}`),this.potree.loadPointCloud(t,e.replace("/public","")).then(l=>{console.log(`✓ 备用路径加载成功: ${s}`),l.material.size=2,l.material.shape=2,l.material.inputColorEncoding=1,l.material.outputColorEncoding=1,l.visible=!0,n&&l.position.copy(n),r&&l.rotation.copy(r),o&&l.scale.copy(o),l.showBoundingBox=!1,l.name=s,this.scene.add(l),this.pointClouds.push(l),this.boundingBoxes.push(null),this.updatePointCloudInfo(),this.pointClouds.length===1&&(this.currentPointCloudIndex=0,l.visible=!0,this.updatePointCloudInfo(),console.log("第一个点云加载完成，设置为可见")),this.pointClouds.length===2&&window.dispatchEvent(new Event("pointCloudLoaded"))}).catch(l=>{console.error(`备用路径也失败: ${s}`,l)})})}switchPointCloud(e){e>=0&&e<this.pointClouds.length&&(this.currentPointCloudIndex=e,this.pointClouds.forEach(t=>{t.visible=!0}),document.getElementById("pointCloudSelect").value=e,console.log(`切换到点云: ${this.pointClouds[e].name}`),console.log("当前点云可见性:",this.pointClouds.map(t=>({name:t.name,visible:t.visible}))),this.updatePointCloudInfo())}setPointSize(e){this.pointClouds.forEach(t=>{t.material.size=e})}toggleBoundingBoxes(e){console.log("边界框功能已移除")}resetCamera(){this.camera.position.set(0,20,30),this.camera.lookAt(0,0,0),this.controls.target.set(0,0,0),this.controls.update()}toggleAnimation(){const e=document.getElementById("toggleAnimation");this.animationPaused?(this.animationPaused=!1,e.textContent="暂停动画"):(this.animationPaused=!0,e.textContent="恢复动画")}updatePointCloudInfo(){const e=document.getElementById("pointCloudInfo");if(this.pointClouds.length>0){const t=this.pointClouds[this.currentPointCloudIndex],r=t.pcoGeometry.boundingBox.getSize(new C);e.innerHTML=`
        <strong>当前点云:</strong> ${t.name}<br>
        <strong>点云尺寸:</strong> ${r.x.toFixed(2)} × ${r.y.toFixed(2)} × ${r.z.toFixed(2)}<br>
        <strong>位置:</strong> (${t.position.x.toFixed(2)}, ${t.position.y.toFixed(2)}, ${t.position.z.toFixed(2)})<br>
        <strong>缩放:</strong> (${t.scale.x.toFixed(2)}, ${t.scale.y.toFixed(2)}, ${t.scale.z.toFixed(2)})
      `}else e.textContent="未加载点云数据"}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){if(!this.animationPaused)requestAnimationFrame(()=>this.animate());else{this.renderer.render(this.scene,this.camera);return}if(this.controls.update(),this.potree&&this.pointClouds.length>0)try{typeof this.potree.updatePointClouds=="function"?this.potree.updatePointClouds(this.pointClouds,this.camera,this.renderer):this.pointClouds.forEach(e=>{if(e&&typeof e.update=="function"&&e.update(this.camera,this.renderer),e&&e.pcoGeometry){const t=this.camera.position.distanceTo(e.position);if(e.material){const r=Math.max(.1,Math.min(2,10/t));e.material.size=2*r}}})}catch(e){console.warn("点云更新失败:",e)}this.pointClouds.forEach(e=>{e.material&&e.material.needsUpdate!==void 0&&(e.material.needsUpdate=!0)}),this.renderer.render(this.scene,this.camera)}adjustCameraToPointCloud(e){if(e&&e.pcoGeometry&&e.pcoGeometry.boundingBox){const t=e.pcoGeometry.boundingBox,n=t.getCenter(new C),r=t.getSize(new C),s=Math.max(r.x,r.y,r.z)*3;this.camera.position.set(n.x+s*.5,n.y+s*.3,n.z+s*.8),this.camera.lookAt(n),this.controls.target.copy(n),this.controls.update(),console.log(`相机已调整到点云中心: ${n.x}, ${n.y}, ${n.z}`),console.log(`点云尺寸: ${r.x} × ${r.y} × ${r.z}`),console.log(`相机距离: ${s}`)}}updatePointClouds(){if(this.potree&&this.pointClouds.length>0)try{typeof this.potree.updatePointClouds=="function"?this.potree.updatePointClouds(this.pointClouds,this.camera,this.renderer):this.pointClouds.forEach(e=>{if(e&&typeof e.update=="function"&&e.update(this.camera,this.renderer),e&&e.pcoGeometry){const t=this.camera.position.distanceTo(e.position);if(e.material){const r=Math.max(.1,Math.min(2,10/t));e.material.size=2*r}}}),console.log("点云数据已更新")}catch(e){console.warn("点云更新失败:",e)}}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}debugPointClouds(){console.log("=== 点云调试信息 ==="),console.log(`场景对象总数: ${this.scene.children.length}`),console.log(`点云数量: ${this.pointClouds.length}`),this.pointClouds.forEach((e,t)=>{console.log(`点云 ${t+1}: ${e.name}`),console.log(`  可见性: ${e.visible}`),console.log(`  位置: ${e.position.x}, ${e.position.y}, ${e.position.z}`),console.log(`  缩放: ${e.scale.x}, ${e.scale.y}, ${e.scale.z}`),console.log("  材质:",e.material),console.log("  几何体:",e.pcoGeometry),e.pcoGeometry&&(console.log(`  点数: ${e.pcoGeometry.pointCount||"unknown"}`),console.log("  边界框:",e.pcoGeometry.boundingBox))}),console.log("场景中的所有对象:"),this.scene.traverse(e=>{console.log(`  ${e.name||e.type}: visible=${e.visible}, type=${e.type}`)})}dispose(){window.removeEventListener("resize",()=>this.onWindowResize()),this.renderer.dispose(),this.controls&&this.controls.dispose(),console.log("PointCloud Demo disposed")}}document.addEventListener("DOMContentLoaded",()=>{console.log("开始初始化点云数据演示...");try{const i=document.createElement("canvas");if(!(i.getContext("webgl")||i.getContext("experimental-webgl")))throw new Error("WebGL不支持，请使用支持WebGL的浏览器");console.log("WebGL支持检查通过");const t=new Vg;window.pointCloudDemo=t,console.log("点云演示初始化完成")}catch(i){console.error("初始化点云演示失败:",i);const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f44336;
      color: white;
      padding: 20px;
      border-radius: 8px;
      font-family: Arial, sans-serif;
      z-index: 10000;
      text-align: center;
    `,e.innerHTML=`
      <h3>初始化失败</h3>
      <p>${i.message}</p>
      <p>请检查浏览器是否支持WebGL</p>
    `,document.body.appendChild(e)}});
