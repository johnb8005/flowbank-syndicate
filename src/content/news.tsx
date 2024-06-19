const newsUpdates = [
    {
        date: "June 12, 2024",
        content:
            "Swiss Financial Market Supervisory Authority (FINMA) initiated bankruptcy proceedings against FlowBank SA.",
    },
    {
        date: "June 13, 2024, 08:00 AM",
        content: "Bankruptcy proceedings took effect.",
    },
    {
        date: "June 19, 2024",
        content: "Establishment of the Recovery Syndicate.",
    },
];

const News = () => {
    return (
        <section id="news-updates" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">News and Updates</h2>
            <ul>
                {newsUpdates.map((update, index) => (
                    <li key={index}>
                        <strong>{update.date}:</strong> {update.content}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default News;
