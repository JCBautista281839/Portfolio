import { useEffect, useState } from 'react'
import '../styles/Loader.css'
import icon from '../assets/icon.png'

function Loader({ onDone }) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), 1600)
    const doneTimer = setTimeout(() => onDone?.(), 2200)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`loader${hiding ? ' loader--hide' : ''}`} aria-busy="true" aria-live="polite">
      <div className="loader-content">
        <img className="loader-icon" src={icon} alt="" />
        <p className="loader-name">Christian</p>
        <div className="loader-bar" aria-hidden="true">
          <span className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}

export default Loader
