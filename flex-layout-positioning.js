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
export const positioning = css`
  .block {
    display: block;
  }
  /* IE 10 support for HTML5 hidden attr */
  [hidden] {
    display: none !important;
  }
  .invisible {
    visibility: hidden !important;
  }
  .relative {
    position: relative;
  }
  .fit {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  body.fullbleed {
    margin: 0;
    height: 100vh;
  }
  .scroll {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }
  .fixed-bottom,
  .fixed-left,
  .fixed-right,
  .fixed-top {
    position: fixed;
  }
  .fixed-top {
    top: 0;
    left: 0;
    right: 0;
  }
  .fixed-right {
    top: 0;
    right: 0;
    bottom: 0;
  }
  .fixed-bottom {
    right: 0;
    bottom: 0;
    left: 0;
  }
  .fixed-left {
    top: 0;
    bottom: 0;
    left: 0;
  }
`;