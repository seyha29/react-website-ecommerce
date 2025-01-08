// src/components/PayPalButton.js
import React, { useEffect, useState } from "react";

const PayPalButton = ({ totalAmount }) => {
  const [isPayPalLoaded, setIsPayPalLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Check if PayPal script is already loaded
    if (window.paypal) {
      setIsPayPalLoaded(true);
    } else {
      // Load PayPal SDK script if not already loaded
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=ASzxpFA3yVz3jqdzbVz1yqLJGWTPS236037Rb-mFfufbhV88qoF8iBKwCIvDnFP0UT93HO9Tae1DEP3F&components=buttons";
      script.onload = () => setIsPayPalLoaded(true);
      script.onerror = () => setIsError(true);
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (isPayPalLoaded && window.paypal && totalAmount) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount, // The total amount for the transaction
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      }).render("#paypal-button-container"); // The container where the button will be rendered
    }
  }, [isPayPalLoaded, totalAmount]);

  if (isError) {
    return <div>Error loading PayPal. Please try again later.</div>;
  }

  if (!isPayPalLoaded) {
    return <div>Loading PayPal...</div>;
  }

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
