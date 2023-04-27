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
                <div className="grid grid-cols-12 gap-16">
                    <div className="col-span-9">
                        <Markdown>{article.body}</Markdown>
                    </div>
                    <div className="col-span-3">lorem</div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
