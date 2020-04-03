import React from "react";
import {
  BrowserRouter, Link, Switch, Route
} from "react-router-dom";

import Layout from './components/Layout/Layout'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/'
const App = () => (
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
)
export default App