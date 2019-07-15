import React from 'react'

import './errorIndicator.css'
import icon from './error-star.png'

const ErrorIndicator = () => {

  return(
    <div className="error-indicator">
      <img src={icon} alt="error" />
      <h2 className="boom">BOOM!</h2>
      <p>Something has gone terribly wrong.</p>
      <p>(but we already sent droids to fix it.)</p>
    </div>
  )
}

export default ErrorIndicator