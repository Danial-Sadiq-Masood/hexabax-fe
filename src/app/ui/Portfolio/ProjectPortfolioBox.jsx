import React from "react";
import Link from "next/link";
import Div from "../Div";
import Image from "next/image";

export default function ProjectPortfolioBox({
  href,
  title,
  subtitle,
  client,
  variant,
  partnerLogo,
  description,
  src,
}) {
  console.log(description, title);

  return (
    <Link
      href={href}
      className={`cs-portfolio cs-bg ${variant ? variant : "cs-style1"}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="w-full h-full p-6 bg-black/50 bg-blend-multiply bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url("${src}")` }}
        >
          <div className="flex flex-col gap-2 items-start text-white">
            {partnerLogo && <Image
              src={partnerLogo || "/images/adb.png"}
              alt="partner logo"
              width={40}
              height={40}
              className="h-[100px] w-auto object-cover rounded-xl"
            />}
            <h4 className="text-2xl mb-0">{title}</h4>
            <p className="text-xl font-bold mb-0 italic">Client : {client}</p>
            <p className="text line-clamp-3">{description}</p>
          </div>
        </Div>
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">Read More</h2>
          <Div className="cs-portfolio_subtitle">View Details</Div>
        </Div>
      </>
    </Link>
  );
}
