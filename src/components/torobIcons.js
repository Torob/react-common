import React from 'react';

export const CrowdSourceIcon = ({ style = {}, fill = '#000', width = '100%', className = '', viewBox = '0 0 36 36' }) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill="none" fill-rule="evenodd" stroke="#333" stroke-width="3" transform="translate(0 7)">
      <circle cx="11.5" cy="11.5" r="10" />
      <circle cx="24.5" cy="11.5" r="10" />
    </g>
  </svg>
);

export const CompareIcon = ({ style = {}, fill = '#000', width = '100%', className = '', viewBox = '0 0 36 36' }) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g fill="none" fill-rule="evenodd" transform="translate(2 3)">
      <rect width="3" height="30" x="14.5" fill="#333" rx="1.5" />
      <circle cx="26" cy="15" r="6" fill="#333" />
      <circle cx="6" cy="15" r="4.5" stroke="#333" stroke-width="3" />
    </g>
  </svg>
);
