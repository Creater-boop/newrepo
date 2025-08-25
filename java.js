// toggle btn
const btn = document.getElementById("darkbtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
        btn.textContent = "☀️";   // Light mode button
    } else {
        btn.textContent = "🌙";   // Dark mode button
    }
});
