import React from "react";

const Icon = ({ hw, icon }) => (
  <svg height={hw} width={hw} viewBox="0 0 1024 1024">
    <g fill="#f2f2f2">
      <path d={icon} />
    </g>
  </svg>
);

export default Icon;
