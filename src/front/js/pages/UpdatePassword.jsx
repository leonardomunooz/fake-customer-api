import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const UpdatePassword = () => {
    const { actions } = useContext(Context)
    const [newPass, setNewPass] = useState("")
    const navigate = useNavigate()

    const [searchParams, _] = useSearchParams()
    const [inputValueType, setInputValueType] = useState('password')

    const updateFtype = () => {
        if (inputValueType == 'text') {
            setInputValueType('password')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newPass.trim() == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There can be no blank spaces",
            });
            return
        }

        const response = await actions.updatePassword(searchParams.get("token"), newPass)

        console.log(response.ok)
        if (response == 401) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "token has expired",
            });
        }
        if (response == 404) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ha ocurrido un error",
            });
        }
        if (response == 201) {
            Swal.fire({
                title: "password successfully updated",
                icon: "success",
                draggable: true
            });
            const timeout = setTimeout(() => {
                navigate('/login')
            }, 3000);
            return () => clearTimeout(timeout);

        }
    }
    return (
        <div className="container m-auto " style={{ "width": "600px" }}>
            <div className="row">
                <h1 className='col-12 text-center mt-5'> Update Password </h1>
            </div>
            <form className="row"
                // onClick={(e) => e.preventDefault()}
                onSubmit={handleSubmit}
            >
                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="formGroupEmail" className="form-label fw-bold">New password</label>
                        <input
                            id="formGroupEmail"
                            type={inputValueType}
                            className="form-control"
                            placeholder="New Password"
                            name="password"
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                        />
                        <svg onClick={updateFtype} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </div>
                </div>

                <div className="col-12">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100 "
                        // onClick={handleSubmit}
                        >Actualizar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

