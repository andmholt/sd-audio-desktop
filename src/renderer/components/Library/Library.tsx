import {
    Container,
    FormControl,
    InputAdornment,
    Input,
    InputLabel,
    OutlinedInput,
    styled,
    TextField,
    Typography,
} from '@mui/material'
import {
    Search as SearchIcon,
} from '@mui/icons-material'

// components
import Bkgd from '../shared/Bkgd'
import ContentBox from '../shared/ContentBox'
import NavBar from '../shared/NavBar'
import NavDrawer from '../shared/NavDrawer'
import LibraryCratesGrid from './Crates/LibraryCratesGrid'
import LibrarySearch from './LibrarySearch'
import LibrarySamplesGrid from './Samples/LibrarySamplesGrid'

// mui
const Heading = styled(Typography)(({theme}) => ({
    marginTop: '10px',
    marginBottom: '10px',
    color: 'grey'
}))

const Library = () => {
    return (
        <Bkgd>

            {/* Nav */}
            <NavDrawer />
            <NavBar />

            <ContentBox style={{backgroundColor: '#f5f5f5'}}>
                <Container maxWidth='xl'>

                    {/* Heading */}
                    <Heading variant='h6'>Library</Heading>

                    {/* Search */}
                    {/* <LibrarySearch /> */}

                    <div style={{height: '20px'}} />

                    {/* Samples */}
                    <LibrarySamplesGrid />

                    <div style={{height: '50px'}} />

                    {/* Crates */}
                    <LibraryCratesGrid />

                </Container>
            </ContentBox>

        </Bkgd>
    )
}

export default Library