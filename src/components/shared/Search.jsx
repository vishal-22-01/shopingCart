import React, { useState } from "react";
import Custombutton from "./Button";

const Search = ({setFilterValue}) => {
  const [searchedValue, setSearchedValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchedValue(value);
  };

  const handleClick = () => {
    setFilterValue(searchedValue);
  };
  
  return (
    <header className="flex justify-center w-full p-4 gap-4">
      <input
        type="search"
        value={searchedValue}
        onChange={handleChange}
        placeholder="Search Products"
        className="border border-black rounded-xl min-w-72 p-2 outline-none"
      />
      <Custombutton text={"Search"} onclick={handleClick} />
    </header>
  );
};

export default Search;
