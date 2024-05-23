import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Skills from './components/Skills';
import Certification from './components/Certifications';
import Projects from './components/Projects';
import Descriptions from './components/description';

import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Body/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='certifications' element={<Certification/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='projects/:id' element={<Descriptions/>}>

      <Route path="*" element={"no"} />
      </Route>
      </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
