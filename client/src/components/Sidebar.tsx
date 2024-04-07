import { NavLink } from "react-router-dom";
import Logo from "/logo.webp";
import { AiOutlineCode, AiOutlineFileAdd, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { useAppSelector } from "../redux/hook";
import { BsListCheck } from "react-icons/bs";

function Sidebar() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="w-2/12 bg-white p-2 m-2 rounded-md">
      <img src={Logo} alt="Basys Logo" />
      <div className="flex flex-col">
        <NavLink to="/dashboard/" className="side-nav">
          <AiOutlineHome /> Home
        </NavLink>
        <NavLink to="prior-authorization" className="side-nav">
          <AiOutlineFileAdd /> Prior Authorization
        </NavLink>
        <NavLink to="claims" className="side-nav">
          <GiHamburgerMenu /> Claims
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
        <NavLink to="my-profile" className="side-nav">
          <BiUserCircle /> Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
