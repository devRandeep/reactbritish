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
			<meta charSet="utf-8" />
			<title>Home - Great British UK Talent</title>
			<meta name="description" content="Home page" />
			<link rel="canonical" href="https://www.greatbritishtalent.com/wp-content/uploads/2020/06/cropped-rsz_cropped-fl-min.png" />
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