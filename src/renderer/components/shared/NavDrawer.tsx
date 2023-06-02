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
    return (
        <Drawer variant='permanent' anchor='left'
            sx={{'& .MuiDrawer-paper': {
                // backgroundColor: '#141414'
            }}}
        >
            <DrawerHeader>
                <div style={{width: '100%', paddingLeft: '10px'}}>
                    Logo
                </div>
                {/* <IconButton> */}
                    {/* <ChevronLeftIcon /> */}
                {/* </IconButton> */}
            </DrawerHeader>

            <Divider />

            <List style={{zIndex: 5}}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GraphicEqIcon />
                        </ListItemIcon>
                        <ListItemText primary='Generate' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LibraryMusicIcon />
                        </ListItemIcon>
                        <ListItemText primary='My Library' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary='Community' />
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />

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