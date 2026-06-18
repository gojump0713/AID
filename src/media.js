/* =========================================================================
   AID 2026 — 배포 자료 페이지
   AI Native Campus 전환 영상(유튜브) 임베드.
   ========================================================================= */

import data from './data/universities.json'
import { navHTML } from './nav.js'
import { initHeroCanvas } from './hero.js'

const ic = (n, c = '') => `<span class="material-symbols-outlined ${c}" aria-hidden="true">${n}</span>`

// 배포 자료 목록 (추후 추가 가능하도록 배열 구조)
const MEDIA = [
  {
    id: 'uTjDWV2m4Q8',
    title: 'AI Native Campus로의 전환 : 대학 교육 인프라의 새로운 표준',
    desc: 'AI Native Campus 전환의 방향성과 대학 교육 인프라의 새로운 표준을 소개하는 영상입니다.',
    watch: 'https://www.youtube.com/watch?v=uTjDWV2m4Q8',
  },
]

const embedHTML = (m) => `
  <article class="media">
    <h2 class="media__title">${m.title}</h2>
    <div class="media__frame">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${m.id}?rel=0&modestbranding=1"
        title="${m.title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
    <div class="media__meta">
      <p>${m.desc}</p>
      <a class="media__link" href="${m.watch}" target="_blank" rel="noopener noreferrer">
        ${ic('open_in_new')} YouTube에서 보기
      </a>
    </div>
  </article>`

const app = document.querySelector('#app')
app.innerHTML = `
  ${navHTML('media')}

  <header class="hero hero--intro hero--media">
    <canvas class="hero__canvas" aria-hidden="true"></canvas>
    <div class="container">
      <span class="eyebrow">${ic('play_circle')} 배포 자료</span>
      <h1>AI Native Campus 전환 자료</h1>
      <p class="lead">
        2026 AID 영업 활동에 활용할 영상·발표 자료를 모아둔 공간입니다.
      </p>
    </div>
  </header>

  <main>
    <section class="section">
      <div class="container container--narrow">
        ${MEDIA.map(embedHTML).join('')}
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="container">
      <span>${data.org} · ${data.purpose}</span>
      <span>${data.disclaimer}</span>
    </div>
  </footer>
`

initHeroCanvas(document.querySelector('.hero'))
