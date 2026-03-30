document.getElementById("contactForm")

.addEventListener("submit", function(event)

{

event.preventDefault();

let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let message = document.getElementById("message").value;


localStorage.setItem("Name", name);

localStorage.setItem("Email", email);

localStorage.setItem("Message", message);


alert("Data Saved Successfully!");

});