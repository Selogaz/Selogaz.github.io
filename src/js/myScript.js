"use strict"

let calculator = {
	greetingsType: "Добрый день! Вы попали на страницу веб-разработчика. Подскажите, какой сайт вас интересует? Чтобы дать ответ, введите число от 0 до 10, где\n",
	greetingsDesign: "Какой дизайн сайта будет более предпочтителен?\n",
	greetingsResponsive: "И последний вопрос. Под какие устройства должен быть адаптирован сайт?\n",
	typeOfSite: 2,
	design: 1,
	responsive: 0,
	arrType: ["Сайт-визитка", "Корпоративный сайт", "Лендинг", "Интернет-витрина", "Интернет-магазин", "Новостной сайт", "Тематический сайт", "Блог", "Сайт-справочник", "Веб-сервис"],
	arrDesign: ["Деловой", "Классический", "Яркий"],
	arrResponsive: ["Мобильные и ПК", "Только мобильные", "Только ПК"],
	tempString: "",
	clearString() {
		calculator.tempString = "";
	},
	calcCounter: 0,
	showType() {
		calculator.calcCounter += prompt(calculator.greetingsType + calculator.tempString, 2);
	},
	showDesign() {
		calculator.calcCounter += prompt(calculator.greetingsDesign + calculator.tempString, 1);
	},
	showResponsive() {
		calculator.calcCounter += prompt(calculator.greetingsResponsive + calculator.tempString, 0);
	},
	calcCost() {
		return 6000 * calculator.calcCounter;
	},
	calcTime() {
		return 2 * calculator.calcCounter;
	},
	showCostAndTime() {
		alert("Стоимость работы составит " + calculator.calcCost() + " рублей\n" + "Работы будут выполнены через " + calculator.calcTime() + " недели");
	},
};
calculator.arrType.forEach(function (item, index, array) {
	calculator.tempString += index + " - " + item + "\n";
	});
calculator.showType();
calculator.clearString();
calculator.arrDesign.forEach(function (item, index, array) {
	calculator.tempString += index + " - " + item + "\n";
	});
calculator.showDesign();
calculator.clearString();
calculator.arrResponsive.forEach(function (item, index, array) {
	calculator.tempString += index + " - " + item + "\n";
	});
calculator.showResponsive();
calculator.calcCost();
calculator.calcTime();
calculator.showCostAndTime();