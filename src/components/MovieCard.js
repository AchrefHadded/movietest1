import { Card, Col, Row } from "react-bootstrap";

const MovieCard = ({ item }) => {
  return (
    <div style={{ textAlign: "center", width: 300 }}>
      <Card>
        <Card.Img
          variant="top"
          src={item.posterURL}
          style={{ width: "100%", height: "100%" }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Title>{item.rating} </Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
