import { useSelector } from "react-redux";
import Login from "../../screens/authentication/Login";

const PrivateRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.users) || {};

    return userInfo?.token ? children : <Login />;
};

export default PrivateRoute;
