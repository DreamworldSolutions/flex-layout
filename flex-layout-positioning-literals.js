import { css } from 'lit-element';

export const displayBlock = css`
  display: block;
`;

export const displayNone = css`
  display: none !important;
`;

export const invisible = css`
  visibility: hidden !important;
`;

export const relative = css`
  position: relative;
`;

export const fit = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const fullbleed = css`
  margin: 0;
  height: 100vh;
`

export const scroll = css`
  -webkit-overflow-scrolling: touch;
  overflow: auto;
`;

export const fixed = css`
  position: fixed;
`;

export const fixedTop = css`
  top: 0;
  left: 0;
  right: 0;
`;

export const fixedRight = css`
  top: 0;
  right: 0;
  bottom: 0;
`;

export const fixedLeft = css`
  top: 0;
  bottom: 0;
  left: 0;
`;

export const fixedBottom = css`
  right: 0;
  bottom: 0;
  left: 0;
`;
