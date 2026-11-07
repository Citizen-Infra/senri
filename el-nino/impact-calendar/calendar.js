/* El Niño 2026–27 impact calendar. Everything is driven by ../data/impacts.json. */
(function(){
const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const KC={drought:"--c-drought",heat:"--c-heat",rain:"--c-rain",ocean:"--c-ocean",food:"--c-food",health:"--c-health"};
const TONE={cool:"var(--cool)",warm:"var(--warm)",muted:"var(--muted)"};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

fetch('../data/impacts.json').then(r=>r.json()).then(start).catch(()=>{
  document.getElementById('grid').innerHTML='<p class="loading">Could not load ../data/impacts.json. If you opened this file directly, serve the <code>el-nino</code> folder instead, for example <code>python3 -m http.server</code>.</p>';
});

function start(D){
  const [y,m,d]=D.meta.asOf.split('-').map(Number);
  const NOWM=(y-2026)*12+(m-1);
  const TODAY=NOWM+(d-1)/30;
  const label=new Date(Date.UTC(y,m-1,d)).toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'});

  const status=segs=>segs.some(x=>x[0]<=NOWM&&x[1]>=NOWM)?"now":(segs.every(x=>x[1]<NOWM)?"past":"future");
  const bucket=segs=>{const st=status(segs);if(st!=="future")return st;const first=Math.min(...segs.filter(x=>x[0]>NOWM).map(x=>x[0]));return first<=NOWM+3?"soon":"later"};
  const mon=i=>MONTHS[i%12]+" "+(2026+Math.floor(i/12));
  const when=segs=>segs.map(([a,b])=>a===b?mon(a):mon(a)+" – "+mon(b)).join("; ");
  const dots=n=>"●".repeat(n)+"○".repeat(3-n);

  document.getElementById("legend").innerHTML=Object.entries(D.kinds).map(([k,n])=>`<span><i style="background:var(${KC[k]})"></i>${esc(n)}</span>`).join("")+`<span><i style="background:var(--now);width:3px"></i>Today</span>`;

  let h=`<div class="r head"><div class="lab"><span class="eyebrow">Region / risk</span></div>`;
  for(let i=0;i<24;i++){h+=`<div class="m ${i%12===0?"yr":""} ${i===NOWM?"cur":""}" data-m="${i}" title="Show ${MONTHS[i%12]} ${2026+Math.floor(i/12)} on the map">${i%12===0?(2026+i/12)+"<br>":""}${MONTHS[i%12]}</div>`}
  h+=`</div>`;

  // Niño-3.4 strip
  const V=D.nino34.values,OBS=D.nino34.observedThrough;
  const W=24*46,H=112,y0=82,sc=22;
  const pts=V.map((v,i)=>[i*46+23,y0-v*sc]);
  const line=a=>a.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
  const up=[],dn=[];V.forEach((v,i)=>{if(i<OBS)return;const w=Math.min(0.15+(i-OBS)*0.09,1.1);up.push([i*46+23,y0-(v+w)*sc]);dn.unshift([i*46+23,y0-(v-w)*sc])});
  const P=pts[OBS];
  h+=`<div class="r sst"><div class="lab"><div class="row-label" style="cursor:default">Niño-3.4 anomaly, °C<small>schematic; solid = observed</small></div></div>
<div style="grid-column:2/span 24;height:${H}px"><svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Schematic Niño-3.4 temperature anomaly">
<line x1="0" x2="${W}" y1="${y0}" y2="${y0}" stroke="var(--line)"/>
<line x1="0" x2="${W}" y1="${y0-0.5*sc}" y2="${y0-0.5*sc}" stroke="var(--line)" stroke-dasharray="2 4"/>
<line x1="0" x2="${W}" y1="${y0-2*sc}" y2="${y0-2*sc}" stroke="var(--line)" stroke-dasharray="2 4"/>
<text x="4" y="${y0-0.5*sc-3}" font-size="10" fill="var(--muted)" font-family="JetBrains Mono,monospace">+0.5 threshold</text>
<text x="4" y="${y0-2*sc-3}" font-size="10" fill="var(--muted)" font-family="JetBrains Mono,monospace">+2.0 very strong</text>
<path d="${line(up.concat(dn))}Z" fill="var(--warm)" opacity=".14"/>
<path d="${line(pts.slice(OBS))}" fill="none" stroke="var(--warm)" stroke-width="2" stroke-dasharray="5 4"/>
<path d="${line(pts.slice(0,OBS+1))}" fill="none" stroke="var(--warm)" stroke-width="2.5"/>
<circle cx="${P[0]}" cy="${P[1]}" r="4" fill="var(--warm)"/>
<text x="${P[0]-8}" y="${P[1]-7}" font-size="10.5" text-anchor="end" fill="var(--fg)" font-family="JetBrains Mono,monospace">${MONTHS[OBS%12]} +${V[OBS].toFixed(1)}</text>
</svg></div></div>`;

  h+=`<div class="r"><div class="lab"><div class="row-label" style="cursor:default">Event phase<small>~12 months of El Niño</small></div></div>`;
  D.phases.forEach(p=>{h+=`<div class="phase" style="grid-column:${p.from+2}/${p.to+3};background:${TONE[p.tone]};opacity:${p.o}" title="${esc(p.name)}">${esc(p.name)}</div>`});
  h+=`</div>`;

  let id=0;const all=[];
  D.groups.forEach(g=>{
    h+=`<div class="r group"><div class="lab">${esc(g.name)}</div></div>`;
    g.items.forEach(x=>{
      const rid="i"+(id++);const bk=bucket(x.segs);
      all.push(Object.assign({rid,bk},x));
      h+=`<div class="r item" data-b="${bk}" data-rid="${rid}"><div class="lab"><button type="button" class="row-label" data-go="${rid}">${esc(x.name)}</button><span class="conf" title="How consistently this appeared in past events">${dots(x.conf)}</span></div>`;
      x.segs.forEach(([a,b])=>{const s=b<NOWM?"past":(a<=NOWM?"now":"future");h+=`<button type="button" class="bar ${s}" data-go="${rid}" style="grid-column:${a+2}/${b+3};grid-row:1;background:var(${KC[x.kind]})" aria-label="${esc(x.name)}: ${when([[a,b]])}"></button>`});
      h+=`</div>`;
    });
  });
  h+=`<div class="today" style="left:calc(var(--labelw) + ${TODAY} * var(--colw))"><span>we are here · ${label}</span></div>`;
  const grid=document.getElementById("grid");grid.innerHTML=h;

  const cols=[["now","Happening now"],["soon","Starts by February"],["later","Later in 2027"],["past","Already past"]];
  const firstMonth=x=>Math.min(...x.segs.map(s=>s[0]));
  document.getElementById("cards").innerHTML=cols.map(([b,t])=>{
    const items=all.filter(x=>x.bk===b).sort((p,q)=>firstMonth(p)-firstMonth(q));
    return `<div class="col"><h3>${t}<span class="n">${items.length}</span></h3>`+items.map(x=>`<div class="card" id="${x.rid}" style="--k:var(${KC[x.kind]})"><div class="w">${when(x.segs)} · ${dots(x.conf)}</div><div class="t">${esc(x.name)}</div><p>${esc(x.desc)}</p><div class="an">Precedent: ${esc(x.precedent)}</div></div>`).join("")+`</div>`;
  }).join("");

  grid.addEventListener("click",e=>{const t=e.target.closest("[data-go]");if(!t)return;const c=document.getElementById(t.dataset.go);if(!c)return;c.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});c.classList.add("flash");setTimeout(()=>c.classList.remove("flash"),1600)});

  const btns=[...document.querySelectorAll(".filters button")];
  btns.forEach(b=>b.addEventListener("click",()=>{btns.forEach(x=>x.setAttribute("aria-pressed",x===b));const f=b.dataset.f;
    document.querySelectorAll(".r.item").forEach(r=>r.classList.toggle("dim",f!=="all"&&r.dataset.b!==f));
    document.querySelectorAll(".r.group").forEach(g=>{let n=g.nextElementSibling,any=false;while(n&&n.classList.contains("item")){if(!n.classList.contains("dim"))any=true;n=n.nextElementSibling}g.classList.toggle("dim",!any)});
  }));

  initMap(D,all,NOWM,mon);

  const sc_=document.getElementById("scroller");
  requestAnimationFrame(()=>{const cs=getComputedStyle(document.documentElement);const lw=parseFloat(cs.getPropertyValue("--labelw"))||230;const cw=parseFloat(cs.getPropertyValue("--colw"))||46;const x=lw+TODAY*cw;if(x>sc_.clientWidth-60)sc_.scrollLeft=x-lw-cw*6});
}
// World map of affected areas. Land comes pre-projected from ../data/world-110m.json
// (equirectangular, centred on 155°E); impact zones are projected here with the same maths.
function initMap(D,all,NOWM,mon){
  const svg=document.getElementById("map");if(!svg)return;
  const NS="http://www.w3.org/2000/svg";
  const range=document.getElementById("map-range"),lab=document.getElementById("map-label"),lab2=document.getElementById("map-label2");
  const back=document.getElementById("map-today"),list=document.getElementById("map-list"),cnt=document.getElementById("map-count"),nino=document.getElementById("map-nino");
  const el=(n,a)=>{const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);return e};
  let K=1000/360,CENTER=155,TOP=75;
  const X=lon=>(((lon-CENTER+540)%360)-180+180)*K, Y=lat=>(TOP-lat)*K;
  const layers={};["base","zones","hi","top"].forEach(n=>{layers[n]=el("g",{class:"map-"+n});svg.appendChild(layers[n])});

  fetch("../data/world-110m.json").then(r=>r.json()).then(W=>{
    K=W.width/360;CENTER=W.center;TOP=W.latTop;
    layers.base.prepend(el("path",{d:W.land,class:"land"}),el("path",{d:W.borders,class:"borders"}));
    drawGuides();month(cur);
  }).catch(()=>{layers.base.appendChild(el("text",{x:500,y:170,"text-anchor":"middle",class:"map-msg"})).textContent="Could not load ../data/world-110m.json"});

  function drawGuides(){
    [[0,"Equator"],[23.44,""],[-23.44,""]].forEach(([lat,t])=>{layers.base.appendChild(el("line",{x1:0,x2:1000,y1:Y(lat),y2:Y(lat),class:lat?"tropic":"equator"}));if(t){const tx=el("text",{x:X(-108),y:Y(lat)-4,class:"map-lbl"});tx.textContent=t;layers.base.appendChild(tx)}});
    const b=el("rect",{x:X(-170),y:Y(5),width:50*K,height:10*K,class:"nino-box"});
    const t=el("text",{x:X(-170)+2,y:Y(5)-5,class:"map-lbl nino-lbl"});t.textContent="Niño-3.4";
    layers.top.append(b,t);
  }

  const items=all.filter(x=>x.areas&&x.areas.length);
  const global=all.filter(x=>!x.areas||!x.areas.length);
  const active=(x,m)=>x.segs.some(([a,b])=>a<=m&&b>=m);
  const shape=(x,cls)=>{const g=el("g",{class:cls,"data-go":x.rid,style:`--k:var(${KC[x.kind]})`});
    x.areas.forEach(([lon,lat,rx,ry])=>g.appendChild(el("ellipse",{cx:X(lon).toFixed(1),cy:Y(lat).toFixed(1),rx:Math.max(rx*K,7).toFixed(1),ry:Math.max(ry*K,7).toFixed(1)})));
    const t=el("title");t.textContent=x.name;g.appendChild(t);return g};

  let cur=NOWM;
  function month(m){
    cur=m;range.value=m;lab.textContent=lab2.textContent=mon(m);back.style.visibility=m===NOWM?"hidden":"";
    const v=D.nino34.values[m];nino.textContent=`Niño-3.4 ≈ ${v>0?"+":""}${v.toFixed(1)} °C${m>D.nino34.observedThrough?" (sketch)":""}`;
    document.querySelectorAll(".head .m").forEach(c=>c.classList.toggle("sel",+c.dataset.m===m));
    layers.zones.textContent="";
    const on=items.filter(x=>active(x,m)).sort((a,b)=>b.areas[0][2]*b.areas[0][3]-a.areas[0][2]*a.areas[0][3]);
    on.forEach(x=>layers.zones.appendChild(shape(x,"zone"+(m===NOWM?" now":""))));
    const g=global.filter(x=>active(x,m));
    cnt.textContent=on.length+g.length;
    const li=x=>`<li style="--k:var(${KC[x.kind]})"><button type="button" data-go="${x.rid}" data-rid="${x.rid}">${esc(x.name)}</button></li>`;
    list.innerHTML=on.map(li).join("")+(g.length?`<li class="sub">Global</li>`+g.map(li).join(""):"")+(on.length+g.length?"":`<li class="sub">Nothing on the calendar for this month.</li>`);
  }
  range.addEventListener("input",()=>month(+range.value));
  back.addEventListener("click",()=>month(NOWM));
  document.getElementById("grid").addEventListener("click",e=>{const c=e.target.closest(".head .m");if(c)month(+c.dataset.m)});

  // hover / focus link: timeline row or list entry -> outline on the map
  const show=rid=>{layers.hi.textContent="";const x=items.find(i=>i.rid===rid);if(x)layers.hi.appendChild(shape(x,"zone hi"));
    list.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.rid===rid))};
  const hide=()=>{layers.hi.textContent="";list.querySelectorAll("button.on").forEach(b=>b.classList.remove("on"))};
  document.querySelectorAll(".r.item").forEach(r=>{r.addEventListener("mouseenter",()=>show(r.dataset.rid));r.addEventListener("mouseleave",hide)});
  list.addEventListener("mouseover",e=>{const b=e.target.closest("button");if(b)show(b.dataset.rid)});
  list.addEventListener("focusin",e=>{const b=e.target.closest("button");if(b)show(b.dataset.rid)});
  list.addEventListener("mouseleave",hide);
  svg.addEventListener("mouseover",e=>{const z=e.target.closest(".zone");if(z&&!z.classList.contains("hi"))list.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.rid===z.dataset.go))});
  svg.addEventListener("mouseleave",hide);

  const open=e=>{const t=e.target.closest("[data-go]");if(!t)return;const c=document.getElementById(t.dataset.go);if(!c)return;
    c.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});c.classList.add("flash");setTimeout(()=>c.classList.remove("flash"),1600)};
  svg.addEventListener("click",open);list.addEventListener("click",open);
  month(NOWM);
}
})();
