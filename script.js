// Add JavaScript code for your web site here and call it from index.html.
// Initialize EmailJS with your Public Key
(function() {
  emailjs.init("Q8ymmWtxkCCPEBPVu"); // ✅ Your Public Key
})();

document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = "Sending your order...";

  emailjs.sendForm("service_zujccop", "template_3dwlecc", this)
    .then(() => {
      statusMessage.textContent = "✅ Order submitted successfully! Check your email for confirmation.";
      document.getElementById("orderForm").reset();
    }, (error) => {
      console.error("FAILED...", error);
      statusMessage.textContent = "❌ Failed to submit order. Please try again.";
    });
});
