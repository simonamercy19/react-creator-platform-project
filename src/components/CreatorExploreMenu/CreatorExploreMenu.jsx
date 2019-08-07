// import React from 'react';
// import { Container } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import {withRouter} from 'next/router';
// import CreatorCatogories from '../CreatorCatogories';
// import CreatorCardDetails from '../CreatorCardDetails';
// import EventCard from '../EventCard';


// const CreatorExploreMenu = ({ router }) => {
//     let state = {
//         CarouselData : [
//             {backgroundImg: 'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg',
//             creatorName: 'Holland Mercy',
//             creatorDecs: 'Nullam vel sem. Vivamus consectetuer hendrerit lacus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nunc nec neque. Morbi vestibulum volutpat enim.',
//             creatorProfileImg: 'https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg'},
//             {backgroundImg: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
//             creatorName: 'Allen',
//             creatorDecs: "Nullam vel sem. Vivamus consectetuer hendrerit lacus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nunc nec neque. Morbi vestibulum volutpat enim.",
//             creatorProfileImg: 'https://images.pexels.com/photos/2480798/pexels-photo-2480798.jpeg'},
//             {backgroundImg: 'https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg',
//             creatorName: 'Sasha Lopes',
//             creatorDecs: "Nullam vel sem. Vivamus consectetuer hendrerit lacus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nunc nec neque. Morbi vestibulum volutpat enim.",
//             creatorProfileImg: 'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg'}
//         ],
//         CreatorCatogories: [
//             'GAMING',
//             'HOME & FAMILY',
//             'FASHION',
//             'COMEDY',
//             'MUSIC',
//             'BEAUTY',
//             'HEALTH & FITNESS',
//             'ENTERTAINMENT',
//             'LIFESTYLE',
//             'FILM & ANIMATION',
//             'DIY',
//             'TECHNOLOGY',
//             'COOKING',
//             'POP-CULTURE'
//         ]
//     }
    
//     const { query: {tab} } = router;
//     const isTabHome = tab === "Home" || tab == null;
//     const isTabFreaturedCreators = tab === "FreaturedCreators";
//     const isTabCreators = tab === "Creators";
//     const isTabEvents = tab === "Events";
    
//     let allCreators=[];
//     for(let i=0; i<6 ;i++) {
//        allCreators.push(<CreatorCardDetails data={state.CarouselData} key ={i}/>);
//     }

//     return(
//         <div className="creator-explore-menu-section">
//             <Container>
//                 <div className="tabHead">
//                     <div className="tab" data-selected={isTabHome}>
//                         <Link href={{ pathname: '', query: { tab: "Home"} }}>
//                             <a>
//                                 <span className="icon-home-new"></span>
//                                 Home
//                             </a>
//                         </Link>
//                     </div>
//                     <div className="tab" data-selected={isTabFreaturedCreators}>
//                         <Link href={{ pathname: '', query: { tab: "FreaturedCreators" } }}>
//                             <a>
//                                 <span className="icon-Featured-Creators"></span>
//                                 Featured Creators
//                             </a>
//                         </Link>
//                     </div>
//                     <div className="tab" data-selected={isTabCreators}>
//                         <Link href={{ pathname: '', query: { tab: "Creators" } }}>
//                             <a>
//                                 <span className="icon-subscribers"></span>
//                                 All Creators
//                             </a>
//                         </Link>
//                     </div>
//                     <div className="tab" data-selected={isTabEvents}>
//                         <Link href={{ pathname: "", query: { tab: "Events"} }}>
//                             <a>
//                                 <span className="icon-Upcoming-Events"></span>
//                                 Upcoming Events
//                             </a>
//                         </Link>
//                     </div>
//                 </div>
//             </Container>
//             <div className="TabBody" data-tabType={tab}>
//                 {isTabHome && 
//                 <React.Fragment>
//                     <CreatorCatogories data={state.CreatorCatogories} />
//                     <CreatorCardDetails data={state.CarouselData}/>
//                 </React.Fragment>
//                 }
//                 {isTabFreaturedCreators && 
//                 <React.Fragment>
//                      <div className="title">Explore our Creators</div>
//                     <CreatorCardDetails data={state.CarouselData}/>
//                 </React.Fragment>
//                 }
//                 {isTabCreators && 
//                 <React.Fragment>
//                     {allCreators}
//                 </React.Fragment>}
//                 {isTabEvents && 
//                 <React.Fragment>
//                     <Container>
//                         <div class="title">Upcoming Events</div>
//                         <div className="d-flex justify-content-center">
//                             <EventCard />
//                         </div>
//                     </Container>
//                 </React.Fragment>}
//             </div>
//         </div>
//     )
// } 

