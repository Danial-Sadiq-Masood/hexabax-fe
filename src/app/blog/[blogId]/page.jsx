import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import Sidebar from "@/app/ui/Sidebar";

import { getAllPosts } from "@/assets/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => {
    return {
      blogId: post.slug,
    };
  });
}

export default async function BlogDetailsPage({ params }) {
  const slug = params.blogId;

  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Blog Details"
        bgSrc="/images/blog_details_hero_bg.jpeg"
        pageLinkText=""
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <Image
                  src={post?.image}
                  alt="Post"
                  className="w-100 cs-radius_15 object-cover"
                  width={500}
                  height={400}
                />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">
                    {post?.date.toLocaleDateString()}
                  </span>
                </Div>
                <h2 className="cs-post_title">{post.title}</h2>
                <article>
                  <div
                    dangerouslySetInnerHTML={{ __html: post?.content.value || "" }}
                  ></div>
                </article>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            {/*<Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form>*/}
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg="0" md="80" />
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Get In Touch With Us"
          btnText="Our Contact Information"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
