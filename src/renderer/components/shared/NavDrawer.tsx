import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Divider,
    Drawer,
    List,
    ListItem as MuiListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from '@mui/material'
import {
    GraphicEq as GraphicEqIcon,
    LibraryMusic as LibraryMusicIcon,
    Person as PersonIcon,
    Public as PublicIcon,
    Settings as SettingsIcon,
    // Widgets as WidgetsIcon,
} from '@mui/icons-material'

import samplrLogo from '../../assets/imgs/samplr_basic_gray.png'

// mui
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const ListItem = styled(MuiListItem)(({theme}) =>({
    // color: '#DCDCDC'
}))

const NavDrawer = () => {

    // ===== navigate =====
    const navigate = useNavigate()

    // ===== location =====
    const location = useLocation()

    return (
        <Drawer variant='persistent' anchor='left' open={true}
            sx={{'& .MuiDrawer-paper': {
                width: '175px',
                // backgroundColor: '#141414'
            }}}
            style={{display: 'flex', boxSizing: 'border-box'}}
        >
            <DrawerHeader>
                <div style={{width: '100%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {/* <img alt='' src={samplrLogo} style={{width: '100%', height: '100%', objectFit: 'contain'}} /> */}
                </div>
                {/* <IconButton> */}
                    {/* <ChevronLeftIcon /> */}
                {/* </IconButton> */}
            </DrawerHeader>

            <Divider />

            <List style={{zIndex: 5}}>
                <ListItem disablePadding>
                    <ListItemButton selected={location.pathname==='/generate'} onClick={() => navigate('/generate')}>
                        <ListItemIcon>
                            <GraphicEqIcon />
                        </ListItemIcon>
                        <ListItemText primary='Samplrs' />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton selected={location.pathname==='/library'} onClick={() => navigate('/library')}>
                        <ListItemIcon>
                            <LibraryMusicIcon />
                        </ListItemIcon>
                        <ListItemText primary='Library' />
                    </ListItemButton>
                </ListItem>
                
                {/* <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary='Community' />
                    </ListItemButton>
                </ListItem> */}
            </List>

            <div style={{flexGrow: 1}} />

            <List style={{zIndex: 5}}>
                {/* <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary='Profile' />
                    </ListItemButton>
                </ListItem> */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary='Preferences' />
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>
    )
}

export default NavDrawer