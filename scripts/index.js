// Show the modal when user clicks "Start Planning"
function requireLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(e) {
  if (e.target.id === "loginModal") closeModal();
}

// Redirect buttons
window.onload = function () {
  document.getElementById("login-btn").addEventListener("click", function () {
    window.location.href = "login.html";
  });

  document.getElementById("register-btn").addEventListener("click", function () {
    window.location.href = "register.html";
  });
};