import React from 'react';
import { Card, Nav, Tab, Button, Col } from 'react-bootstrap';
import EditProfileForm from '../EditProfileForm';
import CreatorPostCard from '../CreatorPostCard';

let cards=[];
for (let i = 0; i < 3; i++) {
    cards.push(<CreatorPostCard key={i} />); 
}

class ProfieOverview extends React.Component  {
    state = {
        mainTabContainer: true
    }
    // constructor(props){
    //     super(props);
    //     this.hideTabContainer.bind(this);

    // }

    hideTabContainer=(status)=>{
        this.setState({mainTabContainer: status});
    }
    
    render() {
        return(
            <div className="profile-overview-holder">
                <div className="title mb-4">Profile Preview and Management Overview</div>
                <Tab.Container id="profile-overview-tabs" onSelect={ this.hideTabContainer.bind(this,false) }>
                    { this.state.mainTabContainer && (
                        <Card className="">
                            <Nav variant="pills" className="">
                                <Col  xs={12} md={6}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="editProfile">
                                            
                                                <div className="icon-handler d-inline-block">
                                                    <span className="icon-home-new"></span>
                                                </div>
                                                <div className="content-hander">
                                                    <h6 className="sub-text-title">Edit profile</h6>
                                                    <p>Upload a custom profile image and edit your profile description</p>
                                                </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col  xs={12} md={6}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="myPosts">
                                                <div className="icon-handler d-inline-block">
                                                    <span className="icon-meetandgreet"></span>
                                                </div>
                                                <div className="content-hander">
                                                    <h6 className="sub-text-title">My Posts</h6>
                                                    <p>Upload custom posts for your fans</p>
                                                </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                                {/* <Col  xs={12} md={6}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                                <div className="icon-handler d-inline-block">
                                                    <span className="icon-new-events-tickets"></span>
                                                </div>
                                                <div className="content-hander">
                                                    <h6 className="sub-text-title">My Tickets and Passes</h6>
                                                    <p>View all the tickets and passes you currently hold, or have previously used.</p>
                                                </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col> */}
                            </Nav>
                        </Card>
                    ) }
                    { !this.state.mainTabContainer && (
                    <Tab.Content>
                        <Button onClick={this.hideTabContainer.bind(this,true)}>back</Button>
                        <Tab.Pane eventKey="editProfile">
                            <EditProfileForm />
                        </Tab.Pane>
                        <Tab.Pane className="mt-4" eventKey="myPosts">
                            {cards}
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="myPosts">
                            xdzfhsdfgjhsdgfshjdfgsjhdfg
                        </Tab.Pane> */}
                    </Tab.Content>
                    )}
                    </Tab.Container>
                
            </div>
        )
    }
    
}

export default ProfieOverview;