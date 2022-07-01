import './App.css';
import Home from './Pages/Home';
import Students from './Pages/Student';
import Contact from './Pages/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from './Pages/Form';
import EditForm from './Pages/EditForm';
import { InputContextProvider } from './Context/InputContext';
function App() {
  return (

      <InputContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />}/>
             <Route path='/form' element={<Form/>}/>
             <Route path='/edit/:id' element={<EditForm/>}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        </BrowserRouter>
      </InputContextProvider>

  );
}
export default App;
