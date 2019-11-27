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
import * as literals from './flex-layout-factors-literals';

export const factors = css`
  .flex,
  .flex-1 {
    ${literals.flexFactor}
  }
  .flex-2 {
    ${literals.flex2}
  }
  .flex-3 {
    ${literals.flex3}
  }
  .flex-4 {
    ${literals.flex4}
  }
  .flex-5 {
    ${literals.flex5}
  }
  .flex-6 {
    ${literals.flex6}
  }
  .flex-7 {
    ${literals.flex7}
  }
  .flex-8 {
    ${literals.flex8}
  }
  .flex-9 {
    ${literals.flex9}
  }
  .flex-10 {
    ${literals.flex10}
  }
  .flex-11 {
    ${literals.flex11}
  }
  .flex-12 {
    ${literals.flex12}
  }
`;