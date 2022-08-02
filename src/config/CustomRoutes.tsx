import * as React from "react";
import { useRoutes } from "react-router-dom";
import Artist from "views/Artists/Artist/Artist";

import Artists from "views/Artists/Artists";
import Genre from "views/Genre/Genre";

import Home from "views/Home";
import NotFound from "views/NotFound/NotFound";
import Search from "views/Search/Search";


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