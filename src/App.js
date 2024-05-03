import React, { useEffect, useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.css";
import "./sass/responsive.css";
import Head from "./components/Head";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Error from "./components/Error";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Headers from "./components/Headers";
import DocumentMeta from 'react-document-meta';
import SeoApi from './components/SeoApi';

function App() {
  return (
    <div className="App">

      <SeoApi apiUrl="https://greatbritishtalent.com/wp-json/rankmath/v1/getHead?url=https://greatbritishtalent.com/" />

      <Head />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/tc" component={Terms} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>

  );
}

export default App;
