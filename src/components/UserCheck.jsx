
import { useUserContext } from '../context/UserContext';

const UserCheck = ({ children }) => {
  const { users } = useUserContext(); // Access your user context
  const currentUser = users.find(user => user.email === "mansoor72373@gmail.com" && user.name === "Mansoor Ahmad");

  return currentUser ? children : null; // Render children if the user matches, otherwise render null
};

export default UserCheck;
