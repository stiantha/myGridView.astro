export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInNorway(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Norway's time
  const offsetNorway = 2; // Norway is in Central European Summer Time (UTC+2), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetNorway);

  return now;
}

export function formatTimeForNorway(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Copenhagen",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "CET", but do remember that Norway switches between CET and CEST.
  formattedTime += "";

  return formattedTime;
}
``;
