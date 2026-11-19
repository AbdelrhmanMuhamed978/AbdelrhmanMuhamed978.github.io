import{r as u,j as m}from"./react-vendor-6NUTllzr.js";import{C as L,u as N,a as D,V as b,S as j,b as F,D as k,R as A,U as _,c as R,L as E,M as O}from"./three-vendor-DTDRwZc0.js";import{az as B}from"./vendor-DsK-6whY.js";import{u as V,i as C}from"./index-9utY8v-O.js";import{c as U,m as H}from"./motion-vendor-BkmE1Yz-.js";const W="/assets/i_want_to_202603200746-CMLCPw7j.webp",G=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,I=`
uniform sampler2D uTex1;
uniform sampler2D uTex2;
uniform sampler2D uNoiseTex;
uniform vec2 uMouse;
uniform float uHover;
uniform float uTime;
varying vec2 vUv;

void main() {
    float time = uTime * 0.5;

    vec2 dir = vUv - uMouse;

    // Keep the reveal circle roughly round on screen.
    dir.y *= 1.8;
    float dist = length(dir);

    // ONE precomputed noise lookup (replaces the two fbm() calls).
    vec2 noiseUv = vUv * 2.5 + vec2(time * 0.05, -time * 0.05);
    float distortion = texture2D(uNoiseTex, noiseUv).r;

    float radius = 0.3 * uHover;
    float deformedDist = dist + (distortion * 0.3 - 0.15) * uHover;
    float mask = smoothstep(radius + 0.05, radius - 0.01, deformedDist);

    vec2 uv1 = vUv + dir * distortion * 0.08 * mask * uHover;
    vec2 uv2 = vUv - dir * distortion * 0.15 * uHover;

    vec4 c1 = texture2D(uTex1, uv1);
    vec4 c2 = texture2D(uTex2, uv2);

    float fringe = smoothstep(radius + 0.1, radius - 0.02, deformedDist) - mask;
    vec4 fringeColor = vec4(0.01, 0.0, 0.05, 1.0);

    vec4 finalColor = mix(c1, fringeColor, fringe * uHover);
    finalColor = mix(finalColor, c2, mask * uHover);

    gl_FragColor = finalColor;
}
`;function P(n=256){const h=new Uint8Array(n*n),s=(t,c,e,r)=>{const o=(t%e+e)%e,a=(c%e+e)%e;let i=o*374761393+a*668265263+r*1442695041;return i=(i^i>>>13)*1274126177,i=i^i>>>16,(i>>>0)/4294967295},v=t=>t*t*(3-2*t),f=(t,c,e,r)=>{const o=Math.floor(t),a=Math.floor(c),i=t-o,d=c-a,g=v(i),w=v(d),y=s(o,a,e,r),M=s(o+1,a,e,r),T=s(o,a+1,e,r),S=s(o+1,a+1,e,r);return(y*(1-g)+M*g)*(1-w)+(T*(1-g)+S*g)*w},p=[{period:8,weight:.5},{period:16,weight:.25},{period:32,weight:.125},{period:64,weight:.0625}],x=p.reduce((t,c)=>t+c.weight,0);for(let t=0;t<n;t++)for(let c=0;c<n;c++){let e=0;for(let r=0;r<p.length;r++){const{period:o,weight:a}=p[r];e+=a*f(c/n*o,t/n*o,o,r+1)}h[t*n+c]=Math.round(e/x*255)}const l=new k(h,n,n,A,_);return l.wrapS=R,l.wrapT=R,l.magFilter=E,l.minFilter=E,l.generateMipmaps=!1,l.needsUpdate=!0,l}const Y=()=>{const n=u.useRef(null),{viewport:h,invalidate:s}=N(),[v,f]=D([C,W]),p=u.useRef(0),x=u.useRef(new b(.5,.5)),l=u.useRef(0),t=u.useMemo(()=>P(256),[]);u.useEffect(()=>{v&&f&&(v.colorSpace=j,f.colorSpace=j,v.anisotropy=4,f.anisotropy=4,v.needsUpdate=!0,f.needsUpdate=!0)},[v,f]),u.useEffect(()=>{const e=o=>{x.current.set(o.clientX/window.innerWidth,1-o.clientY/window.innerHeight),p.current=1,l.current=performance.now(),s()},r=()=>{p.current=0,s()};return window.addEventListener("mousemove",e),window.addEventListener("mouseleave",r),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseleave",r)}},[s]);const c=u.useMemo(()=>({uTex1:{value:v},uTex2:{value:f},uNoiseTex:{value:t},uMouse:{value:new b(.5,.5)},uHover:{value:0},uTime:{value:0}}),[v,f,t]);return u.useEffect(()=>{s()},[s]),F((e,r)=>{const o=n.current;if(!o)return;const i=performance.now()-l.current<400,d=o.uniforms.uHover.value;o.uniforms.uTime.value+=Math.min(r,.05),o.uniforms.uMouse.value.lerp(x.current,.15),o.uniforms.uHover.value=O.lerp(d,p.current,.08),(i||o.uniforms.uHover.value>.01||p.current>.01)&&s()}),u.useEffect(()=>()=>{var e;(e=n.current)==null||e.dispose(),t.dispose()},[t]),m.jsxs("mesh",{children:[m.jsx("planeGeometry",{args:[h.width,h.height]}),m.jsx("shaderMaterial",{ref:n,vertexShader:G,fragmentShader:I,uniforms:c,transparent:!0})]})},Z=()=>{const{scrollY:n}=V(),{resolvedTheme:h}=B(),[s,v]=u.useState({start:600,end:1400}),[f,p]=u.useState(!0),x=u.useRef(!0);u.useEffect(()=>{let a=0,i=0;const d=()=>{const w=document.getElementById("skills");if(!w){i++<240&&(a=requestAnimationFrame(d));return}const y=w.offsetTop,M=Math.max(1,y-window.innerHeight*.65),T=Math.max(M+1,y+window.innerHeight*.55);v({start:M,end:T})};d();const g=()=>{cancelAnimationFrame(a),i=0,d()};return window.addEventListener("resize",g),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",g)}},[]);const l=h==="light",t=l?.06:.25,c=l?.02:.04,e=l?.15:1,r=U(n,[0,s.start,s.end],[t,t,c],{clamp:!0}),o=U(n,[0,s.start,s.end],[e,e,0],{clamp:!0});return u.useEffect(()=>{const a=i=>{const d=i<s.end+80;d!==x.current&&(x.current=d,p(d))};return a(n.get()),n.on("change",a)},[s.end,n]),m.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none",style:{width:"100vw",height:"100vh"},children:[m.jsx(H.img,{src:C,alt:"","data-hero-bg":!0,style:{opacity:r},className:"absolute inset-0 w-full h-full object-fill"}),f&&m.jsx(H.div,{className:"absolute inset-0","data-hero-canvas":!0,style:{opacity:o},children:m.jsxs(L,{camera:{position:[0,0,1],fov:50},frameloop:"demand",dpr:1,children:[m.jsx("ambientLight",{intensity:1}),m.jsx(u.Suspense,{fallback:null,children:m.jsx(Y,{})})]})}),m.jsx("div",{className:"absolute inset-0 bg-background/60 pointer-events-none"}),m.jsx("div",{className:"absolute top-[0%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[80px] rounded-full pointer-events-none"}),m.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none"})]})};export{Z as default};
