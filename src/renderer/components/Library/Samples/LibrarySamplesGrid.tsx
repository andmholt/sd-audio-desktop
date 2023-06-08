import {
    Divider,
    Paper,
    styled,
    Typography,
} from '@mui/material'

// components
import LibrarySamplesGridCol from './LibrarySamplesGridCol'

const LibrarySamplesGrid = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>

            {/* Title */}
            <Typography variant='h5' style={{color: 'grey'}}>Sampls</Typography>
            <Divider />

            {/* Grid */}
            <div style={{display: 'flex'}}>
                <LibrarySamplesGridCol sampleTitles={['punchy_snare.wav', 'harsh_clap.wav', 'soft_snare.wav', 'dark_snare.wav', 'pop_clap.wav']} />
                <div style={{width: '25px'}} />
                <LibrarySamplesGridCol sampleTitles={['quirky_clap.wav', 'rattle_snare.wav', 'dull_clap.wav', 'quick_snare.wav', 'trap_clap.wav']} />
                <div style={{width: '25px'}} />
                <LibrarySamplesGridCol sampleTitles={['distorted_clap.wav', 'shakey_snare.wav']} />
            </div>

        </div>
    )
}

export default LibrarySamplesGrid