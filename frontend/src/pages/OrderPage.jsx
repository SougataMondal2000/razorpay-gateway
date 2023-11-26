import { useState } from "react";
import Nav from "../components/Nav";
import OrderPlaced from "../components/OrderPlaced";


const orders = [
  { quanity: 2, product: "Margarita A", desc: "crab & cucumber", price: 412.0 },
  { quanity: 1, product: "Margarita B", desc: "tuna & cucumber", price: 112.0 },
  {
    quanity: 3,
    product: "Margarita C",
    desc: "smoked salmon over rice with extra sauce",
    price: 1236.0,
  },
];

const cost = orders.reduce((acc, order) => acc + order.price, 0);

const summary = [
  { cat: "Subtotal", money: cost },
  { cat: "Discount", money: -759.5 },
  { cat: "Delivery Fee", money: 12.0 },
  { cat: "Taxes", money: 46.15 },
];

export const totalCost = summary.reduce((acc, cat) => acc + cat.money, 0);

const OrderPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {

    try {
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      const options = {
        key: "rzp_test_0202rN36C3r3rq",
        currency: "INR",
        amount: Math.ceil(totalCost) * 100,
        name: "TSX PIZZARIA",
        description: "Thanks for purchasing",

        handler: async function (response) {
          await response.razorpay_payment_id;
          setPaymentSuccess(true);
        },
        prefill: {
          name: "TSX PIZZARIA",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full">
      <Nav />
      <div className="p-8 pt-4">
        <section className="flex justify-between items-center pb-2">
          <h2 className="text-xl font-extrabold">Your Order</h2>
          <button className="text-red-500 mr-4 text-sm font-extrabold">
            Add items +
          </button>
        </section>
        <section>
          <ul>
            {orders.map((item) => (
              <li
                key={item.label}
                className="flex justify-between mb-4 border-b border-gray-200"
              >
                <div>
                  <span className="bg-red-500 text-white rounded-sm px-1">
                    {item.quanity}
                  </span>
                  <span className="ml-2 font-medium ">{item.product}</span>
                  <br />
                  <p className="font-thin text-sm ml-6 mb-2">{item.desc}</p>
                </div>
                <p>₹{item.price}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-4">
          <h2 className="text-xl font-extrabold mb-8 underline decoration-red-500 decoration-4">
            Summary
          </h2>
          <div>
            <ul>
              {summary.map((item) => (
                <li
                  key={item.label}
                  className="flex justify-between border-b border-gray-200 mb-4"
                >
                  <p className="font-light">{item.cat}</p>
                  <p>₹{item.money}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between text-xl font-extrabold">
            <p>Total</p>
            <p>₹{totalCost}</p>
          </div>
        </section>
          <button
            onClick={displayRazorpay}
            className="w-full h-12 bg-black text-white rounded-lg mt-4 hover:bg-[#484848] hover:text-white"
          >
            Place Order
          </button>
      </div>
      {paymentSuccess && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <OrderPlaced />
      </div>
    )}
    </div>
  );
};

export default OrderPage;
