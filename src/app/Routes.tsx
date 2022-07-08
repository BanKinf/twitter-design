import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import FeedScreen from "../screens/Feed";
import ExploreScreen from "../screens/Explorer";
import NotificationsScreen from "../screens/Notifications";
import MessagesScreen from "../screens/Messages";
import BookMarksScreen from "../screens/BookMarks";
import ListsScreen from "../screens/Lists";
import ProfileScreen from "../screens/Profile";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route element={<FeedScreen />} path="/home" />
      <Route element={<ExploreScreen />} path="/explore" />
      <Route element={<NotificationsScreen />} path="/notifications" />
      <Route element={<MessagesScreen />} path="/messages" />
      <Route element={<BookMarksScreen />} path="/bookmarks" />
      <Route element={<ListsScreen />} path="/lists" />
      <Route element={<ProfileScreen />} path="/profile" />
      <Route path="*" element={<Navigate to="/home" />}/>
    </Routes>
  );
};

export default Routers;