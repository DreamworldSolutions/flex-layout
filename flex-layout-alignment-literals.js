import { css } from 'lit-element';

export const startAligned = css`
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
`;

export const centerAligned = css`
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const endAligned = css`
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
`;

export const baseline = css`
  -ms-flex-align: baseline;
  -webkit-align-items: baseline;
  align-items: baseline;
`;

export const startJustified = css`
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
`;

export const centerJustified = css`
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;

export const endJustified = css`
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
`;

export const aroundJustified = css`
  -ms-flex-pack: distribute;
  -webkit-justify-content: space-around;
  justify-content: space-around;
`;

export const justified = css`
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
`;

export const selfStart = css`
  -ms-align-self: flex-start;
  -webkit-align-self: flex-start;
  align-self: flex-start;
`;

export const selfCenter = css`
  -ms-align-self: center;
  -webkit-align-self: center;
  align-self: center;
`;

export const selfEnd = css`
  -ms-align-self: flex-end;
  -webkit-align-self: flex-end;
  align-self: flex-end;
`;

export const selfStretch = css`
  -ms-align-self: stretch;
  -webkit-align-self: stretch;
  align-self: stretch;
`;

export const selfBaseline = css`
  -ms-align-self: baseline;
  -webkit-align-self: baseline;
  align-self: baseline;
`;

export const startAlignedContent = css`
  -ms-flex-line-pack: start; /* IE10 */
  -ms-align-content: flex-start;
  -webkit-align-content: flex-start;
  align-content: flex-start;
`;

export const endAlignedContent = css`
  -ms-flex-line-pack: end; /* IE10 */
  -ms-align-content: flex-end;
  -webkit-align-content: flex-end;
  align-content: flex-end;
`;

export const centerAlignedContent = css`
  -ms-flex-line-pack: center; /* IE10 */
  -ms-align-content: center;
  -webkit-align-content: center;
  align-content: center;
`;

export const betweenAlignedContent = css`
  -ms-flex-line-pack: justify; /* IE10 */
  -ms-align-content: space-between;
  -webkit-align-content: space-between;
  align-content: space-between;
`;

export const aroundAlignedContent = css`
  -ms-flex-line-pack: distribute; /* IE10 */
  -ms-align-content: space-around;
  -webkit-align-content: space-around;
  align-content: space-around;
`;


