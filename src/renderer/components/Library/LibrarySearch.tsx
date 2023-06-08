import {
    Container,
    FormControl,
    Input,
    InputAdornment,
    Paper,
    styled,
} from '@mui/material'
import {
    Search as SearchIcon,
} from '@mui/icons-material'

const SearchPaper = styled(Paper)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    paddingLeft: '30px',
    paddingRight: '20px',
    borderRadius: '25px'
}))

const LibrarySearch = () => {
    return (
        <div style={{width: '100%'}}>
            <Container maxWidth='sm' style={{display: 'flex', justifyContent: 'center'}}>
                <SearchPaper>
                    <FormControl fullWidth>
                        {/* <InputLabel variant='standard' size='small'>Search</InputLabel> */}
                        <Input
                            fullWidth
                            placeholder='Search...'
                            size='small'
                            type='text'
                        />
                    </FormControl>
                    <SearchIcon style={{color: 'grey'}} />
                </SearchPaper>
            </Container>
        </div>
    )
}

export default LibrarySearch