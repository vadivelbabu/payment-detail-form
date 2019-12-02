// 
// payment-detail.e2e.ts
// 
// created by Vadivel Babu
// this file contains end to end testing for payment detail component

import { newE2EPage } from '@stencil/core/testing';

describe('payment-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<payment-detail></payment-detail>');

    const element = await page.find('payment-detail');
    expect(element).toHaveClass('hydrated');
  });
});
