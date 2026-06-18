/* =========================================================================
   AID 2026 — 공통 상단 내비게이션
   active: 'home' | 'intro' | 'regions'
   ========================================================================= */
const sym = (n) => `<span class="material-symbols-outlined" aria-hidden="true">${n}</span>`

export function navHTML(active = 'intro') {
  return `
  <nav class="topnav">
    <div class="container topnav__in">
      <a class="topnav__brand" href="./index.html" aria-label="AID 2026 홈">
        ${sym('hub')}<span>AID <b>2026</b></span>
      </a>
      <div class="topnav__links">
        <a href="./index.html" class="${active === 'intro' ? 'is-active' : ''}">
          ${sym('description')} AID 사업소개
        </a>
        <a href="./regions.html" class="${active === 'regions' ? 'is-active' : ''}">
          ${sym('map')} 권역별 선정 현황
        </a>
      </div>
    </div>
  </nav>`
}
