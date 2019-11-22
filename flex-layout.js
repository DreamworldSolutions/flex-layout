/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { css, unsafeCSS } from 'lit-element';
import {
  displayFlex,
  displayInlineFlex,
  horizontal,
  vertical,
  wrap,
  noWrap,
  centerAligned,
  centerJustified,
  flexFactor,
  flexFactorAuto,
  flexFactorNone,

} from './flex-layout-literals';

export const flexLayout = css`
  .layout.horizontal,
  .layout.vertical {
    ${displayFlex}
  }
  .layout.inline {
    ${displayInlineFlex}
  }
  .layout.horizontal {
    ${horizontal}
  }
  .layout.vertical {
    ${vertical}
  }
  .layout.wrap {
    ${wrap}
  }
  .layout.no-wrap {
    ${noWrap}
  }
  .layout.center,
  .layout.center-center {
    ${centerAligned}
  }
  .layout.center-justified,
  .layout.center-center {
    ${centerJustified}
  }
  .flex {
    ${flexFactor}
  }
  .flex-auto {
    ${flexFactorAuto}
  }
  .flex-none {
    ${flexFactorNone}
  }
`;