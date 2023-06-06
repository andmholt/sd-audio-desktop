import { useRef, useState } from 'react'
import {
    Divider,
    IconButton,
    Paper,
    Slide,
    styled,
    Typography,
} from '@mui/material'
import {
    PlayCircle as PlayCircleIcon,
} from '@mui/icons-material'

// components
import SampleTag from './SampleTag'

// mui
const PlayIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette.primary.dark,
    padding: '3px'
}))
const SamplePaper = styled(Paper)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    boxSizing: 'border-box',
    paddingLeft: '10px',
    paddingRight: '20px',
    zIndex: 1
}))
const SampleTitle = styled(Typography)(({theme}) => ({
    // color: 'grey',
    color: theme.palette.primary.dark,
    marginLeft: '7px'
}))
const SlidePaper = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.primary.light,
    width: '50px',
    zIndex: 0,
    position: 'relative',
    left: '-10px'
}))
const UserInputText = styled(Typography)(({theme}) => ({
    // color: theme.palette.primary.dark,
    color: 'grey',
    fontStyle: 'italic'
}))

interface IGeneratedSampleProps {
    title: string,
    userInputText: string
}
const GeneratedSampleV2 = (props: IGeneratedSampleProps) => {

    // ===== hover =====
    // const [isHovering, setIsHovering] = useState(false)

    // const slideRef = useRef(null)

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}
            // onMouseEnter={() => setIsHovering(true)}
            // onMouseLeave={() => setIsHovering(false)}
        >
            <UserInputText variant='caption'>{ '\"' + props.userInputText + '\"'}</UserInputText>
            <SamplePaper>

                <PlayIconButton>
                    <PlayCircleIcon />
                </PlayIconButton>

                <SampleTitle>{props.title}</SampleTitle>

            </SamplePaper>
        </div>
    )
}

export default GeneratedSampleV2