import * as React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "views/NotFound/NotFound";
import Home from "views/Home";
import Search from "views/Search/Search";

import Artists from "views/Artists/index/index";
import Artist from "views/Artists/show/show";

import Genre from "views/Genre/Genre";


function CustomRoutes() {
    let element = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/search",
            element: <Search />
        },
        {
            path: "/artists",
            element: <Artists />
        },
        {
            path: "/artist/:id",
            element: <Artist />
        },
        {
            path: "/genre",
            element: <Genre />,
        }
    ]);

    return element;
}

export default CustomRoutes;