import React from "react";
import logo from "../images/logo.svg";
import SocialLink from "./SocialLink";
import { pageLinks, socialLinks } from "../data";
import PageLink from "./PageLink";
function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return <PageLink key={link.id} {...link} itemClass="nav-link" />;
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
