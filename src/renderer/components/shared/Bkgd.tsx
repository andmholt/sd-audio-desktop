import {
    styled,
} from '@mui/material'

const Bkgd = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: 0,
    boxSizing: 'border-box',
}))

export default Bkgd