import React from "react";
import App from "@/Layouts/App";
import Header from "@/Components/Header";
import { Head, Link } from "@inertiajs/react";
import Container from "@/Components/Container";
import Grid from "@/Components/Grid";
import ArticleBlock from "@/Components/ArticleBlock";

export default function Home({ articles }) {
    return (
        <div>
            <Head title="Whats happening" />
            <Header>
                <Header.Title>Title coy</Header.Title>
                <Header.Subtitle>ini subtitle</Header.Subtitle>
                <Header.Content>content</Header.Content>
            </Header>
            <Container>
                {articles.length ? (
                    <>
                        <Grid>
                            {articles.map((article) => (
                                <ArticleBlock
                                    article={article}
                                    key={article.slug}
                                />
                            ))}
                        </Grid>
                        <Link
                            className="text-blue-600 block mt-10"
                            href={route("articles.index")}
                        >
                            Show more articles
                        </Link>
                    </>
                ) : (
                    <p>No yet articles</p>
                )}
            </Container>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
