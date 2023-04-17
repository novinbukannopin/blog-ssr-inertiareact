import React from "react";
import App from "@/Layouts/App";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <div>
            <Head title="Whats happening" />
            <Header>
                <Header.Title>Title coy</Header.Title>
                <Header.Subtitle>ini subtitle</Header.Subtitle>
                <Header.Content>content</Header.Content>
            </Header>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
