
// components
import SampleGridSample from "./SampleGridSample"

interface ILibrarySamplesGridColProps {
    sampleTitles: Array<string>
}
const LibrarySamplesGridCol = (props: ILibrarySamplesGridColProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
            {props.sampleTitles.map((sampleTitle, index) =>
            <div key={index} style={{marginTop: '7px'}}>
                <SampleGridSample title={sampleTitle} />
            </div>
            )}
        </div>
    )
}

export default LibrarySamplesGridCol