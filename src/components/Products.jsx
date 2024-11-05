import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./shared/Card";
import CustomHeading from "./shared/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductThunk } from "../product-slice";

const Products = ({ setUpdateCart, updateCart, filterValue }) => {
  const [products, setProducts] = useState([]);
  const product = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("product", product?.products?.products);

  const getAllData = async () => {
    dispatch(getAllProductThunk());
  };

  useEffect(() => {
    getAllData();
  }, [dispatch]);

  useEffect(() => {
    setProducts([...product?.products?.products]);
  }, [product?.products?.products]);
  
  useEffect(() => {
    if (filterValue) {
      const filteredData = products?.filter((item) => {
        return item.name.toLowerCase().includes(filterValue?.toLowerCase());
      });
      setProducts([...filteredData]);
    } else {
      getAllData();
    }
  }, [filterValue]);

  return (
    <main className="p-4 w-full md:w-3/4">
      <CustomHeading text={"Products"} />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 gap-y-8">
        {products.map((product) => {
          return (
            <Card
              img={product?.image}
              price={product?.price}
              productName={product?.title}
              id={product?.id}
              product={product}
              key={product?.id}
              updateCart={updateCart}
              setUpdateCart={setUpdateCart}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Products;
