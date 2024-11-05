import React, { useEffect, useState } from "react";
import { getCart, saveCart } from "../../utils";

const IncDec = ({ count, product, setUpdateCart, updateCart }) => {
  const [quantity, setQuantity] = useState(count);

  const handleIncDec = (type) => {
    switch (type) {
      case "inc":
        setQuantity((prev) => prev + 1);
        break;
      case "dec":
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let getPrevCarts = getCart();
    const countCartItems = getPrevCarts.find(
      (prevCart) => prevCart.id == product.id
    );
    console.log("quantity", quantity);
    if (quantity === 0) {
      const removeItem =getPrevCarts.filter((removedItem)=>{
        return removedItem.id !== product.id
      })
      getPrevCarts =removeItem
    } else if (countCartItems) {
      const getIndex = getPrevCarts.findIndex((item) => item.id == product.id);
      const newProduct = {
        ...product,
        count: quantity,
      };
      getPrevCarts[getIndex] = newProduct;
    } else {
      getPrevCarts.push({
        ...product,
        count: 1,
      });
    }

    saveCart(getPrevCarts);
    setUpdateCart(!updateCart);
  }, [quantity]);

  useEffect(() => {
    setQuantity(count);
  }, [count]);

  return (
    <div className="flex justify-between gap-1 p-2 items-center">
      <span className="">Qty</span>
      <button className="text-xl" onClick={() => handleIncDec("dec")}>
        -
      </button>
      <span className="p-1 w-8 text-center border border-black rounded-xl">
        {quantity}
      </span>
      <button className="text-base" onClick={() => handleIncDec("inc")}>
        +
      </button>
    </div>
  );
};

export default IncDec;
