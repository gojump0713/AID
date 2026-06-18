/* =========================================================================
   AID 2026 — 영업 준비 보고 페이지 (entry)
   권역별 인터랙티브 지도 + 선정대학(사업단) 카드 보고
   ========================================================================= */

import data from './data/universities.json'
import { renderMap } from './map.js'
import { navHTML } from './nav.js'
import { partnersOf } from './partners.js'

const ALL = '전체'
const totalUniv = data.regions.reduce((s, r) => s + r.universities.length, 0)

const ic = (name, cls = '') =>
  `<span class="material-symbols-outlined ${cls}" aria-hidden="true">${name}</span>`

const typeClass = (t) => (t.includes('연합') ? 'union' : 'solo')
const regionByKey = (key) => data.regions.find((r) => r.region === key)

/* ----------------------------- 정적 셸 ----------------------------- */
// 출처 → 검색 기반 새 창(실제 기사 URL 미제공으로 검색 결과 페이지로 연결)
const sourceUrl = (u) =>
  'https://www.google.com/search?q=' + encodeURIComponent(`${u.name} ${u.source} AID 전문대학`)

const app = document.querySelector('#app')
app.innerHTML = `
  ${navHTML('regions')}
  <header class="hero">
    <div class="container">
      <span class="eyebrow">${ic('hub')} TILON · 영업 준비 보고</span>
      <h1>${data.program}</h1>
      <p class="lead">
        권역별 선정대학(사업단)의 비전·추진 방향을 정리하고,
        틸론 솔루션(${data.products.join(' · ')}) 관점의 영업 가설을 한 화면에서 살펴봅니다.
      </p>
      <div class="brandline">
        <span>${ic('calendar_month')} 사업기간 ${data.period}</span>
        <span>${ic('payments')} ${data.funding}</span>
        <span>${ic('school')} 선정 ${totalUniv}개 사업단 · ${data.regions.length}개 권역</span>
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
      <span>${data.org} · ${data.purpose}</span>
      <span>${data.disclaimer}</span>
    </div>
  </footer>
`

/* ----------------------------- 상태 ----------------------------- */
let active = ALL

/* ----------------------------- 탭 ----------------------------- */
const tabsEl = document.querySelector('#tabs')
tabsEl.innerHTML = [ALL, ...data.regions.map((r) => r.region)]
  .map((key) => {
    const n = key === ALL ? totalUniv : regionByKey(key).universities.length
    return `<button class="tab" data-region="${key}" type="button">
              <span>${key}</span><b>${n}</b>
            </button>`
  })
  .join('')

/* ----------------------------- 우측 패널 ----------------------------- */
const panelEl = document.querySelector('#panel')
function renderPanel(key) {
  if (key === ALL) {
    panelEl.innerHTML = `
      <div class="mappanel__empty">
        ${ic('touch_app', 'icon--primary')}
        <h3>권역을 선택하세요</h3>
        <p>전국 ${data.regions.length}개 권역 · ${totalUniv}개 사업단.<br>
        지도의 권역을 클릭하면 상세가 표시됩니다.</p>
        <ul class="legend">
          ${data.regions.map((r) =>
            `<li><span class="dot"></span>${r.region} <b>${r.universities.length}</b></li>`
          ).join('')}
        </ul>
      </div>`
    return
  }
  const r = regionByKey(key)
  const solo = r.universities.filter((u) => !u.type.includes('연합')).length
  const union = r.universities.length - solo
  const partners = partnersOf(key)
  panelEl.innerHTML = `
    <div class="mappanel__card">
      <span class="mappanel__kicker">${ic('place', 'icon--primary')} 선택 권역</span>
      <h3>${r.region}</h3>
      <p class="mappanel__sub">${r.subtitle}</p>
      ${partners.length ? `
      <div class="mappanel__partner">
        ${ic('handshake', 'icon--pos')}
        <span><b>영업 파트너</b> · ${partners.join(' · ')}</span>
      </div>` : ''}
      <div class="mappanel__stats">
        <div><b>${r.universities.length}</b><span>사업단</span></div>
        <div><b>${solo}</b><span>단독형</span></div>
        <div><b>${union}</b><span>연합형</span></div>
      </div>
      <ul class="mappanel__list">
        ${r.universities.map((u) => `
          <li>
            <span class="tag tag--${typeClass(u.type)}">${u.type}</span>
            <span class="mappanel__uname">${u.name}</span>
          </li>`).join('')}
      </ul>
    </div>`
}

