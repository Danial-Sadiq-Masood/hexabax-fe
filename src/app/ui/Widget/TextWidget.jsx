import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <img className="max-w-60" src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  )
}
