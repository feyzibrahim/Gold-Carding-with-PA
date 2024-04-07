import { useAppSelector } from "../../redux/hook";

function Home() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className=" p-6 bg-white rounded-md shadow-md mx-5">
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
        <div>
          <p className="text-gray-600">Email: {user && user.email}</p>
          <p className="text-gray-600">Password: {user && user.password}</p>
          {user && user.name && (
            <p className="text-gray-600">Name: {user && user.name}</p>
          )}
          {user && user.role && (
            <p className="text-gray-600">Role: {user && user.role}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
