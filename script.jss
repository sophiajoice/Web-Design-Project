document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formMessage');

  if (name && email && message) {
    feedback.style.color = 'green';
    feedback.textContent = 'Thank you! Your message has been received.';
    this.reset();
  } else {
    feedback.style.color = 'red';
    feedback.textContent = 'Please fill in all fields.';
  }
});
