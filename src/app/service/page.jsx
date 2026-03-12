"use client";
import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        title="Services"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Services"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Our Services"
                  subtitle="What Can We Do"
                  btnText="See All Services"
                  btnLink="/service"
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
