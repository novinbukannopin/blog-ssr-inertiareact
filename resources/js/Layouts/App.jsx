import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App({ children }) {
    return (
        <div>
            <Navbar />
            <div className="pt-8">{children}</div>
            <Footer />
        </div>
    );
}
