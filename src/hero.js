/* =========================================================================
   AID 2026 — Hero canvas (AI·Digital 네트워크 파티클)
   노드/연결선 + 마우스 인터랙션. 감성적·정제된 블루 톤.
   prefers-reduced-motion 존중. O(n²) 라인이지만 노드 수 캡으로 가벼움.
   ========================================================================= */

const LINK_DIST = 132
const LINE_RGB = '122, 150, 255'   // royal-ish
const DOT_RGBA = 'rgba(184, 202, 255, 0.85)'

export function initHeroCanvas(root) {
  if (!root) return
  const canvas = root.querySelector('.hero__canvas')
  if (!canvas) return
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

  const ctx = canvas.getContext('2d')
  let w = 0, h = 0, dpr = 1, nodes = [], raf = 0, running = true
  const mouse = { x: -9999, y: -9999 }

  function build() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = root.clientWidth
    h = root.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const count = Math.round(Math.min(96, Math.max(34, (w * h) / 13000)))
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.34,
      vy: (Math.random() - 0.5) * 0.34,
      r: Math.random() * 1.5 + 0.7,
    }))
  }

  function frame() {
    if (!running) return
    ctx.clearRect(0, 0, w, h)

    for (const n of nodes) {
      n.x += n.vx
      n.y += n.vy
      if (n.x < 0 || n.x > w) n.vx *= -1
      if (n.y < 0 || n.y > h) n.vy *= -1
      // 마우스 부드러운 반응
      const dx = n.x - mouse.x, dy = n.y - mouse.y
      const d = Math.hypot(dx, dy)
      if (d < 130 && d > 0.001) { n.x += (dx / d) * 0.45; n.y += (dy / d) * 0.45 }
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j]
        const dist = Math.hypot(a.x - b.x, a.y - b.y)
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(${LINE_RGB}, ${(1 - dist / LINK_DIST) * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    ctx.fillStyle = DOT_RGBA
    for (const n of nodes) {
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
      ctx.fill()
    }

    raf = requestAnimationFrame(frame)
  }

  function start() { running = true; cancelAnimationFrame(raf); frame() }
  function stop() { running = false; cancelAnimationFrame(raf) }

  build()
  start()

  let t
  window.addEventListener('resize', () => {
    clearTimeout(t)
    t = setTimeout(() => { build() }, 150)
  })
  root.addEventListener('pointermove', (e) => {
    const r = root.getBoundingClientRect()
    mouse.x = e.clientX - r.left
    mouse.y = e.clientY - r.top
  })
  root.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999 })
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stop() : start()
  })
}
