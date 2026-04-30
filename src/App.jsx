import About_page from './Pages/About.jsx'
import { Routes, Route } from 'react-router-dom'
import Nav from './Navbar.jsx';
import Brands from './About_components/about_brands';
import ContactPage from './Contact_components/Contact-page';


function App() {
  return (<>
    <Nav />

    <Routes>
      <Route path='/about' element={<About_page />}></Route>
      <Route path='/connect' element={<ContactPage />}></Route>
    </Routes>
  </>)
}

export default App
