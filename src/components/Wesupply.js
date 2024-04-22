import React from 'react';
import { Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Wesupply() {

    const SupplyCard = [
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/mic.png",
            cardTitle: "International Voices",
            cardUrl:"https://greatbritishvoices.co.uk/voice/international-voice-overs/",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/faces.png",
            cardTitle: "Conference Facilitators",
            cardUrl:"https://greatbritishpresenters.co.uk/presenters/conference-facilitators",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/faces.png",
            cardTitle: "News Broadcasters",
            cardUrl:"https://greatbritishpresenters.co.uk/voice/international-voice-overs/",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/spoon-plate.png",
            cardTitle: "After-Dinner Speakers",
            cardUrl:"https://greatbritishspeakers.co.uk/speaker/after-dinner-speakers/",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/mic.png",
            cardTitle: "Celebrity Voice Overs",
            cardUrl:"https://greatbritishvoices.co.uk/celebrity-voice-overs/",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/mic.png",
            cardTitle: "International Voices",
            cardUrl:"https://greatbritishvoices.co.uk/voice/international-voice-overs/",
        },
        {
            iconUrl: "https://www.greatbritishtalent.com/static/css/img/faces.png",
            cardTitle: "Sports Speakers",
            cardUrl:"https://greatbritishspeakers.co.uk/speaker/sports-speakers/",
        },      
    ]

    return (
        <>
            <section className="we_supply">
                <Row className='align-items-center'>
                    <div className="heading_panel">
                        <h3>We supply</h3>
                        <div className="slider_control">

                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="we_supply_slider">
                        {/* Card Loop */}

                        {SupplyCard.map((itemcard, index) => (
                            <div className="card">
                                <div className="card_image">
                                    <img src={itemcard.iconUrl} alt="" />
                                </div>
                                <div className="card_title">
                                    <p><a href={itemcard.cardUrl}>{itemcard.cardTitle}</a></p>
                                </div>
                            </div>
                        ))}

                    </div>
                </Row>
            </section>

        </>
    );
}
