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
  flexFactor,
  flex2,
  flex3,
  flex4,
  flex5,
  flex6,
  flex7,
  flex8,
  flex9,
  flex10,
  flex11,
  flex12,
  
} from './flex-layout-factors-literals';
export const factors = unsafeCSS`
  .flex,
  .flex-1 {
    ${flexFactor}
  }
  .flex-2 {
    ${flex2}
  }
  .flex-3 {
    ${flex3}
  }
  .flex-4 {
    ${flex4}
  }
  .flex-5 {
    ${flex5}
  }
  .flex-6 {
    ${flex6}
  }
  .flex-7 {
    ${flex7}
  }
  .flex-8 {
    ${flex8}
  }
  .flex-9 {
    ${flex9}
  }
  .flex-10 {
    ${flex10}
  }
  .flex-11 {
    ${flex11}
  }
  .flex-12 {
    ${flex12}
  }
`;