import * as React from "react";
import { useRoutes } from "react-router-dom";

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
        }
    ]);

    return element;
}

export default CustomRoutes;