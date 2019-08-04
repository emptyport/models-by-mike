import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from "./sectiontitle"
import PortfolioItems from "./items-portfolio"

export default function() {

	const query = useStaticQuery(graphql `
		query portfolioList{
			allMarkdownRemark(
				filter: { fileAbsolutePath: {regex : "\/portfolio/"} },
				limit: 6,
		 		sort: {fields: [frontmatter___date], order: DESC}
			){
				edges{
					node{
						id
						frontmatter{
							title
							description
							image{
					            publicURL
					            childImageSharp {
									fluid(maxWidth: 1920) {
					                  srcSet
					                  ...GatsbyImageSharpFluid_noBase64
					                }
					              	id
					            }
				          	}
						}
						fields {
				          	slug
				        }
					}
				}
			}
		}
	`)

	return (
		<section id="portfolio" className="container">
			<div className="section-title">
				<SectionTitle title="PORTFOLIO"/>
			</div>
			<PortfolioItems data={query}/>
		</section>
	)

}
