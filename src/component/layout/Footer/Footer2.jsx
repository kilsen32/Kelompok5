import { Col, Button } from "react-bootstrap";

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

import "../../../../public/image/download.jpeg";
import "./footer.css";

const Foooter = () => {
  return (
    <div
      className="footer"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <div>
          <h4 className="fs-3">TokoKU</h4>
          <p className="" style={{ marginBottom: "0" }}>
            2023 Kelompok5
          </p>
          <p className="" style={{ marginBottom: "0" }}>
            All rights reserved
          </p>
          <p className="">SMK Yadika Soreang</p>
        </div>
      </div>
      <div className="">
        <Col className="pindah">
          <h4 className="fs-3">About</h4>
          <a href="#" className="custom-link">
            Privacy Policy
          </a>
          <p className="" style={{ marginBottom: "0" }}>
            <a href="#" className="custom-link">
              Help Center
            </a>
          </p>
          <p className="">
            <a href="#" className="custom-link">
              Term & COndition
            </a>
          </p>
        </Col>
      </div>

      <div className="">
        <Col className="pindah">
          <h4 className="fs-3">Follow Us on</h4>
          <p>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="#"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#ff4500", marginRight: "15px" }}
              href="#"
            >
              <MDBIcon fab icon="reddit-alien" />
            </MDBBtn>
          </p>
        </Col>
      </div>
      <div className="">
        <Col className="pindah">
          <div className="" style={{ marginLeft: "50px" }}>
            Unduh aplikasi kami di
          </div>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="secondary"
              style={{ display: "block", marginRight: "15px" }}
              href="https://play.google.com/store/search?q=ruang%20guru&c=apps&hl=id-ID"
            >
              Play Store
            </Button>
            <Button
              variant="secondary"
              style={{
                display: "block",
              }}
              href="https://apps.apple.com/id/app/ruangguru-app-belajar-no-1/id1099742206?l=id"
            >
              App Store
            </Button>
          </div>
        </Col>
      </div>
    </div>
  );
};
export default Foooter;
