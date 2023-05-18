import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {

  @property()
  docsHint = 'Created by Adrian Statescu'

  @property({ type: Number })
  num = 123

  @property({ type: Number })
  inputfield = 0


  @property({ type: Number })
  result = "?"

  render() {
    return html`
     <h1>Square Root Babilonian Method</h1>          
     <div>
     <input id="newitem" aria-label="New item">
    
     <button @click=${this._onClick} part="button">       
     Enter
     </button>
     <div>Sqrt(${this.num}) = ${this.result}</div>    
     <h1 id=>result = ${this.result}</h1> 
     </div>
     <p class="read-the-docs">&copy;${this.docsHint}</p>   
  `;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  private _onClick() {   
    let inp = parseInt(this.input.value)
    var n = inp
    var x = n
    var y = 1.0
    var eps = 0.0000001
    while(x-y>eps) {
         x = (x + y) / 2
         y = n / x 
    }
    this.result = x
  }
}