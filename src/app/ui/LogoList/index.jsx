import React from "react";
import Div from "../Div";

const partnerLogos = [
  {
    src: "/images/partner_pha.png",
    alt: "Partner",
  },
  {
    src: "/images/partner_pessi.png",
    alt: "Partner",
  },
  {
    src: "/images/partner_zad.png",
    alt: "Partner",
  },
  {
    src: "/images/partner_cromwell.png",
    alt: "Partner",
  },
  {
    src: "/images/partner_unicef.png",
    alt: "Partner",
  },
  {
    src: "/images/partner_undp.png",
    alt: "Partner",
  }
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo h-40 rounded-2xl overflow-clip p-3 bg-white" key={index}>
          <>
            <img src={partnerLogo.src} alt={partnerLogo.alt} className="h-full w-auto" />
            <Div className="cs-card_overlay" />
          </>
        </div>
      ))}
    </Div>
  );
}
