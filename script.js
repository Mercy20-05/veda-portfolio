document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close mobile navigation when any anchor is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // 2. Contact Form Validation
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formFeedback = document.getElementById("formFeedback");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formFeedback.textContent = "";
    formFeedback.style.color = "inherit";

    // Validate Name
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email format.";
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }

    // Successful Submission Flow
    if (isValid) {
      formFeedback.textContent = "Thank you! Your message has been sent successfully.";
      formFeedback.style.color = "var(--success-color)";
      contactForm.reset();
    }
  });
});