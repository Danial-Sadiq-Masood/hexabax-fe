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
        title="Careers"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText=""
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="">
            <SectionHeading
              title="There are no Openings currently available."
              subtitle="Openings"
            >
            </SectionHeading>
          </Div>
        </Div>
      </Div>
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
