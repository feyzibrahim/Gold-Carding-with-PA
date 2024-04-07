import { NavLink } from "react-router-dom";
import Logo from "/logo.webp";
import { AiOutlineCode, AiOutlineFileAdd, AiOutlineHome } from "react-icons/ai";
import { useAppSelector } from "../redux/hook";
import { BsListCheck } from "react-icons/bs";

function Sidebar() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="w-2/12 bg-white p-2 m-2 rounded-md">
      <img src={Logo} alt="Basys Logo" />
      <div className="flex flex-col">
        <NavLink to="/dashboard" className="side-nav" end>
          <AiOutlineHome /> Home
        </NavLink>
        {user && user.role === "admin" && (
          <>
            <NavLink to="cpt-codes" className="side-nav">
              <AiOutlineCode /> CPT Codes
            </NavLink>
            <NavLink to="gold-carding-criteria" className="side-nav">
              <BsListCheck /> Gold Carding Criteria
            </NavLink>
          </>
        )}
        {user && user.role === "payer" && (
          <>
            <NavLink to="prior-authorization" className="side-nav">
              <AiOutlineFileAdd /> Prior Authorization
            </NavLink>
            <NavLink to="gold-carding-rule" className="side-nav">
              <BsListCheck /> Gold Carding Rule
            </NavLink>
          </>
        )}
        {user && user.role === "provider" && (
          <>
            <NavLink to="prior-authorization" className="side-nav">
              <AiOutlineFileAdd /> Prior Authorization
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
