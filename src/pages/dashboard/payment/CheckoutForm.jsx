import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import  './checkoutForm.css'

const CheckoutForm = ({price, cart , refetch}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = UseAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect( () => {
    if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret);
    })
    }
  },[price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if(error){
      console.log('error', error)
      setCardError(error.message);
    }
    else{
      setCardError("");
      // console.log('payment method', paymentMethod)
    }
    setProcessing(true);
    const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method : {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    if(confirmError){
      console.log(confirmError)
    }
    console.log("payment-intent", paymentIntent);
    setProcessing(false);
    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        data: new Date(),
        quantity: cart.length,
        cartItems : cart.map(item => item._id),
        menuItems : cart.map(item => item.foodItemId),
        status : 'service pending',
        itemNames : cart.map(item => item.name)
      }
      axiosSecure.post('/payments', payment)
      .then( res => {
        console.log(res.data)

        if(res.data.insertResult.insertedId){
          refetch();
        }
      })
    }
  }
  return (
    <div className='mx-8'>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600'>{cardError}</p>}
      {transactionId && <p className='text-green-600 my-2'>Transaction Complete with TransactionId: {transactionId}</p>}
    </div>
  );
};

export default CheckoutForm;
