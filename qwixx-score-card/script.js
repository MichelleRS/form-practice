/* imports */
import formData from "./form-data.js";
import { renderForm } from "./render-utils.js";

/* events */
window.addEventListener("load", async () => {
  // function call to display 4 score rows
  doBuildScoreRows(4);
});

/* functions */
function doBuildScoreRows(numOfRows) {
  // get score rows section
  const scoreRowsSection = document.getElementById("scoreRows");

  // loop through the number of rows
  for (let rowCount = 1; rowCount <= numOfRows; rowCount++) {
    // get form for score row
    let scoreRow = renderForm(formData[rowCount - 1]);
    // set attribute for id
    scoreRow.setAttribute("id", `scoreRow${rowCount}`);
    // append score row to score rows section
    scoreRowsSection.append(scoreRow);
  }
}
