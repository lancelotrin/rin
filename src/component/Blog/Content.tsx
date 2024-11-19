import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "../../blog/components/AppAppBar";
import Container from "@mui/material/Container";
import MainContent from "../../blog/components/MainContent";
import {createTheme} from "@mui/material/styles";
import * as React from "react";
import getBlogTheme from "../../blog/theme/getBlogTheme";
import Latest from "./Latest";


const blogTheme = createTheme(getBlogTheme('dark'));
export default function Content(){
    return(
        <div>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                {/*<MainContent />*/}
                <Latest />
            </Container>
        </div>
    )
}