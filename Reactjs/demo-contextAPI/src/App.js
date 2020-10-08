import React from "react";
import "./styles.css";

import List from "./components/List";
import Timer from "./components/Timer";

import AppContext from "./contexts/AppContext";
import AppProvider from "./components/AppProvider";

const data = ["Tung", "Loi", "Linh", "Nam"];
const data2 = ["12", "9", "5", "15"];

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppContext.Consumer>
          {({ title }) => <h1>{title}</h1>}
        </AppContext.Consumer>
        <AppContext.Consumer>
          {({ id, updateId }) => (
            <div>
              <h1>{id}</h1>
              <button onClick={updateId}>Update</button>
            </div>
          )}
        </AppContext.Consumer>

        {/* <List data={data} render={(item) => <div>{item}</div>} />
      <List data={data2} render={(item) => <div>{item}</div>} /> */}
        <Timer>{({ count }) => <h1>{count}</h1>}</Timer>
        {/* <Timer render={({ count }) => <p>{count}</p>} /> */}
      </div>
    </AppProvider>
  );
}
