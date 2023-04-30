let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

let count = 3;

const addSignature = (name, city) => {
  let sigPara = document.createElement("p");
  sigPara.innerText = `🖊️ ${name} from ${city} supports this.`;
  let signatures = document.querySelector(".signatures");
  signatures.appendChild(sigPara);
  count++;
  let countPara = document.getElementById("signature-count");
  countPara.innerText = `🖊️ ${count} people have signed this petition and support this cause.`;
}

const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  let name = petitionInputs["name"].value;
  let city = petitionInputs["city"].value;
  let email = petitionInputs["email"].value;
  if (name.trim().length < 2) {
    petitionInputs["name"].classList.add("error");
    containsErrors = true;
  } else {
    petitionInputs["name"].classList.remove("error");
  }
  if (city.trim().length < 2) {
    petitionInputs["city"].classList.add("error");
    containsErrors = true;
  } else {
    petitionInputs["city"].classList.remove("error");
  }
  if (email.trim().length < 2 || !email.endsWith(".com")) {
    petitionInputs["email"].classList.add("error");
    containsErrors = true;
  } else {
    petitionInputs["email"].classList.remove("error");
  }
  if (!containsErrors) {
    addSignature(name, city);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    toggleModal({ name: name });
  }
}

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
  let modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
});


document.getElementById("sign-now-button").addEventListener("click", validateForm);


const clearNowButton = document.getElementById("clear-now-button");
clearNowButton.addEventListener("click", (event) => {
  event.preventDefault();
  let petitionInputs = document.getElementById("sign-petition").elements;
  for (let i = 0; i < petitionInputs.length; i++) {
    petitionInputs[i].value = "";
    petitionInputs[i].classList.remove("error");
  }
});

const signNowButton = document.getElementById("sign-now-button");
signNowButton.addEventListener("click", (event) => {
  event.preventDefault();
  validateForm();
});

function myFunction(x) {
  x.classList.toggle("uil-sun");
}


// When the user clicks on the button, scroll to the top of the document with a smooth animation
function smoothScrollToTop() {
  const position = document.documentElement.scrollTop || document.body.scrollTop;
  if (position > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, position - position / 8);
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const myBtn = document.getElementById("myBtn");
  if (document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// Attach the smoothScrollToTop function to the button's onclick event
document.getElementById("myBtn").onclick = function() {
  smoothScrollToTop();
}


// Modal to appear after the user has signed the petition
const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  let intervalId = setInterval(scaleImage, 500);
  modal.style.display = "flex";

  modalContent.textContent = `Thank you, ${person.name}, for supporting Triple Threat!`
  // Hides modal after a few seconds
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

// Animate the image within the modal
let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");

const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1

  modalImage.style.transform = `scale(${scaleFactor})`
}

const close = document.querySelector('close-modal');
close.display = 'none';
close.addEventListener('click', close-modal);


// Get references to the buttons
const githubButton = document.getElementById("github-button");
const emailButton = document.getElementById("email-button");
const linkedinButton = document.getElementById("linkedin-button");

// Define the links
const githubLink = "https://github.com/imanjs";
const emailLink = "mailto:laykeijones@gmail.com";
const linkedinLink = "https://www.linkedin.com/in/layke-jones-6239b118b/";

// Define a function to handle button clicks
function handleButtonClick(link) {
  // Open the link in a new tab
  window.open(link, "_blank");
}

// Attach onclick event listeners to the buttons
githubButton.onclick = function() {
  handleButtonClick(githubLink);
};

emailButton.onclick = function() {
  handleButtonClick(emailLink);
};

linkedinButton.onclick = function() {
  handleButtonClick(linkedinLink);
};




// Get the modal
var modal = document.getElementById("thanks-modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the image inside the modal
var img = modal.querySelector(".modal-content img");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  
  // Add CSS for image animation
  img.style.transition = "transform 0.5s ease-in-out";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Add image animation on hover
img.addEventListener("mouseover", function() {
  img.style.transform = "scale(1.2)";
});

// Remove image animation on hover
img.addEventListener("mouseout", function() {
  img.style.transform = "scale(1)";
});