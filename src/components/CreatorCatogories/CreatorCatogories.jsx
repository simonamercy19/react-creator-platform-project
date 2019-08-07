import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CreatorCatogories = (props) => {
    const SingleCreatorCatogories = props.data.map((value, index) => {
        return(
            <Col xs={12} md={{ span: 3, offset: 1 }} key={index}>
                <Button className="btn-white ">{value}</Button>
            </Col>
        )
    })
    return(
        <Container className="creator-catogories">
            <Row>
                {SingleCreatorCatogories}
            </Row>
        </Container>
    )
}

export default CreatorCatogories;