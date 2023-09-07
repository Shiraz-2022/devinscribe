import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';


function ResourcePage() {
    return (
        <>
            <div className="r-p">
                <Topbar />
                <div className="r-p-main-page">
                    <Sidebar />
                    <Main />
                </div>

            </div>
        </>
    )
}

export default ResourcePage;