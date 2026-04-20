import React from 'react';
import Navbar from '../componenets/shared/Navbar';
import Footer from '../componenets/shared/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );
};

export default RootLayout;