import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './ZORA/Layout'
import Main from './ZORA/Main'
import Shop from './ZORA/Shop'
import Sub_Dark from './ZORA/Sub_Dark'

export default function App(){
  return(
      // <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="main" element={<Main />} />
                  <Route path='shop' element={<Shop />} />
                  <Route path='subitemdark' element={<Sub_Dark />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
} //////////////// App 컴포넌트 //////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);