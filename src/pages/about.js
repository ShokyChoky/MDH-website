import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>เกี่ยวกับเรา</h1>
      <p>
        about time you <Link to="/contact">contact</Link> me
      </p>
    </Layout>
  )
}

export default AboutPage
