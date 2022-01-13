import Login from "./Components/Login/Login";
import Wrongpass from "./Components/Login/Wrongpass";
import Forgotpass  from "./Components/Login/Forgotpass";
import Resetpass  from "./Components/Login/Resetpass";
import Account  from "./Components/Login/Account";

import {Routes , Route , Link , } from 'react-router-dom'
function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Wrong' element={<Wrongpass/>}/>
        <Route path='/Forgot' element={<Forgotpass/>}/>
        <Route path='/Reset' element={<Resetpass/>}/>
        <Route path='/Account' element={<Account/>}/>
    </Routes>
  );
}

export default App;
