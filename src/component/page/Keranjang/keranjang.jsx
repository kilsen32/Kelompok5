import Navbar from "../../layout/Navbar/navbar";
import CardKeranjang from "../../layout/card/cardKeranjang";
import Foooter from "../../layout/Footer/Footer2";

function Keranjang() {
  return (
    <>
      <Navbar />
      <div className="kategori1" style={{ marginTop: "50px" }}>
        <h1>Keranjang</h1>
      </div>
      <hr
        style={{
          width: "1300px",
          height: "5px",
          marginLeft: "115px",
          backgroundColor: "grey",
          borderRadius: "5px",
        }}
      />
      <br />
      <CardKeranjang />
      <Foooter />
    </>
  );
}

export default Keranjang;
