import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Header from './header';
import HOC from './hoc';
import About from './about';
import Layout from './hoc';
import Contact from './contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const ContactComponent = Layout(Contact);
  const AboutComponent = Layout(About);
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/about' element={<AboutComponent/>}></Route>
          <Route path='/contact' element={<ContactComponent/>}></Route>
          <Route path='/login' element={<div>Login Works</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     
 
  );
}

export default App;
