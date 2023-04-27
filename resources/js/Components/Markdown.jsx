import React from "react";
import hljs from "highlight.js";
import { marked } from "marked";
import { useEffect } from "react";

export default function Markdown({ children }) {
    useEffect(() => {
        hljs.highlightAll;
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: marked(children) }} />;
}
