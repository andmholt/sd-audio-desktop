import { useState } from 'react'
import {
    Button,
    Divider,
    FormControl,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    styled,
    TextField,
    Typography,
} from '@mui/material'
import {
    GraphicEq as GraphicEqIcon,
} from '@mui/icons-material'

// components
import Bkgd from '../shared/Bkgd'
import ContentBox from '../shared/ContentBox'
import MachinePanel from './MachinePanel'
import NavBar from '../shared/NavBar'
import NavDrawer from '../shared/NavDrawer'
import GeneratedSample from './GeneratedSample'
import GeneratedSampleV2 from './GeneratedSampleV2'

const ListBkgd = styled('div')(({theme}) => ({
    backgroundColor: '#F5F5F5',
    height: '100%',
    flexGrow: 1,
    paddingTop: '5px',
    boxSizing: 'border-box'
}))

const Generate = () => {

    const [currSampleType, setCurrSampleType] = useState('snare')

    return (
        <Bkgd>

            {/* Nav */}
            <NavDrawer />
            <NavBar />

            <ContentBox>

                <div style={{display: 'flex', flexGrow: 1}}>

                    <ListBkgd>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Typography style={{color: 'grey'}} variant='caption'>last night</Typography>
                        </div>
                        <List disablePadding>
                            <ListItem>
                                <GeneratedSampleV2 title='airy_snare.wav' userInputText='airy, pop' />
                            </ListItem>
                            <ListItem>
                                <GeneratedSampleV2 title='bright_noisy_clap.wav' userInputText='bright, noisy' />
                            </ListItem>
                        </List>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Typography style={{color: 'grey'}} variant='caption'>9:33am</Typography>
                        </div>
                        <List disablePadding>
                            <ListItem>
                                <GeneratedSampleV2 title='dull_snare.wav' userInputText='dull, pop' />
                            </ListItem>
                        </List>

                    </ListBkgd>

                    <Divider orientation='vertical' />

                    {/* Machine Panel */}
                    <MachinePanel />

                </div>

                <Divider />
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', flexGrow: 1, alignItems: 'center', margin: '20px', marginRight: '10px', marginTop: '15px', boxSizing: 'border-box'}}>
                        <TextField placeholder='Funky, tight, airy' variant='standard' style={{flexGrow: 1, marginRight: '10px'}}/>
                        <Button>
                            <GraphicEqIcon />
                        </Button>
                    </div>
                    <Divider orientation='vertical' />
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '200px', boxSizing: 'border-box', padding: '10px'}}>
                    </div>
                </div>

            </ContentBox>

        </Bkgd>
    )
}

export default Generate