import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export const Response = (props) => {
    return (

        <div>
            <p className="fw-bold" >Response</p>

            <SyntaxHighlighter
                className="custom-syntaxHighlither"
                languaje="json"
                style={docco}
                wrapLines
            >
                {props.responseText}
            </SyntaxHighlighter>

        </div>

    )
}