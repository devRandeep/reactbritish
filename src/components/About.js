import React, { useEffect, useState } from "react";
import Team from "./Team";
import Pagebread from "./Pagebread";
import { Col, Row } from "react-bootstrap";
import Callnumber from "./Callnumber";
import Wesupply from "./Wesupply";

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


  return (
    <>
    {/* ================= First Fold */}
      <section className='page_breadcrumbs about_breadcrumbs'>
        <Row>
          <Col md={7} className='p-0'>
            <div className="text_panel_breadcrumbs">
              <h1>{items.heading}</h1>
            </div>
          </Col>
          <Col md={5} className='p-0'>
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
