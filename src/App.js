import './App.css';
import Home from './components/Home';
import { BrowserRouter,  Routes, Route,} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
