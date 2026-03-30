import Accordion from "@/app/ui/Accordion";
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import IconBox from "@/app/ui/IconBox";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";

import { servicesData } from "@/assets/data/services-data";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((d) => ({
    serviceDetailsId: d,
  }));
}

export default async function ServiceDetailsPage({ params }) {
  const pageId = params["serviceDetailsId"];

  const data = servicesData[pageId];

  if (!data) {
    return notFound();
  }

  return (
    <>
      <PageHeading
        title="Services"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="ORGANIZATIONAL-DEVELOPMENT"
      />
      
      <Div className="container">
        <Div className="flex flex-col lg:grid gap-14 grid-cols-[60%_40%] grid-rows-1">
          <Div className="col-start-1 col-span-1 row-start-1 row-span-1 pr-10">
            <SectionHeading title={data.heading} subtitle="Service Details">
              
              {data.details.map((para, index) => (
                <p
                  className="text-[1.1rem] font-semibold text-white mb-4"
                  key={index}
                >
                  {para}
                </p>
              ))}
              
              <Div className="cs-separator cs-accent_bg"></Div>
              
            </SectionHeading>
          </Div>
          <Div className="md:max-w-[50%] lg:max-w-full col-start2 col-span-1 row-start-1 row-span-1">
            <Image
              src={data.image}
              alt="About"
              className="h-[80%] object-cover cs-radius_15"
            />
            
          </Div>
        </Div>
      </Div>
      {/*
      
      <Div className="container">
        <Div className="flex gap-5">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src={data.image}
                alt={data.heading}
                className="cs-radius_15 w-full object-cover h-full"
                placeholder="blur"
              />
            </Div>
            
          </Div>
          <Div className="col-lg-6">
            {data.details.map((para, index) => (
              <p
                className="text-[1.1rem] font-semibold text-white mb-4"
                key={index}
              >
                {para}
              </p>
            ))}
            
          </Div>
        </Div>
      </Div>
      */}
      
      <Div className="container">
        <SectionHeading
          title="Our Expertise"
          subtitle=""
          variant="cs-style1 text-center"
        />
        
        <Div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
          {data.subServices.map((service, index) => (
            <IconBox
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              Icon={service.iconComponent}
            />
          ))}
        </Div>
      </Div>
      
      {/*
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Some pre questions and answers"
                subtitle="FAQ’s"
              />
              
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
      
      */}
    </>
  );
}
