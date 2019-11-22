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
  startAligned,
  centerAligned,
  endAligned,
  baseline,
  startJustified,
  centerJustified,
  endJustified,
  aroundJustified,
  justified,
  selfStart,
  selfCenter,
  selfEnd,
  selfStretch,
  selfBaseline,
  startAlignedContent,
  endAlignedContent,
  centerAlignedContent,
  betweenAlignedContent,
  aroundAlignedContent
} from './flex-layout-alignment-literals';
export const alignment = css`
  .layout.start {
    ${startAligned}
  }
  .layout.center,
  .layout.center-center {
    ${centerAligned}
  }
  .layout.end {
    ${endAligned}
  }
  .layout.baseline {
    ${baseline}
  }
  .layout.start-justified {
    ${startJustified}
  }
  .layout.center-justified,
  .layout.center-center {
    ${centerJustified}
  }
  .layout.end-justified {
    ${endJustified}
  }
  .layout.around-justified {
    ${aroundJustified}
  }
  .layout.justified {
    ${justified}
  }
  .self-start {
    ${selfStart}
  }
  .self-center {
    ${selfCenter}
  }
  .self-end {
    ${selfEnd}
  }
  .self-stretch {
    ${selfStretch}
  }
  .self-baseline {
    ${selfBaseline}
  }
  .layout.start-aligned {
    ${startAlignedContent}
  }
  .layout.end-aligned {
    ${endAlignedContent}
  }
  .layout.center-aligned {
    ${centerAlignedContent}
  }
  .layout.between-aligned {
    ${betweenAlignedContent}
  }
  .layout.around-aligned {
    ${aroundAlignedContent}
  }
`;