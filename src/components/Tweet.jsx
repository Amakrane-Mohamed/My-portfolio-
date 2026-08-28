import { useEffect, useState } from 'react'
import { Bookmark, Heart, MessageCircle, Repeat2, Share } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROFILE, QUOTE } from '../data'

const LIKE_KEY = 'med-tweet-like'
const BASE_LIKES = 24

export default function Tweet() {
  const [liked, setLiked] = useState(true)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LIKE_KEY)
      if (saved === '0') setLiked(false)
    } catch {
      /* ignore */
    }
  }, [])

  function toggleLike(event) {
    event.preventDefault()
    event.stopPropagation()
    setLiked((current) => {
      const next = !current
      try {
        window.localStorage.setItem(LIKE_KEY, next ? '1' : '0')
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const likes = BASE_LIKES + (liked ? 1 : 0)

  return (
    <article className="card tweet">
      <a className="tweet-top" href={QUOTE.href} target="_blank" rel="noopener noreferrer">
        <img className="tweet-avatar" src="/portrait.png" alt="" />
        <div className="tweet-who">
          <p className="tweet-name">{PROFILE.name}</p>
          <p className="tweet-handle">{QUOTE.handle}</p>
        </div>
        <span className="tweet-x" aria-hidden>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </span>
      </a>
      <blockquote className="tweet-quote">
        <p>“{QUOTE.text}”</p>
        {QUOTE.by ? <cite>{QUOTE.by}</cite> : null}
      </blockquote>
      <p className="tweet-time">{QUOTE.time}</p>
      <div className="tweet-actions">
        <span className="tweet-action" aria-hidden>
          <MessageCircle size={16} strokeWidth={2} />
        </span>
        <span className="tweet-action" aria-hidden>
          <Repeat2 size={16} strokeWidth={2} />
        </span>
        <button
          type="button"
          className={`tweet-like${liked ? ' liked' : ''}`}
          onClick={toggleLike}
          aria-pressed={liked}
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          <motion.span
            key={liked ? 'on' : 'off'}
            className="tweet-like-icon"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.45, duration: 0.35 }}
          >
            <Heart size={16} strokeWidth={2} fill={liked ? 'currentColor' : 'none'} />
          </motion.span>
          <span className="tweet-like-count">{likes}</span>
        </button>
        <span className="tweet-action" aria-hidden>
          <Bookmark size={16} strokeWidth={2} />
        </span>
        <span className="tweet-action" aria-hidden>
          <Share size={16} strokeWidth={2} />
        </span>
      </div>
    </article>
  )
}
