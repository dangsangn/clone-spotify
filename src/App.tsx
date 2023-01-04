import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/components/DefaultLayout";
import { Discover } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path=""
          element={
            <DefaultLayout>
              <Discover />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
