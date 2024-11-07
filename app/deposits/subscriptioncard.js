// app/deposits/subscriptioncard.js
'use client';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function SubscriptiontCard() {
    return (
        <Card className="cursor-pointer max-w-md ml-4 mt-10">
            <CardHeader>
                <CardTitle>Get benefits with a subscription</CardTitle>
                <CardDescription>Secure your payment with Stripe</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Click below to proceed with your subscription.</p>
            </CardContent>
            <CardFooter>
                <Link href="/deposits/subscription">
                    <Button>Purchase Subscription</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
