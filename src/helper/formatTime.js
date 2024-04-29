export function formatTime(timeString, bool = true) {
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
  const hour = bool
    ? dateObj.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    : null;

  return `${day}, ${month} ${date}, ${year} (${hour})`;
}
