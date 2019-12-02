// 
// currency-field.e2e.ts
// 
// created by Vadivel Babu
// this file contains end to end testing for currency field component

import { newE2EPage } from '@stencil/core/testing';

describe('currency-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<currency-field></currency-field>');

    const element = await page.find('currency-field');
    expect(element).toHaveClass('hydrated');
  });
});
