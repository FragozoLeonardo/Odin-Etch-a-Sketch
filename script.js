const container = document.getElementById("my-container");
const newDiv = document.createElement("div");
newDiv.classList.add("my-class");
newDiv.setAttribute("id", "my-div");
newDiv.textContent = "This is a div test";
newDiv.style.width = '120px';
newDiv.style.height = '120px';
newDiv.style.marginTop = '250px';
newDiv.style.marginLeft = '720px';
newDiv.style.backgroundColor = 'rgb(255, 255, 255)';

container.appendChild(newDiv);

function changeColor () {
  r = Math.floor(Math.random() * 256),
  g = Math.floor(Math.random() * 256),
  b = Math.floor(Math.random() * 256);

  newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

newDiv.addEventListener("click", changeColor);