import React, { useState, useEffect } from "react";
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../Configuracion/APIInvoke';
import { useNavigate, useParams } from "react-router-dom";



const EditarProductos = () => {

    const [ producto, setProducto] = useState('');
    const [ referencia, setReferencia] = useState('');
    const [ talla, setTalla] = useState('');
    const [ color, setColor] = useState('');
    const [ estilo, setEstilo] =useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    //funcion actualizar
    const modificarProducto = async (e) => {
        e.preventDefault()
        await APIInvoke.invokePUT(`/api/productos/${id}`, {
            producto:producto, 
            referencia:referencia, 
            talla:talla, 
            color:color, 
            estilo:estilo, 
            
        })
        navigate('/clientes')
    }
    useEffect( () =>{
            getProductosByID()
    // eslint-disable-next-line        
    }, []);

    const getProductosByID = async () =>{
       const resp = await APIInvoke.invokePUT(`/api/productos/${id}` )
       setProducto(resp.producto)
       setReferencia(resp.referencia)
       setTalla(resp.talla)
       setColor(resp.color)
       setEstilo(resp.estilo)
     

    }


  return (
    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainer></SidebarContainer>
    <div className="content-wrapper">

        <ContentHeader
            titulo={"Editar clientes"}
            breadCrumb1={"Listado de productos"}
            breadCrumb2={"editar"}
            ruta1={"/clientes"}
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
                    <form onSubmit={modificarProducto}>

                        <div className="card_body">
                            <div className="form-group">
                                <label htmlFor="producto">Producto</label>
                                <input type="text"
                                className="form-control"
                                id='producto'
                                name='producto'
                                placeholder="Ingrese el nombre del producto"
                                value={producto}
                                onChange={(e) => setProducto(e.target.value) }
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
                                <label htmlFor="referecia">Referencia</label>
                                <input type="text"
                                className="form-control"
                                id='referencia'
                                name='referencia'
                                placeholder="Ingrese la referencia del producto"
                                value={referencia}
                                onChange={(e) => setReferencia(e.target.value) } 
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
                                onChange={(e) => setTalla(e.target.value) }
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
                                placeholder="Ingrese el color del producto"
                                value={color}
                                onChange={(e) => setColor(e.target.value) } 
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
                                placeholder="<Igrese el estilo del producto"
                                value={estilo}
                                onChange={(e) => setEstilo(e.target.value) }
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
                            <button type="submit" className="btn btn-primary"> Editar</button>
                        </div>
                    </form>
            </div>
        </section>
        </div>
        <Footer></Footer>
    
</div>
  )
}

export default EditarProductos