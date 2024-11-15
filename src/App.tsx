import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./component/Main";
import Content from "./component/Content";
import Dashboard from "./dashboard/Dashboard";




function App() {
  return (
    // <Main>
    //  <Content></Content>
    // </Main>
      <Dashboard disableCustomTheme={false}

      ></Dashboard>
  )
}

export default App;
