import { useSelector } from "react-redux";
import { selectUser } from "../store/ducks/user/selectors";
import {
    useLocation,
    Navigate,
  } from "react-router-dom";





export const RequireAuth = ({ children }) => {
    let auth = useSelector(selectUser) !== null;
    let location = useLocation();

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}