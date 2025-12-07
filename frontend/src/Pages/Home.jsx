import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Model from "../Components/Model";
import Footer from "../Components/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <section id="home">
                <Header />
            </section>

            <section id="features">
                <Features />
            </section>

            <section id="model">
                <Model />
            </section>

            <section id="about">
                <Footer />
            </section>

        </>
    )
}

export default Home;