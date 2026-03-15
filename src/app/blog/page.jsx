import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Pagination from "@/app/ui/Pagination";
import PostStyle2 from "@/app/ui/Post/PostStyle2";
import Sidebar from "@/app/ui/Sidebar/index.jsx";
import Spacing from "@/app/ui/Spacing";

import { getAllPosts } from "@/assets/posts";

export default async function BlogPage() {
  const postData = await getAllPosts();

  return (
    <>
      <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.image}
                  title={item.title}
                  subtitle={item.rawContent.slice(0, 300) + "..."}
                  date={item?.date.toLocaleDateString() || ""}
                  category={""}
                  categoryHref={""}
                  href={`/blog/${item.slug}`}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            {/*<Pagination />*/}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Get In Touch With Us"
          btnText="Our Contact Information"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
