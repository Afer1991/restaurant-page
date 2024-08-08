const addMenuPage = () => {
  const content = document.getElementById("content");

  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }

  const container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("menu");
  content.appendChild(container);

  const div1 = document.createElement("div");
  container.appendChild(div1);

  const img1 = document.createElement("img");
  img1.src = "ab20c545c9d116f57878.jpg";
  div1.appendChild(img1);

  const hd1 = document.createElement("h1");
  hd1.textContent = "Pepperoni";
  div1.appendChild(hd1);

  const p1 = document.createElement("p");
  p1.textContent = "Tomato sauce, Mozzarella, Pepperoni";
  div1.appendChild(p1);

  const price1 = document.createElement("p");
  price1.textContent = "$14";
  div1.appendChild(price1);

  const div2 = document.createElement("div");
  container.appendChild(div2);

  const img2 = document.createElement("img");
  img2.src = "4e65d9ff128bcaff59e5.jpg";
  div2.appendChild(img2);

  const hd2 = document.createElement("h1");
  hd2.textContent = "Hawaiian";
  div2.appendChild(hd2);

  const p2 = document.createElement("p");
  p2.textContent = "Tomato sauce, Mozzarella, Pineapple, Bacon, Ham";
  div2.appendChild(p2);

  const price2 = document.createElement("p");
  price2.textContent = "$16";
  div2.appendChild(price2);

  const div3 = document.createElement("div");
  container.appendChild(div3);

  const img3 = document.createElement("img");
  img3.src = "0856e9e517aea6dd6e58.jpg";
  div3.appendChild(img3);

  const hd3 = document.createElement("h1");
  hd3.textContent = "Supreme";
  div3.appendChild(hd3);

  const p3 = document.createElement("p");
  p3.textContent = "Marinara, Mozzarella, Mushrooms, Peppers, Onion, Olives, Sausage, Ham";
  div3.appendChild(p3);

  const price3 = document.createElement("p");
  price3.textContent = "$21";
  div3.appendChild(price3);

  const div4 = document.createElement("div");
  container.appendChild(div4);

  const img4 = document.createElement("img");
  img4.src = "cc063cfe5171dbb62eaf.jpg";
  div4.appendChild(img4);

  const hd4 = document.createElement("h1");
  hd4.textContent = "Meat Lover's";
  div4.appendChild(hd4);

  const p4 = document.createElement("p");
  p4.textContent = "Tomato Sauce, Mozzarella, Pepperoni, Sausage, Bacon";
  div4.appendChild(p4);

  const price4 = document.createElement("p");
  price4.textContent = "$19";
  div4.appendChild(price4);
};

export default addMenuPage;