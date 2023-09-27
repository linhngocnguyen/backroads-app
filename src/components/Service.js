import React from "react";

function Service({ icon, title, text }) {
  return (
    <article class="service">
      <span class="service-icon">
        <i class={icon}></i>
      </span>
      <div class="service-info">
        <h4 class="service-title">{title}</h4>
        <p class="service-text">{text}</p>
      </div>
    </article>
  );
}

export default Service;
