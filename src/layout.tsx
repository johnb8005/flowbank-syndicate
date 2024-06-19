
import React from "react";
const Footer = () => (
    <footer className="text-white p-6">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 FlowBank Recovery Syndicate. All rights reserved.</p>
            <p>
                <a
                    href="https://github.com/johnb8005/flowbank-syndicate"
                    className="text-green-500"
                    target="_blank">
                    <i className="fab fa-github mr-2"></i>GitHub Repository
                </a>
            </p>
        </div>
    </footer>
);

const Header = () => (
    <header className="p-6 shadow-lg bg-black">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
            <img
                src="https://www.flowbank.com/hubfs/mktv/common/logos/logo-green.svg"
                alt="FlowBank Logo"
                className="h-8 mb-4 sm:mb-0"
            />
            <h1 className="text-3xl font-bold text-white text-center sm:text-left w-full sm:w-auto">
                Recovery Syndicate
            </h1>
        </div>
    </header>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-black text-white">
        <Header />

        <main className="container mx-auto my-12">{children}</main>

        <Footer />
    </div>
);

export default Layout