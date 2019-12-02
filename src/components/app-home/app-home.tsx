// 
// app-home.tsx
// 
// created by Vadivel Babu
// this file contains root component of the module
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <payment-detail></payment-detail>
      </div>
    );
  }
}
