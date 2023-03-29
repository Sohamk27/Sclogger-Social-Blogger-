import React from 'react';
import TopBar from './Components/Topbar/TopBar';
import Home from './pages/Home/home';
import Single from './pages/Single/single';
import Write from './pages/Write/write'
import Setting from './pages/Setting/setting';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/setting">
            {user ? <Setting /> : <Register />}
          </Route>
          <Route exact path="/write">
            <Write />
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
