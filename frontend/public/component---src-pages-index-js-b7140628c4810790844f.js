(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(e,t,a){"use strict";a.r(t);a(96);var A=a(8),n=a.n(A),r=a(0),i=a.n(r),s=a(171),l=a(170),c=a(172),o=a(246),d=a(196),m=function(){var e=o.data;return i.a.createElement("section",{id:"portfolio",className:"container"},i.a.createElement(d.a,{data:e}))},u=a(247),p=a(190),E=a(174),h=function(){var e=u.data;return e.allMarkdownRemark.edges.length>0?i.a.createElement("section",{id:"blog",className:"container"},i.a.createElement("div",{className:"section-title"},i.a.createElement(E.a,{title:"BLOG"})),i.a.createElement(p.a,{data:e})):i.a.createElement(i.a.Fragment,null)},g=a(197);a(248);a.d(t,"query",function(){return B});var f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={winHeight:0},a}n()(t,e);var a=t.prototype;return a.createSVGElement=function(e,t){for(var a in e=document.createElementNS("http://www.w3.org/2000/svg",e),t)e.setAttributeNS(null,a,t[a]);return e},a.componentDidMount=function(){this.setWindowHeight();var e=this;window.addEventListener("resize",function(){e.setWindowHeight()});var t=this.svg.clientWidth,a=this.svg.querySelector("text"),A=a.getBoundingClientRect().width;if(A>t){var n=a.innerHTML;if(n.split(" ").length>1)a.innerHTML="",n.split(" ").forEach(function(t,A){var n=e.createSVGElement("tspan",{dy:0===A?"0em":".8em",x:"50"});n.innerHTML=t,a.appendChild(n)}),setTimeout(function(){e.svg.style.height=a.getBoundingClientRect().height+70,e.svg.style.margin="15px auto"},250);else for(;A>t;){var r=parseInt(window.getComputedStyle(a,null).getPropertyValue("font-size"));a.style.fontSize=r-1+"px",A=a.getBoundingClientRect().width}}},a.setWindowHeight=function(){this.setState({winHeight:window.innerHeight})},a.render=function(){var e=this;return i.a.createElement(s.a,{placeholder:!1},i.a.createElement(l.a,{lang:"en",title:this.props.data.site.siteMetadata.title}),i.a.createElement("div",{className:"wall",style:{height:this.state.winHeight+"px"}},i.a.createElement("div",{className:"intro container"},i.a.createElement("div",{className:"main-title text-primary"},i.a.createElement("svg",{width:"90%",height:"220px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice",ref:function(t){return e.svg=t}},this.props.data.site.siteMetadata.capitalizeTitleOnHome?this.props.data.site.siteMetadata.title.toUpperCase():this.props.data.site.siteMetadata.title,i.a.createElement("pattern",{id:"wallPattern",patternUnits:"userSpaceOnUse",width:"100",height:"100"},i.a.createElement("rect",{x:"0",y:"0",className:"fill-primary",width:"100",height:"100"}),i.a.createElement("image",{xlinkHref:"/images/wall.jpg",height:"100",width:"100",y:"0",preserveAspectRatio:"none"})),i.a.createElement("text",{fill:"url(#wallPattern)",textAnchor:"middle",x:"50",y:"50"},this.props.data.site.siteMetadata.capitalizeTitleOnHome?this.props.data.site.siteMetadata.title.toUpperCase():this.props.data.site.siteMetadata.title))),i.a.createElement("p",{className:"tag-line text-secondary"},this.props.data.site.siteMetadata.introTag),i.a.createElement("p",{className:"caption text-tertiary"},this.props.data.site.siteMetadata.description),i.a.createElement("a",{href:"#portfolio",className:"btn"},"SEE WORKS")),i.a.createElement("div",{className:"social-buttons"},i.a.createElement(c.a,null))),i.a.createElement(m,null),i.a.createElement(h,null),i.a.createElement(g.a,null))},t}(i.a.Component),B=(t.default=f,"3407157170")},174:function(e,t,a){"use strict";var A=a(181),n=a.n(A),r=a(8),i=a.n(r),s=a(0),l=a.n(s),c=function(e){function t(a){var A;return(A=e.call(this,a)||this).state={colorPrimary:"#00",colorSecondary:"#00"},A._id=t.counter,A}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({colorPrimary:window.getComputedStyle(this.cp,null).getPropertyValue("color"),colorSecondary:window.getComputedStyle(this.cs,null).getPropertyValue("color")})},a.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{ref:function(t){return e.cp=t},className:"color-primary"}),l.a.createElement("span",{ref:function(t){return e.cs=t},className:"color-secondary"}),l.a.createElement("svg",{width:"100%",height:"150",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},l.a.createElement("linearGradient",{id:"primaryGradient"+this._id,x1:"0",x2:"100%",y1:"0",y2:"0",gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:this.state.colorPrimary,offset:"0%"}),l.a.createElement("stop",{stopColor:this.state.colorSecondary,offset:"100%"})),l.a.createElement("text",{textAnchor:"middle",x:"50",y:"52",fill:"url(#primaryGradient"+this._id+")"},this.props.title)))},n()(t,null,[{key:"counter",get:function(){return t._counter=(t._counter||0)+1,t._counter}}]),t}(l.a.Component);t.a=c},181:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var A=t[a];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(e,A.key,A)}}e.exports=function(e,t,A){return t&&a(e.prototype,t),A&&a(e,A),e}},183:function(e,t,a){"use strict";var A=a(0),n=a.n(A);t.a=function(e){var t=e.data,a=new Date(t),A=a.getDate(),r=a.getMonth(),i=a.getFullYear();return n.a.createElement("span",null,A," ",["January","February","March","April","May","June","July","August","September","October","November","December"][r]," ",i)}},184:function(e,t,a){var A;e.exports=(A=a(192))&&A.default||A},190:function(e,t,a){"use strict";var A=a(8),n=a.n(A),r=a(0),i=a.n(r),s=a(185),l=a.n(s),c=a(183),o=a(168),d=(a(194),function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.color=window.getComputedStyle(this.textSecondary,null).getPropertyValue("color"),this.textSecondary.querySelector("path").setAttribute("fill",this.color)},a.render=function(){var e=this;return i.a.createElement("div",{className:"item col s12 m6"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"image"},i.a.createElement(l.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),i.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),i.a.createElement("div",{className:"content"},i.a.createElement("h3",{className:"text-primary"},i.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),i.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description),i.a.createElement("p",{className:"date text-secondary",ref:function(t){return e.textSecondary=t}},i.a.createElement("span",{className:"icon"},i.a.createElement(o.a,null)),i.a.createElement(c.a,{data:this.props.data.node.frontmatter.date})))))},t}(i.a.Component));t.a=function(e){var t=e.data.allMarkdownRemark.edges,a=[];return t.forEach(function(t,A){e.remove&&t.node.id===e.remove||a.push(i.a.createElement(d,{key:t.node.id,data:t}))}),i.a.createElement("div",{className:"row"},a)}},191:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var A=a(0),n=a.n(A),r=a(5),i=a.n(r),s=a(41),l=a.n(s);a.d(t,"a",function(){return l.a});a(184);var c=n.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,A=e.query,r=e.render,i=a?a.data:t[A]&&t[A].data;return n.a.createElement(n.a.Fragment,null,i&&r(i),!i&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,A=e.render,r=e.children;return n.a.createElement(c.Consumer,null,function(e){return n.a.createElement(o,{data:t,query:a,render:A||r,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},192:function(e,t,a){"use strict";a.r(t);a(43);var A=a(0),n=a.n(A),r=a(5),i=a.n(r),s=a(65),l=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},196:function(e,t,a){"use strict";var A=a(8),n=a.n(A),r=a(0),i=a.n(r),s=a(185),l=a.n(s),c=(a(201),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"item col s12"},i.a.createElement("div",{className:"row flex"},i.a.createElement("div",{className:"col m6 image"},i.a.createElement(l.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),i.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),i.a.createElement("div",{className:"col m6 content"},i.a.createElement("h2",{className:"text-primary pseudo-divider"},i.a.createElement("a",{href:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),i.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description))))},t}(i.a.Component));t.a=function(e){var t=e.data.allMarkdownRemark.edges,a=[];return t.forEach(function(e,t){a.push(i.a.createElement(c,{key:e.node.id,data:e}))}),i.a.createElement("div",{className:"row"},a)}},197:function(e,t,a){"use strict";var A=a(42),n=a.n(A),r=a(8),i=a.n(r),s=a(198),l=a(0),c=a.n(l),o=a(174),d=a(191),m=a(168),u=a(172),p=(a(213),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={submitDisabled:!1},a.textAreaInput=a.textAreaInput.bind(n()(a)),a.handleSubmit=a.handleSubmit.bind(n()(a)),a.showContactForm=!0,""===a.props.contact.api_url&&(a.showContactForm=!1),a}i()(t,e);var a=t.prototype;return a.textAreaInput=function(e){e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px"},a.handleSubmit=function(e){var t=this;if(e.preventDefault(),!this.state.submitDisabled){this.setState({submitDisabled:!0});var a=encodeURI(this.dataName.value),A=encodeURI(this.dataEmail.value),n=encodeURI(this.dataMessage.value),r=encodeURI(this.dataChallenge.value);fetch("/api/contact",{method:"post",body:"name="+a+"&email="+A+"&message="+n+"&challenge="+r}).then(function(e){return e.json()}).then(function(e){t.setState({submitDisabled:!1}),t.resMessage.style.opacity=1,"error"===e.response?(t.resMessage.innerHTML=e.msg,t.resMessage.classList.add("color-error")):(t.resMessage.innerHTML="Message sent succesfully",t.resMessage.classList.remove("color-error"),t.dataName.value="",t.dataEmail.value="",t.dataMessage.value="",t.dataChallenge.value="");var a=t;setTimeout(function(){a.resMessage.style.opacity=0},5e3)},function(e){t.resMessage.innerHTML="Message sent succesfully",t.resMessage.classList.remove("color-error"),t.setState({submitDisabled:!1});var a=t;setTimeout(function(){a.resMessage.style.opacity=0},5e3)})}},a.componentDidMount=function(){if(this.showContactForm){var e=window.getComputedStyle(this.btn,null).getPropertyValue("color");this.btn.querySelector("path").setAttribute("fill",e)}this.contactArea.querySelectorAll(".item").forEach(function(e,t){var a=e.querySelector("path");a&&a.setAttribute("fill",window.getComputedStyle(e,null).getPropertyValue("color"))})},a.render=function(){var e=this;return c.a.createElement("section",{id:"contact",className:"container"},c.a.createElement("div",{className:"section-title"},c.a.createElement(o.a,{title:"CONTACT"})),c.a.createElement("div",{className:"row"+(this.showContactForm?"":" no-form"),ref:function(t){return e.contactArea=t}},this.showContactForm&&c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("form",null,c.a.createElement("div",{className:"field"},c.a.createElement("label",null,c.a.createElement("span",{className:"label text-tertiary"},"Name"),c.a.createElement("div",{className:"input-border"},c.a.createElement("input",{type:"text",ref:function(t){return e.dataName=t},className:"field-box",name:"name",id:"name",required:!0})))),c.a.createElement("div",{className:"field"},c.a.createElement("label",null,c.a.createElement("span",{className:"label text-tertiary"},"Email"),c.a.createElement("div",{className:"input-border"},c.a.createElement("input",{type:"email",ref:function(t){return e.dataEmail=t},className:"field-box",name:"email",id:"email",required:!0})))),c.a.createElement("div",{className:"field"},c.a.createElement("label",null,c.a.createElement("span",{className:"label text-tertiary"},"Message"),c.a.createElement("div",{className:"input-border"},c.a.createElement("textarea",{style:{overflowY:"hidden"},ref:function(t){return e.dataMessage=t},className:"field-box",onChange:this.textAreaInput,name:"message",id:"message",required:!0})))),c.a.createElement("div",{className:"field"},c.a.createElement("label",null,c.a.createElement("span",{className:"label text-tertiary"},"What is 2 + 2?"),c.a.createElement("div",{className:"input-border"},c.a.createElement("input",{type:"challenge",ref:function(t){return e.dataChallenge=t},className:"field-box",name:"challenge",id:"challenge",required:!0})))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"ib"},c.a.createElement("button",{className:"btn"+(this.state.submitDisabled?" disabled":""),onClick:this.handleSubmit,id:"submit",ref:function(t){return e.btn=t}},"SEND ",c.a.createElement("span",{className:"icon paper-plane",style:{display:this.state.submitDisabled?"none":"inline-block"}},c.a.createElement(m.i,null)),c.a.createElement("span",{className:"icon loading",style:{display:this.state.submitDisabled?"inline-block":"none"}},c.a.createElement(m.f,null)))),c.a.createElement("label",null,c.a.createElement("p",{className:"res-message",ref:function(t){return e.resMessage=t}}))))),c.a.createElement("div",{className:this.showContactForm?"col s12 m6 details":"col s12 details"},this.props.contact.description&&c.a.createElement("p",{className:"text-tertiary"},this.props.contact.description),c.a.createElement("ul",null,this.props.contact.mail&&c.a.createElement("li",{className:"text-secondary item"},c.a.createElement("span",{className:"icon"},c.a.createElement(m.d,null)),c.a.createElement("a",{href:"mailto:"+this.props.contact.mail},this.props.contact.mail)),this.props.contact.phone&&c.a.createElement("li",{className:"text-secondary item"},c.a.createElement("span",{className:"icon"},c.a.createElement(m.h,null)),c.a.createElement("a",{href:"tel:"+this.props.contact.phone},this.props.contact.phone)),this.props.contact.address&&c.a.createElement("li",{className:"text-tertiary item",style:{whiteSpace:"pre"}},c.a.createElement("span",{className:"icon"},c.a.createElement(m.g,null)),this.props.contact.address),c.a.createElement("li",null,c.a.createElement(u.a,null))))))},t}(c.a.Component));t.a=function(){return c.a.createElement(d.b,{query:"2503414151",render:function(e){return c.a.createElement(p,{contact:e.site.siteMetadata.contact})},data:s})}},198:function(e){e.exports={data:{site:{siteMetadata:{contact:{api_url:"./test.json",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.",mail:"hi@akzhy.com",phone:"000-000-0000",address:"1234 \nLocation \nLocation"}}}}}},246:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"6c3108ba-caf1-54f4-a271-3eb44c67b030",frontmatter:{title:"Concerts",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:{publicURL:"/static/image-6d4db0a02ba350c67407eca43ae35704.jpg",childImageSharp:{fluid:{srcSet:"/static/6d4db0a02ba350c67407eca43ae35704/6ece9/image.jpg 480w,\n/static/6d4db0a02ba350c67407eca43ae35704/06996/image.jpg 658w",base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQADBAX/xAAXAQEBAQEAAAAAAAAAAAAAAAABAwIE/9oADAMBAAIQAxAAAAE83qwty8807DnGmIf/xAAcEAABAwUAAAAAAAAAAAAAAAABAAIQAxESIDH/2gAIAQEAAQUCqtAREPfkTF0eaf/EABcRAAMBAAAAAAAAAAAAAAAAAAEQEQL/2gAIAQMBAT8BwIov/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAIR/9oACAECAQE/AaNP/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwJP/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIRAxQVH/2gAIAQEAAT8hlMUHWHqx7PQ3TmssZ//aAAwDAQACAAMAAAAQ2DmO/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxBBC45f/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREP/aAAgBAgEBPxBDYcbf/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITFBUWFxgaH/2gAIAQEAAT8QLLUwtYIzaHLjrDypSxhTDBYsh55jU2LX3l1v7CJdzb0T/9k=",aspectRatio:.7144408251900108,src:"/static/6d4db0a02ba350c67407eca43ae35704/06996/image.jpg",sizes:"(max-width: 658px) 100vw, 658px"},id:"67f582de-1671-5bba-967c-168ee1852497"}}},fields:{slug:"/portfolio/concerts/"}}},{node:{id:"59820199-8054-5c21-9e52-448dc98b0143",frontmatter:{title:"Street Lights",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:{publicURL:"/static/image-78f94840818f17b18b912c87a1f0e3a7.jpg",childImageSharp:{fluid:{srcSet:"/static/78f94840818f17b18b912c87a1f0e3a7/6ece9/image.jpg 480w,\n/static/78f94840818f17b18b912c87a1f0e3a7/2024d/image.jpg 536w",base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAGLU2chQMVmaV5mRz//xAAbEAACAgMBAAAAAAAAAAAAAAABAgARAxIhMf/aAAgBAQABBQJRsXFJFaptat6cpnRLaKOMeT//xAAZEQACAwEAAAAAAAAAAAAAAAAAAwIQIRH/2gAIAQMBAT8BYve1Iw//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPwEY/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAEDFhMkGB/9oACAEBAAY/Ai89wqi8qHdcnNX7X//EABwQAQACAwADAAAAAAAAAAAAAAEAESExYUFRof/aAAgBAQABPyFKxoVb3C8kSufYmQmMsqLso0NTHMNROFRwvqVlDNroS6WZ/9oADAMBAAIAAwAAABC8xnz/xAAcEQACAgIDAAAAAAAAAAAAAAAAARExIVFhcYH/2gAIAQMBAT8Qoleq84MKzJS1HRA//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREEH/2gAIAQIBAT8QioV8Fn//xAAhEAACAQMEAwEAAAAAAAAAAAABEQAhMUFRcYGhYZGx4f/aAAgBAQABPxA9qHIQ0flX2j5JIKw1G0cpBgEDDhGG8jBg1NEailXs+oQQYUttDbmaEkBDqNYqGBZj9gFEoWoIipSg1cbFW+xHu5n/2Q==",aspectRatio:.6658385093167701,src:"/static/78f94840818f17b18b912c87a1f0e3a7/2024d/image.jpg",sizes:"(max-width: 536px) 100vw, 536px"},id:"18856f5c-e486-5c4a-a09f-0e8bf4b93b65"}}},fields:{slug:"/portfolio/street-lights/"}}}]}}}},247:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"89cfc7bd-3576-54c1-99c3-3eb36d3fff74",frontmatter:{title:"Something Cool",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:"2019-06-29T00:00:00.000Z",image:{publicURL:"/static/image-980080b6929d3f5a440cd0d25b2bf587.jpg",childImageSharp:{fluid:{srcSet:"/static/980080b6929d3f5a440cd0d25b2bf587/96cba/image.jpg 449w",base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB7bEDYCNYLQP/xAAYEAADAQEAAAAAAAAAAAAAAAAAARACEv/aAAgBAQABBQKs7TjMqf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABUQAQEAAAAAAAAAAAAAAAAAACAx/9oACAEBAAY/AhT/AP/EABgQAQADAQAAAAAAAAAAAAAAAAEAEBFx/9oACAEBAAE/IbWQVhaQ9K//2gAMAwEAAgADAAAAEDMHAP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/EGP/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMRBBUf/aAAgBAQABPxB5EFoW7Y3tI09QcQiA+wWl7Muswn//2Q==",aspectRatio:.9977777777777778,src:"/static/980080b6929d3f5a440cd0d25b2bf587/96cba/image.jpg",sizes:"(max-width: 449px) 100vw, 449px"},id:"a151ce30-878d-50bf-9570-1fc7ea2233aa"}}},fields:{slug:"/blog/something-cool/"}}},{node:{id:"ed2f8c36-b8a6-5489-936a-161c91cf6e2e",frontmatter:{title:"Something Hot",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:"2019-06-29T00:00:00.000Z",image:{publicURL:"/static/image-a0c9f6305e57141929d2b648047baeef.jpg",childImageSharp:{fluid:{srcSet:"/static/a0c9f6305e57141929d2b648047baeef/6ece9/image.jpg 480w,\n/static/a0c9f6305e57141929d2b648047baeef/50f69/image.jpg 897w",base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBQL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGyc/uL0GcamwzukB//xAAcEAEAAgIDAQAAAAAAAAAAAAABAAIREwMQISL/2gAIAQEAAQUCOabWbWVtmI5Tqvpf5f/EABcRAAMBAAAAAAAAAAAAAAAAAAABEhD/2gAIAQMBAT8BhEb/AP/EABcRAAMBAAAAAAAAAAAAAAAAAAABEhD/2gAIAQIBAT8Btl7/AP/EABsQAAEEAwAAAAAAAAAAAAAAAAABAhARITFB/9oACAEBAAY/Ao0Oowh2aQ//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhUUFhkcH/2gAIAQEAAT8hVL+Qkbvk3UuVmWKOIQE7Ljc/MbeNVc//2gAMAwEAAgADAAAAEHAIgv/EABgRAQEAAwAAAAAAAAAAAAAAAAABEUFR/9oACAEDAQE/ENkYdRX/xAAZEQABBQAAAAAAAAAAAAAAAAAAARARQVH/2gAIAQIBAT8QSwlj/wD/xAAgEAEAAgIBBAMAAAAAAAAAAAABABEhMWFBUXGBkfDx/9oACAEBAAE/EA5cJ2RO8eAYk2c/uNcECAGl3iNRQZS6v3c2SE+JS2yTz9YYHdKUw4YPGQyerP/Z",aspectRatio:.9988864142538976,src:"/static/a0c9f6305e57141929d2b648047baeef/50f69/image.jpg",sizes:"(max-width: 897px) 100vw, 897px"},id:"e1db46c8-8347-5543-9c55-8fe07b88d1ab"}}},fields:{slug:"/blog/something-hot/"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b7140628c4810790844f.js.map