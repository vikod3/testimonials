import { Fragment, useEffect, useRef } from 'react'
import './Testimonials.css'
import portrait from './assets/testimonials/portratitnew.png'
import quoteIcon from './assets/image-removebg-preview.png'

const cfg = {
  tLeft: 'translate(-2px, -34px) scale(0.95)',
  tStats: 'translate(4px, -24px) scale(0.7)',
  tViewMore: 'translate(4px, -20px) scale(0.85)',
  tQuote1: 'translate(0px, 0px) scale(0.9)',
  tQuote2: 'translate(0px, 0px) scale(0.9)',
  wEyebrow: 600,
  wHeadline: 400,
  wSubtext: 400,
  wStatLabel: 600,
  wStatNum: 400,
  wStatSub: 300,
  wQuote: 500,
  wName: 500,
  wRole: 500,
  wViewMore: 400,
  imgSize: 390,
  imgX: -29,
  imgY: 0,
}

const glow = '0 0 8px rgba(238,122,24,0.45)'

export default function Testimonials() {
  const frameRef = useRef(null)
  const portraitRef = useRef(null)

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768
    const fit = () => {
      if (isMobile()) {
        if (frameRef.current) frameRef.current.style.transform = ''
        if (portraitRef.current) {
          portraitRef.current.style.width = ''
          portraitRef.current.style.backgroundSize = ''
          portraitRef.current.style.backgroundPosition = ''
        }
        return
      }
      const s = window.innerHeight / 675
      if (frameRef.current) {
        frameRef.current.style.transform = `scale(${s})`
      }
      const p = portraitRef.current
      if (p) {
        p.style.width = `${362 * s}px`
        p.style.backgroundSize = `${cfg.imgSize * s}px auto`
        p.style.backgroundPosition = `${cfg.imgX * s}px ${cfg.imgY * s}px`
      }
    }
    window.addEventListener('resize', fit)
    fit()
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div className="testimonials-root">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="quote-recolor" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feFlood floodColor="#d0c1ba" result="color" />
            <feComposite in="color" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Portrait image */}
      <div
        ref={portraitRef}
        className="testimonials-portrait"
        style={{
          backgroundImage: `url(${portrait})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${cfg.imgSize}px auto`,
          backgroundPosition: `${cfg.imgX}px ${cfg.imgY}px`,
        }}
      />

      {/* Main content frame */}
      <div className="testimonials-frame-wrapper">
        <div
          ref={frameRef}
          className="testimonials-frame"
        >
          {/* subtle vertical seam */}
          <div className="testimonials-seam" />

          {/* ===== LEFT COLUMN ===== */}
          <div className="testimonials-left">
            <div className="testimonials-eyebrow">
              TESTIMONIALS&nbsp;&nbsp;/&nbsp;&nbsp;RESULTS
            </div>
            <h1 className="testimonials-headline">
              Real impact.
              <br />
              Trusted by builders.
            </h1>
            <p className="testimonials-subtext">
              We partner with forward-thinking teams to deliver AI products that
              perform.
            </p>
          </div>

          {/* stats */}
          <div className="testimonials-stats">
            {[
              { label: 'TIME TO VALUE', num: '3.2x', sub: 'faster' },
              { label: 'MODEL ACCURACY', num: '+21%', sub: 'average lift' },
            ].map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className="testimonials-stat-divider" />}
                <div className="testimonials-stat">
                  <div className="testimonials-stat-label-row">
                    <span className="testimonials-stat-dot" />
                    <span className="testimonials-stat-label">{stat.label}</span>
                  </div>
                  <div className="testimonials-stat-num">{stat.num}</div>
                  <div className="testimonials-stat-sub">{stat.sub}</div>
                </div>
              </Fragment>
            ))}
          </div>

          {/* view more */}
          <div className="testimonials-view-more">
            <span className="testimonials-view-more-circle">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H5.5M12 4V10.5"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="testimonials-view-more-text">
              View more case studies
            </span>
          </div>

          {/* ===== QUOTES COLUMN ===== */}
          <div className="testimonials-quotes">
            <div className="testimonials-quote">
              <img
                src={quoteIcon}
                alt=""
                className="testimonials-quote-icon"
              />
              <p className="testimonials-quote-text">
                Nexora helped us go from prototype to production in record time. The
                results speak for themselves.
              </p>
              <div className="testimonials-quote-bar" />
              <div className="testimonials-quote-name">Emily Park</div>
              <div className="testimonials-quote-role">Head of Product, Altura</div>
            </div>

            <div className="testimonials-quote-separator" />

            <div className="testimonials-quote">
              <img
                src={quoteIcon}
                alt=""
                className="testimonials-quote-icon"
              />
              <p className="testimonials-quote-text">
                Their team combines deep AI expertise with a product mindset. A true
                partner.
              </p>
              <div className="testimonials-quote-bar" />
              <div className="testimonials-quote-name">Daniel Kim</div>
              <div className="testimonials-quote-role">CTO, Veridian</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
