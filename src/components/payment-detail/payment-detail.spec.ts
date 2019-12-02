// 
// payment-detail.spec.ts
// 
// created by Vadivel Babu
// this file contains unit testing for payment detail component

import { PaymentDetail } from './payment-detail';

describe('payment-detail', () => {
  it('builds', () => {
    expect(new PaymentDetail()).toBeTruthy();
  });
});

describe('the componetWillLoad function works fine', () => {
  it('should assign the value null to Pincode Value', () => {
    const componentLoad = new PaymentDetail();
    const newName = new HTMLInputElement;
    newName.name = "name"
    componentLoad.setValue(newName.oninput)
    expect(componentLoad.name).toEqual("name");

  });
});
