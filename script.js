const container = document.getElementById("my-container");
const newDiv = document.createElement("div");

newDiv.classList.add("my-class");
newDiv.setAttribute("id", "my-div");
newDiv.textContent = "This is a div test";
newDiv.style.backgroundColor = "#ADD8E6";
newDiv.style.width = '120px';
newDiv.style.height = '120px';
newDiv.style.marginTop = '250px';
newDiv.style.marginLeft = '720px';
container.appendChild(newDiv);