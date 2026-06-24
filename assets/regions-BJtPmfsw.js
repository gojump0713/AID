import{d as a,n as b,i as k}from"./hero-HYbOcRqR.js";const m=[{key:"수도권",short:"수도권",cx:188,cy:152,tiles:["150,92 247,86 268,148 232,206 150,206 119,150"]},{key:"강원",short:"강원",cx:338,cy:174,tiles:["282,92 392,118 408,210 346,246 286,200 276,138"]},{key:"충청",short:"충청",cx:187,cy:298,tiles:["128,236 250,234 262,330 176,356 108,312 110,260"]},{key:"부산·울산·경남",short:"부울경",cx:338,cy:322,tiles:["292,236 398,262 382,360 312,402 282,332 282,266"]},{key:"호남·제주",short:"호남·제주",cx:180,cy:420,tiles:["118,346 250,360 246,456 180,498 120,456 104,390","120,556 200,556 206,598 164,614 118,598"]}],x=(e,s)=>`<polygon class="region__tile" points="${e}" style="--ti:${s}"></polygon>`;function S(e,s,n){const r=t=>{var c;return((c=s.find(p=>p.region===t))==null?void 0:c.universities.length)??0},o=m.map(t=>{const c=r(t.key);return`
      <g class="region" data-region="${t.key}" tabindex="0" role="button"
         aria-label="${t.key} 선정대학 ${c}개 보기" style="--d:${m.indexOf(t)*90}ms">
        ${t.tiles.map((p,f)=>x(p,f)).join("")}
        <circle class="region__pulse" cx="${t.cx}" cy="${t.cy-30}" r="5"></circle>
        <g class="region__label" transform="translate(${t.cx} ${t.cy})">
          <text class="region__name" text-anchor="middle" y="-3">${t.short}</text>
          <g transform="translate(0 18)">
            <rect class="region__badge" x="-26" y="-13" width="52" height="22" rx="11"></rect>
            <text class="region__count" text-anchor="middle" y="3">${c}개 단</text>
          </g>
        </g>
      </g>`}).join("");e.innerHTML=`
    <svg class="kmap" viewBox="0 0 480 660" role="img"
         aria-label="2026 AID 선정대학 권역 지도">
      <defs>
        <filter id="kglow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="kgrid" cx="50%" cy="32%" r="75%">
          <stop offset="0%" stop-color="#16406f" stop-opacity="0.10"/>
          <stop offset="100%" stop-color="#16406f" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="480" height="660" fill="url(#kgrid)"/>
      ${o}
    </svg>`;const u=e.querySelector(".kmap"),_=t=>{u.querySelectorAll(".region").forEach(c=>{c.classList.toggle("is-active",c.dataset.region===t)})};return u.querySelectorAll(".region").forEach(t=>{const c=t.dataset.region;t.addEventListener("click",()=>n(c)),t.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),n(c))})}),{setActive:_}}const l="전체",d=a.regions.reduce((e,s)=>e+s.universities.length,0),i=(e,s="")=>`<span class="material-symbols-outlined ${s}" aria-hidden="true">${e}</span>`,$=e=>e.includes("연합")?"union":"solo",h=e=>a.regions.find(s=>s.region===e),L={경민대:"https://www.e-newsp.com/news/article.html?no=87623",경복대:"https://www.dhnews.co.kr/news/view/1065588838086535",대림대:"https://www.korea.kr/news/policyNewsView.do?newsId=148964229",청강문화산업대:"https://www.peoplenews.kr/bbs/board.php?bo_table=news&wr_id=30301",연성대:"https://www.koreadaily.com/article/20260526000031450",유한대:"https://www.wooriilbo.com/news/article.html?no=100443",강원도립대:"https://biz.heraldcorp.com/article/10738386",한림성심대:"https://news.nate.com/view/20260511n25965",충북보건과학대:"https://www.inews365.com/news/article.html?no=918790",대전보건대:"https://www.koreaeaglenews.com/news/articleView.html?idxno=100030",연암대:"https://www.naeponews.co.kr/news/articleView.html?idxno=57259",동의과학대:"https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260513.99099003449",연암공과대:"https://www.gnnews.co.kr/news/articleView.html?idxno=636769",울산과학대:"https://www.news1.kr/society/education/6160949",경남정보대:"https://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0300&key=20260511.99099002580",순천제일대:"https://www.jeonmae.co.kr/news/articleView.html?idxno=1255593",전주비전대:"https://news.tf.co.kr/read/releasecopy/2321333.htm",제주한라대:"http://www.jeollailbo.com/news/articleView.html?idxno=800078"},E=e=>{for(const[s,n]of Object.entries(L))if(e.name.includes(s))return n;return"https://www.google.com/search?q="+encodeURIComponent(`${e.name} ${e.source} AID 전문대학`)},q=document.querySelector("#app");q.innerHTML=`
  ${b("regions")}
  <header class="hero">
    <canvas class="hero__canvas" aria-hidden="true"></canvas>
    <div class="container">
      <span class="eyebrow">${i("hub")} TILON · 영업 준비 보고</span>
      <h1>${a.program.replace("전환 중점","전환<br>중점")}</h1>
      <p class="lead">
        권역별 선정대학(사업단)의 비전·추진 방향을 정리하고,
        틸론 솔루션(${a.products.join(" · ")}) 관점의 영업 가설을 한 화면에서 살펴봅니다.
      </p>
      <div class="brandline">
        <span>${i("calendar_month")} 사업기간 ${a.period}</span>
        <span>${i("payments")} ${a.funding}</span>
        <span>${i("school")} 선정 ${d}개 사업단 · ${a.regions.length}개 권역</span>
      </div>
    </div>
  </header>

  <main>
    <!-- 권역 지도 -->
    <section class="section section--map" id="regions">
      <div class="container">
        <div class="section__head">
          <h2>권역별 선정 현황</h2>
          <p>지도에서 권역을 선택하면 해당 권역의 선정대학과 틸론 관점이 아래에 표시됩니다.</p>
        </div>
        <div class="mapwrap">
          <div class="mapwrap__map" id="map"></div>
          <aside class="mappanel" id="panel"></aside>
        </div>
      </div>
    </section>

    <!-- 대학 카드 -->
    <section class="section section--cards">
      <div class="container">
        <div class="tabs" id="tabs"></div>
        <div class="cards" id="cards"></div>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="container">
      <span>${a.org} · ${a.purpose}</span>
      <span>${a.disclaimer}</span>
    </div>
  </footer>
`;let y=l;const w=document.querySelector("#tabs");w.innerHTML=[l,...a.regions.map(e=>e.region)].map(e=>{const s=e===l?d:h(e).universities.length;return`<button class="tab" data-region="${e}" type="button">
              <span>${e}</span><b>${s}</b>
            </button>`}).join("");const v=document.querySelector("#panel");function j(e){if(e===l){v.innerHTML=`
      <div class="mappanel__empty">
        ${i("touch_app","icon--primary")}
        <h3>권역을 선택하세요</h3>
        <p>전국 ${a.regions.length}개 권역 · ${d}개 사업단.<br>
        지도의 권역을 클릭하면 상세가 표시됩니다.</p>
        <ul class="legend">
          ${a.regions.map(o=>`<li><span class="dot"></span>${o.region} <b>${o.universities.length}</b></li>`).join("")}
        </ul>
      </div>`;return}const s=h(e),n=s.universities.filter(o=>!o.type.includes("연합")).length,r=s.universities.length-n;v.innerHTML=`
    <div class="mappanel__card">
      <span class="mappanel__kicker">${i("place","icon--primary")} 선택 권역</span>
      <h3>${s.region}</h3>
      <p class="mappanel__sub">${s.subtitle}</p>
      <div class="mappanel__stats">
        <div><b>${s.universities.length}</b><span>사업단</span></div>
        <div><b>${n}</b><span>단독형</span></div>
        <div><b>${r}</b><span>연합형</span></div>
      </div>
      <ul class="mappanel__list">
        ${s.universities.map(o=>`
          <li>
            <span class="tag tag--${$(o.type)}">${o.type}</span>
            <span class="mappanel__uname">${o.name}</span>
          </li>`).join("")}
      </ul>
    </div>`}const M=document.querySelector("#cards");function A(e,s){const n=$(e.type);return`
    <article class="ucard ucard--${n}">
      <div class="ucard__top">
        <span class="tag tag--${n}">${e.type}</span>
        <span class="ucard__region">${i("place")} ${s}</span>
      </div>
      <h3 class="ucard__name">${e.name}</h3>
      <blockquote class="ucard__vision">${i("format_quote","icon--primary")}<span>${e.vision}</span></blockquote>
      <div class="ucard__cols">
        <div class="ucol">
          <h4>${i("flag","icon--ink")} 주요 추진 방향</h4>
          <ul>${e.directions.map(r=>`<li>${i("check","icon--pos")}<span>${r}</span></li>`).join("")}</ul>
        </div>
        <div class="ucol ucol--tilon">
          <h4>${i("lightbulb","icon--primary")} 틸론 관점 제안</h4>
          <ul>${e.tilon.map(r=>`<li>${i("chevron_right","icon--primary")}<span>${H(r)}</span></li>`).join("")}</ul>
        </div>
      </div>
      <a class="ucard__src" href="${E(e)}" target="_blank" rel="noopener noreferrer"
         title="출처 자료를 새 창에서 열기">
        ${i("open_in_new")} 출처 · ${e.source}
      </a>
    </article>`}const D=["iStation","Dstation","DaaS","CAS","GPU Slicing","GPU","Sovereign","VDI","NEW-W","멀티테넌시"];function H(e){let s=e;for(const n of D)s=s.replace(new RegExp(`(${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"g"),"<mark>$1</mark>");return s=s.replace(/★/g,'<span class="star">★</span>'),s}function O(e){const s=e===l?a.regions.flatMap(n=>n.universities.map(r=>({u:r,key:n.region}))):h(e).universities.map(n=>({u:n,key:e}));M.innerHTML=s.map(({u:n,key:r},o)=>`<div class="cardslot" style="--i:${o}">${A(n,r)}</div>`).join("")}const T=S(document.querySelector("#map"),a.regions,e=>{g(y===e?l:e)});function g(e){y=e,w.querySelectorAll(".tab").forEach(s=>s.classList.toggle("is-active",s.dataset.region===e)),T.setActive(e===l?null:e),j(e),O(e)}w.querySelectorAll(".tab").forEach(e=>e.addEventListener("click",()=>g(e.dataset.region)));g(l);k(document.querySelector(".hero"));console.info("[AID] report ready —",a.regions.length,"regions /",d,"universities");
