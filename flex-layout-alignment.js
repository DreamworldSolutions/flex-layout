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
import * as literals from './flex-layout-alignment-literals';
export const alignment = css`
  .layout.start {
    ${literals.startAligned}
  }
  .layout.center,
  .layout.center-center {
    ${literals.centerAligned}
  }
  .layout.end {
    ${literals.endAligned}
  }
  .layout.baseline {
    ${literals.baseline}
  }
  .layout.start-justified {
    ${literals.startJustified}
  }
  .layout.center-justified,
  .layout.center-center {
    ${literals.centerJustified}
  }
  .layout.end-justified {
    ${literals.endJustified}
  }
  .layout.around-justified {
    ${literals.aroundJustified}
  }
  .layout.justified {
    ${literals.justified}
  }
  .self-start {
    ${literals.selfStart}
  }
  .self-center {
    ${literals.selfCenter}
  }
  .self-end {
    ${literals.selfEnd}
  }
  .self-stretch {
    ${literals.selfStretch}
  }
  .self-baseline {
    ${literals.selfBaseline}
  }
  .layout.start-aligned {
    ${literals.startAlignedContent}
  }
  .layout.end-aligned {
    ${literals.endAlignedContent}
  }
  .layout.center-aligned {
    ${literals.centerAlignedContent}
  }
  .layout.between-aligned {
    ${literals.betweenAlignedContent}
  }
  .layout.around-aligned {
    ${literals.aroundAlignedContent}
  }
`;