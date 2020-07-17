import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import productStyles from "../styles/product.module.scss"

const ProductPage = () => {
  return (
    <Layout>
      <Head title="Product" />
      <h1>มัมมมมมมมมมมมมมม</h1>
      <h1>แตกพ่ายยยยยยยยยย</h1>
      <ul className={productStyles.navList}>
        <li>
          <a className={productStyles.navItem} href="/product1">
            Product 1 la
          </a>
        </li>
        <li>
          <a className={productStyles.navItem} href="/product2">
            Product 2 la
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ProductPage
