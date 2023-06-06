import {
    styled,
} from '@mui/material'

const ContentBox = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingLeft: '175px',
    paddingTop: '65px',
    boxSizing: 'border-box',
}))

export default ContentBox