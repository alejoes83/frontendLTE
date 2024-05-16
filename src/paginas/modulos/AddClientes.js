import React, { useState, useEffect } from "react";
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../Configuracion/APIInvoke';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


const AddClientes = () => {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState({
        nombres: '',
        apellidos:'',
        cedula:'',
        correo:'',
        telefono:'',
        direccion:''

    })

    const {nombres, apellidos, cedula, correo, telefono, direccion} = clientes

    useEffect(()=>{
        document.getElementById("nombres").focus();
    }, [])

    const onChange = (e) =>{
        setClientes({
            ...clientes,
            [e.target.name]: e.target.value
        })
    }

    const CrearCliente = async () =>{
        const data= {
            nombres: clientes.nombres,
            apellidos: clientes.apellidos,
            cedula: clientes.cedula,
            correo: clientes.correo,
            telefono:clientes.telefono,
            direccion: clientes.direccion

        }
        const response =await APIInvoke.invokePOST('/api/clientes', data);
        const idClientes = response._id;

        if(idClientes ===''){
            const msg = "hubo un error al agrgar el cliente";
            swal({
                title:'Error',
                text:msg,
                icon:'error',
                buttons:{
                    confirm:{
                    text:'OK',
                    value: true,
                    visible:true,
                    className:'btn btn-danger',
                    closeModal:true
                }
            }
            });
        } else{
            navigate("/clientes");

            const msg = "El cliente fue agregado con exito"
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text:'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal:true
                    }
                }
            });

            setClientes({
                nombres: '',
                apellidos:'',
                cedula:'',
                correo:'',
                telefono:'',
                direccion:''
            });
        }
    }

    const onSubmit =(e) => {
        e.preventDefault();
        CrearCliente();
    }


  return (
    <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Agregar clientes"}
                    breadCrumb1={"Listado de clientes"}
                    breadCrumb2={"Clientes"}
                    ruta1={"/clientes/agregar"}
                />

            <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">

                                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                                    title="Collapse">
                                    <i className="fas fa-items"></i>
                                </button>

                                <button type="button" className="btn btn-tool" data-card-widget="remove"
                                    title="Remove">
                                    <i className="fas fa-items"></i>
                                </button>
                            </div>
                            </div>
                            <div className="card-body"></div>
                            <form onSubmit={onSubmit}>

                                <div className="card_body">
                                    <div className="form-group">
                                        <label htmlFor="nombres">Nombres</label>
                                        <input type="text"
                                        className="form-control"
                                        id='nombres'
                                        name='nombres'
                                        placeholder="Ingrese los nombres del cliente"
                                        value={nombres}
                                        onChange={onChange} 
                                        required
                                        />
                                        </div>
                                </div>
                                <div className="imput-group-append">
                                    <div className="imput-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <div className="form-group">
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <input type="text"
                                        className="form-control"
                                        id='apellidos'
                                        name='apellidos'
                                        placeholder="Ingrese el apellido del cliente"
                                        value={apellidos}
                                        onChange={onChange} 
                                        required
                                        />
                                        </div>
                                </div>
                                <div className="imput-group-append">
                                    <div className="imput-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <div className="form-group">
                                        <label htmlFor="cedula">Cedula</label>
                                        <input type="number"
                                        className="form-control"
                                        id='cedula'
                                        name='cedula'
                                        placeholder="Ingrese la cedula del cliente"
                                        value={cedula}
                                        onChange={onChange} 
                                        required
                                        />
                                        </div>
                                </div>
                                <div className="imput-group-append">
                                    <div className="imput-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo</label>
                                        <input type="text"
                                        className="form-control"
                                        id='correo'
                                        name='correo'
                                        placeholder="Ingrese correo del cliente"
                                        value={correo}
                                        onChange={onChange} 
                                        required
                                        />
                                        </div>
                                </div>
                                <div className="imput-group-append">
                                    <div className="imput-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input type="number"
                                        className="form-control"
                                        id='telefono'
                                        name='telefono'
                                        placeholder="<Igrese un numero de telefono del cliente"
                                        value={telefono}
                                        onChange={onChange} 
                                        required
                                        />
                                        </div>
                                </div>
                                <div className="imput-group-append">
                                    <div className="imput-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <div className="form-group">
                                        <label htmlFor="direccion">Direccion</label>
                                        <input type="text"
                                        className="form-control"
                                        id='direccion'
                                        name='direccion'
                                        placeholder="Ingrese la direccion del cliente"
                                        value={direccion}
                                        onChange={onChange} 
                                        required
                                        />
                                        </div>
                                </div>
                                <div className="imput-group-append">
                                    <div className="imput-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary"> Agregar</button>
                                </div>
                            </form>
                    </div>
                </section>
                </div>
                <Footer></Footer>
            
        </div>
  )
}

export default AddClientes