import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantsDisplayed = plants.map( plantObj => {
    return <PlantCard key={plantObj.id} plant={plantObj}/>
  })
  return (
    <ul className="cards">{plantsDisplayed}</ul>
  );
}

export default PlantList;
