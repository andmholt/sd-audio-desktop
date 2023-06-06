import {
    alpha,
    Chip,
    Typography,
    styled,
} from '@mui/material'

interface ISampleTagProps {
    label: string
    color: string
}
const SampleTag = (props: ISampleTagProps) => {
    return (
        <Chip size='small' style={{
            color: props.color, border: '1px solid ' + props.color, backgroundColor: alpha(props.color, 0.15)
        }} label={props.label} variant='outlined' />
    )
}

export default SampleTag