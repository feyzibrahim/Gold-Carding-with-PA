import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Dashboard from "./page/Dashboard";
import { useAppSelector } from "./redux/hook";
import { ReactNode } from "react";

function App() {
  const ProtectedRoute = ({ element }: { element: ReactNode }) => {
    const { user } = useAppSelector((state) => state.user);

    return user ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
