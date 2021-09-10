import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function InListItem({ item, index }) {
  const dispatch = useDispatch();
  const addItemToBasket = (index) => {
    dispatch(actionCreators.addToBasket(index));
  };

  return (
    <ListGroup.Item variant="danger" onClick={() => addItemToBasket(item.id)}>
      {item}
    </ListGroup.Item>
  );
}
