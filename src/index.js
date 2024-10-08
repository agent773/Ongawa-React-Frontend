// import React from 'react'
// import ReactDOM from 'react-dom'
// import './global.css'
// import Homepage from './pages/HomePage'

// ReactDOM.render(<Homepage/>, document.getElementById('root'))

import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import "./global.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <div className="no-scrollbar h-screen overflow-y-auto">
                <Router />
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

