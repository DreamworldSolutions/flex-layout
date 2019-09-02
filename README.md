
# flex-layout
The flex-layout component provides simple ways to use
[CSS flexible box layout](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes),
also known as flexbox. Note that this is an old element, that was written
before all modern browsers had non-prefixed flex styles. As such, nowadays you
don't really need to use this element anymore, and can use CSS flex styles
directly in your code.

This component provides two different ways to use flexbox:

The layout class stylesheet provides a simple set of class-based flexbox rules, that
let you specify layout properties directly in markup. You must include this file
in every element that needs to use them.

## Usage

### Installation
```
npm install --save @dreamworld/flex-layout
```

### In a lit element
```js
import { flexLayout, alignment } from '@dreamworld/flex-layout';

class SampleElement extends PolymerElement {
    static get styles() {
    return [
      flexLayout,
      alignment, 
      css`
      :host {
        display: block;
      }
      `
    ];
  }

  static get template() {
    return html`
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```