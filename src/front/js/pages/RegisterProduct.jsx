import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"

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

        if (response === 200) {
            setProduct(initialProduct)
            alert("producto registrado exitosamente")
        } else {
            alert("error al registrar el producto")
        }
    }
    return (
        <div className="container">

            <form className="row g-3">
                <h1 className="text-center">Registro de productos</h1>
                <div className="row mb-3">
                    <label htmlFor="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            id="inputNombre"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Descripcion</label>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            id="inputDescription"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mb-3" >
                    <label htmlFor="inputGroupFile01" className="col-sm-2 col-form-label">Imagen</label>
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input
                                type="file"
                                className="form-control"
                                id="inputGroupFile02"
                                onChange={handleFile}

                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputState" className="form-label col-sm-2">Category</label>
                    <div className="col-md-2">
                        <select
                            id="inputState"
                            className="form-select"
                            onChange={handleChange}
                            name="category">
                            <option value="default">Choose...</option>
                            <option value="verduras">Verduras</option>
                            <option value="frutas">Frutas</option>
                            <option value="dulces"
                            >Dulces</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputState" className="form-label col-sm-2">Precio</label>
                    <div className="col-md-2">
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control inputNumber"
                                style={{ "appearance": "textfield" }}
                                aria-label="Dollar amount (with dot and two decimal places)"
                                onChange={handleChange}
                                name="price"
                                value={product.price}
                            />
                            <span className="input-group-text">$</span>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >Registrar</button>
                </div>

            </form>
        </div>
    )

}