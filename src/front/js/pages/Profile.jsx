import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";
import { Navbar } from "../component/navbar";

import logo from "../../img/logo.png"

export const Profile = () => {
    const { store, actions } = useContext(Context)

    actions.getProducts()

    return (
        <div className="container">
            <Navbar />
            {

                store.token ?
                    <div className="row mt-5  p-4 ">
                        <div className="m-auto col-8 ">
                            {/* <img className="m-auto d-block" src="https://placehold.co/200" alt="" /> */}
                            <img className="m-auto d-block" src={logo} alt="" style={{ "width": "300px" }} />
                        </div>
                        <h1 className=" m-auto mt-3 col-8 text-center"> Welcome</h1>

                        <h4 className="text-center mt-3">
                            <label htmlFor="apiKey"> Api Key : </label>
                            <p className="d-inline-block border  p-1" id="apiKey" > {store.api_key}</p>
                        </h4>
                        <div className="m-auto border col-12">
                            <h4 className="text-center" >Documentacion</h4>
                            <Link to='/docs'>
                                <p className="text-center">{process.env.URL_APIDOCS}</p>
                            </Link>
                        </div>
                    </div> :
                    <Navigate to="/login" />

            }

        </div>
    )
}