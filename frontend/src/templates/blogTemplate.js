import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, excerpt, html } = markdownRemark;
    return (
        <Layout>
            <SEO
                title={frontmatter.title}
                description={excerpt}
                image={`/${frontmatter.image}`}
            />
            <div className="blog-post-container">
                <div className="blog-post mx-auto md:w-3/4">
                    <img className="" src={`../${frontmatter.image}`} />
                    <h1 className="text-3xl">{frontmatter.title}</h1>
                    <h2 className="my-4 text-sm">{frontmatter.date}</h2>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <div className="mt-8">
                        Want to work with me?{" "}
                        <Link
                            to={`/contact?utm_source=blog&utm_medium=website&utm_campaign=${frontmatter.path.replace('/blog/', '')}`}
                            className="border-b-2 border-mbmYellow"
                        >
                            {`Let's talk!`}
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            excerpt(pruneLength: 250)
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image
            }
        }
    }
`;
