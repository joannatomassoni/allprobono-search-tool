import React from 'react';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="primary-layout">
      {children}
    </div>
  )
}

export default Layout