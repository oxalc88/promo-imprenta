import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Navbar } from "../NavBar/Navbar";

function Routes({children}) {
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                {children}
            </Switch>
        </BrowserRouter>
    )
}

export {Routes}