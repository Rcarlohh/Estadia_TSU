import React , { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import HomeComponents from '../components/HomeComponents';
import ForumComponents from '../components/ForumComponents';
import AboutComponents from '../components/AboutComponents';
import ContacComponents from '../components/ContacComponents';
import ServiceComponents from '../components/ServiceComponents;'

const AppRoute = () => {
    <Router>
        <switch>
            <Route path="/" exact Component={HomeComponents}/>
            <Route path="/Forum" exact Component={ForumComponents}/>
            <Route path="/About" exact Component={AboutComponents}/>
            <Route path="/Contact" exact Component={ContacComponents}/>
            <Route path="/Service" exact Component={ServiceComponents}/>
        </switch>
    </Router>
};

export default AppRoute;