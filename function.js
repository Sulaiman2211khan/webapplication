
// User Login Form (Page 1)
document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Other code for form submission handling
      // Get the entered username and password
      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;
      const msg = document.querySelector('.msg');

      // Check if the entered username and password match the hardcoded values
      if (enteredUsername === "user" && enteredPassword === "user123") {
        window.location.href = "page2.html" // You can replace this with your desired action
      } else {
        msg.classList.add('error')
        msg.innerHTML = 'Incorrect Password';
        setTimeout(() => msg.remove(), 2000);
      }

      // Clear the input fields
      usernameInput.value = "";
      passwordInput.value = "";
    });
  }
});

// Date and Time 
setInterval(function () {
  const dateTimeDisplay = document.querySelector(".date"); // Use querySelector instead of getElementsByClassName
  if (dateTimeDisplay) { // Check if the element exists
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString();
    dateTimeDisplay.textContent = "Current Date and Time: " + formattedDateTime;
    console.log(dateTimeDisplay);
  }
}, 1000);

// Exit Window 
function exitwindow() {
  window.close();
}

// Arrow Up (Scroll to the top of Page)
const arrow = document.querySelector('.scroll_top')
// console.log(arrow)
if (arrow) {
  arrow.addEventListener('click', arrowFun);

  function arrowFun() {
    //  Scroll smoothly to the top of the page
    //  window.scrollTo(...) is a method provided by the window object 
    //  Scroll the window to a specified position. 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Appllication Section
function capitalizeText() {
  const inputTextArea = document.getElementById("inputText");
  const capitalizedTextElement = document.getElementById("capitalizedText");

  // Get the text from the textarea and capitalize it.
  const text = inputTextArea.value;
  const capitalizedText = text.toUpperCase();
  capitalizedTextElement.innerText = capitalizedText;
}

// Phone Book Section
const contacts = [];

function addContact() {
  const nameInput = document.getElementById("name");
  const numberInput = document.getElementById("number");
  const contactList = document.getElementById("contact-list");

  const name = nameInput.value.trim();
  const number = numberInput.value.trim();

  if (name === "" || number === "") {
    // alert("Please fill in both name and phone number.");
    let errormessage = document.getElementById('errorMessage')
    errormessage.classList.add('errorMessage')
    errormessage.innerHTML = 'Enter Both Fields';
    setTimeout(() => errormessage.remove(), 2000);
    return;
  }

  const contact = { name, number };
  contacts.push(contact);

  nameInput.value = "";
  numberInput.value = "";

  displayContacts(contactList);
}

// Display the Contacts and Phone number
function displayContacts(contactList) {
  contactList.innerHTML = "";
  for (const contact of contacts) {
    const contactDiv = document.createElement("div");
    contactDiv.className = "displayContacts";
    contactDiv.innerHTML = `
            <li><strong>Name:</strong> ${contact.name}</li>
            <li><strong>Phone Number:</strong> ${contact.number}</li>
        `;
    contactList.appendChild(contactDiv);
  }
}


