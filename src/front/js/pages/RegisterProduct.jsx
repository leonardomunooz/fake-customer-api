import React from "react"

export const RegisterProduct = () => {

    return (
        <div className="container">

            <form class="row g-3">
                <h1 className="text-center">Registro de productos</h1>
                <div className="row mb-3">
                    <label htmlFor="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-md-6">
                        <input type="email" class="form-control" id="inputNombre" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="inputDescription" class="col-sm-2 col-form-label">Descripcion</label>
                    <div class="col-md-6">
                        <input type="email" class="form-control" id="inputDescription" />
                    </div>
                </div>

                <div className="row mb-3" >
                    <label htmlFor="inputGroupFile01" class="col-sm-2 col-form-label">Imagen</label>
                    <div className="col-md-6">
                        <div class="input-group">
                            <input type="file" class="form-control" id="inputGroupFile01" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                            <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                        </div>
                    </div>

                </div>
                <div className="row mb-3">
                    <label htmlFor="inputState" class="form-label col-sm-2">Category</label>
                    <div class="col-md-2">
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>Verduras</option>
                            <option>Frutas</option>
                            <option>Dulces</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputState" class="form-label col-sm-2">Precio</label>
                    <div className="col-md-2">
                        <div class="input-group">
                            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                            <span class="input-group-text">$</span>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Registrar</button>
                </div>
            </form>
        </div>
    )

}