export function formatTime(timeString) {
  const dateObj = new Date(timeString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const month = months[dateObj.getMonth()];
  const day = days[dateObj.getDay()];
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
}
