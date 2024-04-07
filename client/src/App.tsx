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
import Claims from "./page/dashboardPages/Claims";
import CptCodes from "./page/dashboardPages/admin/CptCodes/CptCodes";
import GoldCardRule from "./page/dashboardPages/payer/GoldCardRule/GoldCardRule";
import PriorAuthorizationRequest from "./page/dashboardPages/provider/PriorAuthorization/PriorAuthorizationRequest";
import HandlePARequest from "./page/dashboardPages/payer/HandlePARequest/HandlePARequest";
import GoldCardCriteria from "./page/dashboardPages/admin/GoldCardCriteria/GoldCardCriteria";

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
          <Route
            path="prior-authorization"
            element={
              user?.role === "payer" ? (
                <HandlePARequest />
              ) : (
                <PriorAuthorizationRequest />
              )
            }
          />
          <Route path="claims" element={<Claims />} />

          {/* Admin Routes */}
          <Route path="cpt-codes" element={<CptCodes />} />
          <Route path="gold-carding-criteria" element={<GoldCardCriteria />} />

          {/* Payer */}
          <Route path="gold-carding-rule" element={<GoldCardRule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
