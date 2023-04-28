import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  // const res = await axios.get('/api/users');

  // 직접 api 서버로 요청한다.
  // const { data } = await axios.get("http://localhost:8081/api/keywords");
  // return data;

  const res = await axios.get("/api/users");

  document.body.innerHTML = (res.data || [])
    .map((user) => {
      return `<div>${user.id}: ${user.name}</div>`;
    })
    .join("");
});
