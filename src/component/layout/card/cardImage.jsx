import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardImage() {
  return (
    <>
      <div className="kategori1">
        <h1>Kategori 1</h1>
      </div>
      <br />
      {/* card 1 */}
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "110px",
          borderRadius: "10px",
          height: "400px",
        }}
      >
        <Card.Img
          className="img-card-home1"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/586-house-with-garden.svg/2048px-586-house-with-garden.svg.png"
        />
        <hr />
        <Card.Body>
          <Card.Title
            style={{
              marginLeft: "10px",
              color: "white",
              fontWeight: "bold",
              marginTop: "-30px",
            }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            href="/keranjang"
            className="button-beli"
            style={{
              marginLeft: "-2px",
              width: "200px",
              height: "35px",
            }}
            variant="primary"
          >
            <a>Beli</a>
          </Button>
        </Card.Body>
        <br />
        {/* Card ke 2 */}
      </Card>
      <br />
      {/* card 2 */}
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "380px",
          marginTop: "-426px",
          borderRadius: "10px",
          height: "400px",
        }}
      >
        <Card.Img
          className="img-card-home1"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/586-house-with-garden.svg/2048px-586-house-with-garden.svg.png"
        />
        <hr />
        <Card.Body>
          <Card.Title
            style={{
              marginLeft: "10px",
              color: "white",
              fontWeight: "bold",
              marginTop: "-30px",
            }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            href="/keranjang"
            className="button-beli"
            style={{
              marginLeft: "-2px",
              width: "200px",
              height: "35px",
            }}
            variant="primary"
          >
            <a>Beli</a>
          </Button>
        </Card.Body>
        <br />
        {/* Card ke 2 */}
      </Card>
      {/* card 3 */}
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "650px",
          marginTop: "-400px",
          borderRadius: "10px",
          height: "400px",
        }}
      >
        <Card.Img
          className="img-card-home1"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/586-house-with-garden.svg/2048px-586-house-with-garden.svg.png"
        />
        <hr />
        <Card.Body>
          <Card.Title
            style={{
              marginLeft: "10px",
              color: "white",
              fontWeight: "bold",
              marginTop: "-30px",
            }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            href="/keranjang"
            className="button-beli"
            style={{
              marginLeft: "-2px",
              width: "200px",
              height: "35px",
            }}
            variant="primary"
          >
            <a>Beli</a>
          </Button>
        </Card.Body>
        <br />
        {/* Card ke 2 */}
      </Card>
      {/* card 4 */}
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "920px",
          marginTop: "-400px",
          borderRadius: "10px",
          height: "400px",
        }}
      >
        <Card.Img
          className="img-card-home1"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/586-house-with-garden.svg/2048px-586-house-with-garden.svg.png"
        />
        <hr />
        <Card.Body>
          <Card.Title
            style={{
              marginLeft: "10px",
              color: "white",
              fontWeight: "bold",
              marginTop: "-30px",
            }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            href="/keranjang"
            className="button-beli"
            style={{
              marginLeft: "-2px",
              width: "200px",
              height: "35px",
            }}
            variant="primary"
          >
            <a>Beli</a>
          </Button>
        </Card.Body>
        <br />
        {/* Card ke 2 */}
      </Card>
      {/* card 5 */}
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "1190px",
          marginTop: "-400px",
          borderRadius: "10px",
          height: "400px",
        }}
      >
        <Card.Img
          className="img-card-home1"
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/586-house-with-garden.svg/2048px-586-house-with-garden.svg.png"
        />
        <hr />
        <Card.Body>
          <Card.Title
            style={{
              marginLeft: "10px",
              color: "white",
              fontWeight: "bold",
              marginTop: "-30px",
            }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            href="/keranjang"
            className="button-beli"
            style={{
              marginLeft: "-2px",
              width: "200px",
              height: "35px",
            }}
            variant="primary"
          >
            <a>Beli</a>
          </Button>
        </Card.Body>
        <br />
        {/* Card ke 2 */}
      </Card>
    </>
  );
}

export default CardImage;
