import React from 'react';
import ReactDom from 'react-dom';
import { TextInput } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
  </div>
);

ReactDom.render(<App />, document.getElementById("root"));