import * as React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "views/NotFound/NotFound";
import Home from "views/Home";
import Search from "views/Search/Search";

import Artists from "views/Artists/index";
import Artist from "views/Artists/show";

import Genre from "views/Genre/Genre";
import RecentSearches from "views/RecentSearches/RecentSearches";


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
            element: <Search />,
        },
        {
            path: "/recent-searches",
            element: <RecentSearches />
        },
        {
            path: "/search/:input/",
            element: <Search />,
        },
        {
            path: "/search/:input/:category",
            element: <Search />,
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