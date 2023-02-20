<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="description" content="Веб-разработчик">
	<meta name="author" content="Alexander">
	<meta name="robots" conent="all">

	<meta property="og:image" content="/img/og-image.jpg">
	<meta property=”og:url” content=”http://Selogaz.github.io”>
	<meta property="og:title" content="Веб-разработчик">
	<meta property="og:description" content="Помогу создать сайт или улучшить существующий">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Александр Терентьев - Веб-разработчик</title>
	<link rel="stylesheet" href="css/reset.css">
	
	<link rel="stylesheet" href="css/animate.min.css">
	<link rel="stylesheet" href="css/my-fonts.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/magnific-popup.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css">
	<link rel="stylesheet" type="text/css" href="css/slick.css" />
	<link type="text/css" rel="stylesheet" href="css/lightslider.css" />
	<link rel="stylesheet" href="css/style.css">

	<script src="https://kit.fontawesome.com/d86e499cd9.js" crossorigin="anonymous"></script>
</head>

<body>
<?php
	include('nav.php');
	?>
	<main>
		<section class="main" id="home">
			<div class="container h-100">
				<div class="row h-100 align-items-center">
					<div class="col-lg-6 mt-5 pt-5">
						<div class="title__container mt-5">
							<h1><i class="fa-brands fa-css3 custom-css"></i>Привет <br>Я - Александр Терентьев</h1>
							<h4><i class="icon-code-custom"></i>Веб-разработчик</h4>
							<input type="button" value="Обо мне">
							<input type="button" value="Мои работы">
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bio section" id="bio">
			<div class="container">
				<div class="row d-flex flex-column align-items-center">
					<h2 class="animate__animated ">Обо мне</h2>
					<div class="col justify-content-end">
						<img class="mini-photo" src="img/mini.jpg" alt="Фото-миниатюра автора">
					</div>
					<div class="col-8">
						<p>А я играю. На гармошке. У прохожих. На виду~~</p>
						<p>К сожалению. День Рождения. Только раз. В гоо. Ду.</p>
					</div>
					<div class="col">
						<input type="button" value="Скачать резюме">
					</div>
				</div>
			</div>
		</section>
		<section class="skills section" id="skills">
			<div class="skills_container container">
				<div class="row">
					<h2 class="wow animate__animated animate__bounceInLeft">Что я умею</h2>
					<div class="skill-icons d-flex justify-content-around flex-wrap">
						<div class="col-md-12 col-lg-3">
							<img src="img/index-svg-1.svg" width="100px" height="50px" alt="Иконка-сайт с нуля">
							<h4>Создание сайта с нуля</h4>
							<p>Вот не было у вас сайта. А потом хоп, и появится.</p>
						</div>
						<div class="col-md-12 col-lg-3">
							<img src="img/index-svg-2.svg" width="100px" height="50px" alt="Иконка-доработка">
							<h4>Доработка вашего сайта</h4>
							<p>Вот был кривой сайт. А станет еще и неработоспособным.</p>
						</div>
						<div class="col-md-12 col-lg-3">
							<img src="img/index-svg-3.svg" width="100px" height="50px" alt="Иконка-оптимизация">
							<h4>CEO-оптимизация</h4>
							<p>Отправлю сайт на последнюю страницу выдачи гугла</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="experience section" id="exp">
			<div class=" exp_container container">
				<h2>Мои работы</h2>
				<p class="exp_main_p">Это Люба говорит</p>
				<div class="sli">
					
					<img class="gallery-photo mfp-image image-link first" href="img/Barbershop.png" src="img/Barbershop_small.jpg" alt="Сайт барбершопа Бородинский">
					<img class="gallery-photo mfp-image image-link second" href="img/homes-small.jpg" src="img/homes_micro.jpg" alt="Сайт строительной компании">
				</div>
				<div class="row justify-content-between first-desc">
					<div class="col-12 col-md-3 col-lg-2">
						<h4 class="exp_client">КЛИЕНТ:</h4>
						<p class="exp_name_client">HTML Academy</p>
						<h4>САЙТ:</h4>
						<a href="#">Барбершоп Бородинский</a>
						<input type="button" value="VISIT LIVE SITE">
					</div>
					<div class="col-12 col-md-9 mt-3 mt-md-0">
						<h4 class="exp_name_work">Барбершоп Бородинский</h4>
						<p class="exp_desc">Учебный проект в рамках курса по фронтенд разработке в HTML Academy</p>
					</div>
				</div>

				<img class="gallery-photo mfp-image image-link" href="img/homes-small.jpg" src="img/homes_micro.jpg" alt="Сайт строительной компании">
				<div class="row justify-content-between">
					<div class="col-12 col-md-3 col-lg-2">
						<h4 class="exp_client">КЛИЕНТ:</h4>
						<p class="exp_name_client">Строительная компания</p>
						<h4>САЙТ:</h4>
						<a>https://xn----7sbnofunkkkl6e.xn--p1ai/</a>
						<a href="https://xn----7sbnofunkkkl6e.xn--p1ai/"><input type="button" value="VISIT LIVE SITE"></a>
					</div>
					<div class="col-12 col-md-9 mt-3 mt-md-0">
						<h4 class="exp_name_work">Каменные дома</h4>
						<p class="exp_desc">Сайт для строительной компании. Выполнен на конструкторе сайтов Tilda</p>
					</div>
				</div>
			</div>
		</section>
		<section class="calculates section" id="calc">
			<div class="calc_container container">
				<div class="row d-flex flex-column align-items-center">
					<!--div class="shadow col-10"></div>-->
					<h2>Расчет стоимости</h2>
					<div class="col-8">
						<label id="list">Тип сайта</label>
						<select name="list" id="list">
							<option selected>Выберите пункт...</option>
							<!--<option value="Call">Помочь с выбором...</option>-->
							<option value="Сайт-визитка">Сайт-визитка</option>
							<option value="Корпоративный сайт">Корпоративный сайт</option>
							<option value="Лендинг">Лендинг</option>
							<option value="Интернет-витрина">Интернет-витрина</option>
							<option value="Интернет-магазин">Интернет-магазин</option>
							<option value="Новостной сайт">Новостной сайт</option>
							<option value="Тематический сайт">Тематический сайт</option>
							<option value="Блог">Блог</option>
							<option value="Сайт-справочник">Сайт-справочник</option>
							<option value="Веб-сервис">Веб-сервис</option>
						</select>
						<label id="list2">Дизайн</label>
						<select name="list2" id="list2">
							<option selected>Выберите пункт...</option>
							<option value="">Деловой</option>
							<option value="">Классический</option>
							<option value="">Яркий</option>
						</select>
						<label id="list3">Адаптивность</label>
						<select name="list3" id="list3">
							<option selected>Выберите пункт...</option>
							<option value="Только ПК">Только ПК</option>
							<option value="Только мобильные">Только мобильные</option>
							<option value="All">Все устройства</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="offset-2 col-8">
						<h4><br>Сроки</h4>
						<span class="time"><br>0</span>
					</div>
				</div>
				<div class="row">
					<div class="offset-2 col-8">
						<h4>Стоимость</h4>
						<span class="cost">0</span>
					</div>
				</div>
				<div class="row">
					<div class="text-center">
						<input type="button" value="Оставить заявку">
					</div>
				</div>
			</div>
		</section>
		<section class="statistics">
			<div class="statistic_container container">
				<h2>Немного статистики</h2>
				<div class="row d-flex">
					<div class="col-lg-3  col-md-5 offset-md-1 offset-lg-0">
						<img src="img/%D1%81%D0%BC%D0%B0%D0%B9%D0%BB.png" alt="Иконка смайл" width="47" height="43">
						<h3 data-num="150">0</h3><span class="d-block mb-5">Счастливых клиентов</span>
					</div>
					<div class="col-lg-3  col-md-5 offset-md-1 offset-lg-0">
						<img src="img/%D1%81%D0%BA%D0%BE%D0%B1%D0%BA%D0%B8.png" alt="Иконка скобки" width="47" height="43">
						<h3 data-num="9999">0</h3><span class="d-block mb-5">Часов работы</span>
					</div>
					<div class="col-lg-3  col-md-5 offset-md-1 offset-lg-0">
						<img src="img/%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0.png" alt="Иконка галочка" width="47" height="43">
						<h3 data-num="232">0</h3><span class="d-block mb-5">Проекта завершено</span>
					</div>
					<div class="col-lg-3 col-md-5 offset-md-1 offset-lg-0">
						<img src="img/%D0%BA%D1%83%D0%B1%D0%BE%D0%BA.png" alt="Иконка кубок" width="47" height="43">
						<h3 data-num="90">0</h3><span class="d-block mb-5">Наград получено</span>
					</div>
				</div>
			</div>
		</section>
		<section class="reviews" id="reviews">
			<h2>Отзывы</h2>
			<div class="container">
				<div class="col-12 d-flex justify-content-center">
					<div class="col-12 d-flex justify-content-center">
						<ul id="lightSlider" class="karusel">
							<li data-thumb="img/dot1.png"><img src="img/Reviews.png" class="d-block offset-5 col-2 img-fluid" alt="...">
								<p class="d-block">Александр прекрасно справился с работой! Сначала отнесся с подозрением из-за небольшой платы, которую он взял. Но нисколько не пожалел.</p>
							</li>
							<li data-thumb="img/dot2.png"><img src="img/Reviews-two.png" class="d-block offset-5 col-2 img-fluid" alt="...">
								<p class="d-block">Не ходил вокруг да около, задал все интересующие вопросы и сразу принялся за работу. Были дополнительные правки, которые тоже довольно быстро были сделаны. Рекомендую!</p>
							</li>
							<li data-thumb="img/dot3.png"><img src="img/Reviews-three.png" class="d-block offset-5 col-2 img-fluid" alt="...">
								<p class="d-block">С первых минут общения было видно, что человек знает свое дело. Задает правильные вопросы, чтобы хорошо понимать чего именно вы хотите видеть по итогу работы. Спасибо!</p>
							</li>
						</ul>
						<!--<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Предыдущий</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Следующий</span>
					</button>-->
					</div>
				</div>
			</div>
		</section>
		<section class="contacts section" id="contacts">
			<h2>Мои контакты</h2>
			<p class="mb-5">Возникли вопросы? Оставьте свои контакты или свяжитесь со мной.</p>
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-xxl-2 offset-xxl-1 col-xl-1 offset-xl-0 col-lg-2 col-md-3 col-4">
						<img class="mail" src="img/email.png" alt="Почта">
					</div>
					<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-4">
						<img class="phone " src="img/ring.png" alt="Телефон">
					</div>
				</div>
				<div class="row d-flex justify-content-center">
					<div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
						<p class="">Terentjev.selogaz@yandex.ru</p>
					</div>
					<div class="myPhone col-xxl-1 col-xl-2 col-lg-2 col-md-3 col-5">
						<a class="" href="https://api.whatsapp.com/send?phone=79782440204"><p >+79782440204</p></a>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<h4>Оставьте мне сообщение</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-4 offset-2">
						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="Имя" aria-label="Username" aria-describedby="basic-addon1">
						</div>
					</div>
					<div class="col-4">
						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="Почта" aria-label="Mail" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-8 offset-2">
						<div class="form-group">
							<textarea placeholder="Сообщение" class="form-control rounded-0" id="exampleFormControlTextarea1" rows="5"></textarea>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="text-center">
						<input class="send" type="submit" value="Отправить">
					</div>
				</div>
			</div>
		</section>
		<section class="map">
			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7759b74298cf548dcb8083c79756efd550c165131f6dbbff625369e3c7cf8ece&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
		</section>
	</main>
	<footer>
		<p>Copyright @ 2022 Александр Терентьев. Design by Web</p>
	</footer>
	<!-- Button trigger modal -->
	<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
		Launch demo modal
	</button>

	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title fs-5" id="exampleModalLabel">Обратная связь</h2>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form action="php/myMail.php" method="post">
						<div class="mb-3 row">
							<label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
							<div class="col-sm-10">
								<input type="email" name="user_email" class="form-control" id="inputEmail">
							</div>
						</div>
						<div class="mb-3 row">
							<label for="inputTel" class="col-sm-2 col-form-label">Телефон</label>
							<div class="col-sm-10">
								<input type="phone"  class="form-control" name="user_phone" id="inputTel">
							</div>
						</div>
						<div class="mb-3 form-check">
							<input class="offset-2 sform-check-input" name="check" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Лицензионное соглашение
							</label>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
							<button type="submit" class="btn btn-primary">Отправить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<script src="js/jquery-3.6.0.min.js"></script>
		<script src="js/jquery.magnific-popup.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
		<script type="text/javascript" src="js/slick.min.js"></script>
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="js/lightslider.js"></script>
		<script src="js/wow.min.js"></script>
		<script src="js/jquery.maskedinput.min.js" type="text/javascript"></script>
		<script src="js/jquery.inputmask.min.js"></script>
		<script src="js/myScript.js"></script>
</body>

</html>
