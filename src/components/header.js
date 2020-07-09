import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Medihealth Consultant Co., Ltd.
        </Link>
      </h1>
      <h2>The Innovative solution for Skin and Health</h2>
      <nav className={headerStyles.table}>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} to="/">
              หน้าแรก
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/about">
              เกี่ยวกับเรา
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/product">
              สินค้า
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/blog">
              บทความ
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/contact">
              ติดต่อ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
