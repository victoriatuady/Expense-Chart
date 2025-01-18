const charts = document.querySelectorAll(".chart");
const texts = document.querySelectorAll(".chart-hover p");

// Code to fecth json file and display text on page
function displayText() {
  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((dataChart) => {
      for (let i = 0; i < texts.length; i++) {
        const element = texts[i];
        const data = dataChart[i];
        element.textContent = `$${data.amount}`;
        // console.log(element);
      }
    });
}
displayText();

//Code to add event to div
charts.forEach((chart) => {
  chart.addEventListener("mouseover", () => {
    const chartHover = chart.previousElementSibling;
    chartHover.style.display = "block";
  });

  chart.addEventListener("mouseout", () => {
    const chartHover = chart.previousElementSibling;
    chartHover.style.display = "none";
  });
});
