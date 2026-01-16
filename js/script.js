// Greeting Prompt
function welcomeUser() {
    let name = prompt("Masukkan nama Anda:", "");
    document.getElementById("user-name").innerText = (name) ? name : "User";
}
window.onload = welcomeUser;

// Form Validation
const form = document.getElementById("messageForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const phone = document.getElementById("input-phone").value;
    const message = document.getElementById("input-message").value;

    // Validasi Sederhana
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Semua field harus diisi!");
        return;
    }

    if (!email.includes("@")) {
        alert("Format email salah!");
        return;
    }

    // Tampilkan Hasil
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-email").innerText = email;
    document.getElementById("res-phone").innerText = phone;
    document.getElementById("res-message").innerText = message;
    document.getElementById("current-time").innerText = new Date().toString();

    alert("Form submitted successfully!");
});