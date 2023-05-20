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
      // count how many checkboxes have been selected
      doCount(formData[index]);
      console.log("form data row:", formData[index]);
    });
  }
}

// enable lock button if 5 or more checkboxes in a row have been selected
function doEnableLockButton(row) {
  // get button
  // let rowOneBtn = document.getElementById("rowOneLockBtn");
  let lockButton = document.getElementById(`${row.name}LockBtn`);
  // enable lock button by row id
  lockButton.disabled = false;
}

// disable lock button if less than 5 checkboxes in a row have been selected
function doDisableLockButton(row) {
  // get button
  let lockButton = document.getElementById(`${row.name}LockBtn`);
  // enable lock button by row id
  lockButton.disabled = true;
}

// count checkbox checks
// doCountAndLockBtn
function doCount(row) {
  // get checkboxes by id
  let checkboxes = document.getElementsByClassName(`${row.name}Box`);
  // initailize checkbox count at 0
  let count = 0;

  // loop through checkboxes in row
  for (let index = 0; index < checkboxes.length; index++) {
    // if checkbox is checked, add to count
    if (checkboxes[index].checked === true) {
      count++;
      console.log("count", count);
    }
  }

  // if checkbox count is 5 or more, make call to doEnableLockButton()
  if (count >= 5) {
    console.log("5 or more");
    doEnableLockButton(row);
  }
  // if checkbox count is below 5, make call to doDisableLockButton()
  if (count < 5) {
    doDisableLockButton(row);
  } else {
    console.log("less than 5");
  }
}
