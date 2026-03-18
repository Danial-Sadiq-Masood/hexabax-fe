import React from "react";
import Link from "next/link";
import Div from "../Div";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProjectPortfolioBox({
  href,
  title,
  subtitle,
  client,
  variant,
  partnerLogo,
  description,
  src,
  link,
  date,
  colorCss,
}) {
  return (
    <div className={`cs-portfolio cs-bg h-full flex`}>
      <>
        <div>
          <div
            className={cn("text-white max-w-sm p-6 rounded-xl  flex flex-col justify-between items-start relative h-full border-6 border-[rgb(0 0 0 / 20%)]",
              colorCss
            )}
          >
            <div className="flex flex-col">
              <h5 className="mb-3 text-xl font-semibold tracking-tight text-heading leading-8">
                {title}
              </h5>
              <div className="w-[40%] h-px bg-white mb-3"></div>
              <h5 className="mb-3 text-md font-semibold tracking-tight text-heading leading-8">
                Client : <span className="font-normal">{client}</span>
              </h5>
              <h5 className="mb-3 text-md font-semibold tracking-tight text-heading leading-8">
                Date : <span className="font-normal">{date}</span>
              </h5>
              <div className="w-[40%] h-px bg-white mb-3"></div>
              <p className="text-body mb-6 line-clamp-3 text-white text-[1.1rem]">
                {description}
              </p>
            </div>
            <Link
              href={link}
              className="inline-flex items-center text-white box-border border border-white hover:bg-white
            hover:text-black focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-xl text-md px-4 py-2.5 focus:outline-none"
            >
              Read more
              <svg
                className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
