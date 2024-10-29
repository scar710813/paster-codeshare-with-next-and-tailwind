// src/lib/paymentService.js
import paypal from 'paypal-rest-sdk';

// Configure PayPal SDK
paypal.configure({
    'mode': process.env.PAYPAL_MODE, // 'sandbox' or 'live'
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET,
});

export const createPayment = (amount, currency) => {
    return new Promise((resolve, reject) => {
        const paymentData = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal',
            },
            redirect_urls: {
                return_url: `${process.env.NEXT_PUBLIC_URL}/success`, // URL to redirect after payment
                cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`, // URL to redirect on cancellation
            },
            transactions: [{
                amount: {
                    total: amount,
                    currency: currency,
                },
                description: 'Premium Subscription Payment',
            }],
        };

        paypal.payment.create(paymentData, (error, payment) => {
            if (error) {
                console.error("PayPal Payment Error:", error);
                return reject(error);
            }
            resolve(payment);
        });
    });
};