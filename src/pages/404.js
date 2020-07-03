import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <a href="/">Go home?</a>
    </Layout>
  )
}

export default NotFound
