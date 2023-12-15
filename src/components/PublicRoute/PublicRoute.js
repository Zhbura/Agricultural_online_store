import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ authed }) => {
    return !authed ? <Outlet /> : <Navigate to="/Agricultural_online_store/personal_account" replace />
}