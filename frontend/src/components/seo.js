import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

function SEO({ description, lang, meta, title, image }) {
    const { site } = useStaticQuery(graphql`
        query DefaultSEOQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                    keywords
                    image
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description;

    const imageTag = image || site.siteMetadata.image;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: imageTag,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    site.siteMetadata.keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: site.siteMetadata.keywords.join(`, `),
                          }
                        : []
                )
                .concat(meta)}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <script
                src={`https://www.google.com/recaptcha/api.js?render=${process
                    .env.RECAPTCHA_KEY ||
                    "6Lc1hNYUAAAAANS0mVhv0PGuwZgaSyj7y10TnYus"}`}
            ></script>
            <link
                href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
                rel="stylesheet"
            ></link>
            <style>
                {`.grecaptcha-badge {
  visibility: hidden;}`}
            </style>
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
};

SEO.propTypes = {
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string.isRequired,
};

export default SEO;
