import React from "react";
import { Card, Col, Image } from "react-bootstrap";


const TicketCards = () =>{
    return(
        <Col sm={12} md={6} className="ticket-cards-holder d-inline-block">
            <Card>
                <div className="img-container">
                    <Image src={require('../../static/images/ticket-new.jpg')} />
                </div>
                <div className="ticket-content">
                    <div className="ticket-name">Chat Ticket</div>
                    <div className="decs">Nam commodo suscipit quam. Ut leo. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.odio sit amet eros.
                    </div>
                    <div className="price text-center">$10.00</div>
                    <div className="text-center expiry-d">Expiration Date: 08/07/2020</div>
                </div>
            </Card>
        </Col>
    )
}

export default TicketCards;