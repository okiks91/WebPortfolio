import { useCallback, useEffect, useRef, useState } from 'react'

// Swipeable + clickable carousel.
// Supports: touch swipe, mouse drag, arrows, dots, keyboard, click-to-zoom lightbox.
export default function ImageCarousel({ images, projectTitle }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const touchStartX = useRef(null)
  const dragStartX = useRef(null)
  const trackRef = useRef(null)
  const total = images.length

  const goTo = useCallback(
    (i) => setIndex(((i % total) + total) % total),
    [total]
  )
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
    touchStartX.current = null
  }

  // Mouse drag (desktop swipe)
  const onMouseDown = (e) => {
    dragStartX.current = e.clientX
  }
  const onMouseUp = (e) => {
    if (dragStartX.current == null) return
    const dx = e.clientX - dragStartX.current
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
    dragStartX.current = null
  }

  const renderSlide = (img, i, zoomable) => {
    if (img.src) {
      return (
        <img
          src={img.src}
          alt={`${projectTitle} — ${img.caption}`}
          draggable={false}
          onClick={zoomable ? () => setLightbox(true) : undefined}
          style={zoomable ? { cursor: 'zoom-in' } : undefined}
        />
      )
    }
    return (
      <div
        className={`placeholder-slide p${(i % 4) + 1}`}
        onClick={zoomable ? () => setLightbox(true) : undefined}
        style={zoomable ? { cursor: 'zoom-in' } : undefined}
        role="img"
        aria-label={`${projectTitle} — ${img.caption} (placeholder)`}
      >
        <div className="ph-badge">
          {i + 1} / {total}
        </div>
        <div className="ph-title">{img.caption}</div>
        <div className="ph-hint">
          Add your screenshot at
          <br />
          <code>public/screenshots/…</code>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel">
      <div
        className="carousel-viewport"
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="carousel-slide" key={i}>
              {renderSlide(img, i, true)}
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button className="car-btn prev" onClick={prev} aria-label="Previous screenshot">
              ‹
            </button>
            <button className="car-btn next" onClick={next} aria-label="Next screenshot">
              ›
            </button>
            <div className="car-counter">
              {index + 1} / {total}
            </div>
          </>
        )}
      </div>

      <div className="car-caption">{images[index]?.caption}</div>

      {total > 1 && (
        <div className="car-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot${i === index ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
      <div className="car-hint">Swipe or use ‹ › to browse · click image to enlarge</div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <button className="lb-close" aria-label="Close">✕</button>
          {total > 1 && (
            <>
              <button
                className="lb-nav prev"
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); prev() }}
              >
                ‹
              </button>
              <button
                className="lb-nav next"
                aria-label="Next"
                onClick={(e) => { e.stopPropagation(); next() }}
              >
                ›
              </button>
            </>
          )}
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            {renderSlide(images[index], index, false)}
            <div className="lb-caption">
              {projectTitle} — {images[index]?.caption} ({index + 1}/{total})
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
