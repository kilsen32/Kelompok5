import { Footer } from "antd/es/layout/layout";
import Navbar from "../../layout/Navbar/navbar";
import CardImage from "../../layout/card/cardImage";
import CardImage2 from "../../layout/card/cardimage2";
import Foooter from "../../layout/Footer/Footer2";

function Home() {
  return (
    <>
      <Navbar />

      <img className="img-banner" src="/public/image/banner.jpg" alt="" style={{marginTop:"40px"}}/>
      <br />
      <br />
      <hr
        style={{
          width: "1000px",
          height: "5px",
          backgroundColor: "grey",
          borderRadius: "5px",
        }}
      />
      <br />
      <CardImage />
      <br />
      <CardImage2 />
      <br />
      <hr
        style={{
          width: "1000px",
          height: "5px",
          backgroundColor: "grey",
          borderRadius: "5px",
        }}
      />
      <Foooter />
    </>
  );
}

export default Home;
