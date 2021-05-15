let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY h:mm:s a"));

let saveButton = document.querySelector(".saveBtn");
//let comment = document.getElementById("description")

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

  renderLastAppt();
});

function init() {

  renderLastAppt();
}
init();




/*

const rows = document.getElementsByClassName("row time-block");
let currentHour = parseInt(moment().format(''));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour();

    // loop over time blocks
    $("#row time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker();
});*/