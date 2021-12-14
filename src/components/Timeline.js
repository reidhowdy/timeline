import './Timeline.css';
import TimelineEvent from './TimelineEvent';


//can also just pass in props instead - 
const Timeline = ({eventList}) => {
    // console.log(eventList)
    // eventList = JSON.parse(eventList)

    //the first param to any react component is an object where the keys are the attributes that were passed by the parent, in this case eventlist, and the value of that key is the value of that expression
    
    //eventList is from app.js - it's what i returned

    const eventComponents = eventList.map((event) => {
        return (
        <li>
            <TimelineEvent person={event.person} status={event.status} timestamp={event.timestamp}></TimelineEvent>
        </li>
        );
    });

    return eventComponents

    

};

export default Timeline;