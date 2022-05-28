let modal = document.getElementById("mitVindue");

let knap = document.getElementById("minKnap");

let span = document.getElementsByClassName("cases__lukKnap")[0];

knap.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};