import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function InBasketItem({ item, index }) {
  const dispatch = useDispatch();

  const removeItemFromList = (id) => {
    dispatch(actionCreators.removeItem(id));
  };

  return (
    <ListGroup.Item
      key={item.id}
      variant="dark"
      onClick={() => removeItemFromList(item.id)}
    >
      {item.value}
    </ListGroup.Item>
  );
}
