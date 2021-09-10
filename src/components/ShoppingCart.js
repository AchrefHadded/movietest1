import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard";
import { Modal, Button, ListGroup } from "react-bootstrap";
import InBasketItem from "./InBasketItem";
import InListItem from "./InListItem";

function ShoppingCart(props) {
  const [show, setShow] = useState(false);
  const items = useSelector((state) => state.items);
  const [List, setList] = useState(items);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(items);
  return (
    <>
      <Button
        variant="btn btn-outline-danger"
        style={{ height: "38px", marginLeft: 10 }}
        onClick={handleShow}
      >
        Shopping Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>your shopping car with : </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup className="m-4" variant="flush">
            {items.map((item, index) => {
              return item.inBasket ? (
                <InBasketItem item={item.value} index={index} key={index} />
              ) : (
                <InListItem item={item.value.title} index={index} key={index} />
              );
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ShoppingCart;
