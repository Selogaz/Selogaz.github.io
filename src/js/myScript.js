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
	timeArr: [0, 0, 0],
	calcCost() {
		calculator.totalCost = calculator.costArr[0] + calculator.costArr[1] + calculator.costArr[2] + " руб";
		console.log(calculator.totalCost);
	},
	calcTime() {
		calculator.totalTime = calculator.timeArr[0] + calculator.timeArr[1] + calculator.timeArr[2] + " дней";
	},
	showCostAndTime() {
		alert("Стоимость работы составит " + calculator.calcCost() + " рублей\n" + "Работы будут выполнены через " + calculator.calcTime() + " недели");
	},
	timer: 3000,
	totalCost: 0,
	totalTime: 0,
	gotValues(id, arr) {
		$(id).each(function () {
			arr.push($(this).val());
		});
	},
	getCost(id, arr, num) {
		$(id).on('change', function () {
			calculator.tempString = $(this).val();
			arr.forEach(function (item, index, array) {
				if (calculator.tempString == arr[index]) {
					calculator.costArr[num] = index * 1000;
				}
			});
		});
	},
	getTime(id, arr, num) {
		$(id).on('change', function () {
			calculator.tempString = $(this).val();
			arr.forEach(function (item, index, array) {
				if (calculator.tempString == arr[index]) {
					calculator.timeArr[num] = index * 4;
				}
			});
		});
	},
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

$(document).ready(function () {
	calculator.gotValues('select[id="list"] option', calculator.arrType); //Калькулятор
	calculator.gotValues('select[id="list2"] option', calculator.arrDesign);
	calculator.gotValues('select[id="list3"] option', calculator.arrResponsive);
	calculator.getCost('select[id="list"]', calculator.arrType, 0);
	calculator.clearString();
	calculator.getTime('select[id="list"]', calculator.arrType, 0);
	calculator.clearString();
	calculator.getCost('select[id="list2"]', calculator.arrDesign, 1);
	calculator.clearString();
	calculator.getTime('select[id="list2"]', calculator.arrDesign, 1);
	calculator.clearString();
	calculator.getCost('select[id="list3"]', calculator.arrResponsive, 2);
	calculator.clearString();
	calculator.getTime('select[id="list3"]', calculator.arrResponsive, 2);
	$('select').on('change', function () {
		calculator.calcCost();
		calculator.calcTime();
		$('.cost').html(calculator.totalCost);
		$('.time').html(calculator.totalTime);
		calculator.totalCost = 0;
		calculator.totalTime = 0;
	});
	let checkFukError = $('a[href^="#"]'); //Якорные ссылки
	checkFukError.on('click', function () {
		if (checkFukError.length) {
			let anchorLinks = $(this).attr("href");
			$('html, body').animate({
				scrollTop: $(anchorLinks).offset().top - 50 + "px"
			}, 'slow');
		} else {
			alert("Проверь корректность ссылок и id");
		}
		$("nav a").each((i, el) => { //Класс active при клике
			if ($(el).hasClass("myActive")) {
				$(el).removeClass("myActive");
			}
		});
		/*let home = $('a[href="#home"]');
		if (!($(this).is(home))) {
			$(this).addClass("myActive");
		}*/
	});
	$(window).scroll(() => { //класс myActive при скролле
		let scrollDistance = $(window).scrollTop();
		$(".section").each((i, el) => {
			if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
				$("nav a").each((i, el) => {
					if ($(el).hasClass("myActive")) {
						$(el).removeClass("myActive");
					}
				});
				let finder = $('nav li:eq(' + i + ')').find('a');
				finder.addClass('myActive');
			}
		});
		let time = 2, //анимация статистики
			cc = 1;
		$('.statistics').each(function () {
			let cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();
			if (cPos < topWindow + 200) {
				if (cc < 2) {
					$('h3').each(function () {
						let i = 1,
							num = $(this).data('num'),
							step = 1000 * time / num,
							that = $(this),
							int = setInterval(function () {
								if (i <= num) {
									that.html(i);
								} else {
									cc = cc + 2;
									clearInterval(int);
								}
								i++;
							}, step);
					});
				}
			}
		});

		$('.bio h2').each((i, el) => { //анимация заголовка при долистывании
			if ($(el).hasClass("animate__swing")) {
				$(el).removeClass("animate__swing");
			} else
				$(el).addClass('animate__swing');
		});
	});
	
	$('.image-link').magnificPopup();
	$('.sli').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true
	});

	$("#inputTel").mask("+7(999) 999-9999");
	$(".modal_form").submit(function (event) {
		
		if ($("#inputTel").val() == "" || ($("#inputEmail").val() == "")) {
			event.preventDefault();
			alert("Заполните форму до конца");
		}
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "php/myMail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			alert("Успешно");
			$(".modal_form").trigger("reset");
		});
		return false;
	});
	

	new WOW().init();

	$("#inputEmail").inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
		greedy: false,
		onBeforePaste: function (pastedValue, opts) {
			pastedValue = pastedValue.toLowerCase();
			return pastedValue.replace("mailto:", "");
		},
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				cardinality: 1,
				casing: "lower"
			}
		}
	});
	
});
setTimeout(function () {
		$(".launch_modal").click();
	}, 5000);

$('#lightSlider').lightSlider({

	item: 1,
	loop: true,
	slideMargin: 0,
	thumbItem: 9,
	controls: true,
	prevHtml: '',
	nextHtml: '',
	pager: true,

});
$("iframe")[0].setAttribute("width", "100%");