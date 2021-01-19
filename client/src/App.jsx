import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";
import Chat from "./Chat";
import { Container } from "shards-react";

const App = () => {
  return (
    <div
      style={{
        padding: "1em",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Real Time Chat App</h3>
      <Chat />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
