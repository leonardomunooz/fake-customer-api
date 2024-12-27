import React from "react"
import { Navbar } from "../component/navbar"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Title } from "../component/Title.jsx";



export const Docs = () => {

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
                        language="json"
                        style={docco}
                        wrapLines
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div className="col-12">

                    <Title
                        Title="Get a single Product"
                        url="[Get] https://upgraded-telegram-r4xv44x654xcxp6g-3001.app.github.dev/api/product/2"
                    />

                    <SyntaxHighlighter
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
                        languaje="json"
                        style={docco}
                        wrapLines
                    >
                        {favorites}
                    </SyntaxHighlighter>
                </div>
            </div>

        </div >
    )
}