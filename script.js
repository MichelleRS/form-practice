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

// TEST IN PROGRESS listen for changes in score rows
function doListenForScoreRowChanges() {
  // get score row one
  const scoreRowOne = document.getElementById("scoreRow1");
  // listen for changes to score row one
  scoreRowOne.addEventListener("change", () => {
    console.log("There was a change to row one!!");

    // count how many checkboxes have been selected
    doCount();
  });
}

// TODO enable lock button if 5 or more checkboxes in a row have been selected
function doEnableLockButton() {
  // get button
  let rowOneBtn = document.getElementById("rowOneLockBtn");
  // enable lock button by row id
  rowOneBtn.disabled = false;
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
  } else {
    console.log("less than 5");
  }
}
