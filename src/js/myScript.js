"use strict"

let calculator = {
	greetingsType: "Добрый день! Вы попали на страницу веб-разработчика. Подскажите, какой сайт вас интересует? Чтобы дать ответ, введите число от 0 до 10, где\n 0 - Сайт-визитка\n 1 - Корпоративный сайт\n 2 - Лендинг\n 3 - Интернет-витрина\n 4 - Интернет-магазин\n 5 - Новостной сайт\n 6 - Тематический сайт\n 7 - Блог\n 8 - Сайт-справочник\n 9 - Веб-сервис\n",
	greetingsDesign: "Какой дизайн сайта будет более предпочтителен?\n  0 - Деловой\n 1 - Классический\n 2 - Яркий",
	greetingsResponsive: "И последний вопрос. Под какие устройства должен быть адаптирован сайт?  0 - Мобильные и ПК\n 1 - Только мобильные \n 2 - Только ПК",
	typeOfSite,
	design,
	responsive,
	time,
	cost,
	arrType: [],
	};
typeOfSite = prompt(calculator.greetingsType, 2);
console.log(calculator.typeOfSite);
design = prompt(calculator.greetingsDesign, 1);
responsive = prompt(calculator.greetingsResponsive, 0);

