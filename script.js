let number;

const newNumber = () => {
  number = Math.floor(Math.random() * 15 + 1);
};

const APICall = () => {

  fetch(`https://reqres.in/api/color/${number}`)
    .then((response) => response.json())
    .then((data) => {
      box = document.querySelector(".color");
      color = data.data.color;
      box.style.backgroundColor = color;
    })
    .catch((e) => {
      box.style.backgroundColor = "grey";
      console.warn(e);
    });
};

const clickHandler = () => {
  newNumber();
  APICall();
};

const button = document.querySelector("button");
button.addEventListener("click", clickHandler);

newNumber();
APICall();
