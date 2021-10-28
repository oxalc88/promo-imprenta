import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

function Routes({chidren}) {
    return(
        <BrowserRouter>
            <Switch>
                {chidren}
            </Switch>
        </BrowserRouter>
    )
}

export {Routes}