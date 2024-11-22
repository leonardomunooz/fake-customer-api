import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx"
import { Profile } from "./pages/Profile.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import { BackendURL } from "./component/backendURL";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Login />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<ResetPassword />} path="/resetpassword" />
                        <Route element={<Profile/>} path="/profile" />
                        
                        {/* <Route element={<Single />} path="/single/:theid" /> */}
                        {/* <Route element={<h1>Not found!</h1>} path="*"/> */}
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
