document.addEventListener("DOMContentLoaded", () => {
    const lot = document.getElementById("berrier");
    const buttons = Array.from(document.querySelectorAll(".app"));

    // Shuffle buttons on refresh
    buttons.sort(() => Math.random() - 0.5);

    // Append shuffled buttons to the lot
    buttons.forEach(button => lot.appendChild(button)); 
})

function goBack() {
    window.history.back();
}