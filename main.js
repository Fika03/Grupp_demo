window.onload = () => {};

class Fruit {
  fruitName;
  color;
  size;
  texture;
  taste;

  constructor(fruitName, color, size, texture, taste) {
    this.fruitName = fruitName;
    this.color = color;
    this.size = size;
    this.texture = texture;
    this.taste = taste;
  }
}

const strawberry = new Fruit(
  "Strawberry",
  "red",
  "small",
  "firm",
  "sweet",
  "/assets/strawberryImg.jpeg"
);
const banana = new Fruit(
  "Banana",
  "yellow",
  "medium",
  "smooth",
  "sweet",
  "/assets/bananaImg.jpeg"
);
const apple = new Fruit("Apple", "green", "medium", "smooth", "sour");
const watermelon = new Fruit("Watermelon", "green", "large", "smooth", "sweet");
const orange = new Fruit("Orange", "orange", "medium", "firm", "sweet/sour");

console.log(strawberry);

function createFruitList(fruit) {
  const theDiv = document.getElementById("card");
  const theSecondDiv = document.createElement("div");
  theDiv.appendChild(theSecondDiv);

  theSecondDiv.className = "itemWrapper";
  theDiv.className = "itemContainer";

  const theImg = document.getElementById("fruitImg");

  const title = document.createElement("h1");
  title.innerHTML = fruit.fruitName;

  const colorElement = document.createElement("p");
  colorElement.innerHTML = fruit.color;

  const sizeElement = document.createElement("p");
  sizeElement.innerHTML = fruit.size;

  const textureElement = document.createElement("p");
  textureElement.innerHTML = fruit.texture;

  const tasteElement = document.createElement("p");
  tasteElement.innerHTML = fruit.taste;
  theSecondDiv.appendChild(title);
  theSecondDiv.appendChild(colorElement);
  theSecondDiv.appendChild(sizeElement);
  theSecondDiv.appendChild(textureElement);
  theSecondDiv.appendChild(tasteElement);
}
const fruitList = [strawberry, banana, apple, watermelon, orange];

for (let i = 0; i < fruitList.length; i++) {
  createFruitList(fruitList[i]);
}
