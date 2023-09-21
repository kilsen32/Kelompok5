import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardImage() {
  return (
    <>
      <div className="kategori1">
        <h1>Kategori 1</h1>
      </div>
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "90px",
          borderRadius: "10px",
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
            style={{ marginLeft: "10px", color: "white", fontWeight: "bold" }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            style={{ marginLeft: "20px", width: "200px" }}
            variant="primary"
          >
           <a href="/pesanan">Beli</a> 
          </Button>
        </Card.Body>
        <br />
        {/* Card ke 2 */}
      </Card>
      <br />
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "360px",
          marginTop: "-370px",
          borderRadius: "10px",
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
            style={{ marginLeft: "10px", color: "white", fontWeight: "bold" }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            style={{ marginLeft: "20px", width: "200px" }}
            variant="primary"
          >
          <a href="/pesanan">Beli</a> 
          </Button>
        </Card.Body>
        <br />
      </Card>
      <br />
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "630px",
          marginTop: "-370px",
          borderRadius: "10px",
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
            style={{ marginLeft: "10px", color: "white", fontWeight: "bold" }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            style={{ marginLeft: "20px", width: "200px" }}
            variant="primary"
          >
         <a href="/pesanan">Beli</a> 
          </Button>
        </Card.Body>
        <br />
      </Card>
      <br />
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "900px",
          marginTop: "-370px",
          borderRadius: "10px",
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
            style={{ marginLeft: "10px", color: "white", fontWeight: "bold" }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            style={{ marginLeft: "20px", width: "200px" }}
            variant="primary"
          >
          <a href="/pesanan">Beli</a> 
          </Button>
        </Card.Body>
        <br />
      </Card>
      <br />
      <Card
        style={{
          width: "15rem",
          backgroundColor: "salmon",
          marginLeft: "1170px",
          marginTop: "-372px",
          borderRadius: "10px",
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
            style={{ marginLeft: "10px", color: "white", fontWeight: "bold" }}
          >
            Rumah Modern
          </Card.Title>
          <Card.Text style={{ marginLeft: "10px", color: "white" }}>
            Rumah mewah dengan harga yang murah
          </Card.Text>
          <Button
            style={{ marginLeft: "20px", width: "200px" }}
            variant="primary"
          >
         <a href="/pesanan">Beli</a> 
          </Button>
        </Card.Body>
        <br />
      </Card>
      <br />
    </>
  );
}

export default CardImage;
