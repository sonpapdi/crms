import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import login from './components/login ';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Productsmaster from './pages/Productsmaster';
import Newinquiry from './pages/Newinquiry';
import Leadmaster from './pages/Leadmaster';
import LeadmasterView from './pages/LeadmasterView';
import Login from './pages/Login';
import Singup from './pages/Singup';
import LeadmasterUpdate from './pages/LeadmasterUpdate'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/productsmaster' component={Productsmaster}></Route>
          <Route path='/newinquiry' component={Newinquiry}></Route>
          <Route path='/leadmaster' component={Leadmaster}></Route>
          <Route path='/leadmasterview' component={LeadmasterView}></Route>
          <Route path='/Leadmasterupdate/edit/:id' component={LeadmasterUpdate}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/singup' component={Singup}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
