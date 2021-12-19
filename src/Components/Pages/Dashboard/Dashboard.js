import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import logo from '../../../image/logo.png'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PaymentsIcon from '@mui/icons-material/Payments';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Grid } from '@mui/material';
import dashboard from '../../../image/dashboard.gif'


const drawerWidth = 240;

const Dashboard = (props) => {
    const { user, admin } = useAuth();
    const { window } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };
        

        const drawer = (
            <div>
            <Toolbar>
                <NavLink to="/"><img src={logo} alt="" width="50%" /></NavLink>
            </Toolbar>
            <Divider />
            <List>
            <>
                <h4 style={{textAlign:'center',marginBottom:'20px'}}><AssignmentIndIcon /> USER</h4>

                <NavLink style={{textDecoration: 'none'}} to="/Pay">
                <ListItem button className="list-stile-dash">
                <ListItemIcon><PaymentsIcon /><Typography style={{color: 'black', marginLeft: '20px',fontSize: '16px',fontFamily: 'sans-serif',fontWeight: '600'}} >PAYMENT</Typography> </ListItemIcon>
                </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none'}} to="/MyOrders">
                <ListItem button className="list-stile-dash">
                <ListItemIcon><ShoppingCartIcon /><Typography style={{color: 'black', marginLeft: '20px',fontSize: '16px',fontFamily: 'sans-serif',fontWeight: '600'}} >MY ORDERS</Typography> </ListItemIcon>
                </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none'}} to="/AddReview">
                <ListItem button className="list-stile-dash">
                <ListItemIcon><RateReviewIcon /><Typography style={{color: 'black', marginLeft: '20px',fontSize: '16px',fontFamily: 'sans-serif',fontWeight: '600'}} >ADD REVIEW</Typography> </ListItemIcon>
                </ListItem>
                </NavLink>
                </>
            </List>
            <Divider />
            
            {admin && <List>
                <>
                <h4 style={{textAlign:'center',marginBottom:'20px'}}><VerifiedUserIcon />ADMIN</h4>
                  
                <NavLink style={{textDecoration: 'none'}} to="/MakeAdmin">
                <ListItem button className="list-stile-dash">
                <ListItemIcon><AdminPanelSettingsIcon /><Typography style={{color: 'black', marginLeft: '20px',fontSize: '16px',fontFamily: 'sans-serif',fontWeight: '600'}} >MAKE ADMIN</Typography> </ListItemIcon>
                </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none'}} to="/AddProduct">
                <ListItem button className="list-stile-dash">
                <ListItemIcon><AddShoppingCartIcon /><Typography style={{color: 'black', marginLeft: '20px',fontSize: '16px',fontFamily: 'sans-serif',fontWeight: '600'}} >ADD PRODUCT</Typography> </ListItemIcon>
                </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none'}} to="/manageAllOrders">
                <ListItem button className="list-stile-dash">
                <ListItemIcon><ProductionQuantityLimitsIcon /><Typography style={{color: 'black', marginLeft: '20px',fontSize: '16px',fontFamily: 'sans-serif',fontWeight: '600'}} >MANAGE ORDERS</Typography> </ListItemIcon>
                </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none'}} to="/ManageProduct">
                <ListItem button className="list-stile-dash">
                <ListItemIcon><StorefrontIcon /><Typography style={{color: 'black', marginLeft: '20px',fontSize: '16px',fontFamily: 'sans-serif',fontWeight: '600'}} >MANAGE PRODUCTS</Typography> </ListItemIcon>
                </ListItem>
                </NavLink>
                
                
                </>
            </List>}
            </div>
        );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    DASHBOARD | {user.displayName}
                </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <div className="dashboard-div">
                <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>

                        <h2>{user.displayName}</h2>
                        <h3>{user.email}</h3>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={dashboard} alt="" width="100%" />
                    </Grid>
                </Grid>
                </Box>
                    

                </div>
            </Box>
        </Box>
    );
};

export default Dashboard;