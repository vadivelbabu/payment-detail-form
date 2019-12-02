/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface CurrencyField {
    'value'?: string;
  }
  interface PaymentDetail {}
  interface PincodeField {
    'value'?: string;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCurrencyFieldElement extends Components.CurrencyField, HTMLStencilElement {}
  var HTMLCurrencyFieldElement: {
    prototype: HTMLCurrencyFieldElement;
    new (): HTMLCurrencyFieldElement;
  };

  interface HTMLPaymentDetailElement extends Components.PaymentDetail, HTMLStencilElement {}
  var HTMLPaymentDetailElement: {
    prototype: HTMLPaymentDetailElement;
    new (): HTMLPaymentDetailElement;
  };

  interface HTMLPincodeFieldElement extends Components.PincodeField, HTMLStencilElement {}
  var HTMLPincodeFieldElement: {
    prototype: HTMLPincodeFieldElement;
    new (): HTMLPincodeFieldElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'currency-field': HTMLCurrencyFieldElement;
    'payment-detail': HTMLPaymentDetailElement;
    'pincode-field': HTMLPincodeFieldElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppProfile {
    'match'?: MatchResults;
  }
  interface AppRoot {}
  interface CurrencyField {
    'onRefreshCurrency'?: (event: CustomEvent<any>) => void;
    'value'?: string;
  }
  interface PaymentDetail {}
  interface PincodeField {
    'onRefreshPinCode'?: (event: CustomEvent<any>) => void;
    'value'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'currency-field': CurrencyField;
    'payment-detail': PaymentDetail;
    'pincode-field': PincodeField;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'currency-field': LocalJSX.CurrencyField & JSXBase.HTMLAttributes<HTMLCurrencyFieldElement>;
      'payment-detail': LocalJSX.PaymentDetail & JSXBase.HTMLAttributes<HTMLPaymentDetailElement>;
      'pincode-field': LocalJSX.PincodeField & JSXBase.HTMLAttributes<HTMLPincodeFieldElement>;
    }
  }
}


