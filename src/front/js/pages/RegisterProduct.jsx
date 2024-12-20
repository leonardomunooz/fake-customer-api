import React, { useState, useContext, useRef } from "react"
import { Context } from "../store/appContext"
import { Navigate } from "react-router-dom"


const initialProduct = {
    name: "",
    description: "",
    price: "",
    imagen: "",
    category: ""
}

export const RegisterProduct = () => {
    const { store, actions } = useContext(Context)
    const [product, setProduct] = useState(initialProduct)
    const fileInputRef = useRef(null)

    // console.log(fileInputRef)
    const handleFile = ({ target }) => {
        setProduct({
            ...product,
            imagen: target.files[0]
        })
    }

    const handleChange = ({ target }) => {
        setProduct({
            ...product,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("name", product.name)
        formData.append("description", product.description)
        formData.append("price", product.price)
        formData.append("category", product.category)
        formData.append("imagen", product.imagen)
        const response = await actions.registerProduct(formData)

        if (response === 201) {
            setProduct(initialProduct)
            fileInputRef.current.value = null
            alert("Producto registrado exitosamente")
        } else {
            alert("Error al registrar el producto")
        }
    }

    return (
        <div className="container d-flex justify-content-center mt-5 ">
            {
                store.token ?
                    <form className=" row g-3 border p-4 " style={{ "width": "550px" }}>
                        <h1 className="col-12 border text-center" >Registro de productos</h1>
                        <div className="col-md-2">
                            <label htmlFor="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                        </div>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control w-100"
                                id="inputNombre"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                style={{ "width": "100%" }}
                            />

                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputDescription" className="col-sm-2 col-form-label ">Descripcion</label>
                        </div>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control w-100"
                                id="inputDescription"
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputGroupFile01" className="col-sm-2 col-form-label">Imagen</label>
                        </div>
                        <div className="col-md-10">
                            <div className="input-group mb-3">
                                <input
                                    type="file"
                                    className="form-control w-100"
                                    id="inputGroupFile02"
                                    onChange={handleFile}
                                    ref={fileInputRef}
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputState" className="form-label col-sm-2">Category</label>
                        </div>
                        <div className="col-md-10">
                            <select
                                id="inputState"
                                className="form-select w-50"
                                onChange={handleChange}
                                name="category"
                                value={product.category}>
                                <option value="default">Choose...</option>
                                <option value="1">Dulces Y golosinas</option>
                                <option value="2">Carnes</option>
                                <option value="3">Enlatados</option>
                                <option value="4">Frutas</option>
                                <option value="5">Huevos y Lacteos</option>
                                <option value="6">Verduras</option>
                                <option value="7">Bebidas</option>
                            </select>
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputState" className="form-label col-sm-2">Precio</label>
                        </div>
                        <div className="col-md-10">
                            <div className="input-group w-50">
                                <input
                                    type="number"
                                    className="form-control inputNumber "
                                    style={{ "appearance": "textfield" }}
                                    aria-label="Dollar amount (with dot and two decimal places)"
                                    onChange={handleChange}
                                    name="price"
                                    value={product.price}
                                />
                                <span className="input-group-text">$</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-primary "
                                onClick={handleSubmit}
                            >Registrar Producto</button>
                        </div>
                    </form> :
                            <Navigate to="/login" />
            }
        </div>




    )

}