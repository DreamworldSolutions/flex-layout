import { css } from 'lit-element';

export const displayFlex = css`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

export const horizontalReverse = css`
  -ms-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
`;

export const verticalReverse = css`
  -ms-flex-direction: column-reverse;
  -webkit-flex-direction: column-reverse;
  flex-direction: column-reverse;
`;

export const wrapReverse = css`
  -ms-flex-wrap: wrap-reverse;
  -webkit-flex-wrap: wrap-reverse;
  flex-wrap: wrap-reverse;
`;