import React, { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

export default function RandomNumber() {
  const context = useContext(AppContext);

  return (
    <div>
      <h1>{context.id}</h1>
      <button onClick={context.updateId}>Update id</button>
    </div>
  );
}
