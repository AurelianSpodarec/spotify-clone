import * as React from "react";
import { useRoutes } from "react-router-dom";

import Home from "views/Home";

function CustomRoutes() {
    let element = useRoutes([
        {
            path: "/",
            element: <Home />
        }
    ]);

    return element;
}

export default CustomRoutes;