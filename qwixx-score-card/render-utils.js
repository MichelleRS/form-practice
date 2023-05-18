// TEST for getting 11 inputs with boxNums values
export function renderCheckbox(element) {
  /* create div container */
  const divEl = document.createElement("div");
  // get array of boxNums
  let boxNumsArray = element.boxNums;
  // loop through boxNums values
  for (let index in boxNumsArray) {
    /* create input element */
    const inputEl = document.createElement("input");
    // set attribute value for type
    inputEl.setAttribute("type", "checkbox");
    // set attributes for id and name: rowOneBox1
    inputEl.setAttribute("id", `${element.name}Box${boxNumsArray[index]}`);
    inputEl.setAttribute("name", `${element.name}Box${boxNumsArray[index]}`);
    // append
    divEl.append(inputEl);
  }
  console.log("divEl", divEl);

  // return the input element
  return divEl;
}
