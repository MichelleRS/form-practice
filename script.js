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
    // add class attribute
    scoreRow.classList.add("scoreRow");
    // append score row to score rows section
    scoreRowsSection.append(scoreRow);
  }
}

// IN PROGRESS listen for changes in score rows
function doListenForScoreRowChanges() {
  // get score rows
  const scoreRows = document.getElementsByClassName("scoreRow");

  // loop through score rows
  for (let index = 0; index < scoreRows.length; index++) {
    // listen for change to each row
    scoreRows[index].addEventListener("change", () => {
      console.log("change to this row:", scoreRows[index]);
      // TODO count how many checkboxes have been selected
      // doCount();
    });
  }
}

// enable lock button if 5 or more checkboxes in a row have been selected
function doEnableLockButton() {
  // get button
  let rowOneBtn = document.getElementById("rowOneLockBtn");
  // enable lock button by row id
  rowOneBtn.disabled = false;
}

// disable lock button if less than 5 checkboxes in a row have been selected
function doDisableLockButton() {
  // get button
  let rowOneBtn = document.getElementById("rowOneLockBtn");
  // enable lock button by row id
  rowOneBtn.disabled = true;
}

// count checkbox checks
function doCount() {
  let checkboxes = document.getElementsByClassName("rowOneBox");
  let count = 0;

  for (let index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked === true) {
      console.log("checked:", checkboxes[index]);
      count++;
      console.log("count", count);
    }
  }

  // if checkbox count is 5 or more, make call to doEnableLockButton()
  if (count >= 5) {
    console.log("5 or more");
    doEnableLockButton();
  }
  // if checkbox count is below 5, make call to doDisableLockButton()
  if (count < 5) {
    doDisableLockButton();
  } else {
    console.log("less than 5");
  }
}
