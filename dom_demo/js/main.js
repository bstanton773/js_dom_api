console.log(document.getElementsByTagName("h1"));

document.getElementsByTagName("h1")[0].innerHTML = "New Text";

// Change the color of the text using a button and onclick attribute (onclick is part of html)

let colorButton = document.getElementById("color-button");
// console.log(colorButton);

let colorChange = () => {
  let headerElement = document.getElementsByTagName("h1")[0];
  if (headerElement.className == "") {
    headerElement.className = "color-change";
  } else {
    headerElement.className = "";
  }
};

// Change the color of the text using a button and the JS addEventListener method
colorButton.addEventListener("click", colorChange);

let header2 = document.getElementsByTagName("h1")[1];
function test() {
  header2.innerHTML = "test123";
}
function anotherTest() {
  header2.innerHTML = "123test";
}
header2.addEventListener("mouseenter", test);
header2.addEventListener("mouseleave", anotherTest);

// Add HTML via JavaScript
// Add a new button

let button = document.createElement("button");

button.innerHTML = "I AM ALIVE!";
button.style = "color: green; padding: 20px; display: block; margin-top: 15px;";

document.body.append(button);

// Add an event listener to our new button to add more text to the page
button.addEventListener("click", () => {
  let moreText = document.createElement("h2");
  moreText.innerHTML = "More Text created by the button";
  moreText.className = "color-change";
  document.body.append(moreText);
});

// Grabbing Form Data from a submit event
const form = document.querySelector("#testDataForm");
console.log(form);

// Add an event listener to our form and then grab the data from the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  let firstName = event.target[0].value;
  let lastName = event.target[1].value;
  console.log(firstName, lastName);
  // using the document and query method
  let queryFirst = document.getElementById("firstName");
  let queryLast = document.getElementById("lastName");
  console.log(queryFirst.value, queryLast.value);

  // Add first and last name to an H3 element and append to body
  let greeting = document.createElement("h3");
  greeting.innerHTML = `Hello, ${firstName} ${lastName}`;
  document.body.append(greeting);
});
