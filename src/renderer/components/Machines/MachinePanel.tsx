import { useState } from 'react'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    styled,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
} from '@mui/material'

const PanelBkg = styled('div')(({theme}) => ({
    height: '100%',
    width: '200px',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    padding: '10px'
}))

const MachinePanel = () => {

    const [currMachine, setCurrMachine] = useState('snare-clap')
    const [currBitDepth, setCurrBitDepth] = useState(16)
    const [currSampleRate, setCurrSampleRate] = useState(44100)
    const [currSampleType, setCurrSampleType] = useState('snare')

    return (
        <PanelBkg>

            {/* Machine */}
            <InputLabel>Samplr</InputLabel>
            <FormControl fullWidth size='small'>
                <Select
                    variant='outlined'
                    value={currMachine}
                    onChange={(e) => setCurrMachine(e.target.value)}
                >
                    <MenuItem value={'snare-clap'}>snare-clap</MenuItem>
                </Select>
            </FormControl>

            {/* Bit Depth */}
            <div style={{marginTop: '20px'}}>
                <InputLabel>Bit Depth</InputLabel>
                <ToggleButtonGroup
                    size='small'
                    color="primary"
                    value={currBitDepth}
                    exclusive
                    onChange={(e, value) => setCurrBitDepth(value)}
                >
                <ToggleButton value={16}>16</ToggleButton>
                <ToggleButton value={24} disabled>24</ToggleButton>
                </ToggleButtonGroup>
            </div>

            {/* Sample Rate */}
            <div style={{marginTop: '20px'}}>
                <InputLabel>Sample Rate</InputLabel>
                <ToggleButtonGroup
                    size='small'
                    color="primary"
                    value={currSampleRate}
                    exclusive
                    onChange={(e, value) => setCurrSampleRate(value)}
                >
                <ToggleButton value={44100} style={{textTransform: 'none'}}>44.1kHz</ToggleButton>
                <ToggleButton value={48000} style={{textTransform: 'none'}} disabled>48kHz</ToggleButton>
                </ToggleButtonGroup>
            </div>

            {/* Sample Type */}
            <div style={{marginTop: '20px'}}>
                <InputLabel>Sample Type</InputLabel>
                <FormControl fullWidth size='small'>
                    <Select
                        variant='outlined'
                        value={currSampleType}
                        onChange={(e) => setCurrSampleType(e.target.value)}
                    >
                        <MenuItem value={'snare'}>Snare</MenuItem>
                        <MenuItem value={'clap'}>Clap</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </PanelBkg>
    )
}

export default MachinePanel