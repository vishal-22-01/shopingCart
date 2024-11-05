import React from "react";

const Custombutton = ({ text, onclick, ...rest }) => {
  return (
    <button
      onClick={onclick}
      {...rest}
      className="bg-black text-white rounded-xl min-w-32 p-2"
    >
      {text}
    </button>
  );
};

export default Custombutton;
