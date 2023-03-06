import { useSelector } from "react-redux";
import Login from "../../screens/authentication/Login";

const AdminProtectedRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.users) || {};

    return userInfo?.isAdmin ? children : <Login />;
};

export default AdminProtectedRoute;
