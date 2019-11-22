import { unsafeCSS } from 'lit-element';

export const displayBlock = unsafeCSS`
  display: block;
`;

export const displayNone = unsafeCSS`
  display: none !important;
`;

export const invisible = unsafeCSS`
  visibility: hidden !important;
`;

export const relative = unsafeCSS`
  position: relative;
`;

export const fit = unsafeCSS`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const fullbleed = unsafeCSS`
  margin: 0;
  height: 100vh;
`

export const scroll = unsafeCSS`
  -webkit-overflow-scrolling: touch;
  overflow: auto;
`;

export const fixed = unsafeCSS`
  position: fixed;
`;

export const fixedTop = unsafeCSS`
  top: 0;
  left: 0;
  right: 0;
`;

export const fixedRight = unsafeCSS`
  top: 0;
  right: 0;
  bottom: 0;
`;

export const fixedLeft = unsafeCSS`
  top: 0;
  bottom: 0;
  left: 0;
`;

export const fixedBottom = unsafeCSS`
  right: 0;
  bottom: 0;
  left: 0;
`;
