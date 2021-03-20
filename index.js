import {Header,Nav,Main,Footer} from "./components";
import * as state from "./store";
import Navigo from "navigo";
import {capitalize} from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
}

render(state.Home);

router.updatePageLinks();

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

