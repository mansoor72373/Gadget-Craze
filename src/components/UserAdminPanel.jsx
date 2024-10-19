import React from "react";
import { useUserContext } from "../context/UserContext"; 

const UserAdminPanel = () => {
  const { users, setUsers } = useUserContext();

  const handleDeleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email)); 
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-white mt-24 p-6 rounded-lg shadow-lg w-full max-w-3xl"> 
        <h3 className="text-2xl font-bold mb-4 text-center">User Management</h3>
        {users.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user, index) => (
              <li key={index} className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm">
                <div className="flex flex-col">
                  <span className="font-semibold">Name: {user.name}</span>
                  <span className="text-sm text-gray-600">Email: {user.email}</span>
                  <span className="text-sm text-gray-600">Address: {user.address}</span>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition mt-2 sm:mt-0"
                  onClick={() => handleDeleteUser(user.email)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserAdminPanel;
