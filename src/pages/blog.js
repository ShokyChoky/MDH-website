import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from "../components/head"
import blogStyles from "../styles/blog.module.scss"

const PostPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Page all</h1>
      <ol className={blogStyles.list}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <Link
                className={blogStyles.item}
                to={`/blog/${edge.node.fields.slug}`}
              >
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PostPage
