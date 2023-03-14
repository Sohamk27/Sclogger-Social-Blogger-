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
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
          <Route path="/register">
            {user ? <Home /> : <Register />}
            <Register />
          </Route>
          <Route path="/login">
            {user ? <Home /> : <Login />}
            <Login />
          </Route>
          <Route path="/setting">
            {user ? <Setting /> : <Register />}
            <Setting />
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Register />}
            <Write />
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
