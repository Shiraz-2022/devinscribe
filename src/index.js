import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/homepage/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ResourcePage from './components/resourcespage/ResourcePage';
import { Provider } from 'react-redux';
import store from './components/resourcespage/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element=<HomePage/> />
        <Route path="/resourcePage" element=<ResourcePage/>/>
    </Routes>

    </BrowserRouter>
    </Provider>
    
);