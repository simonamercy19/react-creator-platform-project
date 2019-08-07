import React from 'react';
import { Container, Tab, Nav } from 'react-bootstrap';
import CreatorTimeline from '../CreatorTimeline';
import CreatorShop from '../CreatorShop';
import CreatorForum from '../CreatorForum';

const CreatorProfileMenu = () => {
    
    return (
        <div className="creator-profile-menu-holder">
            <Tab.Container id="left-tabs-example" defaultActiveKey="timeline">
                <div className="tabHead">
                    <Container>
                    <Nav variant="pills" className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link eventKey="timeline">
                                <span className="icon-patron"></span> Timeline
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="shop">
                                <span className="icon-gift"></span> Shop
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="forum">
                                <span className="icon-forum"></span> Forum
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Container>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="timeline">
                        <CreatorTimeline />
                    </Tab.Pane>
                    <Tab.Pane eventKey="shop">
                        <CreatorShop />
                    </Tab.Pane>
                    <Tab.Pane eventKey="forum">
                        <CreatorForum />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            
        </div>
      
    )
}



export default CreatorProfileMenu;