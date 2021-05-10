import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomeOutPage from './components/HomeOutPage';
import { connect } from 'react-redux'
import HomeInPage from './components/HomeInPage';
import Login from './components/Login';
import Product from './components/Product';





function App(props) {

  return (
    <div className='ui container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>

            <div>
              {props.isSignedIn ? <HomeInPage /> : <HomeOutPage />}
            </div>
          </Route>

          <Route path='/login'>
            <Login />
          </Route>


          <Route
            exact path="/:id"
            render={(props) => <Product {...props} />}
          />

        </Switch>

      </BrowserRouter>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps)(App);
