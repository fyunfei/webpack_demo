import _ from "lodash";
/* import printMe from "./print.js";
import { cube } from "./math.js"; */
require('./style.css')

function component() {
  let asd = 3;
  var element = document.createElement("div");
  var btn = document.createElement("button");
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  var br = document.createElement("br");
  /*  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to' + cube(5)
  ].join('\n\n'); */
  btn.innerHTML = "Click me and look at the console!";
  // btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;
  element.innerText = '我的'
  element.appendChild(br);
  element.appendChild(btn);
  btn.onclick = (e) =>
    import(/* webpackChunkName: "print" */ "./print").then((module) => {
      var print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());
