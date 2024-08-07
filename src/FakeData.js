export const lineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Steps",
      data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Calories",
      data: [2000, 3000, 2500, 4000, 6000, 5000, 7000],
      borderColor: "rgb(255, 99, 132)",
    },
  ],
};

export const barChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Insurance", "Savings"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300, 150, 200, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
      ],
      borderWidth: 1,
    },
  ],
};

export const pieChartData = {
  labels: ["Facebook", "Twitter", "LinkedIn", "Instagram", "Google"],
  datasets: [
    {
      label: "Time Spent on Social Media",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(75, 192, 192, 0.9)",
        "rgba(153, 102, 255, 0.9)",
      ],
      hoverOffset: 4,
    },
  ],
};
