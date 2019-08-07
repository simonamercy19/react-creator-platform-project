import React, { Fragment } from 'react';
import CreatorCarousel from '../CreatorCarousel';
import CreatorExploreMenu from '../CreatorExploreMenu';

export default class ExpoloreCreator extends React.Component {

    state = {
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
        ]
        // ,
        // CreatorCatogories: [
        //     'GAMING',
        //     'HOME & FAMILY',
        //     'FASHION',
        //     'COMEDY',
        //     'MUSIC',
        //     'BEAUTY',
        //     'HEALTH & FITNESS',
        //     'ENTERTAINMENT',
        //     'LIFESTYLE',
        //     'FILM & ANIMATION',
        //     'DIY',
        //     'TECHNOLOGY',
        //     'COOKING',
        //     'POP-CULTURE'
        // ]
    }
    
    render() {
        return(
           <Fragment>
               <CreatorCarousel data={this.state.CarouselData} />
               <CreatorExploreMenu />
           </Fragment>
            
        )
    }
}
