import React from 'react';
import Navbar from '../Component/Navbar';
import ErrorHandling from './ErrorHandling';
import Footer from '../Component/Footer';

const ShowError = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ErrorHandling></ErrorHandling>
            <Footer></Footer>
            
        </div>
    );
};

export default ShowError;