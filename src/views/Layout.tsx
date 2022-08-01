import React from 'react';
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from 'config/CustomRoutes';

import { Header, Footer } from 'components';
 
function Layout() {

    return (            
        <BrowserRouter>

            <Header />

                <CustomRoutes />

            <Footer />

        </BrowserRouter>
    );
}

export default Layout;