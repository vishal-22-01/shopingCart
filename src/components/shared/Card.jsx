import React from "react";
import dummyImg from "../../assets/dummy-img.jpg";
import { getCart, saveCart } from "../../utils";
import CustomButton from "../shared/Button";
const Card = ({
  productName,
  img,
  price,
  product,
  updateCart,
  setUpdateCart,
}) => {
  const handleCart = (product) => {
    const getPrevCarts = getCart();

    const countCartItems = getPrevCarts.find(
      (prevCart) => prevCart.id == product.id
    );

    if (countCartItems) {
      const getIndex = getPrevCarts.findIndex((item) => item.id == product.id);
      const newProduct = {
        ...product,
        count: countCartItems?.count + 1,
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
  };

  return (
    <div className="flex flex-col justify-between gap-1 items-start">
      <div className="w-[200px] h-[200px] border border-black object-cover rounded-xl overflow-hidden">
        <img src={img ? img : dummyImg} alt="dummy-img" />
      </div>
      <h3 className="text-xl font-medium uppercase">{productName}</h3>
      <p className="text-lg font-medium">Rs. {price}</p>
      <CustomButton text={"Add to cart"} onclick={() => handleCart(product)} />
    </div>
  );
};

export default Card;
