import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Markdown from "@/Components/Markdown";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Show({ article }) {
    return (
        <div>
            <Head title={article.title} />
            <Header>
                <Header.Title>{article.title}</Header.Title>
                <Header.Subtitle>{article.teaser}</Header.Subtitle>
            </Header>
            <Container>
                <Markdown>{article.body}</Markdown>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
