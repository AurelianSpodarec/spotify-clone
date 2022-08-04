import React, { useEffect } from 'react';
import { CustomRoutes } from 'config';
import { Header, Footer, Nav } from 'components';

import { BrowserRouter, Link, useLocation } from "react-router-dom";

function Layout() {


    return (            
        <BrowserRouter >
        <div className="relative bg-black h-screen overflow-hidden">


            <div className="flex flex-col relative h-screen">
        
                <div className="relative flex flex-row h-full">

                    <Nav />

                    <div className="relative h-full w-full">
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


                <div className="flex h-12 z-20 px-10 py-8" style={{ "backgroundImage": "linear-gradient(90deg, #af2896, #509bf5)" }}>
                <div className="flex justify-between items-center w-full">
                {/* <Link to="/signup"> */}

                    <div>
                        <p className="uppercase font-thin text-sm text-white">Preview of spotify</p>
                        <p className="text-white">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>

                    <div>
                        <button className="font-bold rounded-full bg-white py-3 px-6">Sign up free</button>
                    </div>

                {/* </Link> */}
                </div>
                </div>

            </div>


        </div>
        </BrowserRouter >
    );
}

export default Layout;