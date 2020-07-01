import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
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
