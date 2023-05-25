// build form
export function renderForm(rowData) {
  // create form element
  let formEl = document.createElement("form");

  /* get form elements */
  // get fieldset element
  let fieldset = renderFieldset(rowData);
  // get lock button element
  let lockButton = renderLockButton(rowData);
  // get unlock button element
  let unlockButton = renderUnlockButton(rowData);
  // append elements to form
  formEl.append(fieldset, lockButton, unlockButton);

  // return form element
  return formEl;
}

// build fieldset element
export function renderFieldset(rowData) {
  // create fieldset element
  let fieldsetEl = document.createElement("fieldset");
  // set attribute for id
  fieldsetEl.setAttribute("id", `${rowData.name}Fieldset`);

  // get legend
  let legend = renderLegend(rowData);
  // append to fieldset
  fieldsetEl.append(legend);

  // get div
  // get checkbox count
  let numOfCheckboxes = rowData.inputs;
  // for each checkbox in total count
  for (let numCount = 0; numCount < numOfCheckboxes; numCount++) {
    // get div element
    let div = renderCheckboxDiv();
    // get array of checkbox number values for labels and inputs
    let boxNumsArray = rowData.boxNums;
    // get label
    let label = renderCheckboxLabel(rowData, boxNumsArray[numCount]);
    // get input
    let input = renderCheckboxInput(rowData, boxNumsArray[numCount]);
    // append label and input to div
    div.append(label, input);
    // append div to fieldset
    fieldsetEl.append(div);
  }

  // return fieldset element
  return fieldsetEl;
}

// build legend
export function renderLegend(rowData) {
  // create legend element
  let legendEl = document.createElement("legend");
  // set id attribute
  legendEl.setAttribute("id", `${rowData.name}Legend`);
  // add text
  legendEl.appendChild(document.createTextNode(rowData.label));

  // return legend element
  return legendEl;
}

// build div
export function renderCheckboxDiv() {
  // create div element
  let divEl = document.createElement("div");
  // set class attribute
  divEl.classList.add("control");

  // return div element
  return divEl;
}

// build label
export function renderCheckboxLabel(rowData, boxNum) {
  // create label element
  let labelEl = document.createElement("label");
  // set for attribute, ex: rowOneBox1
  labelEl.setAttribute("for", `${rowData.name}Box${boxNum}`);
  // append box number value
  labelEl.append(document.createTextNode(boxNum));

  // return label element
  return labelEl;
}

// build input
export function renderCheckboxInput(rowData, boxNum) {
  // create input element
  let inputEl = document.createElement("input");
  // set type attribute to checkbox
  inputEl.setAttribute("type", "checkbox");
  // set name and id attributes, ex: rowOneBox1
  inputEl.setAttribute("name", `${rowData.name}Box${boxNum}`);
  inputEl.setAttribute("id", `${rowData.name}Box${boxNum}`);
  // set value
  inputEl.setAttribute("value", boxNum);
  // set class attribute
  inputEl.classList.add(`${rowData.name}Box`);

  // return input element
  return inputEl;
}

// build lock button
export function renderLockButton(rowData) {
  // create button element
  let buttonEl = document.createElement("button");
  // add attributes for type, id
  buttonEl.setAttribute("type", "submit");
  buttonEl.setAttribute("id", `${rowData.name}LockBtn`);
  // add lock emoji and aria-label
  let lockEmoji = document.createTextNode("🔒");
  buttonEl.appendChild(lockEmoji);
  buttonEl.setAttribute("aria-label", `${rowData.label} Lock Button`);
  // disable button
  buttonEl.disabled = true;

  // return button element
  return buttonEl;
}

// build unlock button
export function renderUnlockButton(rowData) {
  // create button element
  let buttonEl = document.createElement("button");
  // add attribute for type (button) and id
  buttonEl.setAttribute("type", "button");
  buttonEl.setAttribute("id", `${rowData.name}UnlockBtn`);
  // add text
  buttonEl.textContent = "Unlock Row";
  // hide button
  buttonEl.hidden = true;
  // return button element
  return buttonEl;
}
