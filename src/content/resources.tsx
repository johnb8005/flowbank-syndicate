const content = [
    ["Bank Website", "https://flowbank.com"],
    ["Auditor website", "https://www.pwc.ch/en.html"],
    [
        "FINMA Press Release",
        "https://www.finma.ch/en/news/2024/06/20240613-mm-flowbank/",
    ],
    ["Swiss Banking Ombudsman", " https://bankingombudsman.ch/fr/"],
    [
        "Commercial Register",
        "https://www.zefix.ch/en/search/entity/list/firm/1380191",
    ],
    [
        "Reddit: FINMA opens bankruptcy proceedings against FlowBank",
        "https://www.reddit.com/r/SwissPersonalFinance/comments/1devdnf/finma_opens_bankruptcy_proceedings_against/",
    ],
];

const Resources = () => {
    return (
        <section id="resources" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Resources</h2>
            <ul className="list-disc ml-8">
                {content.map(([label, link]) => (
                    <li>
                        {label}&nbsp;
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline">
                            <i className="fa fa-external-link"></i>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Resources;
