const timeDisplay = document.getElementById("time");
const dayDisplay = document.getElementById("day");

const refreshTime = () => {
  let dateString = new Date().toLocaleTimeString("en-AU", {
    timeZone: "Australia/Sydney",
    timeStyle: "medium",
  });
  let formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
  let formattedDay = new Date().getDay();
  switch (formattedDay) {
    case 0:
      formattedDay = "Sunday";
      break;
    case 1:
      formattedDay = "Monday";
      break;
    case 2:
      formattedDay = "Tuesday";
      break;
    case 3:
      formattedDay = "Wednesday";
      break;
    case 4:
      formattedDay = "Thursday";
      break;
    case 5:
      formattedDay = "Friday";
      break;
    case 6:
      formattedDay = "Saturday";
      break;
  }
  dayDisplay.innerHTML = formattedDay;
};

setInterval(refreshTime, 1000);
