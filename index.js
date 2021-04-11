import {Header,Nav,Main,Footer} from "./components";
import * as state from "./store";
import Navigo from "navigo";
import {capitalize} from "lodash";
import axios from "axios";

const router = new Navigo("/");

router.hooks({
  before: (done, params) => {
    // Because not all routes pass params we have to guard against is being undefined
    const page =
      params && Object.prototype.hasOwnProperty.call(params, "page")
        ? capitalize(params.page)
        : "Home";
   // fetchDataByView(state[page]);
    done();
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.data.page);
      render(state[page]);
    },
  })
  .resolve();

function render(st = state.Home) {
  console.log("st", st)
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
}

router.updatePageLinks();
addNavEventListeners();

function addNavEventListeners() {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  )};

document
    .querySelector(".fa-bars")
    .addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile")
  });
  const amountInput = document.getElementById("number");
  const addForm = document.getElementById("addForm");
  const addForm2 = document.getElementById("addForm2");

  const budgetAmount = document.getElementById("budgetAmount");
  const balanceAmount = document.getElementById("balanceAmount");

  function getBudgetAmount(amount) {
    if (!amount) {
      amountInput.style.border = "1px solid #b80c09";
      amountInput.placeholder = "input can not be empty";
      amountInput.style.color = "#b80c09";
      setTimeout(() => {
        amountInput.style.color = "#495057";
        amountInput.style.border = "1px solid gray";
      }, 3000);
    } else {
      budgetAmount.innerText = amount;
      balanceAmount.innerText = amount;
      expenseForm.style.display = "block";
      budgetform.style.display = "none";
      editForm.style.display = "none";
      amountInput.value = "";
    }
  }

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetAmount(amountInput.value);
  });
  const expForm = document.getElementById("expForm");
  let expName = document.getElementById("expName");
  let expNumber = document.getElementById("expNumber");

  let id = 0;
  let details = [];

  function addExpenses(name, number) {
    if (!name.length || !number.length) {
      expName.style.border = "1px solid #b80c09";
      expName.placeholder = "input can not be empty";
      expName.style.color = "#b80c09";

      expNumber.style.border = "1px solid #b80c09";
      expNumber.placeholder = "input can not be empty";
      expNumber.style.color = "#b80c09";

      setTimeout(() => {
        expName.style.color = "#495057";
        expName.style.border = "1px solid gray";
        expName.placeholder = "input can not be empty";

        expNumber.placeholder = "input can not be empty";
        expNumber.style.border = "1px solid gray";
        expNumber.style.color = "#495057";
      }, 3000);
    } else {
      const userExp = {
        id: id,
        name: name,
        number: parseInt(number),
      };
      details.push(userExp);
      displayExp(details);
      id++;
      expName.value = "";
      expNumber.value = "";
    }
  }

  expForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addExpenses(expName.value, expNumber.value);
  });

  function calcExpenses() {
    let totalExp = 0;
    for (i = 0; i < details.length; i++) {
      totalExp = details[i].number + totalExp;
    }
    expensesAmount.innerText = totalExp;
    updateBalance();
  }

  function updateBalance() {
    balanceAmount.innerText =
      parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
  }
  addForm2.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetAmount(amountInput.value);
  });
