document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple fake login validation (can be replaced with real logic later)
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (email && password) {
    // Simulate login success
    alert("🎉 Login successful! Welcome back!");
    window.location.href = "dashboard.html";
  } else {
    alert("❗ Please enter both email and password.");
  }
});