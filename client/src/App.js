import {Route,Routes,Navigate} from "react-router-dom"
import Main from "./core/main/Main";
import Register from "./core/register/Register"
import Login from "./core/login/Login";
import ParentApp from "./core/parent/Parent"
import ChildApp from "./core/child/Child"
import "./app.css"
import ParentApp from "./core/parent/Parent";
import ChildApp from "./core/child/Child"

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Routes>
        {user &&<Route path="/" element={<Main/>}></Route>}
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Navigate replace to="/login" />} /> 

        <Route path = "/child" element={<ChildApp/>}></Route>
        <Route path = "/parent" element={<ParentApp/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
