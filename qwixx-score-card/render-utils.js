// build form
export function renderForm(rowData) {
  // create form element
  let formEl = document.createElement("form");

  /* get fieldset element */
  let fieldset = renderFieldset(rowData);
  // append to form
  formEl.append(fieldset);

  // return form element
  return formEl;
}

// build fieldset element
export function renderFieldset(rowData) {
  // create fieldset element
  let fieldsetEl = document.createElement("fieldset");
  // set attribute for id
  fieldsetEl.setAttribute("id", `${rowData.name}Fieldset`);
  // return fieldset element
  return fieldsetEl;
}
