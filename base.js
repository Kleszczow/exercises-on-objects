const nameUser = document.getElementById("name");
const surname = document.getElementById("surname");
const work = document.getElementById("work");
const money = document.getElementById("money");
const submit = document.getElementById("submit");

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

submit.addEventListener("click", getName);

const visual = (newStatus) => {
  const box = document.createElement("div");
  document.body.appendChild(box);
  box.innerHTML = `<p>${newStatus.newName}</p>`;
  console.log(newStatus);
};
