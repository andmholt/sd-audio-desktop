import { useState } from 'react'
import {
    styled,
} from '@mui/material'

// components
import NavDrawer from './shared/NavDrawer'

const Bkgd = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '100%'
}))

const Dash = () => {
    return (
        <Bkgd>

            {/* Nav */}
            <NavDrawer />

            

        </Bkgd>
    )
}

export default Dash