import React from 'react';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="primary-layout">
      <div className="navbar-container">
        {children}
        </div>
    </div>
  )
}

export default Layout