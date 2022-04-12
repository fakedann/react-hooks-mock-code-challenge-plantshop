import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [backEnd, setBackEnd] = useState([])
  useEffect( () => {
    fetch('http://localhost:6001/plants')
      .then( data => data.json() )
      .then( plants => setPlants(plants))
  }, [backEnd])

  function addNewPlant(item){
    setPlants([...plants, item])
  }

  function filterPlants(input){

    if(input === ''){
      setBackEnd([...backEnd])
    }
    const filteredPlants = plants.filter( plantObj => {
      let name = plantObj.name.toLowerCase()
      return name.includes(input.toLowerCase()) ? plantObj: false
    })
    setPlants(filteredPlants)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onSubmit={addNewPlant} onSearch={filterPlants}/>
    </div>
  );
}

export default App;
