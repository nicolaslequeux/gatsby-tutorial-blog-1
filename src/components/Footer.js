import React from "react"

import { FaFacebookF } from 'react-icons/fa';
import { GiRam } from "react-icons/gi";

const Footer = () => (

  <div className="site-footer">
    <h4 className="text-center">
      Code Blog
    </h4>
    <p className="text-center">Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a href="https://bing.fr" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF size="1.25rem"/></a>
        </li>
        <li>
          <a href="https://bing.fr" target="_blank" rel="noopener noreferrer" className="facebook"><GiRam size="1.2rem"/></a>
        </li>
      </ul>
    </div>
  </div>

)

export default Footer