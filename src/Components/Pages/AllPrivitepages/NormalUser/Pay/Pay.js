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
import useAuth from '../../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import logo from '../../../../../image/logo.png'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PaymentsIcon from '@mui/icons-material/Payments';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useMyOrders from '../../../../hooks/useMyorders';


const drawerWidth = 240;

const Pay = (props) => {
    const { user, admin } = useAuth();
    const { window } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };
        const [myOrders] = useMyOrders();

        const handleDeleteProduct = id =>{
            const url = `https://frozen-oasis-37685.herokuapp.com/products/${id}`;
    
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                
                if(data.deletedCount > 0){
                    alert("User is delete. You Can't delete user authentication")
                    
                }
            
            });
            // e.target.preventDefault();
        }

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
                
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>TITLE</TableCell>
                            <TableCell align="center">PRICE</TableCell>
                            <TableCell align="center">IMAGE</TableCell>
                            <TableCell align="center">CLIENT EMAIL</TableCell>
                            <TableCell align="center">DELETE</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                        {myOrders.map((myOrder) => (
                            <TableRow
                            key={myOrder._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {myOrder.orderTitle}
                            </TableCell>
                            
                            <TableCell align="center">{myOrder.orderPrice}</TableCell>
                            
                            <TableCell width="20%" align="center"><img src={myOrder.orderImage} alt="product" width="45%" /></TableCell>
                            
                            <TableCell align="center">
                                {myOrder.email}
                            </TableCell>
                            
                            <TableCell align="center">
                                <IconButton onClick={()=> handleDeleteProduct(myOrder._id)} color="secondary" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>

                    </Table>
                    </TableContainer>
                    

                </div>
            </Box>
        </Box>
    );
};

export default Pay;