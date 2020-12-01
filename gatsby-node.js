/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllProducts {
      allContentfulProduct {
        nodes {
          id
          slug
          productName
          shortDescription
        }
      }
    }
  `);
  // Handle errors
  if (queryResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // Create pages for each markdown file.
  const productTemplate = path.resolve(
    `./src/templates/SingleProductTemplate/Product.js`
  );
  queryResults.data.allContentfulProduct.nodes.forEach((node) => {
    createPage({
      path: `/kayaks/${node.slug}`,
      component: productTemplate,
      context: {
        product: node,
      },
    });
  });
};
