import RouterBreadcrumbs from "./Router";
import Box from "@mui/material/Box";
import {createTheme, PaletteMode, styled, ThemeProvider} from "@mui/material/styles";
import {Outlet} from "react-router-dom";
import * as React from "react";
import {makeStyles} from "@mui/material";
import Nav from "./Router";
import MyComponent from "../Demo/Hooks";
import RefCallback from "../Demo/RefCallbacak";



const mode: PaletteMode = 'light';
const defaultTheme = createTheme({palette: {mode}});




export default  function DashBoard(){
    return (
        <ThemeProvider theme={defaultTheme}>
            <main>
                <Nav></Nav>
                {/*<MyComponent condition={false}></MyComponent>*/}
                {/*<RefCallback></RefCallback>*/}
            </main>
        </ThemeProvider>
)
}