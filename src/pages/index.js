import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const IndexPage = () => {
  return (
    <Layout>
      <GatsbySeo description="This should tell something about home page." />
      <Head title="Home" />
      <h1>นี่คือหน้าหลักจ้าาา</h1>
      <h2>บลาๆๆ</h2>
      <p>
        ติดต่อเรา? <a href="/contact">Contact me</a> or{" "}
        <Link to="/contact">Contact me faster</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
