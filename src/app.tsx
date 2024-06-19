import React from "react";
import Welcome from "./welcome.tsx";
import Layout from "./layout.tsx";
import MultiLingual from "./multilingual.tsx";
import Legal from "./legal.tsx";
import About from "./about.tsx";




const ProjectUpdates = () => (
    <section id="projects-updates" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects/Updates</h2>
        <p>
            <strong>Current Initiatives</strong>
        </p>
        <ul className="list-disc ml-8">
            <li>
                Information Gathering: We are actively collecting documents, news, and
                legal updates related to FlowBank's bankruptcy.
            </li>
            <li>
                Legal Support: Coordinating with legal experts to explore all possible
                avenues for fund recovery.
            </li>
            <li>
                Member Advocacy: Representing the interests of our members in
                discussions with liquidators and financial authorities.
            </li>
        </ul>
    </section>
);

const News = () => (
    <section id="news-updates" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">News and Updates</h2>
        <ul>
            <li>
                <strong>June 12, 2024:</strong> Swiss Financial Market Supervisory
                Authority (FINMA) initiated bankruptcy proceedings against FlowBank SA.
            </li>
            <li>
                <strong>June 13, 2024, 08:00 AM:</strong> Bankruptcy proceedings took
                effect.
            </li>
            <li>
                <strong>June 19, 2024:</strong> Establishment of the Recovery Syndicate.
            </li>
        </ul>
    </section>
);

const JoinUs = () => (
    <section id="join-us" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Join Us</h2>
        <p>
            By joining the FlowBank Recovery Syndicate, you become part of a dedicated
            group striving for financial justice. Together, we are stronger. Sign up
            today to access exclusive resources, stay informed, and contribute to our
            collective recovery efforts.
        </p>
        <p className="mt-3">
            <a
                href="https://t.me/+lJSodsns6ok4ZjA0"
                className="flowbank text-white px-4 py-2 rounded hover:bg-green-600"
                target="_blank">
                <i className="fab fa-telegram"></i> Join Us on Telegram
            </a>
        </p>
    </section>
);







const App = () => (
    <Layout>
        <Welcome />
        <About />
        <ProjectUpdates />
        <News />
        <JoinUs />
        <MultiLingual />
        <Legal />
    </Layout>
);

export default App;
