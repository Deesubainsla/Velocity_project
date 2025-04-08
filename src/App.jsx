import Adminlayout from "./pages/Adminlayout.jsx"

import Login from "./components/Login.jsx"
import Registervender from "./components/Registervender.jsx"

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Forgotpass from "./components/Forgotpass.jsx"
import { useContext } from "react"
import { mycontext } from "./contextapi/context.jsx"
import Venderlayout from "./pages/Venderlayout.jsx"


function App() {
  const {user, role} = useContext(mycontext);
  const AdminAuth = ({Component})=>{
      return (user && (role=='admin'))? <Component/>: <Login/>;
  }

  const VenderAuth = ({children})=>{
      return (user && (role=='vender'))? <Component/>: <Login/>;
  }
  
  return<>
      <BrowserRouter>
        <Routes>
          {/*Normal Login*/}
          <Route path="/" element={<Login/>} />
          <Route path="/registervender" element={<Registervender/>} />
          <Route path="/forgotpass" element={<Forgotpass/>} />

          {/* for Admin */}
          <Route path="/admin/*" element={<AdminAuth Component={Adminlayout}/>} />


          {/* for venders */}
          <Route path="/vender/*" element={<VenderAuth Component={Venderlayout}/>} />

        </Routes>
      </BrowserRouter>
  </>
}

export default App
