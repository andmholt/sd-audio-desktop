import {
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    styled,
    TextField,
} from '@mui/material'
import {
    GraphicEq as GraphicEqIcon,
} from '@mui/icons-material'

// components
import Bkgd from './shared/Bkgd'
import ContentBox from './shared/ContentBox'
import NavBar from './shared/NavBar'
import NavDrawer from './shared/NavDrawer'
import GeneratedSample from './GeneratedSample'

const ListBkgd = styled('div')(({theme}) => ({
    flexGrow: 1,
    backgroundColor: '#F5F5F5'
}))

const Generate = () => {
    return (
        <Bkgd>

            {/* Nav */}
            <NavDrawer />
            <NavBar />

            <ContentBox>

                <ListBkgd>
                    <List>
                        <ListItem>
                            <GeneratedSample title='airy_snare.wav' />
                        </ListItem>
                        <ListItem>
                            <GeneratedSample title='bright_noisy_clap.wav' />
                        </ListItem>
                    </List>
                </ListBkgd>

                <Divider />
                <div style={{display: 'flex', alignItems: 'center', margin: '20px', marginTop: '12px', boxSizing: 'border-box'}}>
                    <TextField placeholder='Funky tight kick' variant='standard' style={{flexGrow: 1, marginRight: '10px'}}/>
                    <Button>
                        <GraphicEqIcon />
                    </Button>
                </div>

            </ContentBox>

        </Bkgd>
    )
}

export default Generate