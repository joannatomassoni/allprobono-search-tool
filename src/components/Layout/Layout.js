import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './Layout.css'
import AboutPage from '../AboutPage'
import HomePage from '../HomePage'

const Layout = () => {
  return (
    <div className="primary-layout">
      <div className="navbar-container">
          <ul className='navbar'>
            <li>
              <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='nav-link'>About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
    </div>
  )
}

export default Layout