export const months = [
  {
    value: "Jan",
    label: "January",
  },
  {
    value: "Feb",
    label: "February",
  },
  {
    value: "Mar",
    label: "March",
  },
  {
    value: "Apr",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "June",
    label: "June",
  },
  {
    value: "July",
    label: "July",
  },
  {
    value: "Aug",
    label: "August",
  },
  {
    value: "Sep",
    label: "September",
  },
  {
    value: "Oct",
    label: "October",
  },
  {
    value: "Nov",
    label: "November",
  },
  {
    value: "Dec",
    label: "December",
  },
];

const years = [];
// const currentYear = new Date().getFullYear();
for (let y = 1970; y <= 2050; y++) {
  years.push({ value: y, label: `${y}` });
}
export { years };

export const levels = [
  { value: 1, label: "Beginner" },
  { value: 2, label: "Intermediate" },
  { value: 3, label: "Skillful" },
  { value: 4, label: "Experienced" },
  { value: 5, label: "Expert" },
  { value: "", label: "Don't show level" },
];

export const levelsMap = {
  1: "Beginner",
  2: "Intermediate",
  3: "Skillful",
  4: "Experienced",
  5: "Expert",
  "": "",
};
