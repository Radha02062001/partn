import React, { useState } from "react";
import "./card.css";

const Cards = () => {
  const Acheive = [
    { name: "Easy   Navigation" },
    { name: "700+ Orders Completed" },
    { name: "200+ Excellent delivery & service partners" },
  ];
  const renderachiv = Acheive.map((acheive) => {
    return (
      <div className="cardss">
        <h1>{acheive.name}</h1>
      </div>
    );
  });
  return <div id="crd">{renderachiv} </div>;
};
export default Cards;
