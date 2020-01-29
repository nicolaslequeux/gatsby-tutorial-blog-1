const { slugify } = require("./src/utils/utilityFunctions");
const path = require("path")
const authors = require("./src/utils/authors")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    
    const slugFromTitle = slugify(node.frontmatter.title)

    // Créé un noeuf à node, dont le nom est 'slug' est la valeur slugFromTitle
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
    
  }
}

// createPages = asynchronous method, return a promises or a callback
exports.createPages = ({ actions, graphql }) => {
  
  const { createPage } = actions

  const templates = {
    singlePost: path.resolve('src/templates/single-post.js'),
    tagsPage: path.resolve('src/templates/tags-page.js'),
    tagPosts: path.resolve('src/templates/tag-posts.js')
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {

    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    // Create single blog post pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePost,
        context: {
          // Passing slug for template to use to get post
          slug: node.fields.slug,
          // Find author imageUrl from authors and pass it to the single post template
          imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl,
        }
      })
    })



    // Get all tags : ['design', 'design', 'code', ...] (duplicated values!!)
    let tags = []
    _.each(posts, edge => {
      if(_.get(edge, 'node.frontmatter.tags')){
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    // {design: 2, code: 1 }
    let tagPostCount = {}
    tags.forEach(tag => {
      // En JSON, undefined + 1 = undefined
      tagPostCount[tag] = (tagPostCount[tag] || 0) + 1;
    })

    // Remove duplicated value from array - Merci lodash !!
    tags = _.uniq(tags)

    console.log(tags)
    console.log(tagPostCount)

    // Create tags page
    createPage({
      path: '/tags/',
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCount
      }
    })


    // Create tag posts pages
    tags.forEach((tag) => {
      createPage({
        path: `/tag/${tag}`,
        component: templates.tagPosts,
        context: {
          tag,
        }
      })
    })

  })
}
