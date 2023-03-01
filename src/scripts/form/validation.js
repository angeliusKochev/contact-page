let error = false;

const validateInput = () => {
  if (error) {
    validate();
  }
};
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

nameInput.addEventListener("keyup", validateInput);
emailInput.addEventListener("keyup", validateInput);
messageInput.addEventListener("keyup", validateInput);

export const validate = () => {
  resetAlerts();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name.length === 0) {
    createAlert(nameInput, "Name can't be empty!");
  }

  if (email.length === 0) {
    createAlert(emailInput, "Email can't be empty!");
  } else {
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      createAlert(emailInput, "Please provide correct email address!");
    }
  }

  if (message.length === 0) {
    createAlert(messageInput, "Message can't be empty!");
  }

  if (error) {
    throw new Error("There was an error");
  }
};

const resetAlerts = () => {
  error = false;
  const alerts = document.querySelectorAll("div.alert");
  for (const alert of alerts) {
    alert.remove();
  }
};

const createAlert = (element, message) => {
  error = true;
  element.classList.add("error");
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = message;

  const parent = element.parentElement;
  parent.classList.add("error-text");
  parent.append(alert);
};
