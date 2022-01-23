
import './App.css';
import Loginpage from './components/Loginpage/loginpage';
import Routing from './components/Routing/Routing';
import { BrowserRouter, Route,Routes } from 'react-router-dom'


function App() {
  return (
        <div>
       <BrowserRouter>
       
      <Routes>
      <Route path="/" element={<LoginPage/>} />
        <Route path="/:slug" element={<Routing/>} />
      </Routes>
      </BrowserRouter>
        </div>
       
        
            )
    }
    function LoginPage()
    {
        return(
            <Loginpage/>
        )
    }
 

export default App;
