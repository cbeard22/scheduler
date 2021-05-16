//Setting luxon time in the header
let DateTime= luxon.DateTime;
let now = DateTime.local();
let currentDay = document.getElementById("currentDay")
currentDay.innerText = now.toLocaleString(DateTime.DATETIME_MED)

//setting up rows for color changing

let saveButton = document.querySelector(".saveBtn");

/*let comment = document.getElementById("description")*/

function renderLastAppt() {

  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour1 .description').val(localStorage.getItem('hour1'));
  $('#hour2 .description').val(localStorage.getItem('hour2'));
  $('#hour3 .description').val(localStorage.getItem('hour3'));
  $('#hour4 .description').val(localStorage.getItem('hour4'));
  $('#hour5 .description').val(localStorage.getItem('hour5'));
  $('#hour6 .description').val(localStorage.getItem('hour6'));
}


saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  let note = $(this).siblings('.description').val()
  let time = $(this).parent().attr("id")
  localStorage.setItem(time, note);
});

function init() {
  console.log(saveButton)
  renderLastAppt();
}
init();

