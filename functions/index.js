const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HVbNZCv5CV4EYa6KuNp6LfyGwiWTPx1YRMiIIgtUTUtxVhD8ZceUUvNwbFIs1ey3RAKzHLRQ1HFc3Ozs8qx4ExP00nEoyLNgj"
);

//API

// App - config

const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API route
app.get("/", (req, res) => {
  res.status(200).send("hello World");
});

app.post("/payment/create", async (req, res) => {
  const total = Math.round(req.query.total);

  console.log("Payment requires received for this amount >>>:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1 * 100,
    currency: "inr",
    receipt_email: "saksham695@gmail.com",
    description: ` purchase of items`,

    shipping: {
      name: "saksham",
      address: {
        city: "mumbai",
        country: "india",
        line1: "unr",
        line2: "thane",
        postal_code: "421005",
        state: "maharashtra",
      },
    },
  });

  console.log("PAYMENT INTENT", paymentIntent);
  //OK - Create
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-840bb/us-central1/api
