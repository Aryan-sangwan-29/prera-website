import '../CSS/Events.css';
import Event_intro from '../Events_components/event_intro';
import Event_card from '../Events_components/event_card';

export default function Events(){
    return(<>
        <Event_intro />

        <div id='cards-div'>
        <Event_card name={'Damru'} Description={'Cultural Fest'} Date={'12/34/56'} Venue={'Pakisthan'} Audience={'2000+'} url={'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'}/>
        <Event_card name={'Kala'} Description={'Art Exhibition'} Date={'12/34/56'} Venue={'Pakisthan'} Audience={'2000+'} url={'https://tse3.mm.bing.net/th/id/OIP.-jnDXwWItRhI8UC4fIfI4gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'}/>
        <Event_card name={'Hanumant'} Description={'Sports Meet'} Date={'12/34/56'} Venue={'Pakisthan'} Audience={'2000+'} url={'https://tse2.mm.bing.net/th/id/OIP.Q5j9qTVfXK01KgJ4Q-d87gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'}/>
        <Event_card name={'Sanskriti'} Description={'Cultural Fest'} Date={'12/34/56'} Venue={'Pakisthan'} Audience={'2000+'} url={'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'}/>
        </div>
    </>)}