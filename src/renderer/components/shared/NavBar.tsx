import {
    AppBar,
    Container,
    Divider,
    Toolbar,
} from '@mui/material'

const NavBar = () => {
    return (
        <AppBar position='absolute' elevation={0} style={{backgroundColor: 'white', boxSizing: 'border-box'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                </Toolbar>
            </Container>
            <Divider />
        </AppBar>
    )
}

export default NavBar