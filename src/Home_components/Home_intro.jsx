import '../CSS/Home.css';
import {Link} from 'react-router-dom';


export default function Home_intro(){
    return(<div id='Home_intro'>
        <h4 id='tagline'>An Event Enablement Platform</h4>
        <h1 style={{fontSize:'80px',color:'white',marginBottom:'0px',marginTop:'10px'}}>Your Vision Deserves</h1>
        <h1 style={{fontSize:'80px',color:'rgb(237, 205, 19)',margin:'0px 5px 10px 0px'}}>
            The Right Partners</h1>

        <p style={{color:'rgb(170, 166, 166)',fontSize:'20px',width:'600px',
            lineHeight:'30px',margin:'10px auto 0px auto',marginBottom:'100px'
        }}>We don't just connect you with sponsors, we become 
            your partner. From event strategy to execution,  
            <span style={{fontWeight:'Bold',color:'white'}}> Prera </span>
             transforms your vision into a experience that brands compete to be part of.</p>
        
        <Link to='/connect' id='Partner-organizer-button'>I am a Organizer</Link>
        <Link to='/connect' id='Partner-brand-button'>I am a Brand</Link>
    </div>)
}