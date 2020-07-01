import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>เกี่ยวกับเรา</h1>
      <p>
        about time you <Link to="/contact">contact</Link> me
      </p>
    </Layout>
  )
}

export default AboutPage
