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

var colors = ["#ff6d6dC", "#cbcbcb", "#6dffb6"];

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
$(".saveBtn").on("click", function () {
  // get nearby values
  var input = $(this).siblings(".task").val();
  console.log(input);

  var hour = $(this).parent().attr("id");
  console.log(hour);

  localStorage.setItem(hour, input);
});

$("#nine .task").val(localStorage.getItem("nine"));
$("#ten .task").val(localStorage.getItem("ten"));
$("#eleven .task").val(localStorage.getItem("eleven"));
$("#twelve .task").val(localStorage.getItem("twelve"));
$("#one .task").val(localStorage.getItem("one"));
$("#two .task").val(localStorage.getItem("two"));
$("#three .task").val(localStorage.getItem("three"));
$("#four .task").val(localStorage.getItem("four"));
$("#five .task").val(localStorage.getItem("five"));
