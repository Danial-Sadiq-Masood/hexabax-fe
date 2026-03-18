import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import projectsData from "@/assets/data/projects.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((_, i) => ({
    projectDetailsId: `${i}`,
  }));
}

export default function PortfolioDetailsPage({ params }) {
  const { projectDetailsId } = params;

  const data = projectsData[parseInt(projectDetailsId, 10)];

  if (!data) {
    return notFound();
  }

  return (
    <>
      <PageHeading
        title="Project Details"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="PROJECT-DETAILS"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        {/*<Image
          src={imgUrl}
          alt="Details"
          placeholder="blur"
          className="cs-radius_15 w-100"
        />*/}
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading title={data["Project Title"]} subtitle="">
              <Spacing lg="40" md="20" />
              {
                <p className="cs-m0 text-[1.1rem] font-semibold text-white">
                  {data["Description"]}
                </p>
              }
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Client:
                </h3>
                <p className="cs-m0">{data["Client"]}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Date:
                </h3>
                <p className="cs-m0">{data["Date"]}</p>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
        {/*<Div className="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Prev Project"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Next Project"
            />
          </Div>
        </Div>
        */}
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="Get In Touch With Us"
        btnText="Our Contact Information"
        btnLink="/contact"
        bgSrc="/images/cta_bg.jpeg"
      />
    </>
  );
}
