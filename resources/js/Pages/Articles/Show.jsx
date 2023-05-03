import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Markdown from "@/Components/Markdown";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Show({ article }) {
    return (
        <div>
            <Head title={article.title} />
            <Header>
                <div className="text-gray-400 text-sm mb-4">
                    Fill in :{" "}
                    <Link
                        href={route("categories.show", article.category.slug)}
                        className="text-white underline"
                    >
                        {article.category.name}
                    </Link>
                </div>
                {article.tags.length > 0 ? (
                    <div
                        className="flex items-center gap-x-2 mb-2
                "
                    >
                        {article.tags.map((tag) => (
                            <Link
                                className="bg-gray-700 text-white px-2 py-1 text-xs font-medium hover:bg-gray-600 transition duration-200"
                                key={tag.slug}
                                href={"#"}
                            >
                                {tag.name}
                            </Link>
                        ))}
                    </div>
                ) : null}
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
