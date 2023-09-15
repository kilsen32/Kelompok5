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
          marginLeft: "100px",
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
            Beli
          </Button>
        </Card.Body>
        <br />
      </Card>
    </>
  );
}

export default CardImage;
