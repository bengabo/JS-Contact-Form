// function toggleClass(){
//   let element = document.getElementById('contact');
//   element.classList.toggle("active")
// }


let validation = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let yourMessage = document.getElementById("your_message").value;
  let errorMessage = document.getElementById("error_message");

  errorMessage.style.padding = "10px";

  if(name.length <= 1 || name.length <= 0) {
    errorMessage.innerHTML = "Psst... Enter a valid name :)";
    return false;
  } else if(email.includes("@") == -1 || email.length <= 4) {
    errorMessage.innerHTML = "Psst... Enter a valid email :)";
    return false;
  }else if(isNaN(phone) || phone.length <= 0) {
    errorMessage.innerHTML = "Psst... Enter a valid phone number :)";
    return false;
  } else if(yourMessage <= 0) {
    errorMessage.innerHTML = "Psst... Enter a message :)";
    return false;
  } else {
    errorMessage.innerHTML = "Your message is sent ;)";
    errorMessage.style.backgroundColor = "#05d1c0";
    return false;
  }

}