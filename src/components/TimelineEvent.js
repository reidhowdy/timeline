import './TimelineEvent.css';
import Timestamp from './Timestamp';


//receiving one param, an object, and it will look inside that object for these keys
//and will use those values
const TimelineEvent = (props) => {
    return (<div> 
        <ol>
        <li>{props.person}</li>
        <li>{props.status}</li>
        <li><Timestamp timestamp={props.timestamp}></Timestamp></li>
        </ol>
    </div>
    
    )
};

//props.time will be passed to Timestamp.js

export default TimelineEvent;