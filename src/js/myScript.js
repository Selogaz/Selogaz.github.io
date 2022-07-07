"use strict"

let calculator = {
	greetingsType: "Добрый день! Вы попали на страницу веб-разработчика. Подскажите, какой сайт вас интересует? Чтобы дать ответ, введите число от 0 до 10, где\n",
	greetingsDesign: "Какой дизайн сайта будет более предпочтителен?\n",
	greetingsResponsive: "И последний вопрос. Под какие устройства должен быть адаптирован сайт?\n",
	arrType: [],
	arrDesign: [],
	arrResponsive: [],
	tempString: "",
	clearString() {
		calculator.tempString = "";
	},
	showType() {
		calculator.calcCounter += parseInt(prompt(calculator.greetingsType + calculator.tempString, 2));
	},
	showDesign() {
		calculator.calcCounter += parseInt(prompt(calculator.greetingsDesign + calculator.tempString, 1));
	},
	showResponsive() {
		calculator.calcCounter += parseInt(prompt(calculator.greetingsResponsive + calculator.tempString, 0));
	},
	costArr: [0, 0, 0],
	calcCost() {
		calculator.totalCost = calculator.costArr[0] + calculator.costArr[1] + calculator.costArr[2];
		console.log(calculator.totalCost);
		return calculator.totalCost;
	},
	calcTime() {
		return 2 * calculator.calcCounter;
	},
	showCostAndTime() {
		alert("Стоимость работы составит " + calculator.calcCost() + " рублей\n" + "Работы будут выполнены через " + calculator.calcTime() + " недели");
	},
	timer: 3000,
	totalCost: 0,
	gotValues(id, arr) {
		$(id).each(function() {
    		arr.push($(this).val());
    	});
	},
	/*getCost(id, arr, num) {
		$('id').on('change', function() {
		calculator.tempString = $(this).val();
		arr.forEach(function (item, index, array) {
			if (calculator.tempString == arr[index]) {
				calculator.costArr[num] = (index) * 1000;		
			}
		});
	});
	},*/
};
/*setTimeout(function(){
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
}, calculator.timer)*/

$(document).ready(function(){
	calculator.gotValues('select[id="list"] option', calculator.arrType);
	calculator.gotValues('select[id="list2"] option', calculator.arrDesign);
	calculator.gotValues('select[id="list3"] option', calculator.arrResponsive);
	$('select[id="list"]').on('change', function() {
		calculator.tempString = $(this).val();
		calculator.arrType.forEach(function (item, index, array) {
			if (calculator.tempString == calculator.arrType[index]) {
				calculator.costArr[0] = (index) * 1000;
			}
		});
	});
	calculator.clearString();
	$('select[id="list2"]').on('change', function() {
		calculator.tempString = $(this).val();
		calculator.arrDesign.forEach(function (item, index, array) {
			if (calculator.tempString == calculator.arrDesign[index]) {
				calculator.costArr[1] = (index) * 1000;
				
			}
		});
	});
	calculator.clearString();
	$('select[id="list3"]').on('change', function() {
		calculator.tempString = $(this).val();
		calculator.arrResponsive.forEach(function (item, index, array) {
			if (calculator.tempString == calculator.arrResponsive[index]) {
				calculator.costArr[2] = (index) * 1000;
			}
		});
	});
	$('select').on('change', function() {
		calculator.calcCost();
		$('.cost').html(calculator.totalCost);
		calculator.totalCost = 0;
	});
});

