// src/app/api/payment/route.js
import { NextResponse } from 'next/server';
import { createPayment } from '@/lib/paymentService'; // Import your payment function

export async function POST(request) {
    try {
        const { amount, currency } = await request.json();

        if (!amount || !currency) {
            return NextResponse.json({ error: 'Amount and currency are required.' }, { status: 400 });
        }

        // Create payment
        const payment = await createPayment(amount, currency);
        return NextResponse.json(payment, { status: 200 });
    } catch (error) {
        console.error("Payment API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}