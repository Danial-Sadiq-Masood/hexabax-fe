import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";

const copyrightLinks = [
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];

const serviceMenu = [
  {
    title: "UI/UX design",
    href: "/service/service-details",
  },
  {
    title: "WP development",
    href: "/service/service-details",
  },
  {
    title: "Digital marketing",
    href: "/service/service-details",
  },
  {
    title: "React development",
    href: "/service/service-details",
  },
];

const addresses = [
  {
    title: "UK Office",
    address: "Flat 2, 187-189 Harwoods Road Watford WD18 7RP",
  },
  {
    title: "USA Office",
    address: "US 34 Sedmont Cir Smyrna, DE 19977 United States",
  },
  {
    title: "Pakistan Office",
    address: "Kickstart, MM Alam road, Gulberg III, Lahore",
  },
  {
    title: "UAE Office",
    address: "Opal Tower - Office 1308 - Dubai - United Arab Emirates",
  },
  {
    title: "Turkey Office",
    address: "Güzeltepe, Ahmet Rasim Sk. No:14, 06690 Çankaya/Ankara, Türkiye",
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="flex gap-3 md:flex-row flex-col">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/hexabax-logo-white-1.png"
                  logoAlt="Logo"
                  text=""
                />
                <SocialWidget />
              </Div>
            </Div>
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-auto gap-4">
              {addresses.map((item, index) => (
                <Div className="cs-footer_item" key={index}>
                  <ContactInfoWidget
                    withIcon
                    title={item.title}
                    address={item.address}
                  />
                </Div>
              ))}
            </div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © {`${date}`} Hexabax.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
