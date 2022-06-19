import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from "../../login";

import PrivateRoute from './PrivateRoute';

export default function Router() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                    <PrivateRoute>
                        <button onClick={() => {window.localStorage.removeItem("token"); window.location = '/';}}>LogOut</button>
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter >
    )
}