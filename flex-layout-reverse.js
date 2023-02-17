/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { css } from '@dreamworld/pwa-helpers/lit.js';
import * as literals from './flex-layout-reverse-literals.js';

export const reverse = css`
  .layout.horizontal-reverse,
  .layout.vertical-reverse {
    ${literals.displayFlex}
  }
  .layout.horizontal-reverse {
    ${literals.horizontalReverse}
  }
  .layout.vertical-reverse {
    ${literals.verticalReverse}
  }
  .layout.wrap-reverse {
    ${literals.wrapReverse}
  }
`;