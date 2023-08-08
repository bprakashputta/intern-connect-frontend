import React, { useState } from "react";
import axios from "../api/base";

const Razorpay = () => {
  const [userAmount, setUserAmount] = useState("");

  const handleInputChange = (event) => {
    setUserAmount(event.target.value);
  };

  const createOrder = async () => {
    const parsedAmount = parseInt(userAmount, 10);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }

    try {
      const response = await axios.post(
        "http://www.localhost:8080/payment/order",
        {
          amount: parsedAmount,
        }
      );
      console.log(response);

      const { data } = response;

      return data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  const checkoutHandler = async () => {
    try {
      const order = await createOrder();
      const {
        data: { key_id },
      } = await axios.get("http://www.localhost:8080/payment/get-key");
      console.log(key_id);

      const options = {
        key: key_id,
        amount: order.data.amount,
        currency: "INR",
        name: "InternConnect",
        description: "Payment for Intern Completion",
        order_id: order.data.id,
        callback_url: "http://localhost:8080/payment/paymentverification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);

      razor.open();
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Error during checkout: " + error.message);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "4px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <input
              type="number"
              placeholder="Enter amount"
              value={userAmount}
              onChange={handleInputChange}
              style={{ margin: "0 10px", padding: "5px", fontSize: "16px" }}
            />
            <span
              style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}
            >
              ₹{userAmount}
            </span>
            <button
              style={{
                padding: "8px 16px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
              onClick={checkoutHandler}
            >
              Issue Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Razorpay;
