import React from 'react';
import { Card, Image } from 'react-bootstrap';

const MerchTimeline = () => {
    let merchCards=[];
    for(let i=0; i<3; i++){
        merchCards.push(
            <Card className="flex-row p-2">
                <Image className="pr-1" src={require('../../static/images/merch-mock.png')} />
                <div className="text-content pl-1">
                    <div className="product-name font-weight-bold">STYDIA by Holland Mercy Ladies' Shirttail Tank</div>
                    <div className="price mt-1 mb-1 font-weight-bold">$87</div>
                    <p className="decs m-0">Nullam vel sem. Vivamus consectetuer hendrerit lacus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nunc nec neque. Morbi vestibulum volutpat enim.</p>
                </div>
            </Card>
        )
    }
    return(
        <div className="merch-holder">
            <div className="title">TOP SELLING MERCHANDISE</div>
            <div className="top-merch-cards">
                {merchCards}
            </div>
        </div>
    )
}

export default MerchTimeline;