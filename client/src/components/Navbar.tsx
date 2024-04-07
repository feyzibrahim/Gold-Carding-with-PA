import { FiLogOut, FiSearch, FiUser } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { AiFillNotification } from "react-icons/ai";
import { logout } from "../redux/user/userSlice";

function Navbar() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="p-5 flex items-center justify-between w-full">
      <p className="text-2xl font-bold">Hi, {user && user.name}!</p>
      <div className="flex gap-5 text-xl">
        <FiSearch className="hover:text-gray-600 cursor-pointer" />
        <AiFillNotification className="hover:text-gray-600 cursor-pointer" />
        <FiUser className="hover:text-gray-600 cursor-pointer" />
        <FiLogOut
          className="hover:text-gray-600 cursor-pointer"
          onClick={logoutUser}
        />
      </div>
    </div>
  );
}

export default Navbar;
