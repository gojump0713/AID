/* =========================================================================
   AID 2026 — Interactive Korea region map (Vanilla SVG + JS)
   5개 권역 스키매틱 타일맵. 호버/선택 시 라이즈·글로우·펄스 효과.
   geographically schematic(정밀 행정경계 아님) — 보고용 권역 구분 목적.
   ========================================================================= */

// 권역 지오메트리 (viewBox 0 0 480 660 기준, 한반도 남부 근사 배치)
export const REGION_GEO = [
  {
    key: '수도권', short: '수도권', cx: 188, cy: 152,
    tiles: ['150,92 247,86 268,148 232,206 150,206 119,150'],
  },
  {
    key: '강원', short: '강원', cx: 338, cy: 174,
    tiles: ['282,92 392,118 408,210 346,246 286,200 276,138'],
  },
  {
    key: '충청', short: '충청', cx: 187, cy: 298,
    tiles: ['128,236 250,234 262,330 176,356 108,312 110,260'],
  },
  {
    key: '부산·울산·경남', short: '부울경', cx: 338, cy: 322,
    tiles: ['292,236 398,262 382,360 312,402 282,332 282,266'],
  },
  {
    key: '호남·제주', short: '호남·제주', cx: 180, cy: 420,
    tiles: [
      '118,346 250,360 246,456 180,498 120,456 104,390',     // 호남 본토
      '120,556 200,556 206,598 164,614 118,598',             // 제주
    ],
  },
];

const POLY = (pts, i) =>
  `<polygon class="region__tile" points="${pts}" style="--ti:${i}"></polygon>`;

/**
 * 지도를 렌더링하고 상호작용을 연결한다.
 * @param {HTMLElement} container
 * @param {Array} regions  data.regions (universities 포함)
 * @param {(key:string)=>void} onSelect
 * @returns {{ setActive:(key:string|null)=>void }}
 */
export function renderMap(container, regions, onSelect) {
  const countOf = (key) =>
    regions.find((r) => r.region === key)?.universities.length ?? 0;

  const groups = REGION_GEO.map((r) => {
    const n = countOf(r.key);
    return `
      <g class="region" data-region="${r.key}" tabindex="0" role="button"
         aria-label="${r.key} 선정대학 ${n}개 보기" style="--d:${REGION_GEO.indexOf(r) * 90}ms">
        ${r.tiles.map((p, i) => POLY(p, i)).join('')}
        <circle class="region__pulse" cx="${r.cx}" cy="${r.cy - 30}" r="5"></circle>
        <g class="region__label" transform="translate(${r.cx} ${r.cy})">
          <text class="region__name" text-anchor="middle" y="-3">${r.short}</text>
          <g transform="translate(0 18)">
            <rect class="region__badge" x="-26" y="-13" width="52" height="22" rx="11"></rect>
            <text class="region__count" text-anchor="middle" y="3">${n}개 단</text>
          </g>
        </g>
      </g>`;
  }).join('');

  container.innerHTML = `
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
      ${groups}
    </svg>`;

  const svg = container.querySelector('.kmap');
  let active = null;

  const setActive = (key) => {
    active = key;
    svg.querySelectorAll('.region').forEach((g) => {
      g.classList.toggle('is-active', g.dataset.region === key);
    });
  };

  svg.querySelectorAll('.region').forEach((g) => {
    const key = g.dataset.region;
    g.addEventListener('click', () => onSelect(key));
    g.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(key);
      }
    });
  });

  return { setActive };
}
