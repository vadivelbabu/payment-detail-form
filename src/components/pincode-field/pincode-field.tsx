// 
// pincode-field.jsx
// 
// created by Vadivel Babu
// this file contains pincode customised component code

import { Component, Host, h, Prop, EventEmitter, Event, State } from '@stencil/core';

@Component({
  tag: 'pincode-field',
  styleUrl: 'pincode-field.css',
  shadow: true
})
export class PincodeField {
  private postofficeInput?: HTMLInputElement;
  private zoneInput?: HTMLInputElement;
  private requireClass?: string;

  @Prop() value?: string;
  @Event() refreshPinCode: EventEmitter;
  @State() requireStatus: boolean;

  // Emit the value of pincodefield to parent
  refresh() {
    this.refreshPinCode.emit(this.value);

  }

  constructor() {
    this.focusPostofficeInput = this.focusPostofficeInput.bind(this);
    this.focusChangetoZone = this.focusChangetoZone.bind(this);
  }

  // Set the focus to last three digit input 
  focusPostofficeInput() {
    this.postofficeInput.focus();
  }

  // Update both zone field and postoffice field based on the input 
  focusChangetoZone(e) {
    if (e.key === "Backspace") {
      if (this.zoneInput.value.length == 1) {
        this.postofficeInput.value = this.zoneInput.value + this.postofficeInput.value;
        this.zoneInput.value = '';
      } else if (this.zoneInput.value.length > 1) {
        this.postofficeInput.value = this.zoneInput.value[(this.zoneInput.value.length - 1)] + this.postofficeInput.value;
        this.zoneInput.value = this.zoneInput.value.substr(0, (this.zoneInput.value.length - 1));
      }

    } else if (this.postofficeInput.value.length > 2 && (e.keyCode > 95 && e.keyCode < 106) && this.zoneInput.value.length <= 2) {
      this.zoneInput.disabled = false;
      this.zoneInput.value = this.zoneInput.value + this.postofficeInput.value[0];
      this.postofficeInput.value = this.postofficeInput.value.substr(1, 2);
    } else if (this.postofficeInput.value.length > 2 && (e.keyCode > 95 && e.keyCode < 106)) {
      this.postofficeInput.value = this.postofficeInput.value.substr(0, 3);
    }

    this.value = this.zoneInput.value + this.postofficeInput.value;
    this.refresh();
  }

  // Render pincode component 
  render() {
    return (
      <Host>
        <slot>
          <div class={'pincode ' + this.requireClass} onClick={this.focusPostofficeInput}>
            <input ref={el => this.zoneInput = el as HTMLInputElement}
              type="text" name="Zone" class="zone" disabled></input>
            <span> </span>
            <input ref={el => this.postofficeInput = el as HTMLInputElement}
              onKeyUp={this.focusChangetoZone.bind(this)}
              type="number"
              name="Postoffice" class="postoffice">
            </input>
          </div>
        </slot>
      </Host>
    );
  }
}
