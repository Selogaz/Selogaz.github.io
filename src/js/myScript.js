"use strict"

let calculator = {
	greetingsType: "Добрый день! Вы попали на страницу веб-разработчика. Подскажите, какой сайт вас интересует? Чтобы дать ответ, введите число от 0 до 10, где\n",
	greetingsDesign: "Какой дизайн сайта будет более предпочтителен?\n  0 - Деловой\n 1 - Классический\n 2 - Яркий",
	greetingsResponsive: "И последний вопрос. Под какие устройства должен быть адаптирован сайт?  0 - Мобильные и ПК\n 1 - Только мобильные \n 2 - Только ПК",
	typeOfSite: 2,
	design: 1,
	responsive: 0,
	time: 0,
	cost: 0,
	arrType: ["Сайт-визитка", "Корпоративный сайт", "Лендинг", "Интернет-витрина", "Интернет-магазин", "Новостной сайт", "Тематический сайт", "Блог", "Сайт-справочник", "Веб-сервис"],
	showType() {
		prompt(calculator.greetingsType, 2);
		
	},
};
let typeString ="";
let container = calculator.arrType.forEach(function (item, index, array) {
		typeString += index + " - " + item + "\n";
		});
prompt(calculator.greetingsType + typeString, 2);
/*calculator.typeOfSite = prompt(calculator.greetingsType, 2);
calculator.design = prompt(calculator.greetingsDesign, 1);
calculator.responsive = prompt(calculator.greetingsResponsive, 0);*/

