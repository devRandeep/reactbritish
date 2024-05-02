import React, { useEffect, useState } from "react";
import Team from "./Team";
import Pagebread from "./Pagebread";
import { Col, Row } from "react-bootstrap";
import Callnumber from "./Callnumber";
import Wesupply from "./Wesupply";
import { Helmet } from "react-helmet";

export default function About() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://greatbritishtalent.com/wp-json/wp/v2/pages/3069")
      .then((res) => res.json())
      .then((json) => {
        setItems(json.acf);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <div className='please_wait'> <div class="loader"> </div><span>Data Loading....</span></div>;
  return (
    <>
      <Helmet>
        <title>About  | Great British UK Talent</title>
        <meta name="description" content="Hire VO&#039;&#039;s, presenters or speakers for your next corporate event or video with Great British Voices, Great British Presenters &amp; Great British Speakers." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://www.greatbritishtalent.com/about/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Book Presenters, Speakers and Voice-Over&#039;&#039;s | Great British Talent" />
        <meta property="og:description" content="Hire VO&#039;&#039;s, presenters or speakers for your next corporate event or video with Great British Voices, Great British Presenters &amp; Great British Speakers." />
        <meta property="og:url" content="https://www.greatbritishtalent.com/about/" />
        <meta property="og:site_name" content="Great British UK Talent" />
        <meta property="article:publisher" content="https://www.facebook.com/greatbritishuk/?eid=ARBEBsDSmin8d9tCfXL7l49QmCMPTaStI8xFjGkTf1IRofrFdSnhtp5C7UB_yEP5_Ipg2iEWZCTWUI5_" />
        <meta property="og:updated_time" content="2024-04-24T05:58:58+00:00" />
        <meta property="og:image" content="https://www.greatbritishtalent.com/static/css/img/imageBG.jpg" />
        <meta property="og:image:secure_url" content="https://www.greatbritishtalent.com/static/css/img/imageBG.jpg" />
        <meta property="og:image:alt" content="book a speaker" />
        <meta property="article:published_time" content="2020-05-22T16:50:31+00:00" />
        <meta property="article:modified_time" content="2024-04-24T05:58:58+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Presenters, Speakers and Voice-Over&#039;&#039;s | Great British Talent" />
        <meta name="twitter:description" content="Hire VO&#039;&#039;s, presenters or speakers for your next corporate event or video with Great British Voices, Great British Presenters &amp; Great British Speakers." />
        <meta name="twitter:site" content="@greatbritishuk" />
        <meta name="twitter:creator" content="@greatbritishuk" />
        <meta name="twitter:image" content="https://www.greatbritishtalent.com/static/css/img/imageBG.jpg" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="1 minute" />
      </Helmet>
      {/* ================= First Fold */}
      <section className='page_breadcrumbs about_breadcrumbs'>
        <Row>
          <Col md={7} className='p-0'>
            <div className="text_panel_breadcrumbs">
              <h1>{items.heading}</h1>
            </div>
          </Col>
          <Col md={5} className='p-0 d-sm-done d-md-block d-none'>
            <div className="text_panel_breadcrumbs_image">
              <img src={items.right_image} alt="" />
            </div>
          </Col>

        </Row>
      </section>
      <div className="about_callpanel">
        <Callnumber />
      </div>
      <section className="what_we_do aboutUs">
        <div className="img_box">
          <img src={items.about_image} alt="" />
        </div>
        <div className="what_we_do_box">
          <div className="text_box">
            <h3>
              About Us
            </h3>
            <p dangerouslySetInnerHTML={{ __html: items.about_description }}></p>
          </div>
        </div>
      </section>
      <div className="about_supply">
        <Wesupply />
      </div>
      <Team />
    </>
  );
}
