import '../CSS/Events.css';
import Event_intro from '../Events_components/event_intro';
import Event_card from '../Events_components/event_card';

export default function Events(){

    const Events_data = [
        {name:'KCC 2026 ', organization:'Kixar Pvt. Ltd.',Description:'Cultural Fest', Date:'3rd and 4th January 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {name:'Visual Vortex 2.O', organization:'GDG Rishihood ', Description:'Cultural Fest', Date:'17th and 18th January 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},

        {name:'SARVAGYA 2026', organization:'Hindu College, DU',Description:'Cultural Fest', Date:'9th and 10th January 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {name:'Box Cricket Tournament', organization:'Kixar Pvt. Ltd.',Description:'Cultural Fest', Date:'23rd,24th and 25th January 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},

        {name:"Startup Pichathon", organization:'Unibazar Pvt. Ltd. ', Description:'Cultural Fest', Date:'23rd Jan, 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {name:"Tech GC ", organization:'NST x RU', Description:'Cultural Fest', Date:'31st Jan, 1st Feb, 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},

        {name:"DRISHTI-2026", organization:'Hindu College, DU', Description:'Cultural Fest', Date:'20 March, 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {name:"Tekron 2.O", organization:'NST Pune ', Description:'Cultural Fest', Date:'31st Jan, 1st Feb, 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},

        {name:"Culmyca 2026", organization:'JC BOSE UST YMCA Faridabad', Description:'Cultural Fest', Date:'9th, 10th April 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {name:"AAYAM 2026", organization:'NST Bengaluru ', Description:'Cultural Fest', Date:'24th, 25th April, 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},

        
        {name:"Rena 2026", organization:'BVIMR', Description:'Cultural Fest', Date:'17th and 18th March', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {name:"Startup Pichathon (MUJ)", organization:'Unibazar Pvt. Ltd. ', Description:'Cultural Fest', Date:'8th April, 2026', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        
        {name:"DesignX", organization:'BVIMR', Description:'Cultural Fest', Date:'17th and 18th April', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
        {name:"Moksha ", organization:'NSUT', Description:'Cultural Fest', Date:'18th, 19th and 20th April', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},

        {name:"Rexia", organization:'Starex University', Description:'Cultural Fest', Date:'6th and 7th May', Audience:'2000+', url:'https://tse1.mm.bing.net/th/id/OIP.qXUwNKJoP3nHnmiZ4n0MeQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'},
    ]

    
    return(<>
        <Event_intro />

        <div id='cards-div'>
        {Events_data.map((event, index) => (
            <Event_card
                key={index}
                name={event.name}
                Collegename={event.organization}
                Description={event.Description}
                Date={event.Date}
                Audience={event.Audience}
                url={event.url}
            />
        ))}
        </div>
    </>)}