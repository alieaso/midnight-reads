document.getElementById("year").textContent = new Date().getFullYear();
const form = document.getElementById("newsletter-form");
if (form) form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("newsletter-message");
  message.textContent = "This demo is not connected to a mailing service. No email was sent or stored.";
});
