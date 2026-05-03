import { Routes, Route } from 'react-router-dom'
import Nav from './Navbar.jsx';
import About_page from './Pages/About.jsx'
import ContactPage from './Contact_components/Contact-page';

import Home from './Pages/Home.jsx';

function App() {
  return (<>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About_page />}></Route>
      <Route path='/connect' element={<ContactPage />}></Route>
    </Routes>
  </>)
}

export default App
