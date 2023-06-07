import React from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise= loadStripe(import.meta.env.VITE_stripe_secret_pk);
const Payment = () => {
    const [cart, refetch ] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className='my-14'>
            <SectionTitle subHeading={"Pleas Provide"} heading={"Payment"}></SectionTitle>
            <h1 className='my-8 text-5xl text-center'>tk tk tk sudu tk ar tk</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} refetch={refetch} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;