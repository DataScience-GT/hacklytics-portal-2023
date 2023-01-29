/**
 * Returns a string for the day of the week
 * @param day The day of the week (0-6)
 */
export const DayOfWeek = (day: number) => {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][day];
};
