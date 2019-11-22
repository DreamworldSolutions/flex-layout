import { unsafeCSS } from 'lit-element';

export const displayFlex = unsafeCSS`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

export const horizontalReverse = unsafeCSS`
  -ms-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
`;

export const verticalReverse = unsafeCSS`
  -ms-flex-direction: column-reverse;
  -webkit-flex-direction: column-reverse;
  flex-direction: column-reverse;
`;

export const wrapReverse = unsafeCSS`
  -ms-flex-wrap: wrap-reverse;
  -webkit-flex-wrap: wrap-reverse;
  flex-wrap: wrap-reverse;
`;