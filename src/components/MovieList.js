import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((item, key) => (
          <Col md={4} className="mb-4">
            <MovieCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MovieList;
