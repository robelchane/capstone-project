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

export default function PaymentCard() {
    return (
        <Card className="cursor-pointer max-w-md ml-4 mt-10">
            <CardHeader>
                <CardTitle>Make a Deposit</CardTitle>
                <CardDescription>Secure your payment with Stripe</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Click below to proceed with your deposit.</p>
            </CardContent>
            <CardFooter>
                <Link href="/deposits-page/page">
                    <Button>Process to Payment</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
