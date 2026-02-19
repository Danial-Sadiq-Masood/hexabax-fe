"use client";
import { Icon } from "@iconify/react";
import React from "react";
import Slider from "react-slick";
import Div from "../Div";
import Team from "../Team";
const teamData = [
  {
    memberImage: "/images/member_1.jpeg",
    memberName: "Consultancy for Development of Centers of Excellence (COEs)",
    memberDesignation:
      "Hexabax is transforming TVET institutes into industry-aligned Centers of Excellence through governance reform, capacity development, and modern service delivery models.",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_2.jpeg",
    memberName: "Business & Operational Models",
    memberDesignation:
      "Development of Business & Operational Models for operators and regulators of Water Supply, Wastewater, and Solid Waste Management services in 2 cities of Punjab province.",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  },
  {
    memberImage: "/images/member_1.jpeg",
    memberName: "Consultancy for Development of Centers of Excellence (COEs)",
    memberDesignation:
      "Hexabax is transforming TVET institutes into industry-aligned Centers of Excellence through governance reform, capacity development, and modern service delivery models.",
    memberSocial: {
      linkedin: "/",
      twitter: "/",
      youtube: "/",
      facebook: "/",
    },
  }
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
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={{}}
          />
        </Div>
      ))}
    </Slider>
  );
}
