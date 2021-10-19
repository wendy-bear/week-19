class Cat {
  constructor(nickname, age, breed, food, gender) {
      this.nickname = nickname,
      this.age = age,
      this.breed = breed,
      this.food = food,
      this.gender = gender
  }

}

document.querySelector('form').addEventListener("submit", (event) => {
  event.preventDefault();
  let nickname = document.getElementById("nickname").value;
  let age = document.getElementById("age").value;
  let breed = document.getElementById("breed").value;

  let food = [];
  let checkboxes = document.querySelectorAll('input[type = "checkbox"]:checked');
  for (let i = 0; i < checkboxes.length; i++) {
    food.push(checkboxes[i].value);
  }

  let gender = document.querySelector('input[name="g"]:checked').value;

  let myCat = new Cat(nickname, age, breed, food, gender);
  console.log(myCat);
});