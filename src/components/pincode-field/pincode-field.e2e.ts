// 
// pincode-field.e2e.ts
// 
// created by Vadivel Babu
// this file contains end to end testing for pincode component

import { newE2EPage } from '@stencil/core/testing';

describe('pincode-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pincode-field></pincode-field>');

    const element = await page.find('pincode-field');
    expect(element).toHaveClass('hydrated');
  });
});
