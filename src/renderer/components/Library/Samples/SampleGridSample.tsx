import {
    IconButton,
    Paper,
    styled,
    Typography,
} from '@mui/material'
import {
    PlayCircle as PlayCircleIcon,
} from '@mui/icons-material'

const PlayIconButton = styled(IconButton)(({theme}) => ({
    padding: '3px'
}))
const SamplePaper = styled(Paper)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingRight: '10px',
    paddingLeft: '7px',
    boxSizing: 'border-box'
}))

interface ISampleGridSampleProps {
    title: string
}
const SampleGridSample = (props: ISampleGridSampleProps) => {
    return (
        <SamplePaper>

            <PlayIconButton>
                <PlayCircleIcon />
            </PlayIconButton>

            <Typography style={{marginLeft: '5px'}}>{props.title}</Typography>

        </SamplePaper>
    )
}

export default SampleGridSample