// Form submission (client-side)
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var msg = document.getElementById('message');
  msg.textContent = 'Form submitted (demo). Connect to backend for real submit.';
});

// Validation: require non-empty name and valid email
function validate() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value;
  return name && email;
}
