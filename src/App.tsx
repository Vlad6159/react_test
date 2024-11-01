import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
