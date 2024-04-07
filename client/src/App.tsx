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
import Home from "./page/dashboardPages/Home";
import PriorAuthorization from "./page/dashboardPages/PriorAuthorization";
import Claims from "./page/dashboardPages/Claims";
import MyProfile from "./page/dashboardPages/MyProfile";
import CptCodes from "./page/dashboardPages/admin/CptCodes";
import GoldCardCriteria from "./page/dashboardPages/admin/GoldCardCriteria";

function App() {
  const { user } = useAppSelector((state) => state.user);
  const ProtectedRoute = ({ element }: { element: ReactNode }) => {
    return user ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        >
          <Route index element={<Home />} />
          <Route path="prior-authorization" element={<PriorAuthorization />} />
          <Route path="claims" element={<Claims />} />
          <Route path="my-profile" element={<MyProfile />} />

          {/* Admin Routes */}
          <Route path="cpt-codes" element={<CptCodes />} />
          <Route path="gold-carding-criteria" element={<GoldCardCriteria />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
