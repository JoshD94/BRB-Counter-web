function calculate() {
  var starting_amount = document.getElementById("starting_brb").value;
  var current_amount = document.getElementById("current_brb").value;
  var semester_completion = document.getElementById("semester_completion");
  var brb_used = document.getElementById("brb_used");
  var weekly_usage = document.getElementById("weekly_usage");
  var daily_usage = document.getElementById("daily_usage");
  var comment = document.getElementById("comment");

  var current_date = new Date();
  var start_date = new Date("1/21/2024");
  var end_date = new Date("5/17/2024");

  var total_days = difference_days(end_date, start_date);
  var up_to_now = difference_days(current_date, start_date);
  var days_left = difference_days(end_date, current_date);
  var percentage_semester = up_to_now / total_days;
  var percentage_brbs = (starting_amount - current_amount) / starting_amount;

  semester_completion.innerHTML =
    "Semester completed:\t" + round(percentage_semester * 100, 2) + "%";
  brb_used.innerHTML = "BRBs used:\t" + round(percentage_brbs * 100, 2) + "%";
  weekly_usage.innerHTML =
    "Projected weekly usage:\t$" +
    ((current_amount / days_left) * 7).toFixed(2);
  daily_usage.innerHTML =
    "Projected daily usage:\t$" + (current_amount / days_left).toFixed(2);
  if (percentage_brbs < percentage_semester) {
    comment.innerHTML =
      "You are under-spending your BRBs!! Tip: as it is fall semester, your leftover BRBs will be carried over to Spring semester! :D";
  } else if (percentage_brbs > percentage_semester) {
    comment.innerHTML =
      "You are over-spending your BRBs!! Maybe try hold back on spendings? :D";
  } else {
    comment.innerHTML =
      "Woah, you're spending the exact amount to keep up with the semester!! Keep it up!";
  }

  // Show info button
  var info_button = document.getElementById("info_button_div");
  info_button.style = "visibility: visible;";
}

function show_info() {
  var info_popup = document.getElementById("info_popup");
  info_popup.style = "visibility: visible;";
}

function close_popup() {
  var info_popup = document.getElementById("info_popup");
  info_popup.style = "visibility: hidden;";
}

function difference_days(a, b) {
  return Math.ceil((a.getTime() - b.getTime()) / 1000 / 3600 / 24);
}

function round(num, decimalPlaces = 0) {
  num = Math.round(num + "e" + decimalPlaces);
  return Number(num + "e" + -decimalPlaces);
}
