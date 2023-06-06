import { useState } from 'react'
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from '@mui/material'

// mui
const ProfileName = styled(Typography)(({theme}) => ({
    color: 'grey'
}))

const NavBar = () => {

    const [profileMenuAnchor, setProfileMenuAnchor] = useState<HTMLElement | null>(null)

    return (
        <AppBar position='absolute' elevation={0} style={{backgroundColor: 'white', boxSizing: 'border-box',}}>
            <Toolbar disableGutters style={{width: '100%', height: '100%', display: 'flex', padding: 0}}>
                <div style={{
                    display: 'flex',
                    marginLeft: '175px',
                    width: '100%',
                    height: '100%',
                    boxShadow: 'border-box',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    alignItems: 'center'
                }}>

                    {/* Profile */}
                    <ProfileName variant='body1'>Good morning, Andrew</ProfileName>

                    <div style={{flexGrow: 1}} />

                    <Box>
                        <IconButton onClick={(e) => setProfileMenuAnchor(e.currentTarget)} style={{padding: '5px'}}>
                            <Avatar sx={{width: '35px', height: '35px'}} alt="Andrew" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={profileMenuAnchor}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(profileMenuAnchor)}
                        onClose={() => setProfileMenuAnchor(null)}
                        >
                            <MenuItem>asdf</MenuItem>
                        </Menu>
                    </Box>

                </div>
            </Toolbar>
            <Divider />
        </AppBar>
    )
}

export default NavBar