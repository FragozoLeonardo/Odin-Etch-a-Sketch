const container = document.getElementById("my-container");

container.addEventListener("click", (e) => {
  const x = e.clientX - container.getBoundingClientRect().left;
  const y = e.clientY - container.getBoundingClientRect().top;
  createDiv(x, y);
});

function createDiv(x, y) {
  const newDiv = document.createElement("div");

  newDiv.style.width = '150px';
  newDiv.style.height = '150px';
  newDiv.style.position = 'absolute';
  newDiv.style.left = `${x}px`;
  newDiv.style.top = `${y}px`;
  newDiv.style.backgroundColor = changeColor();
  newDiv.addEventListener("click", function() {
      this.style.backgroundColor = changeColor();
  });
  container.appendChild(newDiv);
}

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}