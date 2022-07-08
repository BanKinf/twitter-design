import React from "react";
import {Routes, Route,} from "react-router-dom";

import FeedScreen from "../screens/Feed";
import Messages from "../screens/Messages";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route element={<FeedScreen />} path="/home" />
      <Route element={<Messages />} path="/messages" />
    </Routes>
  );
};

export default Routes;