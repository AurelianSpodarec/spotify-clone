import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import CustomRoutes from 'config/CustomRoutes';

import { Header, Footer, Nav } from 'components';
 
function Layout() {

    return (            
        <BrowserRouter>
        <div className="relative bg-black h-screen overflow-hidden">

            <div className="relative flex flex-row">


                <Nav />


                <div className="relative h-screen w-full">
                <div className="default-scrollbar absolute top-0 right-0 bottom-0 left-0 overflow-hidden overflow-y-auto">
                <div className=" bg-red-500">

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
        </BrowserRouter>
    );
}

export default Layout;