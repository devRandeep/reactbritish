import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Team from "./Team";
import Pagebread from "./Pagebread";
import Callnumber from "./Callnumber";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    fetch("https://greatbritishtalent.com/wp-json/wp/v2/pages/3078")
      .then((res) => res.json())
      .then((json) => {
        setItems(json.acf);
        setIsLoaded(true);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    fetch('https://www.greatbritishtalent.com/wp-json/contact-form-7/v1/contact-forms/1932/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Handle success response here if needed
      console.log('Form submitted successfully');
      setSubmitting(false);
    })
    .catch(error => {
      // Handle error
      console.error('There was a problem submitting the form:', error);
      setSubmitting(false);
      setSubmitError('There was a problem submitting the form. Please try again later.');
    });
  };

  if (!isLoaded) return <div className='please_wait'> <div class="loader"> </div><span>Data Loading....</span></div>;

  return (
    <>
      <Helmet>
        <title>Contact - Great British UK Talent</title>
      </Helmet>

      <Pagebread />
      {/* ==================== Get In Touch */}
      <section className="get_in_touch">
        <Row className="align-items-start">
          <Col md={6}>
            <div className="contact_form">
              <h3>Get In Touch</h3>

              <form className="submit_form" onSubmit={handleSubmit}>
                {/* Input */}
                <div className="input_group">
                  <input type="text" placeholder="name" name="your-name" className="input_design" id="name" value={formData.name}
                    onChange={handleChange} />
                </div>
                {/* Input */}
                <div className="input_group">
                  <input type="text" placeholder="Email" name="your-email" id="email" className="input_design" value={formData.email}
                    onChange={handleChange} />
                </div>
                {/* Input */}
                <div className="input_group">
                  <input type="text" placeholder="Contact Number" name="number-942" id="phone" className="input_design" value={formData.phone}
                    onChange={handleChange} />
                </div>
                <div className="input_group">
                  <textarea placeholder="Message" name="your-message" id="message" className="input_design"  value={formData.message}
          onChange={handleChange}/>
                </div>
                <div className="input_group">
                  <button className="btn_site" type="submit" disabled={submitting}>Send</button>
                  {submitError && <p className="submit-error">{submitError}</p>}
                </div>
              </form>

            </div>
          </Col>
          <Col md={6}>
            <div className="contact_form_img">
              <img src={items.about_image} alt="" />
            </div>
            <Col md={12}>
              <div className="footer_details">
                <ul>
                  <li>  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#fff"
                    class="bi bi-google"
                    viewBox="0 0 334.5 334.5"
                  >
                    <path d="M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481 s1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1 c-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25 c1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073 c1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z" />
                  </svg>
                    <a href="mailto:bookings@greatbritishtalent.com">{items.email}</a>
                  </li>

                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="#fff"
                      class="bi bi-google"
                      viewBox="0 0 512 512"
                      transform="matrix(-1, 0, 0, 1, 0, 0)"
                    >
                      <path d="M478.94,370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83,3.83,0,0,0-3.92.49c-11.63,9.07-31.21,25.73-32.26,26.63-6.78,5.81-6.78,5.81-12.33,4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56,4-12.34.9-1.05,17.57-20.63,26.64-32.25a3.83,3.83,0,0,0,.49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52A3.9,3.9,0,0,0,138,32.2,322.35,322.35,0,0,0,82,57.65,338,338,0,0,0,33.35,92a3.83,3.83,0,0,0-1.26,3.74c2.09,9.74,12.08,50.4,43.08,106.72,31.63,57.48,53.55,86.93,100,133.22S252,405.21,309.54,436.84c56.32,31,97,41,106.72,43.07a3.86,3.86,0,0,0,3.75-1.26A337.73,337.73,0,0,0,454.35,430a322.7,322.7,0,0,0,25.45-56A3.9,3.9,0,0,0,478.94,370.14Z" />
                    </svg>
                    <a href="tel: +44 1753 439 289">{items.phone_number}</a></li>
                </ul>
              </div>
            </Col>
          </Col>

        </Row>
      </section>

      <Callnumber />
      <Team />

    </>
  );
}
