import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Trailer({ trail }) {
  // useEffect(() => {
  //   console.log(trail, "test");
  // }, [trail]);
  const { id } = useParams();
  console.log(id);
  const history = useHistory();
  const handleHistory = () => history.push("/");
  // const findmovie = trail.find((el) => el.id === id);
  // console.log(findmovie);
  return (
    <div style={{ textAlign: "center", width: 300 }}>
      <h1>test</h1>
    </div>
  );
}

export default Trailer;
