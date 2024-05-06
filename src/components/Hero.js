import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Hero() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://greatbritishtalent.com/wp-json/wp/v2/pages/2/?acf_format=standard")
            .then((res) => res.json())
            .then((json) => {
                setItems(json.acf);
                setIsLoaded(true);

            });
    }, []);
    // if (!isLoaded) return <div className='please_wait'> <div class="loader"> </div><span>Data Loading....</span></div>;
    return (
        <>
            <section className="section_first">
                <div className="column_first">
                    <Container>
                        <Row>
                            <h1>
                                Great British
                                <span
                                    href=""
                                    className="typewrite"
                                    data-period="2000"
                                    data-type='[ "speakers", "presenters.", "voices."]'
                                >
                                    <span className="wrap"></span>
                                </span>
                            </h1>
                        </Row>
                    </Container>
                </div>
                <div className="column_second">
                    {isLoaded ? (
                        <img src={items.first_section_image_home_gbuk} alt="" />
                    ) : (
                        <div className="skeleton-loader loading-animation"></div>
                    )}
                </div>
            </section>
        </>
    );
}
