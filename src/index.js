import { companiesData } from "./companies-data";

const extraRecord = {
  title: "JS in FM Training",
  type: "Binge Mode",
  cohort: "2",
  startDate: "2022-04-12",
};

const before = document.getElementById("before");


//TODO: Get and array of the unique states.
//TODO: Get each state in its own card/div (Parent element for each state)
//TODO: Show the state in each parent element title
//TODO: get data (company) for each state
//TODO: create button for each company
//TODO: append button to each parent element
//TODO: append the parent element to the after div
//TODO:


//functions are here
const filterFunction = (company) =>
  company.fieldData.State === "TX";

const createButton = (company) => {
const btn = document.createElement("button");
btn.type = "button";
btn.innerHTML = company.Company;
btn.className = "btn btn-primary";
after.appendChild(btn);
};

 




