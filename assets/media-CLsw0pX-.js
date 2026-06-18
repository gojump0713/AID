import{d as a,n as r,i as o}from"./hero-HYbOcRqR.js";const i=(e,s="")=>`<span class="material-symbols-outlined ${s}" aria-hidden="true">${e}</span>`,t=[{id:"uTjDWV2m4Q8",title:"AI Native Campus로의 전환 : 대학 교육 인프라의 새로운 표준",desc:"AI Native Campus 전환의 방향성과 대학 교육 인프라의 새로운 표준을 소개하는 영상입니다.",watch:"https://www.youtube.com/watch?v=uTjDWV2m4Q8"}],n=e=>`
  <article class="media">
    <h2 class="media__title">${e.title}</h2>
    <div class="media__frame">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${e.id}?rel=0&modestbranding=1"
        title="${e.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
    <div class="media__meta">
      <p>${e.desc}</p>
      <a class="media__link" href="${e.watch}" target="_blank" rel="noopener noreferrer">
        ${i("open_in_new")} YouTube에서 보기
      </a>
    </div>
  </article>`,c=document.querySelector("#app");c.innerHTML=`
  ${r("media")}

  <header class="hero hero--intro hero--media">
    <canvas class="hero__canvas" aria-hidden="true"></canvas>
    <div class="container">
      <span class="eyebrow">${i("play_circle")} 배포 자료</span>
      <h1>AI Native Campus 전환 자료</h1>
      <p class="lead">
        2026 AID 영업 활동에 활용할 영상·발표 자료를 모아둔 공간입니다.
      </p>
    </div>
  </header>

  <main>
    <section class="section">
      <div class="container container--narrow">
        ${t.map(n).join("")}
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="container">
      <span>${a.org} · ${a.purpose}</span>
      <span>${a.disclaimer}</span>
    </div>
  </footer>
`;o(document.querySelector(".hero"));
