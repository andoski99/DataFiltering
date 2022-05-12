import { companiesData } from "./companies-data";

//TODO: Get and array of the unique states.
const states = companiesData.map((company) => company.fieldData.State);
// console.log(states);

const findUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const uniqueStates = states.filter(findUnique).sort();
// console.log(uniqueStates); 

//TODO: Get each state in its own card/div (Parent element for each state
const createParent = (state) => {
  const parent = document.createElement("div");
  parent.className = "col-4 p-1 ";
  parent.innerHTML = `<h2> ${state} </h2>`;
return parent;
}
//TODO: Show the state in each parent element title
//TODO: get data (company) for each state
//TODO: create button for each company
//TODO: append button to each parent element
//TODO: append the parent element to the after div

// const filterFunction = (company,state) => company.fieldData.State === state;
const filterForState = (array, state) => {
  console.log(array);
  console.log(state);
  return array.filter((company) => company.fieldData.State === state);
}
const checkThis = filterForState(companiesData, "TX");
console.log(checkThis);

const createButton = (company) => {
const btn = document.createElement("button");
btn.type = "button";
btn.innerHTML = company;
btn.className = "col-12 m-1 btn btn-primary";
return btn;
// after.appendChild(btn);
};

//Ultimate Function
uniqueStates.forEach((state) => {
  const stateData = filterForState(companiesData, state);
  const parentElement = createParent(state);
  stateData.forEach((company) => {
    const CompanyName = company.fieldData.CompanyName;
    const btn = createButton(CompanyName);
    parentElement.appendChild(btn);
  });
  console.log(stateData);
  after.appendChild(parentElement);
});




