const inputEl = document.getElementById("inputvalue");
const textEl = document.getElementById("output");

inputEl.addEventListener("input", () =>{
  textEl.textContent = inputEl.value;
})
