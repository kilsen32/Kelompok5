import Button from "react-bootstrap/Button";
import "./login.css";
import Footer from "../../layout/Footer/Footer";
// import "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap";

function Login() {
  return (
    <>
      <div className="boxLogin" style={{}}>
        <div className="logoLogin"></div>
        <div className="formLogin">
          <form action="/login">
            <h1 className="h1-login" style={{ fontFamily: "Kaushan Script" }}>
              Login
            </h1>
            <hr />
            <br />
            <br />
            <input type="text" placeholder="Username" required id="username" />
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
            <Button
              onClick={{}}
              style={{ marginLeft: "-5px" }}
              variant="outline-secondary"
            >
              Login
            </Button>{" "}
            <br />
            <p>
              <a href="">Lupa password</a>
              <br />
              <br />
              Dont have an account?{" "}
              <a href="/register" style={{ color: "blue" }}>
                Register
              </a>
              <br />
            </p>
          </form>
        </div>
        <br />
        <img
          className="img-login"
          width={450}
          src="../../../../public/image/character.jpg"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
}

export default Login;
