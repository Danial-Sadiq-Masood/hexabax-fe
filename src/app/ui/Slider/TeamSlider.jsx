"use client";
import { Icon } from "@iconify/react";
import React from "react";
import Slider from "react-slick";
import Div from "../Div";
import Team from "../Team";
import Portfolio from "../Portfolio";

const portfolioData = [
  {
    title: "Consultancy for Development of Centers of Excellence (COEs)",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/Data-Analytics.png",
    category: "ui_ux_design",
    partnerLogo: "/images/adb.png",
    description:
      "Hexabax is transforming TVET institutes into industry-aligned Centers of Excellence through governance reform, capacity development, and modern service delivery models.",
  },
  {
    title: "Business & Operational Models",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/development.png",
    partnerLogo: "/images/adb.png",
    category: "logo_design",
    description:
      "Development of Business & Operational Models for operators and regulators of Water Supply, Wastewater, and Solid Waste Management services in 2 cities of Punjab province.",
  },
  {
    title: "Consultancy for Development of Centers of Excellence (COEs)",
    subtitle: "See Details",
    partnerLogo: "/images/undp.png",
    href: "/portfolio/portfolio-details",
    src: "/images/undp.jpg",
    category: "web_design",
    description:
      "Hexabax is transforming TVET institutes into industry-aligned Centers of Excellence through governance reform, capacity development, and modern service delivery models.",
  },
];

export default function TeamSlider() {
  /** Team Member Data **/

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            {...item}
            variant="cs-style1 cs-type1"
          />
        </Div>
      ))}
    </Slider>
  );
}
