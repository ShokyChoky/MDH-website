import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <p>
        ติดต่อเรา? <a href="/contact">Contact me</a> or{" "}
        <Link to="/contact">Contact me faster</Link>
      </p>
      <p>Created by noob-who-need-helps, ©6969</p>
    </footer>
  )
}

export default Footer
