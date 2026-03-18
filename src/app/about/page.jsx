'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/HomeProjectSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/service_org.jpg'
import aboutImg2 from '../../../public/images/service_management.jpg'
import aboutImg3 from '../../../public/images/service_research.jpg'
import aboutImg4 from '../../../public/images/about.png'



const funfaceData = [
  {
    title: "Years of Experience",
    factNumber: "27",
  },
  {
    title: "Project Completed",
    factNumber: "50",
  },
  {
    title: "Team Members",
    factNumber: "20",
  },
  {
    title: "Client Worldwide",
    factNumber: "20",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="80" md="0" />
      <Div className="container">
        <Div className="grid gap-14 grid-cols-[60%_40%] grid-rows-1">
          <Div className="col-start-1 col-span-1 row-start-1 row-span-1">
            <SectionHeading
              title="We Promise High Quality Management Consultancy"
              subtitle="About Our Company"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0 text-[1.1rem] font-semibold text-white">
                At Hexabax, we are not just a management consultancy; we are your trusted partners in transforming your organization into a powerhouse of efficiency, innovation, and growth. With a deep-rooted commitment to excellence, we specialize in a comprehensive suite of services tailored to meet your unique needs.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-start2 col-span-1 row-start-1 row-span-1">
            <Image
              src={aboutImg}
              alt="About"
              className="h-full object-cover cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Company Highlights"
          subtitle="At Hexabax, we’re more than consultants—we’re your partners in driving efficiency, innovation, and growth, with tailored solutions built for your success."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-full cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Vision"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0 text-[1.1rem] font-semibold text-white">
                Our vision is to ascend to unicorn status, becoming a global powerhouse in management consultancy, recognized for our game-changing strategies and transformative impact on businesses. We aim to lead the industry by consistently delivering exceptional value, innovation, and growth.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
            <SectionHeading
              title="Mission"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0 text-[1.1rem] font-semibold text-white">
                We aspire to transform the landscape of management consultancy, propelling our firm towards unicorn status through relentless innovation, unrivaled expertise, and unparalleled client value. We are committed to nurturing our talented team, fostering a dynamic and inclusive work environment, and promoting personal and professional growth. In harmony with our dedication to sustainability, we aim to minimize our environmental footprint and contribute positively to the communities we serve.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Get in Touch with Us"
          btnText="Our Contact Information"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
