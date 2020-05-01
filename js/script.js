$(document).ready(function () {
  $("#task-form").on("submit", function (e) {
    e.preventDefault();
    var textInput = $("#task-input").val();
    if (textInput.trim() !== "") {
      $("#tasks").prepend("<p>" + textInput + "</p>");
      $("#task-input").val("");
    }
  });
});
