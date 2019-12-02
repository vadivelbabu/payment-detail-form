// 
// currency-field.tsx
// 
// created by Vadivel Babu
// this file contains currency field customized component

import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'currency-field',
  styleUrl: 'currency-field.css',
  shadow: true
})
export class CurrencyField {
  private centInput?: HTMLInputElement;
  private euroInput?: HTMLInputElement;

  @Prop() value?: string;
  @Event() refreshCurrency: EventEmitter;

  // Emit the value of curreny value to parent
  refresh() {
    this.refreshCurrency.emit(this.value);
  }
  constructor() {
    this.focusCentInput = this.focusCentInput.bind(this);
    this.focusChangetoEuro = this.focusChangetoEuro.bind(this);
  }

  // Set the focus to cent input
  focusCentInput() {
    this.centInput.focus();
  }

  // Update both cent field and Euro field based on the input
  focusChangetoEuro(e) {
    if (e.key === "Backspace") {
      if (this.euroInput.value.length === 1) {
        this.centInput.value = this.euroInput.value + this.centInput.value;
        this.euroInput.value = '';
      } else if (this.euroInput.value.length > 1) {
        this.centInput.value = this.euroInput.value[(this.euroInput.value.length - 1)] + this.centInput.value;
        this.euroInput.value = this.euroInput.value.substr(0, (this.euroInput.value.length - 1));
      }

    } else if (this.centInput.value.length > 2 && (e.keyCode > 95 && e.keyCode < 106) && this.euroInput.value.length <= 8) {
      this.euroInput.disabled = false;
      this.euroInput.value = this.euroInput.value + this.centInput.value[0];
      this.centInput.value = this.centInput.value.substr(1, 2);
    } else if (this.centInput.value.length > 2 && (e.keyCode > 95 && e.keyCode < 106)) {
      this.centInput.value = this.centInput.value.substr(0, 2);
    }

    this.value = this.euroInput.value + "." + this.centInput.value;
    this.refresh();
  }

  // Render currency component
  render() {
    return (
      <Host>
        <slot>
          <div class="currency" onClick={this.focusCentInput}>
            <span>&euro;</span>
            <input ref={el => this.euroInput = el as HTMLInputElement}
              type="text" name="Euro" class="euro" value="" disabled></input>
            <span>.</span>
            <input ref={el => this.centInput = el as HTMLInputElement}
              //onKeyPress={this.focusChangetoEuro}
              onKeyUp={this.focusChangetoEuro.bind(this)}
              type="number"
              name="Cent" class="cent">
            </input>
          </div>
        </slot>
      </Host>
    );
  }
}
