/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const Stripe = require('stripe');
const stripe = Stripe('pk_test_51N70eXSBBWC6dRkuKM4brLPKe3NNcyOocrZaXJPBPCsDg9J17RPGfwrKGhNOxqqgaVVGz3qXNWnRpiCT9oPxpLuj009yZS73jR');

export const bookTour = async (tourId) => {
  try {
   
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);
 
    
    //await stripe.redirectToCheckout({
    //  sessionId: session.data.session.id,
    //});
 
    //works as expected
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
