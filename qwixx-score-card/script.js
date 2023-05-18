/* imports */
import formData from "./form-data.js";

/* DOM elements */
const scoreRowsSection = document.getElementById("scoreRows");

/* events */
window.addEventListener("load", () => {
  // function call to display 4 score rows
  doBuildScoreRows(4);
});

/* functions */
function doBuildScoreRows(numOfRows) {
  let data = formData;
  console.log("data", data);

  for (let rowCount = 1; rowCount <= numOfRows; rowCount++) {
    /* create a form */
    const formEl = document.createElement("form");
    // test text
    formEl.textContent = "hello";
    // set attribute for id
    formEl.setAttribute("id", data.name);
    // append form (score row) to score rows container
    scoreRowsSection.append(formEl);
  }
}
