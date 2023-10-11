import React from 'react';
import { Card } from 'antd';

function CardP() {
  const cardStyle = {
    width: "100%",
    height: "100%",
    background: "gray",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle2 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Mengatur vertikal tengah
  };

  const cardStyle2 = {
    width: "100%",
    height: "100%",
    background: "gray",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Mengatur vertikal tengah
  };

  const cardStyle3 = {
    width: "100%",
    height: "100%",
    background: "gray",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle3 = {
    display: "flex",
    justifyContent: "flex-end", // Mengatur agar h5 ada di sebelah kanan
    alignItems: "center", // Mengatur vertikal tengah
  };

  return (
    <>
      <Card style={cardStyle}>
        <h3>Produk</h3>
        <div style={contentStyle}>
          <div>
            <h4>Rumah Parahyangan Kencana</h4>
            <p>Parken Block A 17 RT 07 RW 13</p>
          </div>
          <div>
            <h4>1x</h4>
            <h5>RP.10.012.103</h5>
          </div>
        </div>
      </Card>
      <Card style={cardStyle2}>
        <h3>Produk</h3>
        <div style={contentStyle2}>
          <div>
            <h4>Rumah Parahyangan Kencana</h4>
            <p>Parken Block A 17 RT 07 RW 13</p>
          </div>
          <div>
            <h4>1x</h4>
            <h5>RP.10.012.103</h5>
          </div>
        </div>
      </Card>
      <Card style={cardStyle3}>
        <h3>Total Pembayaran</h3>
        <div style={contentStyle3}>
          <div>
            <h5>20,024,206</h5>
          </div>
        </div>
      </Card>
    </>
  );
}

export default CardP;
