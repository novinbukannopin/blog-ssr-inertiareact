import App from "@/Layouts/App";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import Grid from "@/Components/Grid";
import ArticleBlock from "@/Components/ArticleBlock";
import Pagination from "@/Components/Pagination";

export default function Show({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <>
            <Head title={category.name} />
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>
                    This page will show you the articles about {category.name}
                </Header.Subtitle>
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
                        <Pagination {...{ meta, links }} />
                    </>
                ) : (
                    <p>No yet articles</p>
                )}
            </Container>
        </>
    );
}
Show.layout = (page) => <App children={page} />;
