import {unsafeCSS} from 'lit-element';

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
  ${verticalReverse}
`;

export const wrapReverse = unsafeCSS`
  ${wrapReverse}
`;