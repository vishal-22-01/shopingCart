import React from "react";
import QRCode from "react-qr-code";

const Qrcode = ({ qrData }) => {
  console.log("qrData", {qrData});

  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={{qrData}}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default Qrcode;
