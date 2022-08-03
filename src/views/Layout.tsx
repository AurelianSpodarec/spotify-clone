import React, { useEffect } from 'react';
import { CustomRoutes } from 'config';
import { Header, Footer, Nav } from 'components';

import { BrowserRouter, useLocation } from "react-router-dom";

function Layout() {


    return (            
        <BrowserRouter >
        <div className="relative bg-black h-screen overflow-hidden">

            <div className="relative flex flex-row">

                <Nav />

                <div className="relative h-screen w-full">
                <div className="default-scrollbar absolute top-0 right-0 bottom-0 left-0 overflow-hidden overflow-y-auto">
                <div>

                    <Header />

                    <main className="bg-[#121212]">
                        <CustomRoutes />
                    </main>

                    <Footer />

                </div>
                </div>
                </div>

            </div>

        </div>
        </BrowserRouter >
    );
}

export default Layout;