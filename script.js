        // JavaScript Functions, Methods & Objects


// document.getElementById_elects an element from the HTML using its id.

// document.body_	Refers to the <body> section of the HTML page

// document.body.style.backgroundColor_Changes the background color of the entire page.

// document.body.classList.toggle_Adds or removes a class from the body each time it's called (for themes etc.).

// element.onclick_Runs a function when the user clicks on a specific element.

// addEventListener_Attaches an event (like click, hover, etc.) to run a function.

// document.body.style.color_Changes the text color of the whole page.


function abebe(){
    alert("Hello Abe");
 
}

 
 // Method _ 1
function changeBackground(){
    document.body.style.backgroundColor="gray"
}
//  // Method _ 2

// var el=document.getElementById("changeBtn");//-Select
// el.onmouseover=changeBackground;//Bind
// function changeBackground(){
// document.body.style.backgroundColor="purple"
// }
// // //attach a function on the event


// // Remove Background
// var e2=document.getElementById("removeMe")
// e2.onclick=removeBackground;
// function removeBackground(){
//     document.body.style.backgroundColor=""
// }

// // Methods _3
// var e3=document.getElementById("eventBtn")
// e3.addEventListener("click",changeBackground)
      
 


// // Traditional DOM event
// document.getElementById("changeBtn").onclick = function () {
//   document.body.style.backgroundColor = "#f0f8ff";
// };

// Event listener
// document.getElementById("eventBtn").addEventListener("click", function () {
//   document.body.style.backgroundColor = "#ffe4e1";
// });

// // Night mode toggle
// document.getElementById("nightBtn").onclick = function () {
//   document.body.style.backgroundColor = "#121212";
//   document.body.style.color = "white";
// };

// function validateForm() {
//     let firstName = document.getElementById("firstName").value.trim();
//     let lastName = document.getElementById("lastName").value.trim();

//     let age = document.getElementById("age").value.trim();
//     let password = document.getElementById("password").value;
//     let color = document.getElementById("color").value;

  
//     let errorMsg = "";
  
//     if (firstName === "" || age === "" || lastName === "" || password === "" || color === "" ) {
//       errorMsg = "All fields are required!";
//     } else if (isNaN(age)) {
//       errorMsg = "Age must be a number.";
//     } else if (password.length < 6) {
//       errorMsg = "Password must be at least 6 characters.";
//     }
  
//     if (errorMsg) {
//       document.getElementById("errorMsg").innerText = errorMsg;
//       return false; // prevent form submission
//     }
  
//     return true; // allow form submission
//   }
  


  /* Form checker on submit */
  var el = document.getElementById("registration-form");
  el.onsubmit = formSubmitChecker;
  
  function formSubmitChecker(e) {
    e.preventDefault(); // Always prevent default submission to control flow
  
    var errors = [];
    var elErrorsDisplay = document.getElementById("errorsDisplay");
    var elResultDisplay = document.getElementById("resultDisplay");
  
    elErrorsDisplay.innerHTML = "";   // Clear previous errors
    elErrorsDisplay.style.display = "none";
    elResultDisplay.innerHTML = "";   // Clear previous result
  
    var elFirstNameValue = document.getElementsByName("first-name")[0].value;
    var elLastNameValue = document.getElementsByName("last-name")[0].value;
    var elAgeValue = document.getElementsByName("age")[0].value;
    var elPasswordValue = document.getElementsByName("password")[0].value;
    var elColorValue = document.getElementsByName("color")[0].value;
  
    // Validation
    if (!elFirstNameValue) {
      errors.push("First name field is required");
    }
    if (!elPasswordValue) {
      errors.push("Password is empty");
    } else if (elPasswordValue.length < 5) {
      errors.push("Password not strong enough");
    }
  
    if (errors.length > 0) {
      elErrorsDisplay.style.display = "block";
      for (var i = 0; i < errors.length; i++) {
        elErrorsDisplay.innerHTML += errors[i] + "<br>";
      }
      return; // stop further processing
    }
  
    // If no errors, show submitted data:
    elResultDisplay.innerHTML = `
      <h3>Form Submitted Successfully!</h3>
      <p><strong>First Name:</strong> ${elFirstNameValue}</p>
      <p><strong>Last Name:</strong> ${elLastNameValue}</p>
      <p><strong>Age:</strong> ${elAgeValue}</p>
      <p><strong>Password:</strong> ${'*'.repeat(elPasswordValue.length)}</p>
      <p><strong>Favorite Color:</strong> ${elColorValue}</p>
    `;
  }
  