function CardKeranjang() {
  return (
    <>
      <div
        onClick={{}}
        className="card1-keranjang"
        style={{
          backgroundColor: "salmon",
          width: "350px",
          height: "170px",
          borderRadius: "10px",
          marginTop: "-20px",
          marginLeft: "110px",
        }}
      >
        <img
          style={{ width: "150px", marginLeft: "15px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/586-house-with-garden.svg/2048px-586-house-with-garden.svg.png"
          alt=""
        />
        <h4
          style={{ marginTop: "-120px", marginLeft: "170px", color: "white" }}
        >
          Rumah Modern
        </h4>
        <p style={{ marginLeft: "180px", color: "white" }}>
          Tipe 18 x 20 <br />
          <span>Kamar tidur 3</span>
          <br />
          <span>2 kamar mandi</span>
        </p>
      </div>
      <div
        onClick={{}}
        className="card1-keranjang"
        style={{
          backgroundColor: "salmon",
          width: "350px",
          height: "170px",
          borderRadius: "10px",
          marginTop: "50px",
          marginLeft: "110px",
        }}
      >
        <img
          style={{ width: "150px", marginLeft: "15px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/586-house-with-garden.svg/2048px-586-house-with-garden.svg.png"
          alt=""
        />
        <h4
          style={{ marginTop: "-120px", marginLeft: "170px", color: "white" }}
        >
          Rumah Modern
        </h4>
        <p style={{ marginLeft: "180px", color: "white" }}>
          Tipe 18 x 20 <br />
          <span>Kamar tidur 3</span>
          <br />
          <span>2 kamar mandi</span>
        </p>
      </div>
    </>
  );
}

export default CardKeranjang;
