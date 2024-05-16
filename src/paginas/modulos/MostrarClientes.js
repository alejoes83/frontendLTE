import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../Configuracion/APIInvoke';
import swal from 'sweetalert';


const MostrarClientes = () => {

    const [clientes, setClientes] = useState([])

    const getClientes = async () => {
        const response = await APIInvoke.invokeGET('/api/clientes');
        setClientes(response.clientes);
    }

    useEffect(() => {
        getClientes();
    }, [])

    const eliminarCliente = async (e, idCliente) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);

        if (response.msg === "el cliente no existe") {
            const msg = "el cliente fue eliminado";
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
            getClientes();

        } else {

            const msg = "Hubo un error al eliminar un cliente de la base de datos";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }
    }
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Listado de clientes"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Clientes"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"> <Link to={"/clientes/agregar"}
                                className="btn btn-block btn-primary btn-sm">Agregar Cliente</Link></h3>
                            <div className="card-tools">

                                <button type="button" className="btn btn-tool" data-card-widget="remove"
                                    title="Collapse">
                                    <i className="fas fa-items"></i>
                                </button>

                                <button type="button" className="btn btn-tool" data-card-widget="remove"
                                    title="Remove">
                                    <i className="fas fa-items"></i>
                                </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{width: '17%'}}>Nombres</th>
                                        <th style={{width: '18%'}}>Apellidos</th>
                                        <th style={{width: '10%'}}>Cedula</th>
                                        <th style={{width: '20%'}}>Correo</th>
                                        <th style={{width: '10%'}}>Telefono</th>
                                        <th style={{width: '15%'}}>Direccion</th>
                                        <th style={{width: '10%'}}>Acciones</th>
                                    </tr>

                                </thead>

                                <tbody>
                                    {clientes.map((cliente, index) =>(
                                        <tr key={index}>
                                            <td> {cliente.nombres}</td>
                                            <td> {cliente.apellidos}</td>
                                            <td> {cliente.cedula}</td>
                                            <td> {cliente.correo}</td>
                                            <td> {cliente.telefono}</td>
                                            <td> {cliente.direccion}</td>
                                            <td>
                                            <Link to={`/clientes/editar${cliente._id}`} className='btn btn-sm btn-warning'>Edit</Link>
                                            <button onClick={(e) => eliminarCliente(e, cliente._id)} className='btn btn-sm btn-danger'>Del</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                </div>
                <Footer></Footer>
            
        </div>
    )
}

export default MostrarClientes