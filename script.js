const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");

});

forgotPasswordLink.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the page from reloading
  alert("Password reset feature is not yet implemented.");
});
