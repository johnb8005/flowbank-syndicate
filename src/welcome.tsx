import React from "react";

const Welcome = () => {

    const [text, setText] = React.useState<string>()

    React.useEffect(() => {
        updateTimeSince(); // Initial call
    }, [])

    function updateTimeSince() {
        const startTime = new Date("June 13, 2024 08:00:00").getTime();
        const now = new Date().getTime();
        const distance = now - startTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setText(`${days} days, ${hours} hours, and ${minutes} minutes`)
    }

    setInterval(updateTimeSince, 60000); // Update every minute


    return <section id="welcome" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
            Welcome to the FlowBank Recovery Syndicate
        </h2>
        <p>
            We are a community of depositors and stakeholders united by a common goal:
            to recover the maximum amount of funds possible from the FlowBank
            bankruptcy. Together, we can pool our resources, share critical
            information, and support each other through this challenging process.
        </p>
        <p className="text-lg font-semibold mt-4">
            Time since start of bankruptcy: {text}
        </p>
    </section>
}

export default Welcome;