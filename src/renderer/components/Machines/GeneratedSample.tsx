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
const SamplePaper = styled(Paper)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    boxSizing: 'border-box',
    paddingLeft: '10px',
    paddingRight: '20px',
    paddingTop: '30px',
    paddingBottom: '35px',
    zIndex: 1
}))
const SampleTitle = styled(Typography)(({theme}) => ({
    color: 'grey'
}))
const SlidePaper = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.primary.light,
    width: '50px',
    zIndex: 0,
    position: 'relative',
    left: '-10px'
}))

interface IGeneratedSampleProps {
    title: string
}
const GeneratedSample = (props: IGeneratedSampleProps) => {

    // ===== hover =====
    const [isHovering, setIsHovering] = useState(false)

    const slideRef = useRef(null)

    return (
        <div style={{display: 'flex'}}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <SamplePaper>

                <IconButton style={{padding: '3px'}}>
                    <PlayCircleIcon />
                </IconButton>

                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
                    <SampleTitle>{props.title}</SampleTitle>

                    {/* Tags */}
                    <div style={{display: 'flex', width: '100%', marginTop: '2px'}}>
                        <SampleTag label='snare' color='#03e1f47' />
                        <div style={{width: '5px'}} />
                        <SampleTag label='pop' color='#014f86' />
                        <div style={{width: '5px'}} />
                        <SampleTag label='airy' color='#e36414' />
                    </div>
                </div>

            </SamplePaper>
            <div ref={slideRef} />
            <Slide direction='right' in={isHovering} container={slideRef.current}>
                <SlidePaper>

                </SlidePaper>
            </Slide>
        </div>
    )
}

export default GeneratedSample