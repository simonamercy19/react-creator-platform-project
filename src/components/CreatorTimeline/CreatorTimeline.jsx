import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreatorPostCard from '../CreatorPostCard';
import CreatorDetailsTimeline from '../CreatorDetailsTimeline';
import CreatorLastSectionTimeline from '../CreatorLastSectionTimeline';

const CreatorTime = () => {
    let cards=[];
    for (let i = 0; i < 5; i++) {
        cards.push(<CreatorPostCard key={i} />); 
    }
    return(
        <Container className="creator-profile-container">
            <Row>
                <Col xs={12} md={3} className="order-0 order-md-0">
                  <CreatorDetailsTimeline />
                </Col>
                <Col xs={12} md={6} className="order-2 order-md-1">
                    {cards}
                </Col>
                <Col xs={12} md={3} className="order-1 order-md-2">
                   <CreatorLastSectionTimeline /> 
                </Col>
            </Row>
        </Container>
    )
}

export default CreatorTime;