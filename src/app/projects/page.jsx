import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import ProjectPortfolioBox from "@/app/ui/Portfolio/ProjectPortfolioBox";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import { DataTable } from "@/app/ui/Table/data-table";
import { columns } from "@/app/ui/Table/columns";
import data from "./projects.json";
import Image from "next/image";
import projectsImg from "@/assets/images/project_1.jpg";

import PortfolioSection from "./PortfolioSection";

function parsePage(value) {
  if (typeof value !== "string") return 0;

  const page = Number.parseInt(value, 10);

  if (!Number.isFinite(page) || page < 0) return 0;

  return page;
}

export function generateStaticParams() {
  const upper = Math.floor(data.length / pageSize);

  return new Array(upper).fill("").map((_, i) => ({
    page: `${i}`,
  }));
}

export default function PortfolioPage({ searchParams }) {
  const page = parsePage(searchParams.page);

  return (
    <>
      <PageHeading
        title="Our Projects"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="PROJECTS"
      />
      
      <Div className="container">
        <Div className="flex flex-col md:grid gap-14 grid-cols-[60%_40%] grid-rows-1">
          <Div className="col-start-1 col-span-1 row-start-1 row-span-1 pr-10">
            <SectionHeading
              title={"We Deliver Impactful and Innovative Projects"}
              subtitle="Work we have Delivered"
            >
              
              <p className="cs-m0 text-[1.1rem] font-semibold text-white">
                At Hexabax, our projects are a testament to our commitment to
                delivering measurable impact and lasting value. We take pride in
                executing diverse, high-quality initiatives that drive
                innovation, optimize performance, and solve complex business
                challenges. With a focus on precision, collaboration, and
                forward-thinking strategies, each project we undertake is
                designed to exceed expectations and create meaningful results
                for our clients.
              </p>
              
              <Div className="cs-separator cs-accent_bg"></Div>
              
            </SectionHeading>
          </Div>
          <Div className="col-start2 col-span-1 row-start-1 row-span-1">
            <Image
              src={projectsImg}
              alt="Projects"
              className="h-[80%] object-cover cs-radius_15"
            />
            
          </Div>
        </Div>
      </Div>
      
      <Div className="container">
        <PortfolioSection pageNumber={page} />
      </Div>
      {/*<Div className="container">
        <div className="hidden h-full flex-1 flex-col w-full p-8 md:flex">
          <div className="">
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      </Div>*/}
      
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
