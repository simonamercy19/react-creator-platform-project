import React from 'react';
import { Container,Nav, Tab } from 'react-bootstrap';
import ProfileOverview from '../ProfieOverview';
import TicketCards from '../TicketCards';

const ControlPanelTabs = () => {
    let ticketCard =[];
    for(let i=0; i<4; i++){
        ticketCard.push(<TicketCards key={i} />)
    }
    return(
        <div className="control-panel-tabs-holder d-flex">
            <Tab.Container id="control-panel-tabs" defaultActiveKey="profile">
                <div className="tabs-section tabHead"> 
                    <Nav variant="pills" className="flex-column w-100">
                        <Nav.Item>
                            <Nav.Link eventKey="profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="events-ticket">View Paid Tickets</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </div>
                <Container className="w-50 pb-5">
                    <div className="tabBody w-100">
                        <Tab.Content>
                            <Tab.Pane eventKey="profile">
                                <ProfileOverview  />
                            </Tab.Pane>
                            <Tab.Pane eventKey="events-ticket">
                                {ticketCard}
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="dashboard">
                            sdsdfdfsdf
                            </Tab.Pane> */}
                        </Tab.Content>
                    </div>
                </Container>
            </Tab.Container>
            
            
        </div>
    )
}

export default ControlPanelTabs;

