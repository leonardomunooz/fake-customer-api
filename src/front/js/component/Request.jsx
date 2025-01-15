import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export const Request = (props) => {
    return (
        <>
            <p className="fw-bold">Request</p>
            <SyntaxHighlighter
                className="custom-syntaxHighlither"
                languaje="json"
                style={docco}
                wrapLines
            >
                {props.requestText}
            </SyntaxHighlighter></>
    )
}