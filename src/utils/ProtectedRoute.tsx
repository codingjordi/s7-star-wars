import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ canNavigate, redirectPath = '/' }) {

    if(!canNavigate) {
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet />
}
