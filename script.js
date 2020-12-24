var plannerHours = [
  "#nine",
  "#ten",
  "#eleven",
  "#twelve",
  "#one",
  "#two",
  "#three",
  "#four",
  "#five",
];
var colors = [
  "#ff6d6dC", "#cbcbcb","#6dffb6"
]
// Set the current day information in the day, month and date format.
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = moment().format("ha");
// Change the text area color based on current time.
for (var i = 0; i < plannerHours.length; i++) {
  if (currentTime == $(`${plannerHours[i]} .hour`).text().toLowerCase()) {
    $(plannerHours[i] + " textarea").css("background-color", "red");
    break;
  } else {
    $(plannerHours[i] + " textarea").css("background-color", "#cbcbcb");
  }
}

//Save the user input (task) in the local storage and display it on the screen each time when the page is refreshed.
