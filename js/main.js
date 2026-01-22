const form = document.getElementById("registration-form");
const inputs = document.querySelectorAll(".input-group input");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email).toLowerCase());
}

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.parentElement.classList.remove("error");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  inputs.forEach((input) => {
    const value = input.value.trim();
    let isError = false;

    if (value === "") {
      isError = true;
    } else if (input.type === "email" && !validateEmail(value)) {
      isError = true;
    }

    if (isError) {
      input.parentElement.classList.add("error");
      isFormValid = false;
    } else {
      input.parentElement.classList.remove("error");
    }
  });

  if (!isFormValid) {
    return; // Stop
  }
});
