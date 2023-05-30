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

// listen for changes in score rows
function doListenForScoreRowChanges() {
  // initialize variable to get score rows (form)
  const scoreRows = document.getElementsByClassName("scoreRow");

  // loop through score rows
  for (let index = 0; index < scoreRows.length; index++) {
    // initialize variable for each row
    let row = formData[index];
    // get checkboxes by class name (ex: rowOneBox)
    let checkboxes = document.getElementsByClassName(`${row.name}Box`);
    // listen for change to each row
    scoreRows[index].addEventListener("change", () => {
      // initialize a variable to count checks in row
      let count = doCheckedCount(checkboxes);
      // function call to handle lock button
      doHandleLockButton(row, count);
    });
  }
}

// tally checks and return
function doCheckedCount(checkboxes) {
  // initialize checkbox count at 0
  let count = 0;
  // loop through checkboxes in row
  for (let index = 0; index < checkboxes.length; index++) {
    // if checkbox is checked, add to count
    if (checkboxes[index].checked === true) {
      count++;
    }
  }
  return count;
}

// handle lock button
function doHandleLockButton(row, count) {
  //  get button
  let lockButton = document.getElementById(`${row.name}LockBtn`);

  // condition: is checkbox count greater than or equal to 5?
  // if truthy, enable lock button
  // if falsy, disable lock button
  count >= 5 ? (lockButton.disabled = false) : (lockButton.disabled = true);

  // lock row on button click
  lockButton.addEventListener("click", (e) => {
    // prevent form from submitting
    e.preventDefault();
    if (lockButton.getAttribute("aria-pressed" == "false")) {
      console.log("aria-pressed is false");
    }
    // function call to lock row
    doLockRow(row);
    // notify user that row is locked
    doLockNotification(row);
    // reveal unlock button
    doRevealUnlockButton(row);
  });
}

// lock row
function doLockRow(row) {
  // get fieldset
  let fieldset = document.getElementById(`${row.name}Fieldset`);
  // disable fieldset
  fieldset.disabled = true;
}

// enable unlock button
function doRevealUnlockButton(row) {
  // get unlock button by id
  let unlockButton = document.getElementById(`${row.name}UnlockBtn`);
  // reveal unlock button
  unlockButton.hidden = false;
  // unlock row on button click
  unlockButton.addEventListener("click", () => {
    // function call to unlock row
    doUnlockRow(row);
  });
}

// notify user that row is locked
// TODO research notifications and accessibility best practices
function doLockNotification(row) {
  // get legend
  let legend = document.getElementById(`${row.name}Legend`);
  // update legend to notify user that row is locked
  legend.innerHTML = `${row.label} is Locked`;
}

// unlock row
function doUnlockRow(row) {
  // get fieldset
  let fieldset = document.getElementById(`${row.name}Fieldset`);
  // enable fieldset
  fieldset.disabled = false;
}
