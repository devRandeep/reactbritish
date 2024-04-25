import React, { useState, useRef } from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Wesupply() {
    const supplySlider = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
          gap: 20,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          gap: 20,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          gap: 20,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          gap: 20,
        }
    };

    const SupplyCard = [
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/spoon-plate.png",
            cardTitle: "After-Dinner Speakers",
            cardUrl:"https://www.greatbritishtalent.com/static/css/img/spoon-plate.png",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/mic.png",
            cardTitle: "International Voices",
            cardUrl:"https://greatbritishvoices.co.uk/voice/international-voice-overs/",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/faces.png",
            cardTitle: "Conference Facilitators",
            cardUrl:"https://www.greatbritishtalent.com/static/css/img/faces.png",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/faces.png",
            cardTitle: "Sports Speakers",
            cardUrl:"https://www.greatbritishtalent.com/static/css/img/faces.png",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/faces.png",
            cardTitle: "News Broadcasters",
            cardUrl:"https://www.greatbritishtalent.com/static/css/img/faces.png",
        },       
        // Other SupplyCard items...
       
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <section className="we_supply">
            <Row className='align-items-center'>
                <div className="heading_panel">
                    <h3>We supply</h3>
                    <div className="slider_control">
                        <button className='slide_arrow' id='next' onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
                        <button className='slide_arrow' id='prev' onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="we_supply_slider">
                    <Carousel 
                        ref={carouselRef}
                        showDots={true} 
                        responsive={supplySlider}
                        beforeChange={(current, next) => setCurrentSlide(next)}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    >
                        {SupplyCard.map((itemcard, index) => (
                            <div className="card" key={index}>
                                <div className="card_image">
                                    <img src={itemcard.iconUrl} alt="" />
                                </div>
                                <div className="card_title">
                                    <p><a href={itemcard.cardUrl}>{itemcard.cardTitle}</a></p>
                                </div>  
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Row>
        </section>
    );
}
