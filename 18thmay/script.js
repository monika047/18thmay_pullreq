function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleText = document.querySelector(".toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleText.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleText.textContent = "Show";
  }
}
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const spinner = document.getElementById("spinner");
 spinner.style.display = "block";

  if (!email || !password) {
    alert("Please fill in all fields.");
    spinner.style.display = "none";
    return;
  }
 if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    spinner.style.display = "none";
    return;
  }

  if (document.getElementById("rememberMe").checked) {
    localStorage.setItem("rememberedEmail", email);
  } else {
    localStorage.removeItem("rememberedEmail");
  }

