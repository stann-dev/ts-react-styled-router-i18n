import React from "react";
import {RouteObjectType, routes} from "./routesObject";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Routing = () => {

    const createRoutesMap = (i: RouteObjectType) => <Route path={i.path} key={i.path}>{i.component}</Route>;

    return (
        <Router>
            <Switch>
                {routes.map(createRoutesMap)}
            </Switch>
        </Router>
    )
}

export default Routing;
