import React from 'react';
import ReactLogo from '../Logo';
import ReactNavigation from '../Navigation';

const ReactHeader = () =>{
    return(
        <div className="c-header">
            <div className="c-container">
                <div className="c-navlist">
                    <ReactLogo/>
                    <ReactNavigation/> 
                    {/* <ReactLogo/> */}
                </div> 
            </div>
        </div>
    )

}
export default ReactHeader;