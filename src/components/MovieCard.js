import ReactStars from "react-rating-stars-component";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";

function MovieCard(props) {
  return (
    <Card style={{ borderRadius: "10px 10px 0 0", display:"flex", flexDirection: "column", height: "43rem", width: "18rem", margin: '5px', 'backgroundColor': '#000', color: "#fff", textAlign: "center" }}>
      <Card.Img
        style={{ width: "18rem",
        borderRadius: "10px 10px 0 0",height: "25rem" }}
        variant="top"
        src={props.movieObj.posterUrl}
      />
      <Card.Body>
        <Card.Title style={{marginTop: "10px"}}>{props.movieObj.title}</Card.Title>
        <Card.Text style={{padding: "10px", height: "150px"}}>{props.movieObj.description}</Card.Text>
      </Card.Body>
      <ReactStars
        classNames={"kaisSnow"}
        isHalf={true}
        count={10}
        size={24}
        activeColor="#ffd700"
        value={Math.round(props.movieObj.rate / 0.5) * 0.5}
      />
    </Card>
  );
}

export default MovieCard;
