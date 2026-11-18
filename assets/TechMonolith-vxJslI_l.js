import{r as u,j as c}from"./react-vendor-6NUTllzr.js";import{C,u as N,a as D,V as b,S as M,b as S,D as L,R as F,U as k,c as y,L as T,M as _}from"./three-vendor-DTDRwZc0.js";import{i as j}from"./index-DJy7wLnC.js";import"./vendor-DsK-6whY.js";import"./motion-vendor-BkmE1Yz-.js";const V="/assets/i_want_to_202603200746-CMLCPw7j.webp",I=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,A=`
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
`;function B(n=256){const h=new Uint8Array(n*n),r=(o,i,e,s)=>{const t=(o%e+e)%e,d=(i%e+e)%e;let m=t*374761393+d*668265263+s*1442695041;return m=(m^m>>>13)*1274126177,m=m^m>>>16,(m>>>0)/4294967295},a=o=>o*o*(3-2*o),l=(o,i,e,s)=>{const t=Math.floor(o),d=Math.floor(i),m=o-t,g=i-d,x=a(m),w=a(g),U=r(t,d,e,s),E=r(t+1,d,e,s),H=r(t,d+1,e,s),R=r(t+1,d+1,e,s);return(U*(1-x)+E*x)*(1-w)+(H*(1-x)+R*x)*w},v=[{period:8,weight:.5},{period:16,weight:.25},{period:32,weight:.125},{period:64,weight:.0625}],p=v.reduce((o,i)=>o+i.weight,0);for(let o=0;o<n;o++)for(let i=0;i<n;i++){let e=0;for(let s=0;s<v.length;s++){const{period:t,weight:d}=v[s];e+=d*l(i/n*t,o/n*t,t,s+1)}h[o*n+i]=Math.round(e/p*255)}const f=new L(h,n,n,F,k);return f.wrapS=y,f.wrapT=y,f.magFilter=T,f.minFilter=T,f.generateMipmaps=!1,f.needsUpdate=!0,f}const W=()=>{const n=u.useRef(null),{viewport:h,invalidate:r}=N(),[a,l]=D([j,V]),v=u.useRef(0),p=u.useRef(new b(.5,.5)),f=u.useRef(0),o=u.useMemo(()=>B(256),[]);u.useEffect(()=>{a&&l&&(a.colorSpace=M,l.colorSpace=M,a.anisotropy=4,l.anisotropy=4,a.needsUpdate=!0,l.needsUpdate=!0)},[a,l]),u.useEffect(()=>{const e=t=>{p.current.set(t.clientX/window.innerWidth,1-t.clientY/window.innerHeight),v.current=1,f.current=performance.now(),r()},s=()=>{v.current=0,r()};return window.addEventListener("mousemove",e),window.addEventListener("mouseleave",s),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseleave",s)}},[r]);const i=u.useMemo(()=>({uTex1:{value:a},uTex2:{value:l},uNoiseTex:{value:o},uMouse:{value:new b(.5,.5)},uHover:{value:0},uTime:{value:0}}),[a,l,o]);return u.useEffect(()=>{r()},[r]),S((e,s)=>{const t=n.current;if(!t)return;const m=performance.now()-f.current<400,g=t.uniforms.uHover.value;t.uniforms.uTime.value+=Math.min(s,.05),t.uniforms.uMouse.value.lerp(p.current,.15),t.uniforms.uHover.value=_.lerp(g,v.current,.08),(m||t.uniforms.uHover.value>.01||v.current>.01)&&r()}),u.useEffect(()=>()=>{var e;(e=n.current)==null||e.dispose(),o.dispose()},[o]),c.jsxs("mesh",{children:[c.jsx("planeGeometry",{args:[h.width,h.height]}),c.jsx("shaderMaterial",{ref:n,vertexShader:I,fragmentShader:A,uniforms:i,transparent:!0})]})},X=()=>{const[n,h]=u.useState(!0);return u.useEffect(()=>{let r=null,a=0;const l=()=>{const v=document.getElementById("home");if(!v){a=requestAnimationFrame(l);return}r=new IntersectionObserver(([p])=>h(p.isIntersecting),{threshold:0}),r.observe(v)};return l(),()=>{cancelAnimationFrame(a),r==null||r.disconnect()}},[]),c.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none",style:{width:"100vw",height:"100vh"},children:[c.jsx("img",{src:j,alt:"","data-hero-bg":!0,className:`absolute inset-0 w-full h-full object-fill transition-opacity duration-500 ${n?"opacity-25":"opacity-10"}`}),n&&c.jsx("div",{className:"absolute inset-0","data-hero-canvas":!0,children:c.jsxs(C,{camera:{position:[0,0,1],fov:50},frameloop:"demand",dpr:1,children:[c.jsx("ambientLight",{intensity:1}),c.jsx(u.Suspense,{fallback:null,children:c.jsx(W,{})})]})}),c.jsx("div",{className:"absolute inset-0 bg-background/60 pointer-events-none"}),c.jsx("div",{className:"absolute top-[0%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[80px] rounded-full pointer-events-none"}),c.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none"})]})};export{X as default};
