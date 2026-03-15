'use client'
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Post from '../Post';
const postData = [
  {
    url: '/blog/how-ai-revolutionizes-data-analysis-unleashing-the-power-of-automation',
    src: '/images/blog_1.png',
    alt: 'Post',
    date: '07 Mar 2022',
    title: 'How AI Revolutionizes Data Analysis: Unleashing the Power of Automation',
  },
  {
    url: '/blog/field-visit-successfully-conducted-by-hexabax-team-across-punjab',
    src: '/images/blog_2.jpg',
    alt: 'Post',
    date: '10 Feb 2022',
    title: 'Field Visit Successfully Conducted by HexaBax Team Across Punjab',
  },
  {
    url: '/blog/strategies-for-effective-and-efficient-organizational-development-in-the-modern-era',
    src: '/images/blog_3.jpg',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'Strategies for Effective and Efficient Organizational Development in the Modern Era',
  }
];

export default function PostSlider() {
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
