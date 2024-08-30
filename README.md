Certainly! Here's the content formatted and ready to be copied directly into your README file:

---

# Next.js E-commerce Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Prerequisites

Before running the application, you need to set up environment variables for Clerk and Stripe.

### Environment Variables

Create a `.env.local` file in the root of your project and add the following:

```bash
# Clerk
NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API Key>
CLERK_API_KEY=<Your Clerk API Key>

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
STRIPE_WEBHOOK_SECRET=<Your Stripe Webhook Secret>
```

Replace the placeholders with your actual API keys.

## Setup Clerk

1. **Sign up for a Clerk account** at [Clerk.dev](https://clerk.dev).
2. **Create a new application** and obtain your Frontend API and Clerk API keys.
3. Add the keys to your `.env.local` file as described above.
4. Follow the [Clerk documentation](https://clerk.dev/docs) to integrate Clerk into your Next.js application.

## Setup Stripe

1. **Sign up for a Stripe account** at [Stripe.com](https://stripe.com).
2. **Create a new project** and obtain your Publishable Key and Secret Key.
3. Add the keys to your `.env.local` file as described above.

### Setting up Stripe Webhooks

1. **Create a webhook endpoint** in your Stripe Dashboard.
2. **Set the webhook URL** to point to your local or deployed application, e.g., `http://localhost:3000/api/webhooks/stripe`.
3. **Select events** you want to listen to, such as `payment_intent.succeeded` and `checkout.session.completed`.
4. **Add the webhook secret** to your `.env.local` file as `STRIPE_WEBHOOK_SECRET`.

In your application, you can handle the webhooks in the corresponding API route:

```typescript
import { buffer } from "micro";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];
  
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

Copy and paste this content into your README file. This will help guide users through the process of setting up Clerk, Stripe, and their webhooks in your Next.js project.