import { unsafeCSS } from 'lit-element';

export const displayFlex = unsafeCSS`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

export const displayInlineFlex = unsafeCSS`
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
`;

export const horizontal = unsafeCSS`
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
`;

export const vertical = unsafeCSS`
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
`;

export const wrap = unsafeCSS`
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const noWrap = unsafeCSS`
  -ms-flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
`;

export const centerAligned = unsafeCSS`
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const centerJustified = unsafeCSS`
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;

export const flexFactor = unsafeCSS`
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
`;

export const flexFactorAuto = unsafeCSS`
  -ms-flex: 1 1 auto;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
`;

export const flexFactorNone = unsafeCSS`
  -ms-flex: none;
  -webkit-flex: none;
  flex: none;
`;
