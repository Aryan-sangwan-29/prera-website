import './about_intro.css'

export default function Intro() {
    return (<div>
        <h1 style={{ color: 'gold', fontSize: '5rem', textAlign: 'center' }}>Know about Prera</h1>
        <div id='content'>
            <h1>What is Prera?</h1>
            <h2>PRERA is a tech-driven event & brand collaboration platform that acts as a bridge between event organizers and brands.
                <br></br>
                <span style={{color:'gold',marginLeft:'40px'}}>We specialize in:</span>
                <ul>
                    <li>Sponsor sourcing</li>
                   <li> Brand collaborations</li>
                    <li>Event partnerships</li>
                    <li>Strategic growth planning</li>
                </ul>
            </h2>
             
             <h1>Our Objectives </h1>
             <h2>
                <ul >
                    <li>Measuring success through engagement, reach and tangible outcomes</li>
                    <li>Supporting both brands and events in scaling their reach</li>
                    <li>Creating collaboration and long term growth.</li>
                </ul>
             </h2>


        </div>
    </div>)
}