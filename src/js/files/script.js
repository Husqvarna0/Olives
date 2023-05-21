// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



let close = document.getElementById('sign-up__close');

close.addEventListener("click", function () {
	let signUp = document.getElementById("header__sign-up");
	signUp.classList.add("__close");

});

