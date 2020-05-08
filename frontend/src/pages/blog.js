import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostLink from "../components/PostLink";

function BlogPage({
    data: {
        allMarkdownRemark: { edges },
    },
}) {
    const Posts = edges
        .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <Layout>
            <SEO title="Blog" />

            <section className="flex flex-col items-left mx-auto w-full md:w-3/5">
                {Posts}
            </section>
        </Layout>
    );
}

export default BlogPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        image
                    }
                }
            }
        }
    }
`;
