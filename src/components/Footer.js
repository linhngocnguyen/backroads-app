import React from "react";
import { pageLinks, socialLinks } from "../data";
import SocialLink from "./SocialLink";
import PageLink from "./PageLink";
function Footer() {
  return (
    <footer class="section footer">
      <ul className="footer-links" id="footer-links">
        {pageLinks.map((link) => {
          return <PageLink key={link.id} {...link} itemClass="footer-link" />;
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
