import React from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout"
import FeedScreen from "./screens/Feed";
import Messages from "./screens/Messages";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<FeedScreen/>} path="/home" />
        <Route element={<Messages/>} path="/messages" />
        <Route path="*" element={<Navigate to="/home" />}/>
      </Routes>
    </Layout>
  );
}

export default App
