import React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./containers/hero/Hero";
import About from "./containers/about/About";
import Gallery from "./containers/gallery/Gallery";
import Contact from "./containers/contact/Contact";
import Footer from "./containers/footer/Footer"

const App = () => {
    return (
        <>
            <div id="app">
                <Layout>
                    <Hero />
                    <About />
                    <Gallery />
                    <Contact />
                    <Footer />
                </Layout>
            </div>
        </>
    );
};

export default App;