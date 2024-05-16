import React, {Fragment} from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./paginas/auth/Login";
import Home from "./Home";
import Registro from "./paginas/auth/Registro";
import MostrarClientes from "./paginas/modulos/MostrarClientes";
import AddClientes from "./paginas/modulos/AddClientes";
import EditarClientes from "./paginas/modulos/EditarClientes";
import MostrarProductos from "./paginas/modulos/MostrarProductos";
import AgregarProductos from "./paginas/modulos/AgregarProductos";


function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>

            <Route path= "/" exact element = {<Login/>}></Route>
            <Route path= "/Registro" exact element = {<Registro/>}></Route>
            <Route path= "/home" exact element = {<Home/>}></Route>
            <Route path= "/clientes" exact element = {<MostrarClientes/>}></Route>
            <Route path= "/clientes/agregar" exact element = {<AddClientes/>}></Route>
            <Route path= "/clientes/editar/:id" exact element = {<EditarClientes/>}></Route>  

            <Route path= "/productos" exact element = {<MostrarProductos/>}></Route>   
            <Route path= "/productos/agregar" exact element = {<AgregarProductos/>}></Route>     

          </Routes>
        </Router>
       </Fragment>
          </div>
  );
}

export default App;
