import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectDetail({ app, onClose }) {
  return (
    <AnimatePresence>
      {app && (
        <motion.div
          className="sheet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
        >
          <motion.div
            className="sheet-card"
            initial={{ y: 36, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 28, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.14, duration: 0.45 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sheet-top">
              <img className="sheet-icon" src={app.icon} alt="" />
              <div>
                <h2>{app.name}</h2>
                <p>
                  {[app.category, app.platform, app.client, app.rating && `⭐ ${app.rating}`]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </div>
            </div>
            {app.stack?.length ? (
              <div className="stack-pills">
                {app.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
            <p className="sheet-about">{app.about}</p>
            <a className="store" href={app.store} target="_blank" rel="noopener noreferrer">
              View on the App Store
            </a>
            <button type="button" className="close" onClick={onClose}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
