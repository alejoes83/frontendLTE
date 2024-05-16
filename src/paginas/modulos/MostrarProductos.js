import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../Configuracion/APIInvoke';
import swal from 'sweetalert';


const MostrarProductos = () => {

    const [producto, setProducts] = useState([])

    const getProductos = async () => {
        const response = await APIInvoke.invokeGET('/api/productos');
        setProducts(response.products);
    }

    useEffect(() => {
        getProductos();
    }, [])

    const eliminarProducto = async (e, idProducto) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`);

        if (response.msg === "el producto no existe") {
            const msg = "el Producto fue eliminado exitosamente";
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

            getProductos();

        } else {

            const msg = "Hubo un error al eliminar el producto de la base de datos";
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
                    titulo={"Listado de productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"> <Link to={"/productos/agregar"}
                                className="btn btn-block btn-primary btn-sm">Agregar Producto</Link></h3>
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
                                        <th style={{width: '20%'}}>Producto</th>
                                        <th style={{width: '15%'}}>Referencia</th>
                                        <th style={{width: '10%'}}>Talla</th>
                                        <th style={{width: '30%'}}>Color</th>
                                        <th style={{width: '15%'}}>Estilo</th>
                                        <th style={{width: '10%'}}>Acciones</th>
                                    </tr>

                                </thead>

                                <tbody>

                                {producto.map((cliente, index) =>(
                                        <tr key={index}>
                                            <td> {cliente.producto}</td>
                                            <td> {cliente.referencia}</td>
                                            <td> {cliente.talla}</td>
                                            <td> {cliente.color}</td>
                                            <td> {cliente.estilo}</td>
                                            <td>
                                            <Link to={`/clientes/editar${cliente._id}`} className='btn btn-sm btn-warning'>Edit</Link>
                                            <button onClick={(e) => eliminarProducto(e, cliente._id)} className='btn btn-sm btn-danger'>Del</button>
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

export default MostrarProductos