const addHomePage = () => {

  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);

  const name = document.createElement("div");
  name.classList.add("name");
  name.textContent = "Calogero's Old Fashioned Pizza";
  container.appendChild(name);
  
  const p1 = document.createElement("p");
  p1.textContent = "Best pizza in the country";
  container.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "Made with passion since 1991";
  container.appendChild(p2);

  const img = document.createElement("img");
  img.classList.add("pizzaiolo");
  img.src = "c942062e2195cb28d76d.jpg";
  img.alt = "pizzaiolo";
  container.appendChild(img);

  const p3 = document.createElement("p");
  p3.textContent = "Order online or visit us!";
  container.appendChild(p3);  

};

export default addHomePage;