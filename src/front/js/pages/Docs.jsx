import React, { useContext } from "react"
import { Context } from "../store/appContext.js";
import SyntaxHighlighter from 'react-syntax-highlighter';

import { addfavorites, getProducts, productDetail, getMessageAddFavorites, getUserFavorites, getCategory } from "./datos.js";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Title } from "../component/Title.jsx";

import { Request } from "../component/Request.jsx";
import { Response } from "../component/Response.jsx";

export const Docs = () => {

    const { store, actions } = useContext(Context)

    return (

        <div className="container">
            <h1 className="text-center mt-4">Docs</h1>
            <div className="row">
                <div className="col-12">

                    <Title
                        Title="Get all Products"
                        url={`[Get] ${process.env.BACKEND_URL}/api/products`}
                    />
                    <Request requestText={addfavorites} />
                    <Response responseText={getProducts} />
                </div>
                <div className="col-12">

                    <Title
                        Title="Get a single Product"
                        url={`[Get] ${process.env.BACKEND_URL}/api/product_by/70`}
                    />
                    <Request requestText={addfavorites} />
                    <Response responseText={productDetail} />

                </div>
                <div className="col-12">

                    <Title
                        Title="Get user favorites by id"
                        url={`[Get] ${process.env.BACKEND_URL}/api/favorite/user/3`}
                    />
                    <Request requestText={addfavorites} />
                    <Response responseText={getUserFavorites} />

                </div>

                <div className="col-12">
                    <Title
                        Title="Add user favorites by id"
                        url={`[POST] ${process.env.BACKEND_URL}/api/favorite/user/1/product/70`}
                    />
                    <Request requestText={addfavorites} />
                    <Response responseText={getMessageAddFavorites} />
                </div>

                <div className="col-12">
                    <Title
                        Title="Get category names"
                        url={`[GET] ${process.env.BACKEND_URL}/api/categories`}
                    />

                    <Request requestText={addfavorites} />
                    <Response responseText={getCategory} />


                </div>

            </div>
        </div >
    )
}