import { PaymentStripeResponse } from 'models/payment/paymentStripeResponse';
import axiosClient from './axiosClient';

const paymentApi = {
  createStripePayment(): Promise<PaymentStripeResponse> {
    const url = `/payment/custom-checkout-session`;
    return axiosClient.get(url);
  },
};

export default paymentApi;
