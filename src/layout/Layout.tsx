import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header.tsx';

export default function Layout() {

    return (
        <div>
            <Header />
            <main className='flex flex-col items-center'>
                <Outlet />
            </main>
        </div>
    );
}