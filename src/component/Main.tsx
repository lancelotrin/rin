import React, {useEffect, useState} from "react";
import {createTheme, PaletteMode, styled, ThemeProvider} from "@mui/material/styles";
import getBlogTheme from "../blog/theme/getBlogTheme";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ToggleColorMode from "../blog/components/ToggleColorMode";
import AppBar from "@mui/material/AppBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Button from "@mui/material/Button";

interface MainProps {
    children:React.ReactNode
}
export default function Main({children}:MainProps){

    const [mode] = useState<PaletteMode>('dark');
    const [customTheme,setShowCustomTheme] = useState(true);

    const blogTheme = createTheme(getBlogTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });

    const handleChange = ()=>{
        setShowCustomTheme((prev) => !prev);
    }
   return (
       <ThemeProvider theme={customTheme ? blogTheme : defaultTheme}>
           <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
               <StyledAppBar>
                   <Toolbar
                       variant="dense"
                       disableGutters
                       sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           width: '100%',
                           p: '8px 12px',
                       }}
                   >
                   <Button
                       variant="text"
                       size="small"
                       aria-label="Back to templates"
                       startIcon={<ArrowBackRoundedIcon />}
                       component="a"
                       href="/material-ui/getting-started/templates/"
                       sx={{ display: { xs: 'none', sm: 'flex' } }}
                   >
                       Back to templates
                   </Button>
                   <Box sx={{ display: 'flex', gap: 1 }}>
                       <FormControl variant="outlined" sx={{ minWidth: 180 }}>
                           <Select
                               size="small"
                               labelId="theme-select-label"
                               id="theme-select"
                               value={customTheme ? 'custom' : 'blog'}
                               onChange={handleChange}
                               label="Design Language"
                           >
                               <MenuItem value="custom">Custom Theme</MenuItem>
                               <MenuItem value="material">Material Design 2</MenuItem>
                           </Select>
                       </FormControl>
                   </Box>
                </Toolbar>
               </StyledAppBar>
               <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
           </Box>
       </ThemeProvider>
   )
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    backgroundImage: 'none',
    zIndex: theme.zIndex.drawer + 1,
    flex: '0 0 auto',
}));