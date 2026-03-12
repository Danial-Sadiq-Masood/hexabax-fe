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

import PortfolioSection from './PortfolioSection'

const portfolioData = [
  {
    title: "Consultancy for Development of Centers of Excellence (COEs)",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_4.jpeg",
    category: "ui_ux_design",
    partnerLogo: "/images/adb.png",
    description:
      "Hexabax is transforming TVET institutes into industry-aligned Centers of Excellence through governance reform, capacity development, and modern service delivery models.",
  },
  {
    title: "Business & Operational Models",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_5.jpeg",
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
    src: "/images/portfolio_6.jpeg",
    category: "web_design",
    description:
      "Hexabax is transforming TVET institutes into industry-aligned Centers of Excellence through governance reform, capacity development, and modern service delivery models.",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_7.jpeg",
    category: "mobile_apps",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_8.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_9.jpeg",
    category: "web_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_10.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_4.jpeg",
    category: "ui_ux_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_5.jpeg",
    category: "logo_design",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_6.jpeg",
    category: "web_design",
  },
];
const categoryMenu = [
  {
    title: "Web Design",
    category: "web_design",
  },
  {
    title: "UI/UX Design",
    category: "ui_ux_design",
  },
  {
    title: "Mobile Apps",
    category: "mobile_apps",
  },
  {
    title: "Logo Design",
    category: "logo_design",
  },
];

function parsePage(value){
  if (typeof value !== "string") return 0

  const page = Number.parseInt(value, 10)

  if (!Number.isFinite(page) || page < 0) return 0

  return page
}

export default async function PortfolioPage({ searchParams }) {
  const page = parsePage(await searchParams.page);

  return (
    <>
      <PageHeading
        title="Our Projects"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="PROJECTS"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <PortfolioSection pageNumber={page}/>
      </Div>
      <Div className="container">
        <div className="hidden h-full flex-1 flex-col w-full p-8 md:flex">
          <div className="">
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="contact@hexabax.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
