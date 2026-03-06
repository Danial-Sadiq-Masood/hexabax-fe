import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import { MdErrorOutline } from "react-icons/md";

export default function IconBox({ title, subtitle, Icon }) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon flex justify-center">
        {Icon && <Icon className='text-6xl text-(--accent)'/>}
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );
}
