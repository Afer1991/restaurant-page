import './style.css';
import Icon from './background.jpg';
import Image from './pizzaiolo.jpg';
import PizzaImg1 from './pepperoni.jpg';
import PizzaImg2 from './hawaiian.jpg';
import PizzaImg3 from './supreme.jpg';
import PizzaImg4 from './meatlovers.jpg';
import addHomePage from './addHomePage';
import addMenuPage from './addMenuPage';
import addContactPage from './addContactPage';

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", addHomePage);
menuBtn.addEventListener("click", addMenuPage);
contactBtn.addEventListener("click", addContactPage);

addHomePage();

