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

// Set the current day information in the day, month and date format.
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = moment().format("ha");
// Change the text area color based on current time.
for (let i = 0; i < plannerHours.length; i++) { 
  if ($(`${plannerHours[i]}`).attr("val") == currentTime) {
    $(plannerHours[i] + " textarea").css("background-color", "red");
    break;
  } else {
    $(plannerHours[i] + " textarea").css("background-color", "#cbcbcb");
  }
}
//Save the user input (task) in the local storage on click.
 $(".saveBtn").on("click", function () {
  let id = "#"+$(this).parent().attr("id");
  let input = $(`${id} textarea`).val();
  localStorage.setItem(id, input);
});
//Retrieve the user task from the local storage and display it on the screen each time when the page is refreshed.
for (let i = 0; i<plannerHours.length; i++){
    $(`${plannerHours[i]} .task`).val(localStorage.getItem(plannerHours[i]))
}