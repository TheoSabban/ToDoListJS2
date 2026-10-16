const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

console.log(input, button, ul);

function task() {
  console.log(input.value);

  const text = input.value.trim();
  if (text === "") {
    return text;
  }

  ul.appendChild(create(text));

  input.value = "";
}

function create(text) {
  const newLi = document.createElement("li");
  newLi.innerText = text;

  newLi.addEventListener("click", function () {
    newLi.classList.toggle("completed");
  });


  const suppr = document.createElement("button");
  suppr.innerText = "Supprimer";


  suppr.addEventListener("click", function () {
    newLi.remove();

  });


  newLi.append(suppr);
  return newLi;


}

button.addEventListener("click", task);

input.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    task();
  }
})


