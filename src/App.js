import './App.css';

import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import { createContext, useState } from 'react';
import Content from "./Components/Content.js"
import Service from './Components/Service/Service';





export const Global = createContext();
function App() {
const [first, setfirst] = useState(false)
// console.log(Content);
  return (
    <div className="App">

      <Global.Provider value={{obj:Content}}>    
      <Header first={first} setfirst={setfirst}/>

      <Routes>
      <Route path='/' element={<Home first={first}/>} />
      <Route path='/home' element={<Home first={first}/>} />
      <Route path='/contact' element={<Contact first={first}/>} />
      <Route path='/service' element={<Service first={first} />}/>
      </Routes>
      </Global.Provider>

    </div>
  );
}

export default App;