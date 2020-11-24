import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = () => {
  const tabs = [{title: "one", content: "This is the first"}, {title: "second", content: "This is the second"}]
  
  return <>
      <Clock />
      <Tabs tabs={tabs} />
      <Weather />
    </>
  
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
