import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Movies from "./Pages/Movies/Movies.jsx";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const { name } = useSelector( state => state )
  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={_ => console.log(name, " name ")}>NAME</button>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/movies" component={Movies}></Route>        
          <Route path="/">
            <Redirect to="/login"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
