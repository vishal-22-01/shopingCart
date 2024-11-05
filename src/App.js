import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Layout from "./layout";
import DisplayLayout from "./layout/displayLayout";
import { dummyData } from "../src/dummy.js";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

function App() {
  const [updateCart, setUpdateCart] = useState(false);
  const [showCart ,setShowCart]= useState(false);
  console.log(showCart);


  useEffect(() => {
    if (dummyData) {
      localStorage.setItem("products", JSON.stringify(dummyData));
    }
  }, []);
  
  return (
    <Layout>
      <DisplayLayout>
        <Products
          setUpdateCart={setUpdateCart}
          updateCart={updateCart}
        />
        {showCart && <Cart updateCart={updateCart} setUpdateCart={setUpdateCart} />}
        <button className="btn text-2xl"onClick={()=>setShowCart (!showCart)}><CiShoppingCart/>
        </button>

        
      </DisplayLayout>
    </Layout>
  );
  
  
}

export default App;
