import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [user, loading] = useAuth()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div className=" flex min-h-screen justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    else{
        return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
    }
};

export default AdminRoutes;