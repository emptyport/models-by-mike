let siteMetadata = {
	title: `models by Mike`,
	capitalizeTitleOnHome: true,
	logo: `/images/logo.png`,
	icon: `/images/favicon.png`,
	titleImage: `/images/wall.jpg`,
	introTag: `CREATOR`,
	description: `I create Snapchat lenses and bizarre artwork and videos.`,
	author: `@modelsbymike3d`,
	blogItemsPerPage: 10,
	portfolioItemsPerPage: 10,
	darkmode: true,
	navLinks: [{
			name: "HOME",
			url: "/"
		},
		{
			name: "ABOUT",
			url: "/about"
		},
		{
			name: "SUPPORT",
			url: "/support"
		},
		{
			name: "BLOG",
			url: "/blog"
		},
		{
			name: "PORTFOLIO",
			url: "/portfolio"
		},
		{
			name: "CONTACT",
			url: "/contact"
		}
	],
	footerLinks: [
		{
			name: "PRIVACY POLICY",
			url: "/privacy-policy"
		},
		{
			name: "DISABLE GOOGLE ANALYTICS",
			url: "javascript:gaOptout();"
		}
	],
	social: [{
			name: "Facebook",
			icon: "/images/Facebook.svg",
			url: "https://www.facebook.com/ModelsByMike3D"
		},
		{
			name: "Twitter",
			icon: "/images/Twitter.svg",
			url: "https://twitter.com/modelsbymike3d"
		},
		{
			name: "Instagram",
			icon: "/images/Instagram.svg",
			url: "https://www.instagram.com/modelsbymike3d/"
		},
		{
			name: "Youtube",
			icon: "/images/Youtube.svg",
			url: "https://www.youtube.com/channel/UCpLVNOoqAc3cnd_QgSxoAvg"
		},
		{
			name: "Snapchat",
			icon: "/images/Snapchat.svg",
			url: "https://lensstudio.snapchat.com/creator/Jn6NTlPetl3Iqtkd8MTNXQ"
		},
		{
			name: "Patreon",
			icon: "/images/Patreon.svg",
			url: "https://www.patreon.com/ModelsByMike"
		}
	],
	contact: {
		api_url: "./test.json",
		/* Leave this completely empty (no space either) if you don't want a contact form. */
		description: `Connect with me on social media, or fill out the contact form and I'll reach out via email.`,
		mail: "",
		phone: "",
		address: ""
	}
}

module.exports = {
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
      			plugins: [
					"gatsby-remark-copy-linked-files",
        			{
          				resolve: `gatsby-remark-images`,
          				options: {
							maxWidth: 1280,
							backgroundColor: "transparent"
          				}
        			}
      			]
    		}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contents`,
				path: `${__dirname}/contents/`
			}
		},
		{
			resolve: `gatsby-plugin-less`,
			options: {
				strictMath: true,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: "UA-137935194-2",
				head: true,
				anonymize: true,
				respectDNT: true,
			}
		},
	],
}
