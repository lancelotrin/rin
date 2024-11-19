import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link, { LinkProps } from '@mui/material/Link';
import { ListItemProps } from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
    Link as RouterLink,
    Route,
    Routes,
    MemoryRouter,
    useLocation, Outlet,
} from 'react-router-dom';
import Nav1 from "./Page/Nav1";
import Nav2 from "./Page/Nav2";
import Nav3 from "./Page/Nav3";
import Home from "./Page/Home";
import HomeSub1 from "./Page/HomeSub1";

interface ListItemLinkProps extends ListItemProps {
    to: string;
    open?: boolean;
}
export enum RouteDefine {
    Root = '/',
    Home = '/home',
    Nav1 = '/nav1',
    Nav2 = '/nav2',
    Nav3 = '/nav3',
    HomeSub1 = '/home/1',
}
const breadcrumbNameMap: { [key: string]: string } = {
    [RouteDefine.Home]: 'Home',
    [RouteDefine.Nav1]: 'Nav1',
    [RouteDefine.Nav2]: 'Nav2',
    [RouteDefine.Nav3]: 'Nav3',
    [RouteDefine.HomeSub1]: 'HomeSub1',
};

function ListItemLink(props: ListItemLinkProps) {
    const { to, open, ...other } = props;
    const primary = breadcrumbNameMap[to];

    let icon = null;
    if (open != null) {
        icon = open ? <ExpandLess /> : <ExpandMore />;
    }

    return (
        <li>
            <ListItemButton component={RouterLink as any} to={to} {...other}>
                <ListItemText primary={primary} />
                {icon}
            </ListItemButton>
        </li>
    );
}

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
    return <Link {...props} component={RouterLink as any} />;
}

function Page() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (

        <Breadcrumbs aria-label="breadcrumb">
            {/*<LinkRouter underline="hover" color="inherit" to="/">*/}
            {/*    <Typography>*/}
            {/*        Home*/}
            {/*    </Typography>*/}
            {/*</LinkRouter>*/}
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography key={to} sx={{ color: 'text.primary' }}>
                        {breadcrumbNameMap[to]}
                    </Typography>
                ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                        {breadcrumbNameMap[to]}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>

    );
}
export default  function Nav(){
    return (
        <MemoryRouter initialEntries={[RouteDefine.Home]} initialIndex={0}>
            <Routes>
                <Route path= {RouteDefine.Root} element={<RouterBreadcrumbs />} >
                    <Route path={RouteDefine.Home} element={<Home />} />
                    <Route path={RouteDefine.Nav1} element={<Nav1 />} />
                    <Route path={RouteDefine.Nav2} element={<Nav2 />} />
                    <Route path={RouteDefine.Nav3} element={<Nav3 />} />
                    <Route path={RouteDefine.HomeSub1} element={<HomeSub1 />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )
}
function RouterBreadcrumbs() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (

            <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
                    <Box
                        sx={{ bgcolor: 'background.paper', mt: 1 }}
                        component="nav"
                        aria-label="mailbox folders"
                    >
                        <Page></Page>

                        <List>
                            <ListItemLink to= {RouteDefine.Home} open={open} onClick={handleClick} />
                            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    <ListItemLink sx={{ pl: 4 }} to= {RouteDefine.HomeSub1} />
                                </List>
                            </Collapse>
                            <ListItemLink to= {RouteDefine.Nav1} />
                            <ListItemLink to= {RouteDefine.Nav2} />
                            <ListItemLink to= {RouteDefine.Nav3} />
                        </List>
                    </Box>
                </Box>
                <Outlet></Outlet>
            </Box>


    );
}