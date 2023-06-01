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
    console.log("checkboxes", checkboxes);
    // listen for change to each row
    scoreRows[index].addEventListener("change", () => {
      // initialize a variable to count checks in row
      let count = doCheckedCount(checkboxes);
      // function call to handle lock button
      doHandleLockButton(row, count);
      // TODO function call to handle disabling checkboxes to left of click
      doHandleCheckboxClick(checkboxes);
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
  /* get DOM elements to pass to functions */
  //  get button
  let lockButton = document.getElementById(`${row.name}LockBtn`);
  // get legend for user notification
  let legend = document.getElementById(`${row.name}Legend`);
  // get fieldset to enable/disable checkboxes
  let fieldset = document.getElementById(`${row.name}Fieldset`);

  // condition: is checkbox count greater than or equal to 5?
  // if truthy, enable lock button
  // if falsy, disable lock button
  count >= 5 ? (lockButton.disabled = false) : (lockButton.disabled = true);

  // lock row on button click
  lockButton.addEventListener("click", (e) => {
    // prevent form from submitting
    e.preventDefault();
    // lock row
    fieldset.disabled = true;
    // update legend to notify user that row is locked
    // TODO research notifications and accessibility best practices
    legend.innerHTML = `${row.label} is Locked`;
    // function call to handle unlock button
    doHandleUnlockButton(row, legend, fieldset);
  });
}

// enable unlock button
function doHandleUnlockButton(row, legend, fieldset) {
  // get unlock button by id
  let unlockButton = document.getElementById(`${row.name}UnlockBtn`);
  // reveal unlock button
  unlockButton.hidden = false;
  // unlock row on button click
  unlockButton.addEventListener("click", () => {
    // enable fieldset to unlock row
    fieldset.disabled = false;
    // remove locked text from legend
    legend.innerHTML = `${row.label}`;
    // remove unlock button
    unlockButton.hidden = true;
  });
}

// TODO disable checkboxes to left of selected checkbox
function doHandleCheckboxClick(checkboxes) {
  // function calls to set min and max checked checkbox index
  let minCheckedCheckboxIndex = getMinCheckedCheckboxIndex(checkboxes);
  let maxCheckedCheckboxIndex = getMaxCheckedCheckboxIndex(checkboxes);

  console.log("minCheckedCheckboxIndex", minCheckedCheckboxIndex);
  console.log("maxCheckedCheckboxIndex", maxCheckedCheckboxIndex);
}

// get min checked checkbox index
function getMinCheckedCheckboxIndex(checkboxes) {
  let minCheckedCheckboxIndex = null;
  // loop through checkboxes in row
  for (let index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked === true) {
      // set checked checkbox to index
      minCheckedCheckboxIndex = index;
      break;
    }
  }
  return minCheckedCheckboxIndex;
}

// get max checked checkbox index
function getMaxCheckedCheckboxIndex(checkboxes) {
  let maxCheckedCheckboxIndex = null;
  // loop through checkboxes in row
  for (let index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked === true) {
      // set checked checkbox to index
      maxCheckedCheckboxIndex = index;
    }
  }
  return maxCheckedCheckboxIndex;
}
