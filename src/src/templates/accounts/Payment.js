import Axios from "axios";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../environment/development";
import '../accounts/Payment.css';
// import './App.css';
import { Button } from 'react-bootstrap';
// import { Route, Routes } from "react-router-dom";

import rec from '../assets/pinksquare.png'
import pays from '../assets/payhero.png'
import pink from '../assets/rectanglepink.png';
import tree from '../assets/tree.png'
import line from '../assets/line.png'


function Payment() {

  const [name, setName] = useState("Starter");
  const [amount, setAmount] = useState("999");

// this function will handel payment when user submit his/her money
// and it will confim if payment is successfull or not
  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await Axios({
        url: `${backendUrl}/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          setName("");
          setAmount("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // new code
   function loadRazorpayScript(src) {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}

//function will get called when clicked on the pay button.
async function displayRazorpayPaymentSdk() {
const res = await loadRazorpayScript(
    "https://checkout.razorpay.com/v1/checkout.js"
);

if (!res) {
    alert("Razorpay SDK failed to load. please check are you online?");
    return;
}

// creating a new order and sending order ID to backend
const result = await axios.post("http://127.0.0.1:8000/pay/", {
  "name":name,
    "amount" : amount
});

if (!result) {
    alert("Server error. please check are you online?");
    return;
}

// Getting the order details back
//  const {merchantId=null , amount=null,currency=null,orderId=null } = result.data;

const options = {
    key: "rzp_test_nW4W3Z3irQjkIr",
    amount: result.data.payment.amount,
    currency: "INR",
    name: "Netfotech Solutions",
    description: "Test Transaction",
    image: {  },
    order_id: result.data.payment.id,
    handler: function (response) {
       // we will handle success by calling handlePaymentSuccess method and
         // will pass the response that we've got from razorpay
      handlePaymentSuccess(response);
       },
    redirect: true,
  //   prefill: {
  //     name: "Swapnil Pawar",
  //     email: "swapnil@example.com",
  //     contact: "9999999999",
  // },
    notes: {
        address: "None",
    },
    theme: {
        color: "#61dafb",
    },
};

const paymentObject = new window.Razorpay(options);
paymentObject.open();
}



  return (
<>
       <div>
        <img class="hero" src={rec} alt="" />
       </div>
      <div className="text">
        <td>
          <tr>
            <h3>Explore Our Plans & Pricing</h3>
            <p>
            We offer a range of plans designed to provide you with the <br/> support you need, at a price that fits your budget. Discover the <br/> options below and choose the plan that aligns with your <br/> mental health journey.
            </p>
          </tr>
        </td>
      </div>
      <div>
        <img class="pays" src={pays} alt="" />
       </div>
       <br/>
       <br/>
       <div>
        <img class="pink" src={pink} alt="" />
       </div>
       <div className="text1">
        <h3>Plans & Pricing</h3>
        <p>Find a Plan thats best for you</p>
       </div>

  <div className="">
   <br/>
    <div className="paycontain">

   
    <div className="book_container">
      <h5>Starter</h5>
      <img src={tree} alt="book_img" className="book_img"/>
      <div className="text2">
        <p>1 session</p>
        <img src={line} alt="book_img" className="line"/>

        <h6>Features</h6>
      </div>


      <div className="text3">
        <td>
          <tr>
            <p>
            I week of Chat Access <br/> 2 Assessment Tests <br/> 45 mins Session
            </p>
          </tr>
        </td>
        <img src={line} alt="book_img" className="line1"/>
      </div>
    <hr/>
      

      <p className="book_price">
        <span>&#x20B9;{amount}</span>
      </p>
      <button onClick={displayRazorpayPaymentSdk} className="buy_btn">
        Buy now
      </button>
    </div>
    </div>

  </div>



  </>
  );
}




export default Payment;
