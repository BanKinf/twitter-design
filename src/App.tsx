import { Stack, Text } from "@chakra-ui/react";
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout"
import FeedScreen from "./screens/Feed";

const App: React.FC = () => {
  return <Layout>
    <Stack direction="row">
      <Stack>
        <Text>Logo de Twetter</Text>
      </Stack>
      <Routes>
        <Route element={<FeedScreen/>} path="/" />
        <Route 
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Stack>
  </Layout>;
}

export default App
