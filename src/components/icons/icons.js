import React from "react";

const plusIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 0C3.15 0 0 3.15 0 7C0 10.85 3.15 14 7 14C10.85 14 14 10.85 14 7C14 3.15 10.85 0 7 0ZM10.5 7.875H7.875V10.5H6.125V7.875H3.5V6.125H6.125V3.5H7.875V6.125H10.5V7.875Z"
      fill="currentColor"
    />
  </svg>
);

const location = (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0.26001C2.65714 0.26001 0 2.91715 0 6.26001C0 7.88858 0.6 9.43144 1.8 10.5457C1.88571 10.6314 5.31429 13.7172 5.4 13.8029C5.74286 14.06 6.25714 14.06 6.51429 13.8029C6.6 13.7172 10.1143 10.6314 10.1143 10.5457C11.3143 9.43144 11.9143 7.88858 11.9143 6.26001C12 2.91715 9.34286 0.26001 6 0.26001ZM6 7.9743C5.05714 7.9743 4.28571 7.20287 4.28571 6.26001C4.28571 5.31715 5.05714 4.54572 6 4.54572C6.94286 4.54572 7.71429 5.31715 7.71429 6.26001C7.71429 7.20287 6.94286 7.9743 6 7.9743Z" fill="currentColor"/>
  </svg>
);

const eye = (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.363525C4.36364 0.363525 1.25818 2.62534 0 5.81807C1.25818 9.0108 4.36364 11.2726 8 11.2726C11.6364 11.2726 14.7418 9.0108 16 5.81807C14.7418 2.62534 11.6364 0.363525 8 0.363525ZM8 9.45443C5.99273 9.45443 4.36364 7.82534 4.36364 5.81807C4.36364 3.8108 5.99273 2.18171 8 2.18171C10.0073 2.18171 11.6364 3.8108 11.6364 5.81807C11.6364 7.82534 10.0073 9.45443 8 9.45443ZM8 3.63625C6.79273 3.63625 5.81818 4.6108 5.81818 5.81807C5.81818 7.02534 6.79273 7.99989 8 7.99989C9.20727 7.99989 10.1818 7.02534 10.1818 5.81807C10.1818 4.6108 9.20727 3.63625 8 3.63625Z" fill="currentColor"/>
  </svg>
);

const selectIcon = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.41506 6.65079L7.24084 11.1142C7.60026 11.5335 8.23156 11.5821 8.65089 11.2227C8.68977 11.1893 8.72603 11.1531 8.75935 11.1142L12.5851 6.65079C12.9446 6.23147 12.896 5.60017 12.4767 5.24074C12.2954 5.08539 12.0646 5 11.8259 5L4.17432 5C3.62203 5 3.17432 5.44772 3.17432 6C3.17432 6.23871 3.25971 6.46955 3.41506 6.65079Z" fill="#1A051D"/>
</svg>);

const clock = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8C14 4.7 11.3 2 8 2ZM11 8.75H7.25V5H8.75V7.25H11V8.75Z" fill="#1A051D"/>
  </svg>
);


export { plusIcon, location, eye, selectIcon, clock };
