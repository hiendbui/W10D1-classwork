import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const Root = () => (
  <Clock />
)

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
