import { Head } from "@inertiajs/react";
import App from "@/Layouts/App";
import Container from "@/Components/Container";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <Container>Dashboard</Container>
        </>
    );
}
Dashboard.layout = (page) => <App children={page} />;
