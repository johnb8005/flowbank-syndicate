    <!-- JavaScript for calculating time since bankruptcy start -->
    <script>
      function updateTimeSince() {
        const startTime = new Date("June 13, 2024 08:00:00").getTime();
        const now = new Date().getTime();
        const distance = now - startTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById(
          "time-since"
        ).innerText = `${days} days, ${hours} hours, and ${minutes} minutes`;
      }

      setInterval(updateTimeSince, 60000); // Update every minute
      updateTimeSince(); // Initial call
    </script>