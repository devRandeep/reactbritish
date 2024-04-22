
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.css";
import Head from "./components/Head";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";


<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin
></script>;

function App() {
  return (
    <div className="App">
      <Head />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/term_condition" component={Terms} />
        <Route component={Error} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
