import * as React from "react";
import { useRoutes } from "react-router-dom";

import Home from "views/Home";
import NotFound from "views/NotFound/NotFound";

function CustomRoutes() {
    let element = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        }
    ]);

    return element;
}

export default CustomRoutes;