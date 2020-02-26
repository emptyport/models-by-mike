const path = require("path");
const data = require("./items.json");

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const template = path.resolve(`src/templates/offerTemplate.js`);

  data.forEach(item => {
    const slug = item.slug;

    createPage({
      path: slug,
      component: template,
      context: item
    });
  });
};
