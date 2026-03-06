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
import serviceImage from "../../../../public/images/organizational-dev.jpg";

import { SlOrganization } from "react-icons/sl";

const serviceData = [
  {
    iconComponent: SlOrganization,
    title: "Organizational Strategy",
    subtitle:
      "We design a comprehensive plan that guides an entity's actions and decisions to achieve its long-term goals and objectives.",
  },
  {
    iconComponent: SlOrganization,
    title: "Organizational Strategy",
    subtitle:
      "We design a comprehensive plan that guides an entity's actions and decisions to achieve its long-term goals and objectives.",
  },
  {
    iconComponent: SlOrganization,
    title: "Organizational Strategy",
    subtitle:
      "We design a comprehensive plan that guides an entity's actions and decisions to achieve its long-term goals and objectives.",
  },
  {
    iconComponent: SlOrganization,
    title: "Organizational Strategy",
    subtitle:
      "We design a comprehensive plan that guides an entity's actions and decisions to achieve its long-term goals and objectives.",
  },
  {
    iconComponent: SlOrganization,
    title: "Organizational Strategy",
    subtitle:
      "We design a comprehensive plan that guides an entity's actions and decisions to achieve its long-term goals and objectives.",
  },
  {
    iconComponent: SlOrganization,
    title: "Organizational Strategy",
    subtitle:
      "We design a comprehensive plan that guides an entity's actions and decisions to achieve its long-term goals and objectives.",
  }
];

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading
        title="Organizational Development"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="ORGANIZATIONAL-DEVELOPMENT"
      />
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="flex gap-5">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src={serviceImage}
                alt="Service"
                className="cs-radius_15 w-full object-cover max-h-100"
                placeholder="blur"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6">
            <p className="">
              We employ a systematic and planned approach to enhance an
              organization's effectiveness, performance, and overall health by
              implementing a series of structured interventions and change
              strategies. Our methodology is rooted in the principles of
              strategic management and organizational development, aimed at
              driving positive transformation and sustainable growth.
            </p>
            <p>
              Our process begins with a thorough assessment of the
              organization's current state, which includes evaluating its
              strengths, weaknesses, opportunities, and threats, as well as
              conducting in-depth diagnostics to pinpoint specific areas that
              require improvement. This diagnostic phase allows us to identify
              KPIs and establish clear benchmarks for success.
            </p>
            <Spacing lg="50" md="30" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Expertise"
          subtitle=""
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
          {
            serviceData.map((service, index) => (
              <IconBox
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                Icon={service.iconComponent}
              />
            ))
          }
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
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
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
