import React, { useContext } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const { user, isLoading } = useContext(UserContext);

  // if (isLoading) {
  //   // If data is still loading, show a loader
  //   return (
  //     <div className="loader-container fixed w-screen h-screen inset-0 z-50 flex items-center justify-center bg-gray-200">
  //       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  //     </div>
  //   );
  // }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <SigninPage />}
        />
        <Route path="/*" element={<MainPage />} />
        <Route
          path="/signin"
          element={user ? <Navigate to="/home" /> : <SigninPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/home" /> : <SignupPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
