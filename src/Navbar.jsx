import {Link} from 'react-router-dom';
import './Navbar.css'

export default function Nav(){
    return (
        <div id='nav-div'>

                <h2 style={{color:'white'}}>PRERA</h2>


                <div style={{display:'flex',gap:'30px',alignItems:'center'}}>
                    <Link to='/' className='links'>Home</Link>
                    <Link to='/about' className='links'>About</Link>
                    <Link to='/events' className='links'>Events</Link>
                    <Link to='/partners' className='links'>Partners</Link>
                    <Link to='/connect' id='connect'>Lets Connect</Link>
                </div>
        </div>
    )
}