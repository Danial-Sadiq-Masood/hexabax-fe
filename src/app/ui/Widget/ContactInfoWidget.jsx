import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title, email, phone, address}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        {phone && <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          {phone}
        </li>}
        {email && <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          {email}
        </li>}
        {address && <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          {address}
        </li>}
      </ul>
    </>
  )
}
