/* validate user contact details */

const form = document.getElementById("contact-form");

function validateForm(event) {
  const re = /\S+@\S+\.\S+/;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  if(re.test(email)) {
    document.getElementById("invalid-email").style.display="none";
  } else {
    document.getElementById("invalid-email").style.display="block";
    event.preventDefault();
  }
  if(subject.length >= 1 && subject.length <= 50) {
    document.getElementById("invalid-subject").style.display="none";
  } else {
    document.getElementById("invalid-subject").style.display="block";
    event.preventDefault();
    console.log("subject length not >= 1 and not <= 30");
  }
  if(message.length >= 1 && message.length <= 900) {
    document.getElementById("invalid-message").style.display="none";
  } else {
    document.getElementById("invalid-message").style.display="block";
    event.preventDefault();
    console.log("message length not >= 1 and not <= 900");
  }
} // end validateForm

form.addEventListener("submit", validateForm);