// export default withRouter(CreatorExploreMenu);


import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import CreatorCatogories from '../CreatorCatogories';
import CreatorCardDetails from '../CreatorCardDetails';
import EventCards from '../EventCards';


const CreatorExploreMenu = () => {
  let state = {
    CarouselData : [
      {backgroundImg: 'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg',
      creatorName: 'Holland Mercy',
      creatorDecs: 'Vivamus in erat ut urna Nulla porta dolor. In auctor lobortis lacus. Nunc egestas, augue at pellentesque laoreet, felis eros',
      creatorProfileImg: 'https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg'},
      {backgroundImg: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
      creatorName: 'Allen',
      creatorDecs: "Fusce fermentum odio nec arcu. Praesent egestas neque eu enim. Etiam ultricies nisi vel augue. Phasellus dolor. Cras ultricies mi eu turpis hendrerit fringilla.",
      creatorProfileImg: 'https://images.pexels.com/photos/2480798/pexels-photo-2480798.jpeg'},
      {backgroundImg: 'https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg',
      creatorName: 'Sasha Lopes',
      creatorDecs: "Nam commodo suscipit quam. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl.",
      creatorProfileImg: 'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg'}
    ],
    CreatorCatogories: [
        'GAMING',
        'HOME & FAMILY',
        'FASHION',
        'COMEDY',
        'MUSIC',
        'BEAUTY',
        'HEALTH & FITNESS',
        'ENTERTAINMENT',
        'LIFESTYLE',
        'FILM & ANIMATION',
        'DIY',
        'TECHNOLOGY',
        'COOKING',
        'POP-CULTURE'
    ]
  }
    let allCreators=[];
    for(let i=0; i<6 ;i++) {
        allCreators.push(<CreatorCardDetails data={state.CarouselData} key ={i}/>);
    }
    let eventcards=[];
    for(let i=0; i<3 ;i++) {
        eventcards.push(<EventCards key ={i}/>);
    }
    return (
      <div className="creator-explore-menu-section">
        <Tab.Container id="explore-creator-tabs" defaultActiveKey="home">
          <div className="tabHead">
            <Container>
              <Nav variant="pills" className="justify-content-center">
                <Nav.Item href="/">
                  <Nav.Link eventKey="home">
                    <span className="icon-home-new"></span> Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey="featuredCreators">
                    <span className="icon-Featured-Creators"></span> Featured Creators
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="creators">
                    <span className="icon-subscribers"></span> All Creators
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="events">
                  <span className="icon-Upcoming-Events"></span> Upcoming Events
                </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </div>
        
            
          <Tab.Content>
            <Tab.Pane eventKey="home" className="home">
              <div className="title">
                  Explore by Categories
              </div>
              <CreatorCatogories data={state.CreatorCatogories} />
              <div className="title creators">Explore Our Creators</div>
              <CreatorCardDetails data={state.CarouselData}/>
            </Tab.Pane>
            <Tab.Pane eventKey="featuredCreators" className="featured-creators">
              <div className="title">Our Featured Creators</div>
              <CreatorCardDetails data={state.CarouselData}/>
            </Tab.Pane>
            <Tab.Pane eventKey="creators">
              <div className="title">Our Creators</div>
              {allCreators}
            </Tab.Pane>
            <Tab.Pane eventKey="events">
              <Container className="mt-5">
                {eventcards}
              </Container>
            </Tab.Pane>
          </Tab.Content>
      </Tab.Container>
      </div>
    );
}

export default CreatorExploreMenu;
