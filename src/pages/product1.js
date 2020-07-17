import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import product1Styles from "../styles/product1.module.scss"

const product1Page = () => {
  return (
    <Layout>
      <Head title="Product 1" />
      <h1 className={product1Styles.header}>Nothing here yet</h1>
    </Layout>
  )
}

export default product1Page
