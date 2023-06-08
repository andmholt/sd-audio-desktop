import {
    Container,
    Paper,
    styled,
    Typography
} from '@mui/material'

import popSnares2020Img from '../../../assets/imgs/pop-snares-2020.jpeg'
import dubstepImg from '../../../assets/imgs/dubstep.jpeg'

const CratePaper = styled(Paper)(({theme}) => ({
    width: '125px',
    height: '125px',
    boxSizing: 'border-box',
    overflow: 'hidden'
}))

interface ICrateGridCrateProps {
    title: string
    imgNum: number
}
const CrateGridCrate = (props: ICrateGridCrateProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '125px'}}>
            <CratePaper>
                {props.imgNum===0 ?
                    <img style={{width: '100%', height: '100%', objectFit: 'contain'}} alt='' src={popSnares2020Img} /> :
                    <img style={{width: '100%', height: '100%', objectFit: 'contain'}} alt='' src={dubstepImg} />
                }
            </CratePaper>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '5px'}}>
                <Typography style={{color: 'grey', textAlign: 'center'}}>{props.title}</Typography>
            </div>
        </div>
    )
}

export default CrateGridCrate