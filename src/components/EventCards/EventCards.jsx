import React from 'react';
import { Col, Card, Image, Row } from 'react-bootstrap';


const EventCards = () =>{
    return(
        <Col sm={12} md={6} className="event-cards-holder d-inline-block">
             <Card>
                <div className="img-container">
                    <Image src={require('../../static/images/event-img.jpg')} />
                </div>     
                <div className="event-content-container">
                    <Row>
                        <Col xs={3} md={3} className="date-holder">
                            <div className="month-name"> Aug </div>                                            
                            <div className="month-date">8</div>
                            <div className="time">6:15 PM (IST)</div>
                        </Col>
                        <Col xs={9} md={9} className="text-content">
                            <div className="event-title">HillTop Goa Monsoon Blast </div>
                            <div className="decs">
                            Phasellus nec sem in justo pellentesque facilisis. Praesent vestibulum dapibus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                            </div>
                            <div className="timer-holder">
                                <div className="timer-wrapper">
                                    <div className="number days">1</div>
                                    <div className="sub-content">Days</div>
                                </div>
                                <div className="timer-wrapper">
                                    <div className="number hours">0</div>
                                    <div className="sub-content">Hours</div>
                                </div>
                                <div className="timer-wrapper">
                                    <div className="number minutes">0</div>
                                    <div className="sub-content">Min</div>
                                </div>
                                <div className="timer-wrapper">
                                    <div className="number seconds">31</div>
                                    <div className="sub-content">Sec</div>
                                </div>                                                    
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>   
        </Col>
    )
}

export default EventCards;