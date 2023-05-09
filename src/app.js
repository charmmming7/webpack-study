import form from "./form";
// import result from "./result";
import style from "./app.css";

let resultEl;
let formEl;

document.addEventListener("DOMContentLoaded", async () => {
  formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  import(/* webpackChunkName: "result" */ "./result.js").then(async (m) => {
    const result = m.default;
    resultEl = document.createElement("div");
    resultEl.innerHTML = await result.render();
    document.body.appendChild(resultEl);
  });

  // resultEl = document.createElement("div");
  // resultEl.innerHTML = await result.render();
  // document.body.appendChild(resultEl);
});

if (module.hot) {
  console.log("핫모듈 켜짐");

  module.hot.accept("./result", async () => {
    console.log("result 모듈 변경됨");

    // 변경된 result 모듈을 업데이트 해주는 코드 추가
    resultEl.innerHTML = await result.render();
  });

  module.hot.accept("./form", async () => {
    formEl.innerHTML = form.render();
  });
}
