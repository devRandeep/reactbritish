
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
import Error from "./components/Error";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin
></script>;

function App() {
  return (

    <div className="App">
<Helmet>
				<meta charSet="utf-8" />        
				<title>Great British UK Talent</title>
				<meta name="description" content="Book a British Speaker, Presenter or Voice Over artist today with Great British UK! Get in touch with the team today and we look forward to helping you." />
				<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
				<link rel="canonical" href="https://greatbritish.b-cdn.net/wp-content//themes/Greatbritish/favicon.ico" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Book British Speakers, Presenters &amp; Voice Over Artists | Great British Talent" />
				<meta property="og:description" content="Book a British Speaker, Presenter or Voice Over artist today with Great British UK! Get in touch with the team today and we look forward to helping you." />
				<meta property="og:url" content="https://greatbritish.b-cdn.net/wp-content//themes/Greatbritish/favicon.ico" />
				<meta property="og:site_name" content="Great British UK Talent" />
				<meta property="og:updated_time" content="2024-04-23T10:45:27+00:00" />
				<meta property="og:image" content="https://greatbritish.b-cdn.net/wp-content//themes/Greatbritish/favicon.ico" />
				<meta property="og:image:secure_url" content="https://greatbritish.b-cdn.net/wp-content//themes/Greatbritish/favicon.ico" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1080" />
				<meta property="og:image:alt" content="hire a speaker" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="article:published_time" content="2020-05-07T15:10:40+00:00" />
				<meta property="article:modified_time" content="2024-04-23T10:45:27+00:00" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Book British Speakers, Presenters &amp; Voice Over Artists | Great British Talent" />
				<meta name="twitter:description" content="Book a British Speaker, Presenter or Voice Over artist today with Great British UK! Get in touch with the team today and we look forward to helping you." />
				<meta name="twitter:site" content="@greatbritishuk" />
				<meta name="twitter:creator" content="@greatbritishuk" />
				<meta name="twitter:image" content="https://greatbritish.b-cdn.net/wp-content//themes/Greatbritish/favicon.ico" />
				<meta name="twitter:label1" content="Written by" />
				<meta name="twitter:data1" content="admin" />
				<meta name="twitter:label2" content="Time to read" />
				<meta name="twitter:data2" content="1 minute" />
			</Helmet>
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
