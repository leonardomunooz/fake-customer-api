import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const initialUser = { "email": "" }

const ResetPassword = () => {

    const [user, setUser] = useState(initialUser)
    const { actions } = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const handleChange = ({ target }) => {
        setEmail(target.value)

    }
    const handleSubmit = async (e) => {

        if (email.trim() == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There can be no blank spaces",
            });
            return
        }
        const response = await actions.resetPassword(email)
        if (response) {
            Swal.fire({
                title: "Recovery email has been sent, go to your email",
                icon: "success",
                draggable: true
            });
        }

    }

    return (

        <div className="container m-auto " style={{ "width": "600px" }}>
            <div className="row">
                <h1 className='col-12 text-center mt-5'> ¿Olvidaste tu contrasena? </h1>
                <p className='col-12 text-center'> ¿Recuerdas tu contrasena? <Link to={"/login"}>Login here</Link> </p>
            </div>
            <form className="row" onClick={(e) => e.preventDefault()}>
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="formGroupEmail" className="form-label fw-bold">Correo electronico</label>
                        <input
                            id="formGroupEmail"
                            type="text"
                            className="form-control"
                            placeholder="Example input email"
                            name="email"
                            value={email}
                            onChange={handleChange} />
                    </div>
                </div>

                <div className="col-12">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100 " onClick={handleSubmit}>Recuperar</button>
                    </div>
                </div>


            </form>
        </div>

    )
}


export default ResetPassword