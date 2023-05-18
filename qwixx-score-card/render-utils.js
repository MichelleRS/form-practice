// build form
export function renderForm(rowData) {
  // create form element
  let formEl = document.createElement("form");

  /* get fieldset element */
  let fieldset = renderFieldset(rowData);
  // append to form
  formEl.append(fieldset);

  /* get button element */
  let button = renderButton(rowData);
  // append to form
  formEl.append(button);

  // return form element
  return formEl;
}

// build fieldset element
export function renderFieldset(rowData) {
  // create fieldset element
  let fieldsetEl = document.createElement("fieldset");
  // set attribute for id
  fieldsetEl.setAttribute("id", `${rowData.name}Fieldset`);

  /* get legend */
  let legend = renderLegend(rowData);
  // append to fieldset
  fieldsetEl.append(legend);

  // return fieldset element
  return fieldsetEl;
}

// build button
export function renderButton(rowData) {
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

// build legend
export function renderLegend(rowData) {
  // create legend element
  let legendEl = document.createElement("legend");

  // add text
  legendEl.appendChild(document.createTextNode(rowData.label));

  // return legend
  return legendEl;
}
