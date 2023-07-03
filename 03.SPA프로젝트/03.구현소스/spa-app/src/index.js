import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import Layout from "./ZORA/Layout";
import Main from "./ZORA/Main";
import Shop from "./ZORA/Shop";
import OurStory from "./ZORA/OurStory ";
import OurImpact from "./ZORA/OurImpact";
import Sub from "./ZORA/Sub";

export default function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="shop" element={<Shop />} />
          <Route path="story" element={<OurStory />} />
          <Route path="impact" element={<OurImpact />} />
          <Route path="sub" element={<Sub num={""} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
} //////////////// App 컴포넌트 //////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
