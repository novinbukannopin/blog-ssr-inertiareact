import App from "@/Layouts/App";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import Grid from "@/Components/Grid";
import ArticleBlock from "@/Components/ArticleBlock";
import Pagination from "@/Components/Pagination";

export default function Index({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <>
            <Head title="The Articles" />
            <Header>
                <Header.Title>Title</Header.Title>
                <Header.Subtitle>
                    read if you not sleepy
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
Index.layout = (page) => <App children={page} />;