/* ----------------------------- 카드 ----------------------------- */
const cardsEl = document.querySelector('#cards')

function cardHTML(u, regionKey) {
  const tc = typeClass(u.type)
  const partners = partnersOf(regionKey)
  return `
    <article class="ucard ucard--${tc}">
      <div class="ucard__top">
        <span class="tag tag--${tc}">${u.type}</span>
        <span class="ucard__region">${ic('place')} ${regionKey}</span>
      </div>
      <h3 class="ucard__name">${u.name}</h3>
      <blockquote class="ucard__vision">${ic('format_quote', 'icon--primary')}<span>${u.vision}</span></blockquote>
      <div class="ucard__cols">
        <div class="ucol">
          <h4>${ic('flag', 'icon--ink')} 주요 추진 방향</h4>
          <ul>${u.directions.map((d) => `<li>${ic('check', 'icon--pos')}<span>${d}</span></li>`).join('')}</ul>
        </div>
        <div class="ucol ucol--tilon">
          <h4>${ic('lightbulb', 'icon--primary')} 틸론 관점 제안</h4>
          <ul>${u.tilon.map((t) => `<li>${ic('chevron_right', 'icon--primary')}<span>${highlight(t)}</span></li>`).join('')}</ul>
        </div>
      </div>
      ${partners.length ? `
      <div class="ucard__partner" title="해당 권역 영업 파트너사">
        ${ic('handshake', 'icon--pos')}
        <span><b>영업 파트너</b> · ${partners.join(' · ')}</span>
      </div>` : ''}
      <a class="ucard__src" href="${sourceUrl(u)}" target="_blank" rel="noopener noreferrer"
         title="출처 자료를 새 창에서 열기">
        ${ic('open_in_new')} 출처 · ${u.source}
      </a>
    </article>`
}

// 틸론 제품/핵심 키워드 강조
const KEYWORDS = ['iStation', 'Dstation', 'DaaS', 'CAS', 'GPU Slicing', 'GPU', 'Sovereign', 'VDI', 'NEW-W', '멀티테넌시']
function highlight(text) {
  let out = text
  for (const k of KEYWORDS) {
    out = out.replace(new RegExp(`(${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g'), '<mark>$1</mark>')
  }
  // ★ 표시(전략 포인트) 강조
  out = out.replace(/★/g, '<span class="star">★</span>')
  return out
}

function renderCards(key) {
  const list =
    key === ALL
      ? data.regions.flatMap((r) => r.universities.map((u) => ({ u, key: r.region })))
      : regionByKey(key).universities.map((u) => ({ u, key }))
  cardsEl.innerHTML = list.map(({ u, key }, i) =>
    `<div class="cardslot" style="--i:${i}">${cardHTML(u, key)}</div>`
  ).join('')
}

/* ----------------------------- 동기화 ----------------------------- */
const map = renderMap(document.querySelector('#map'), data.regions, (key) => {
  select(active === key ? ALL : key) // 같은 권역 재클릭 시 전체로 토글
})

function select(key) {
  active = key
  tabsEl.querySelectorAll('.tab').forEach((b) =>
    b.classList.toggle('is-active', b.dataset.region === key)
  )
  map.setActive(key === ALL ? null : key)
  renderPanel(key)
  renderCards(key)
}

tabsEl.querySelectorAll('.tab').forEach((b) =>
  b.addEventListener('click', () => select(b.dataset.region))
)

/* 초기 상태 */
select(ALL)

console.info('[AID] report ready —', data.regions.length, 'regions /', totalUniv, 'universities')
