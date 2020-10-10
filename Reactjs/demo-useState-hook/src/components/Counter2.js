import React, { useState } from "react";

export default function Counter2() {
  const [value, setValue] = useState(0);

  return (
    <div className="Counter">
      <h1>{value}</h1>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
    </div>
  );
}
