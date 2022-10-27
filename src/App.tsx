import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import StoryPlayGround from "./pages/StoryPlayGround";
import TestPlayGround from "./pages/TestPlayGround";

import "./assets/styles/global.scss";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/test-playground" replace />} />
          <Route path="/test-playground" element={<TestPlayGround />} />
          <Route path="/story-playground" element={<StoryPlayGround />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
