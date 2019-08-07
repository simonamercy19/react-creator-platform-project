import React from 'react';
import ControlPanelTabs from '../ControlPanelTabs';
//const bgcolor = "red";
export default class ControlPanel extends React.Component {
    
    // componentDidMount() {
    //     document.body.classList.add(bgcolor);
    //   }
    
    //   componentWillUnmount() {
    //     document.body.classList.remove(bgcolor);
    //   }
    render(){
        return(
            <React.Fragment>
                <div className="control-panel-holder h-100">
                    <ControlPanelTabs />
                </div>
            </React.Fragment>
        )
    }
}