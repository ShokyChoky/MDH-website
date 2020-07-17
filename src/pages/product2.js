import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import product2Styles from "../styles/product2.module.scss"

const product2Page = () => {
  return (
    <Layout>
      <Head title="Product 1" />
      <h1 className={product2Styles.header}>Nothing here yet</h1>
    </Layout>
  )
}

export default product2Page
