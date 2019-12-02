// 
// payment-detail.jsx
// 
// created by Vadivel Babu
// this file contains payment detail form component


import { Component, Host, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'payment-detail',
  styleUrl: 'payment-detail.css',
  shadow: true
})
export class PaymentDetail {

  constructor() {

  }

  @State() public name: string;
  @State() private acctno: string;
  @State() private ifsccode: string;
  @State() private currency: string;
  @State() private address: string;
  @State() private pincode: string;

  // Listen Input from currency field
  @Listen('refreshCurrency')
  listenCurrency(event) {
    this.currency = event.detail;
  }

  //Listen Input from pincode field
  @Listen('refreshPinCode')
  listen(event) {
    this.pincode = event.detail;
  }

  setValue(event) {
    switch (event.target.name) {
      case "name":
        this.name = event.target.value;
        break;
      case "acctno":
        this.acctno = event.target.value;
        break;
      case "ifsccode":
        this.ifsccode = event.target.value;
        break;
      case "address":
        this.address = event.target.value;
        break;
    }
  }

  // Render Form component 
  render() {
    return (
      <Host>
        <slot>
          <form>
            <h2>Enter Payment Detail</h2>
            <div class="formfields">
              <div class="form-field name"><label>Name </label>
                <input type="text" name="name" onInput={(event) => this.setValue(event)} value={this.name}></input>
              </div>
              <div class="form-field accountno"><label>Account No </label>
                <input type="text" name="acctno" onInput={(event) => this.setValue(event)} value={this.acctno}></input>
              </div>

              <div class="form-field ifsccode"><label>IFSC Code </label>
                <input name="ifsccode" onInput={(event) => this.setValue(event)} value={this.ifsccode} type="text"></input>
              </div>
              <div class="form-field" ><label>Curreny </label><currency-field ></currency-field></div>
              <div class="form-field address"><label>Address </label>
                <input name="address" onInput={(event) => this.setValue(event)} value={this.address} type="text"></input>
              </div>
              <div class="form-field"><label>Pincode </label>
                <pincode-field></pincode-field>
              </div>
              <button>Submit</button>
            </div>
            <div class="formfields">
              <h2>Details</h2>
              <table>
                <tr><td>Name:</td><td>{this.name}</td></tr>
                <tr><td>Account No:</td><td>{this.acctno}</td></tr>
                <tr><td>IFSC Code:</td><td>{this.ifsccode}</td></tr>
                <tr><td>Curreny:</td><td>{this.currency}</td></tr>
                <tr><td>Address:</td><td>{this.address}</td></tr>
                <tr><td>Pincode:</td><td>{this.pincode}</td></tr>
              </table>
            </div>
          </form>
        </slot>
      </Host>
    );
  }

}
