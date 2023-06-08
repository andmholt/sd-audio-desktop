import {
    Divider,
    IconButton,
    Paper,
    styled,
    Tooltip,
    Typography,
} from '@mui/material'
import {
    Add as AddIcon
} from '@mui/icons-material'

// components
import CrateGridCrate from './CrateGridCrate'

const LibraryCratesGrid = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>

            {/* Title */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='h5' style={{color: 'grey'}}>Crates</Typography>
                <div style={{flexGrow: 1}} />
                <Tooltip title='New Crate'>
                    <IconButton style={{padding: '7px'}}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <Divider />
            <div style={{height: '7px'}} />

            {/* Grid */}
            <div style={{display: 'flex', alignItems: 'start'}}>
                <CrateGridCrate title='Pop Snares 2020' imgNum={0} />
                <div style={{width: '20px'}} />
                <CrateGridCrate title='Dubstep' imgNum={1} />
            </div>

        </div>
    )
}

export default LibraryCratesGrid