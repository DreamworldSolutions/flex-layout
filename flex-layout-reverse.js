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
export const reverse = css`
  .layout.horizontal-reverse,
  .layout.vertical-reverse {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .layout.horizontal-reverse {
    -ms-flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .layout.vertical-reverse {
    -ms-flex-direction: column-reverse;
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  .layout.wrap-reverse {
    -ms-flex-wrap: wrap-reverse;
    -webkit-flex-wrap: wrap-reverse;
    flex-wrap: wrap-reverse;
  }
`;