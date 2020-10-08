import React from "react";
import "./styles.css";

import List from "./components/List";
import Timer from "./components/Timer";

const data = ["Tung", "Loi", "Linh", "Nam"];
const data2 = ["12", "9", "5", "15"];
export default function App() {
  return (
    <div className="App">
      <List data={data} render={(item) => <div>{item}</div>} />
      <List data={data2} render={(item) => <div>{item}</div>} />
      <Timer>{({ count }) => <h1>{count}</h1>}</Timer>
      {/* <Timer render={({ count }) => <p>{count}</p>} /> */}
    </div>
  );
}
