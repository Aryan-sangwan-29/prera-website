import '../CSS/Home.css';
import Home_intro from '../Home_components/Home_intro.jsx';
import Impact from '../About_components/impact.jsx';

export default function Home(){
    return(<div>
        <Home_intro />
        <div style={{marginLeft:'80px',marginRight:'80px',marginBottom:'50px', marginTop:'100px'}}>
            <Impact/>
        </div>
    </div>)
}