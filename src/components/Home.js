import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Whatwedo from "./Whatwedo";
import Brand from "./Brand";
import Partner from "./Partner";
import Team from "./Team";
import Hero from "./Hero";
import Wesupply from "./Wesupply";
import { Helmet } from "react-helmet";

function Home() {
	return (
		<>	
		<Helmet>
        <title>Home  | Great British UK Talent</title>
        <meta name="description" content="Book a British Speaker, Presenter or Voice Over artist today with Great British UK! Get in touch with the team today and we look forward to helping you." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://www.greatbritishtalent.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Book British Speakers, Presenters &amp; Voice Over Artists | Great British Talent" />
        <meta property="og:description" content="Book a British Speaker, Presenter or Voice Over artist today with Great British UK! Get in touch with the team today and we look forward to helping you." />
        <meta property="og:url" content="https://www.greatbritishtalent.com/" />
        <meta property="og:site_name" content="Great British UK Talent" />
        <meta property="og:updated_time" content="2024-04-23T10:45:27+00:00" />
        <meta property="og:image" content="https://greatbritish.b-cdn.net/wp-content//uploads/2020/05/flag.jpg" />
        <meta property="og:image:secure_url" content="https://greatbritish.b-cdn.net/wp-content//uploads/2020/05/flag.jpg" />
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
        <meta name="twitter:image" content="https://greatbritish.b-cdn.net/wp-content//uploads/2020/05/flag.jpg" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="admin" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="1 minute" />
      </Helmet>
		
			{/* First Fold  ====== Section First */}

			<Hero />

			{/* Logo Section ============== Section Second */}

			<Partner />

			{/* What We Do ============ Third Section */}

			<Whatwedo />

			{/* ===================== BRAND LOGO */}

			<Brand />

			{/* ====================== We Supply */}

			<Wesupply />

			{/* ======================= Our Team */}
			<Team />

		</>
	);
};

export default Home;