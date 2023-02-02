import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home/Home'
import Login from './Login/Login';

function RoutesApp(){
return(
<BrowserRouter>
<Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/login"  element={<Login />}/>
</Routes>
</BrowserRouter>

)

}
export default RoutesApp