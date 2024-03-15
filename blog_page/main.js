const readbtn = document.querySelector("#read-more-btn");
const readmore = document.querySelector("#read-more");

readbtn.addEventListener("click", function () {
  readmore.style.display = "block";
  this.style.display = "none";
});
