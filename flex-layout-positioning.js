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
import * as literals from './flex-layout-positioning-literals.js';

export const positioning = css`
  .block {
    ${literals.displayBlock}
  }
  /* IE 10 support for HTML5 hidden attr */
  [hidden] {
    ${literals.displayNone}
  }
  .invisible {
    ${literals.invisible}
  }
  .relative {
    ${literals.relative}
  }
  .fit {
    ${literals.fit}
  }
  body.fullbleed {
    ${literals.fullbleed}
  }
  .scroll {
    ${literals.scroll}
  }
  .fixed-bottom,
  .fixed-left,
  .fixed-right,
  .fixed-top {
    ${literals.fixed}
  }
  .fixed-top {
    ${literals.fixedTop}
  }
  .fixed-right {
    ${literals.fixedRight}
  }
  .fixed-bottom {
    ${literals.fixedBottom}
  }
  .fixed-left {
    ${literals.fixedLeft}
  }
`;