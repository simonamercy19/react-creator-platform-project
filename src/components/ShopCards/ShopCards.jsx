import React from 'react';
import { Col, Card, Image, Button } from 'react-bootstrap';

const ShopCards = () => {
    return(
        <Col className="shop-cards-holder" xs={12} md={6}>
            <Card className="flex-column">
                <div className="creator-details">
                    <Image src={require('../../static/images/profile_pic.jpeg')} alt="Profile Pic" />
                    <div className="username">Holland Mercy</div>
                </div>
                <div className="product-details text-center">
                    <Image src={require('../../static/images/shop-item1.jpg')} />
                    <div className="product-name flex-row font-weight-bold">
                        B26 Hoden Lopes Women's V-Neck T-shirt - Limited Edition
                    </div>
                    <div className="price">
                        $65
                    </div>
                    <Button type="button">BUY NOW</Button>
                    <div className="decs">
                    Nullam vel sem. Vivamus consectetuer hendrerit lacus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nunc nec neque. Morbi vestibulum volutpat enim.
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default ShopCards;