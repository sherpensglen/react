import React from "react";

import { Ping } from "@uiball/loaders";

function Loader() {
  return (
  <div className="d-flex align-items-centre justify-content-center pt-5 mt-5">
    <Ping size={128} speed={2} color="black" />
    <h1 className="pt-5">Cargando...</h1>
  </div>
  );
  
  
}

export default Loader;
