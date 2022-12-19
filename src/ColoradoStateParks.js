import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {
   trees as parkTrees,
   wildlife as parkWildlife,
  } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(parkTrees);
  parkWildlife();

  return(
    <div>
      <MesaVerde />
    </div>
  )

}



export default ColoradoStateParks;