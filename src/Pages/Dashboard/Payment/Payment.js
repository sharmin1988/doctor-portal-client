import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripePk);

const Payment = () => {
    const booking = useLoaderData()
    const { treatment, slot, price, appointmentDate, patientName } = booking
    return (
        <div className='p-4'>
            <h2 className='text-2xl '> Payment for <strong>{treatment}</strong></h2>
            <h2 className='text-lg'>Hello!! {patientName},
                <br />
                You have to Pay <strong>${price}</strong> For your booking on {appointmentDate} at {slot}</h2>
            <div className='w-1/4 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking = {booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;