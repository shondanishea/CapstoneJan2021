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
