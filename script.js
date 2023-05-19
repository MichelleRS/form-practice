/* imports */
import formData from "./form-data.js";
import { renderForm } from "./render-utils.js";

/* events */
window.addEventListener("load", async () => {
  // function call to display 4 score rows
  doBuildScoreRows(4);

  // function call to listen for changes in score rows
  doListenForScoreRowChanges();
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

// IN PROGRESS listen for changes in score rows
function doListenForScoreRowChanges() {
  // initialize variable for section with scoreRows id
  const scoreRowsSection = document.getElementById("scoreRows");

  // listen for changes in the section
  scoreRowsSection.addEventListener("change", () => {
    console.log("There was a change to a row!!");
  });
}

// TODO enable lock button if 5 or more checkboxes in a row have been selected
function doEnableLockButton() {}
