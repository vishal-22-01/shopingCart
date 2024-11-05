import React, { useEffect, useState } from "react";
import CustomHeading from "./shared/Heading";
import dummyImg from "../assets/dummy-img.jpg";
import IncDec from "./shared/IncDec";
import { getCart } from "../utils";

const Cart = ({ updateCart, setUpdateCart }) => {
  const [carts, setCarts] = useState([]);
  console.log(carts);
  
  
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState({
    shipmentaddress: "",
    billingaddress: "",
  });
 

  useEffect(() => {
    const data = getCart();
    const getTotal =
      data.length > 0
        ? data
            ?.map((item) => {
              return item.price * item.count;
            })
            ?.reduce((acc, newItem) => {
              return acc + newItem;
            })
        : 0;
    setTotal(getTotal);
    setCarts([...data]);
  }, [updateCart]);

  
  return (
    <aside className="w-full md:w-1/4 p-4 flex flex-col space-y-10">
      <CustomHeading text={"Cart Details"} />
      {carts.length > 0 ? (
        carts.map((cart) => {
          return (
            <section className="flex p-2 " key={cart?.id}>
              <img
                src={dummyImg}
                alt="dummy-img"
                className="w-[100px] h-[100px] rounded-xl"
              />
              <div>
                <h3 className="text-lg font-medium uppercase">{cart.name}</h3>
                <p className="text-base font-medium">Rs. {cart.price}</p>
                <IncDec
                  count={cart.count}
                  product={cart}
                  setUpdateCart={setUpdateCart}
                  updateCart={updateCart}
                />
              </div>
            </section>
          );
        })
      ) : (
        <p>Empty Cart 😢</p>
      )}

      <section className="w-full flex flex-col gap-3">
        <p className="w-full flex justify-between">
          <span>Cart Total</span>
          <span>Rs. {total}</span>
        </p>
        <p className="w-full flex justify-between border-b-2 border-black">
          <span>Tax</span>
          <span>Rs.000</span>
        </p>
        <p className="w-full flex justify-between">
          <span>Sub Total</span>
          <span>Rs. {total.toFixed(2)}</span>
        </p>
      </section>
    </aside>
  );
};

export default Cart;
