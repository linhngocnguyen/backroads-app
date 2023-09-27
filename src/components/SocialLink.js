import React from "react";

function SocialLink({ href, icon, itemClass }) {
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i class={icon}></i>
      </a>
    </li>
  );
}

export default SocialLink;
