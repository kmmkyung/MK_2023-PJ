import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './ZORA/Layout'
import Main from './ZORA/Main'
import Shop from './ZORA/Shop'
import OurStory from './ZORA/OurStory ';
import OurImpact from './ZORA/OurImpact';
import SubDark from './ZORA/SubDark';
import SubFleur from './ZORA/SubFleur';
import SubGinger from './ZORA/SubGinger';
import SubPecan from './ZORA/SubPecan';
import SubRose from './ZORA/SubRose';
import Sub from './ZORA/Sub';

export default function App(){
    return(
      // <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="main" element={<Main />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='story' element={<OurStory />} />
                    <Route path='impact' element={<OurImpact />} />
                    {/* <Route path='dark' element={<SubDark />} />
                    <Route path='fleur' element={<SubFleur/>} />
                    <Route path='ginger' element={<SubGinger/>} />
                    <Route path='pecan' element={<SubPecan/>} />
                    <Route path='rose' element={<SubRose/>} /> */}
                    <Route path='sub' element={<Sub num={''}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
} //////////////// App 컴포넌트 //////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);