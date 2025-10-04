document.addEventListener("DOMContentLoaded", async () => {
    const list = document.getElementById("history-events");
    try {
        const res = await fetch("https://history.muffinlabs.com/date");
        const data = await res.json();
        const events = data.data.Events.slice(0, 5);
        list.innerHTML = "";
        events.forEach(ev => {
            const li = document.createElement("li");
            li.textContent = `${ev.year}: ${ev.text}`;
            list.appendChild(li);
        });
    } catch (err) {
        list.innerHTML = "<li>Veriler alınamadı, lütfen daha sonra tekrar deneyin.</li>";
    }
});
