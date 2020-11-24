/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { css } from 'lit-element';
import * as literals from './flex-layout-literals';

export const flexLayout = css`
  .layout.horizontal,
  .layout.vertical {
    ${literals.displayFlex}
  }
  .layout.inline {
    ${literals.displayInlineFlex}
  }
  .layout.horizontal {
    ${literals.horizontal}
  }
  .layout.vertical {
    ${literals.vertical}
  }
  .layout.wrap {
    ${literals.wrap}
  }
  .layout.no-wrap {
    ${literals.noWrap}
  }
  .layout.center,
  .layout.center-center {
    ${literals.centerAligned}
  }
  .layout.center-justified,
  .layout.center-center {
    ${literals.centerJustified}
  }
  .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .flex-auto {
    ${literals.flexFactorAuto}
  }
  .flex-none {
    ${literals.flexFactorNone}
  }
`;