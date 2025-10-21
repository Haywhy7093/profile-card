const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMessage.hidden = true;

  // Get form values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  let isValid = true;

  // Name validation
  if (!name) {
    document.getElementById("error-name").textContent = "Full name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email) {
    document.getElementById("error-email").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("error-email").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Subject validation
  if (!subject) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    isValid = false;
  }

  // Message validation
  if (!message) {
    document.getElementById("error-message").textContent = "Message is required.";
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById("error-message").textContent =
      "Message must be at least 10 characters.";
    isValid = false;
  }

  // Success
  if (isValid) {
    form.reset();
    successMessage.hidden = false;
  }
});
