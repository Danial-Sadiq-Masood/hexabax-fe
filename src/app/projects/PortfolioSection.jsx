import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import ProjectPortfolioBox from "@/app/ui/Portfolio/ProjectPortfolioBox";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import { DataTable } from "@/app/ui/Table/data-table";
import { columns } from "@/app/ui/Table/columns";
import data from "@/assets/data/projects.json";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const colors = [
  'bg-[#596F62]',
  'bg-[#EC4E20]',
  'bg-[#0041f0]',
  'bg-[#28afb0]',
  'bg-[#f9655b]',
  'bg-[#858e96]',
  'bg-[#b429f9]',
  'bg-[#3a7ff2]'
]

export default function PortfolioSection({ pageNumber }) {
  const pageSize = 9;
  const startingIndex = (pageNumber) * pageSize;
  const endingIndex = Math.min(startingIndex + pageSize, data.length);
  const dataSlice = data.slice(startingIndex, endingIndex);

  const lastPage = Math.floor(data.length / pageSize);

  return (
    <>
      <div className="h-full flex flex-col lg:grid grid-cols-3 gap-10 auto-rows-auto w-full p-8">
        {dataSlice.slice(0, 20).map((datum, index) => (
          <Div key={index} className="col-span-1 row-span-1">
            <ProjectPortfolioBox
              title={datum["Project Title"]}
              description={datum["Description"]}
              client={datum["Client"]}
              date={datum["Date"]}
              link={`/projects/${index}`}
              src={`/images/portfolio_${(index % 7) + 1}.jpeg`}
              href={""}
              variant="cs-style1 cs-type1"
              colorCss={colors[index % colors.length]}
            />
          </Div>
        ))}
      </div>
      <div className="flex justify-end px-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {pageNumber + 1} of {lastPage + 1}
        </div>
        <div className="flex items-center space-x-2">
          <Link href={"?page=0"} scroll={false}>
            <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex">
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft />
            </Button>
          </Link>
          <Link href={`?page=${Math.max(pageNumber - 1, 0)}`} scroll={false}>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft />
            </Button>
          </Link>
          <Link href={`?page=${Math.min(pageNumber + 1, lastPage)}`} scroll={false}>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Go to next page</span>
              <ChevronRight />
            </Button>
          </Link>
          <Link href={`?page=${lastPage}`} scroll={false}>
            <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex">
              <span className="sr-only">Go to last page</span>
              <ChevronsRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
