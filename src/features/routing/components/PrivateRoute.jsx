import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    if (window.localStorage.getItem("token"))
        return children;

    return <Navigate to="/login" />;
}