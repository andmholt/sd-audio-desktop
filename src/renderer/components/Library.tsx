import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@mui/material'
import {
    Search as SearchIcon,
} from '@mui/icons-material'

// components
import Bkgd from './shared/Bkgd'
import ContentBox from './shared/ContentBox'
import NavBar from './shared/NavBar'
import NavDrawer from './shared/NavDrawer'

const Library = () => {
    return (
        <Bkgd>

            {/* Nav */}
            <NavDrawer />
            <NavBar />

            <ContentBox>

                {/* Search */}
                <div style={{width: '100%'}}>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='text'
                            endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>

                <div style={{backgroundColor: '#f5f5f5', width: '100%', height: '100%', boxSizing: 'border-box'}}>
                </div>


            </ContentBox>

        </Bkgd>
    )
}

export default Library