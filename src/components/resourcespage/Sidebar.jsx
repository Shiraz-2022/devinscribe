import React from 'react';
import {connect} from 'react-redux';
import {selectElement} from './redux/actions/mainActions';

const Sidebar = ({selectElement}) => {

    const handleElementClick = (element) =>{
        selectElement(element);
    }

    return (
        <>
            <div className="r-p-sidebar">
                <div className="r-p-sidebar-components">
                <ul>
                    <li onClick={()=> handleElementClick('resources')}><a>Resources</a></li>


                    <li onClick={()=> handleElementClick('blogs')}><a>Blogs</a></li>


                    <li onClick={()=> handleElementClick('tutorials')}><a>Tutorials</a></li>
                    <li onClick={()=> handleElementClick('sourcecodes')}><a>Codes</a></li>


                    <li onClick={()=> handleElementClick('aboutus')}><a>About us</a></li>
</ul>

                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    selectElement,
  };
  
  export default connect(null, mapDispatchToProps)(Sidebar);