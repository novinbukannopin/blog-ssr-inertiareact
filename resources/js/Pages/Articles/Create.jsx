import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Input from "@/Components/Input";
import App from "@/Layouts/App";
import { Head, useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import InputFile from "@/Components/InputFile";
import Textarea from "@/Components/TextArea";
import Editor from "@/Components/Editor";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import MultipleSelect from "@/Components/MultipleSelect";

export default function Create({ tags, categories }) {
    const { data, setData, errors } = useForm({
        title: "",
        teaser: "",
        category_id: "",
        body: "",
        picture: "",
        tags: [tags[0], tags[1]],
    });
    const onChange = (e) => setData(e.target.name, e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("articles.store"), {
            ...data,
            category_id: data.category_id,
            tags: data.tags.map((t) => t.id),
        });
    };

    return (
        <div>
            <Head title={"Create new article"} />
            <Header>
                <Header.Title>{data.title || "the title"}</Header.Title>
                <Header.Subtitle>{data.teaser || "the teaser"}</Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <InputLabel forInput="title" value="Title" />
                        <InputFile
                            name="title"
                            id="title"
                            onChange={(e) =>
                                setData("picture", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="mb-6">
                        <div className="grid grid-cols-12 gap-8 ">
                            <div className="col-span-4">
                                <div>
                                    <InputLabel forInput="category_id">
                                        Category
                                    </InputLabel>
                                    <Select
                                        value={data.category_id}
                                        data={categories}
                                        onChange={(e) =>
                                            setData("category_id", e)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-span-8">
                                <div>
                                    <InputLabel forInput="tags">
                                        Tags
                                    </InputLabel>
                                    <MultipleSelect
                                        selectedItem={data.tags}
                                        data={tags}
                                        onChange={(e) => setData("tags", e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <InputLabel forInput="title" value="Title" />
                        <Input
                            name="title"
                            id="title"
                            onChange={onChange}
                            value={data.title}
                        />
                    </div>
                    <div className="mb-6">
                        <InputLabel forInput="teaser" value="teaser" />
                        <Textarea
                            name="teaser"
                            id="teaser"
                            onChange={onChange}
                            value={data.teaser}
                        />
                    </div>
                    <div className="mb-6">
                        <Editor
                            name="body"
                            id="body"
                            onChange={onChange}
                            value={data.body}
                        />
                    </div>
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page} />;
