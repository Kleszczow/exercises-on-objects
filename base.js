const nameUser = document.getElementById("name");
const surname = document.getElementById("surname");
const work = document.getElementById("work");
const money = document.getElementById("money");
const submit = document.getElementById("submit");
const deleteItem = document.querySelector(".cancel");
const list = document.querySelector(".list");

const arr = [];

const getName = () => {
  let newStatus = {
    id: Date(),
    newName: nameUser.value,
    newSurname: surname.value,
    newWork: work.value,
    newMoney: money.value,
  };
  arr.push(newStatus);
  visual(newStatus);
  console.log(arr);
};

const visual = (newStatus) => {
  const box = document.createElement("div");
  list.appendChild(box);
  box.innerHTML = `<p>${newStatus.newName} ${newStatus.newSurname} ${newStatus.newWork} ${newStatus.newMoney}</p>   <button class="cancel">clear</button>`;
  box.classList.add("flex");
};

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel")) {
    e.target.parentElement.remove();
  }
});

submit.addEventListener("click", getName);
