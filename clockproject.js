function updateClock() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Ensure two-digit format
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    //  time format 
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    //  date format
    const options = { weekday: "long",
         year: "numeric", 
         month: "long",
          day: "numeric" };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

// Call updateClock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately