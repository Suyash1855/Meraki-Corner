import Navbar from "@/Components/Navbar";
import React from "react";
import { useSession, getSession } from "next-auth/react";
import { moment } from "moment";
import db from "../../firebase";
import Orderr from "@/Components/Orderr";

function Orders({ orders }) {
  const { data: session } = useSession();
  console.log(orders);
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto p-10 text-black  ">
        <h1 className="border-b mb-2 pb-1 text-[30px]">Your Orders</h1>
        {session ? (
          <h2 className="text-black">{orders ? orders.length : 0} orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div>
          {orders?.map(({ id, amount, items, timestamp, images }) => (
            <Orderr
              key={id}
              id={id}
              amount={amount}
              items={items}
              timestamp={timestamp}
              images={images}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  // firbase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  console.log(stripeOrders);
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  console.log(orders);
  return {
    props: {
      orders,
    },
  };
}
