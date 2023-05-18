/* imports */
import formData from "./form-data.js";
import { renderForm } from "./render-utils.js";

/* DOM elements */
const scoreRowsSection = document.getElementById("scoreRows");

/* events */
window.addEventListener("load", async () => {
  // function call to display 4 score rows
  doBuildScoreRows(4);
});

/* functions */
function doBuildScoreRows(numOfRows) {
  for (let rowCount = 1; rowCount <= numOfRows; rowCount++) {
    // get form for score row
    let scoreRow = renderForm();
    // set attribute for id
    scoreRow.setAttribute("id", `scoreRow${rowCount}`);
    // append score row to score rows section
    scoreRowsSection.append(scoreRow);
  }
}
