import React, { useState, useEffect } from "react";
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../Configuracion/APIInvoke';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";


const AgregarProductos = () => {
    const navigate = useNavigate();
    const [productos, setProductos] = useState({
        producto: '',
        referencia:'',
        talla:'',
        color:'',
        estilo:''

    })

    const {producto, referencia, talla, color, estilo} = productos

    useEffect(()=>{
        document.getElementById("producto").focus();
    }, [])

    const onChange = (e) =>{
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        })
    }

    const CrearProducto = async () =>{
        const data= {
            producto: productos.producto,
            referencia: productos.referencia,
            talla: productos.talla,
            color: productos.color,
            estilo:productos.estilo

        }
        const response =await APIInvoke.invokePOST('/api/productos', data);
        const idProductos = response._id;

        if(idProductos ===''){
            const msg = "hubo un error al agregar el nuevo producto";
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
            navigate("/productos");

            const msg = "El producto fue agregado con exito"
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

            setProductos({
                producto: '',
                referencia:'',
                talla:'',
                color:'',
                estilo:''
            });
        }
    }

    const onSubmit =(e) => {
        e.preventDefault();
        CrearProducto();
    }


  return (
    <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Agregar productos"}
                    breadCrumb1={"Listado de productos"}
                    breadCrumb2={"Productos"}
                    ruta1={"/productos/agregar"}
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
                                        <label htmlFor="producto">Producto</label>
                                        <input type="text"
                                        className="form-control"
                                        id='producto'
                                        name='producto'
                                        placeholder="Ingrese el nombre del producto"
                                        value={producto}
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
                                        <label htmlFor="referencia">Referencia</label>
                                        <input type="text"
                                        className="form-control"
                                        id='referencia'
                                        name='referencia'
                                        placeholder="Ingrese la referencia del producto"
                                        value={referencia}
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
                                        <label htmlFor="talla">Talla</label>
                                        <input type="number"
                                        className="form-control"
                                        id='talla'
                                        name='talla'
                                        placeholder="Ingrese la talla del producto"
                                        value={talla}
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
                                        <label htmlFor="color">Color</label>
                                        <input type="text"
                                        className="form-control"
                                        id='color'
                                        name='color'
                                        placeholder="Ingrese color del producto"
                                        value={color}
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
                                        <label htmlFor="estilo">Estilo</label>
                                        <input type="text"
                                        className="form-control"
                                        id='estilo'
                                        name='estilo'
                                        placeholder="Igrese el estilo del producto"
                                        value={estilo}
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

export default AgregarProductos