import React from "react"

export const RegisterProduct = () => {

    return (
        <div className="container">

            <form className="row g-3">
                <h1 className="text-center">Registro de productos</h1>
                <div className="row mb-3">
                    <label htmlFor="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-md-6">
                        <input type="email" className="form-control" id="inputNombre" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Descripcion</label>
                    <div className="col-md-6">
                        <input type="email" className="form-control" id="inputDescription" />
                    </div>
                </div>

                <div className="row mb-3" >
                    <label htmlFor="inputGroupFile01" className="col-sm-2 col-form-label">Imagen</label>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupFile01" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                        </div>
                    </div>

                </div>
                <div className="row mb-3">
                    <label htmlFor="inputState" className="form-label col-sm-2">Category</label>
                    <div className="col-md-2">
                        <select id="inputState" className="form-select">
                            <option value="default">Choose...</option>
                            <option>Verduras</option>
                            <option>Frutas</option>
                            <option>Dulces</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputState" className="form-label col-sm-2">Precio</label>
                    <div className="col-md-2">
                        <div className="input-group">
                            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                            <span className="input-group-text">$</span>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </div>
            </form>
        </div>
    )

}