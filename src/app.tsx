import React from "react";
import Layout from "./layout";
import Welcome from "./content/welcome";
import MultiLingual from "./content/multilingual";
import Legal from "./content/legal";
import About from "./content/about";
import Resources from "./content/resources.js";
import JoinUs from "./content/join-us.js";
import News from "./content/news.js";
import ProjectUpdates from "./content/project-updates.js";

const App = () => (
    <Layout>
        <Welcome />
        <About />
        <ProjectUpdates />
        <News />
        <JoinUs />
        <Resources />
        <MultiLingual />
        <Legal />
    </Layout>
);

export default App;
