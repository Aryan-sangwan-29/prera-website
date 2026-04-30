import { useEffect } from 'react';
import './about_intro.css'
import Provide from './provide_content'

export default function Brands() {
    let Brand_heading = 'To Brands';

    let Brand_content = <p>We help brands connect with the right audience through high-impact events.
<ul style={{textAlign:'left',lineHeight:'40px'}}>
<li>Targeted Audience Reach</li>
<li>Brand Visibility & Awareness</li>
<li>On-Ground Activation Opportunities</li>
<li>Customized Sponsorship Plans</li>
<li>ROI-Driven Collaborations</li>
<li>Long-Term Brand Association</li>
</ul></p>;

    let Event_heading = 'To Events';

    let Event_content = <p>We empower events with the right brands and resources to scale.
        <ul style={{textAlign:'left',lineHeight:'40px'}}>
    <li>Sponsor Sourcing</li>
    <li>Budget & Sponsorship Planning</li>
    <li>Brand Collaborations</li>
    <li>Event Growth Strategy</li>
    <li>Marketing & Promotion Support</li>
    <li>End-to-End Partnership Management</li>
    </ul></p>;

        

    return (
        <div id="brand-box">
            <h1  style={{ textAlign: 'center', fontSize: '70px' }}>What we provide?</h1>
            <div id='Provide_box'>
                <Provide heading={Brand_heading} data={Brand_content} />
                <Provide heading={Event_heading} data={Event_content} />
            </div>
        </div>
    )
}