import React from 'react';
import { connect } from 'react-redux';
import Resources from './Resources';
import Blogs from './Blogs';
import Tutorials from './Tutorials';
import AboutUs from './AboutUs';
import SourceCodes from './SourceCodes';



const Main = ({selectedElement}) => {
    
    return (
        <>
            <div className="r-p-main">
            {selectedElement === 'resources' && <Resources/>}
            {selectedElement === 'blogs' && <Blogs/>}
            {selectedElement === 'tutorials' && <Tutorials/>}
            {selectedElement === 'aboutus' && <AboutUs/>}
            {selectedElement === 'sourcecodes' && <SourceCodes/>}
           
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        selectedElement: state.selectedElement,
    };
}

export default connect(mapStateToProps)(Main);