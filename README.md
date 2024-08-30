Prerequisites
Before running the application, you need to set up environment variables for Clerk and Stripe.

Environment Variables
Create a .env.local file in the root of your project and add the following:

bash
Copy code
# Clerk
NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API Key>
CLERK_API_KEY=<Your Clerk API Key>

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
STRIPE_WEBHOOK_SECRET=<Your Stripe Webhook Secret>
Replace the placeholders with your actual API keys.

Setup Clerk
Sign up for a Clerk account at Clerk.dev.
Create a new application and obtain your Frontend API and Clerk API keys.
Add the keys to your .env.local file as described above.
Follow the Clerk documentation to integrate Clerk into your Next.js application.
Setup Stripe
Sign up for a Stripe account at Stripe.com.
Create a new project and obtain your Publishable Key and Secret Key.
Add the keys to your .env.local file as described above.
Setting up Stripe Webhooks
Create a webhook endpoint in your Stripe Dashboard.
Set the webhook URL to point to your local or deployed application, e.g., http://localhost:3000/api/webhooks/stripe.
Select events you want to listen to, such as payment_intent.succeeded and checkout.session.completed.
Add the webhook secret to your .env.local file as STRIPE_WEBHOOK_SECRET.
In your application, you can handle the webhooks in the corresponding API route:

typescript
Copy code
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
Running the Application
Once everything is set up, you can start the development server with:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 with your browser to see the result.

Ensure that the webhooks are correctly configured and that the API keys are valid to avoid any issues during development.