import "./register.css";
import Button from "react-bootstrap/Button";
import Footer from "../../layout/Footer/Footer";
function RegisterPage() {
  return (
    <>
      <div className="boxLogin" style={{}}>
        <div className="logoLogin"></div>
        <div className="formLogin">
          <form action="/login">
            <h1 className="h1-login">Register</h1>
            <hr />
            <br />
            <br />
            <input type="text" placeholder="Email" required id="email" />
            <br />
            <br />
            <input
              type="text"
              placeholder="Nama Lengkap"
              required
              id="namalengkap"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Nama Pengguna"
              required
              id="namapengguna"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
            />
            <br />
            <br />
            <br />
            <Button onClick={{}} variant="outline-secondary">
              Register
            </Button>
            <br />
            <p>
              <br />
            </p>
          </form>
        </div>
        <img className="img-register" src="/image/character.jpg" alt="" />
      </div>
      <Footer />;
    </>
  );
}

export default RegisterPage;
