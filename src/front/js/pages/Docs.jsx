import React, { useState, useContext, useEffect } from "react"
import { Context } from "../store/appContext.js";
import SyntaxHighlighter from 'react-syntax-highlighter';

import { atomOneDarkReasonable, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Title } from "../component/Title.jsx";




export const Docs = () => {

    const { store, actions } = useContext(Context)

    console.log(store.products)




    const favorites = `{
    "email": "elelys",
    "favorites": [
        {
            "product ": {
                "description": "refresco pepsi sin azucar",
                "id": 2,
                "imagen_id": "zwnzv0k4gxoezboyr9e5",
                "name": "pepsi",
                "price": 1.5,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1734638769/zwnzv0k4gxoezboyr9e5.png"
            }
        },
        {
            "product ": {
                "description": "tomates bueno para la salud",
                "id": 4,
                "imagen_id": "yjkakhghsnae93luneip",
                "name": "tomates",
                "price": 0.5,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1734717865/yjkakhghsnae93luneip.png"
            }
        },
        {
            "product ": {
                "description": "tomates bueno para la salud",
                "id": 4,
                "imagen_id": "yjkakhghsnae93luneip",
                "name": "tomates",
                "price": 0.5,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1734717865/yjkakhghsnae93luneip.png"
            }
        }
    ],
    "id": 3
}`
    const productDetail = `{
    "description": "refresco pepsi sin azucar",
    "id": 2,
    "imagen_id": "zwnzv0k4gxoezboyr9e5",
    "name": "pepsi",
    "price": 1.5,
    "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1734638769/zwnzv0k4gxoezboyr9e5.png"   
}`

    const codeString = `{
    "email": "leonardo",
    "favorites": [
        {
            "product ": {
                "description": "zanahoria",
                "id": 5,
                "imagen_id": "nhll8elaq1amcutwoqnw",
                "name": "zanahioria",
                "price": 1.2,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1734725271/nhll8elaq1amcutwoqnw.png"
            }
        },
        {
            "product ": {
                "description": "refresco pepsi sin azucar",
                "id": 2,
                "imagen_id": "zwnzv0k4gxoezboyr9e5",
                "name": "pepsi",
                "price": 1.5,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1734638769/zwnzv0k4gxoezboyr9e5.png"
            }
        },
        {
            "product ": {
                "description": "cerveza bien fria",
                "id": 3,
                "imagen_id": "lczjbptf4byypekzbuf3",
                "name": "becks",
                "price": 1.5,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1734717290/lczjbptf4byypekzbuf3.png"
            }
        }
    ],
    "id": 1
}`;

    const addfavorites = `
    # You have to pass the api key in the header of the request.
    # You can find an api key from the profile page once you log in.

    # Example
    headers : {
        x-api-key : "265e986a8swweq3e23b2bfd107f23f519f404f7aaf6d7b8207d9080"
    }
`

    const getFavorite = `
{
    "email": "leonardo",
    "favorites": [
        {
            "product ": {
                "description": "Fruto de sabor jugoso y ligeramente ácido, ideal para ensaladas",
                "id": 70,
                "imagen_id": "swaegsn0pacqd09i6uln",
                "name": "Tomates",
                "price": 2.0,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1736193412/swaegsn0pacqd09i6uln.png"
            }
        },
        {
            "product ": {
                "description": "Fruta cítrica jugosa y refrescante, rica en vitamina C.",
                "id": 60,
                "imagen_id": "xsvxeyfhtyjvlltjiwwq",
                "name": "Naranjas",
                "price": 2.5,
                "url_image": "https://res.cloudinary.com/ddpeqlckw/image/upload/v1736193161/xsvxeyfhtyjvlltjiwwq.png"
            }
        }
    ],
    "id": 1
}`



    return (

        <div className="container">
            <h1 className="text-center mt-4">Docs</h1>
            <div className="row">
                <div className="col-12">

                    <Title
                        Title="Get all Products"
                        url="[Get] https://upgraded-telegram-r4xv44x654xcxp6g-3001.app.github.dev/api/products"
                    />
                    <SyntaxHighlighter
                        className="custom-syntaxHighlither"
                        language="json"
                        style={docco}
                        wrapLines
                    >
                        {
                            store.products.map((item) => {
                                
                                   return (
                                    <div><pre>{JSON.stringify(item)}</pre> </div>
                                   )
                                
                            })
                        }
                    </SyntaxHighlighter>
                </div>
                <div className="col-12">

                    <Title
                        Title="Get a single Product"
                        url="[Get] https://upgraded-telegram-r4xv44x654xcxp6g-3001.app.github.dev/api/product_by/70"
                    />

                    <SyntaxHighlighter
                        className="custom-syntaxHighlither"
                        language="json"
                        style={docco}
                        wrapLines
                    >
                        {productDetail}
                    </SyntaxHighlighter>
                </div>
                <div className="col-12">

                    <Title
                        Title="Get user favorites by id"
                        url="[Get] https://upgraded-telegram-r4xv44x654xcxp6g-3001.app.github.dev/api/favorite/user/3"
                    />

                    <SyntaxHighlighter
                        className="custom-syntaxHighlither"
                        languaje="json"
                        style={docco}
                        wrapLines
                    >
                        {favorites}
                    </SyntaxHighlighter>
                </div>

                <div className="col-12">
                    <Title
                        Title="Add user favorites by id"
                        url="[POST]  https://upgraded-telegram-r4xv44x654xcxp6g-3001.app.github.dev/api/favorite/user/1/product/70"
                    />
                    <p className="fw-bold">Request</p>
                    <SyntaxHighlighter
                        className="custom-syntaxHighlither"
                        languaje="json"
                        style={docco}
                        wrapLines
                    >
                        {addfavorites}
                    </SyntaxHighlighter>

                    <p className="fw-bold" >Response</p>

                    <SyntaxHighlighter
                        className="custom-syntaxHighlither"
                        languaje="json"
                        style={docco}
                        wrapLines
                    >
                        {`{"Msg : "product successfully added to favorites"}`}
                    </SyntaxHighlighter>
                </div>

                <div className="col-12">
                    <Title
                        Title="Get user favorites"
                        url="[Get] https://upgraded-telegram-r4xv44x654xcxp6g-3001.app.github.dev/api/favorite/user/1"
                    />

                    <SyntaxHighlighter
                        className="custom-syntaxHighlither"
                        languaje="json"
                        style={docco}
                        wrapLines
                    >
                        {getFavorite}
                    </SyntaxHighlighter>
                </div>

            </div>
        </div >
    )
}