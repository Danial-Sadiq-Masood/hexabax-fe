"use client";
import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";

import aboutImg from "../../../public/images/service_management.jpg";

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        title="Services"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Services"
      />
      <Spacing lg="80" md="0" />
      <Div className="container">
        <Div className="grid gap-14 grid-cols-[60%_40%] grid-rows-1">
          <Div className="col-start-1 col-span-1 row-start-1 row-span-1">
            <SectionHeading
              title="Consulting Services That Drive Results"
              subtitle="About Our Services"
            >
              <Spacing lg="30" md="20" />
              <p className="text-[1.1rem] font-semibold text-white mb-4">
                At Hexabax, we deliver a comprehensive range of consulting
                services designed to help organizations navigate complexity and
                achieve sustainable growth. From strategy and operations to
                digital transformation and performance optimization, our
                solutions are tailored to address your unique challenges and
                opportunities
              </p>
              <p className="cs-m0 text-[1.1rem] font-semibold text-white">
                We combine industry insight with practical
                execution to drive measurable results, enabling your business to
                operate more efficiently, innovate confidently, and scale with
                clarity.
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
      <Spacing lg="150" md="0" />
      <Div className="cs-shape_wrap_4">
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Our Services"
                  subtitle="What Can We Do"
                  btnText=""
                  btnLink=""
                />
              </Div>
              <Div className="col-xl-8">
                <Div className="md:grid md:grid-cols-4 md:grid-rows-auto md:gap-3 flex flex-col gap-4">
                  <Div className="lg:col-start-2 lg:col-span-1 row-start-1 row-span-1 md:col-start-1 md:col-span-2 h-49">
                    <Card
                      title="Organizational Development"
                      link="/service/service-details"
                      src="/images/service_org.jpg"
                      alt="Service"
                    />
                  </Div>
                  <Div className="lg:col-start-4 lg:col-span-1 row-start-1 row-span-1 md:col-start-3 md:col-span-2 h-49">
                    <Card
                      title="Project Management"
                      link="/service/service-details"
                      src="/images/service_management.jpg"
                      alt="Service"
                    />
                  </Div>
                  <Div className="lg:col-start-1 lg:col-span-1 row-start-2 row-span-1 md:col-start-1 md:col-span-2 h-49">
                    <Card
                      title="Human Resource Management"
                      link="/service/service-details"
                      src="/images/service_hr.jpg"
                      alt="Service"
                    />
                  </Div>
                  <Div className="lg:col-start-3 lg:col-span-1 row-start-2 row-span-1 md:col-start-3 md:col-span-2 h-49">
                    <Card
                      title="Technology and Innovation"
                      link="/service/service-details"
                      src="/images/service_4.jpeg"
                      alt="Service"
                    />
                  </Div>
                  <Div className="lg:col-start-2 lg:col-span-1 row-start-3 row-span-1 md:col-start-1 md:col-span-2 h-49">
                    <Card
                      title="Trainings and Skills Development"
                      link="/service/service-details"
                      src="/images/service_training.jpg"
                      alt="Service"
                    />
                  </Div>
                  <Div className="lg:col-start-4 lg:col-span-1 row-start-3 row-span-1 md:col-start-3 md:col-span-2 h-49">
                    <Card
                      title="Research and Analysis"
                      link="/service/service-details"
                      src="/images/service_research.jpg"
                      alt="Service"
                    />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="125" md="55" />
      <TestimonialSlider />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Get in Touch with Us"
          btnText="Our Contact Information"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
