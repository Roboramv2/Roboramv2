var modal;
var close;

// Get the button that opens the modal
var projectdivs = document.querySelectorAll(".project-card");

// Get the button that opens the modal
var certificatedivs = document.querySelectorAll(".certificate-card");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

// When the user clicks the button, open the modal

let index;

projectdivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    // console.log(e.target);
    modal = e.target.nextElementSibling;

    e.target.nextElementSibling.style.display = "block";
  });
});

certificatedivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    // console.log(e.target);
    modal = e.target.nextElementSibling;

    e.target.nextElementSibling.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.forEach((closebtn) => {
  closebtn.addEventListener("click", () => {
    close = modal.firstElementChild.firstElementChild;

    modal.style.display = "none";
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
