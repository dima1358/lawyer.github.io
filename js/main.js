/* preloader================================================*/

$(window).ready(function() {
	setTimeout(function() {
		$('.preloader').fadeOut('slow', function() {});
	}, 2500);
});

/* main-menu================================================*/

// $(".header-menu__burger").on("click", function () {
// 	$(this).toggleClass("header-menu__burger-active");
// 	$(".header-menu__burger-close").toggleClass("header-menu__burger-close-active");
// });

$(document).mouseup(function (event) {
	var curr_elem = event.target;
	if ($(curr_elem).is(".header-menu__burger") || $(curr_elem).is(".header-menu__burger-close")) {
		$(".header-menu__list").toggleClass("header-menu__list-active");
		$(".header-menu__burger").toggleClass("header-menu__burger-active");
		$(".header-menu__burger-close").toggleClass("header-menu__burger-close-active");
	} else if (!$(curr_elem).is(".header-menu__burger") && !$(curr_elem).is(".header-menu__list") && !$(curr_elem).is(".header-menu__item") && !$(curr_elem).is(".header-menu__link")) {
		$(".header-menu__list").removeClass("header-menu__list-active");
		$(".header-menu__burger").removeClass("header-menu__burger-active");
		$(".header-menu__burger-close").removeClass("header-menu__burger-close-active");
	}
});

/* main-slider================================================*/

$(".header-bg__slider").slick({
	arrows: false,
	fade: true,
	infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 4000
});

/* services-slider================================================*/

$(".services-item").slick({
	autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
	infinite: true,
	cssEase: 'ease',
	prevArrow: "<div class='services-item-slider__arrow services-item-slider__arrow-left'><i class='fas fa-caret-left'></i></div>",
	nextArrow: "<div class='services-item-slider__arrow services-item-slider__arrow-right'><i class='fas fa-caret-right'></i></div>"
});

/* documents-slider================================================*/

$(".documents-slider").slick({
	slidesToShow: 2,
	lazyLoad: 'ondemand',
	slidesToScroll: 1,
  speed: 1000,
	infinite: true,
	prevArrow: "<div class='documents-slider__arrow documents-slider__arrow-left'></div>",
	nextArrow: "<div class='documents-slider__arrow documents-slider__arrow-right'></div>"
});

/* services-hover================================================*/

function hoverInservices() {
	$(".services-item__link").addClass("services-item__link-active");
};

function hoverOutservices() {
	$(".services-item__link").removeClass("services-item__link-active");
};

$(".services-item__wrap-link").hover(hoverInservices, hoverOutservices);

/* questions-drop-down================================================*/

$(".questions-item").on("click", function () {

	var current_drop = $(this);

	$(".questions-item-active").not($(current_drop)).next(".questions-answer").slideUp(700);
	$(".questions-item-active").not($(current_drop)).removeClass("questions-item-active");
	$(this).next(".questions-answer").slideToggle(700);
	
	$(this).toggleClass("questions-item-active");
});

/* modal-window-consultation================================================*/

$(".header-btn__link").on("click", function () {
	$(".modal-shadow__consultation").fadeIn();
});

$(".modal-consultation__close").on("click", function () {
	$(".modal-shadow__consultation").fadeOut();
	$(".modal-shadow__after").fadeOut();
});

/* modal-window-consultation-after================================================*/

$(".modal-consultation__btn").on("click", function () {
	$(".modal-shadow__after").fadeIn();
	$(".modal-shadow__consultation").fadeOut();
});

/* modal-window-problem================================================*/

$(".services-content__btn").on("click", function () {
	$(".modal-shadow__problem").fadeIn();
});

$(".modal-problem__close").on("click", function () {
	$(".modal-shadow__problem").fadeOut();
	$(".modal-shadow__after").fadeOut();
});

/* modal-window-problem-after================================================*/

$(".modal-problem__btn").on("click", function () {
	$(".modal-shadow__after").fadeIn();
	$(".modal-shadow__problem").fadeOut();
});

/* modal-window-order================================================*/

$(".pricing-category__item-btn").on("click", function () {
	$(".modal-shadow__order").fadeIn();
});

$(".modal-order__close").on("click", function () {
	$(".modal-shadow__order").fadeOut();
	$(".modal-shadow__after").fadeOut();
});

/* modal-window-order-after================================================*/

$(".modal-order__btn").on("click", function () {
	$(".modal-shadow__after").fadeIn();
	$(".modal-shadow__order").fadeOut();
});

/* modal-window-order-info================================================*/

$(".pricing-category__item-more").on("click", function () {
	$(".modal-description__shadow").fadeIn();
});

$(".modal-order__close").on("click", function () {
	$(".modal-description__shadow").fadeOut();
});

$(".modal-description__btn").on("click", function () {
	$(".modal-description__shadow").fadeOut();
	$(".modal-shadow__order").fadeIn();
});

/* modal-window-services================================================*/

$(".services-item__wrap-link").on("click", function () {
	$(".modal-services__shadow").fadeIn();
});

$(".modal-services__close").on("click", function () {
	$(".modal-services__shadow").fadeOut();
});

$(".modal-services__btn").on("click", function () {
	$(".modal-services__shadow").fadeOut();
	$(".modal-shadow__order").fadeIn();
});

/* modal-windows-scheme================================================*/

$("#scheme-call").on("click", function () {
	$("#scheme-call__info").fadeIn();
});

$("#scheme-online").on("click", function () {
	$("#scheme-online__info").fadeIn();
});

$("#scheme-meeting").on("click", function () {
	$("#scheme-meeting__info").fadeIn();
});

$("#scheme-contract").on("click", function () {
	$("#scheme-contract__info").fadeIn();
});

$("#scheme-court").on("click", function () {
	$("#scheme-court__info").fadeIn();
});

$("#scheme-payment").on("click", function () {
	$("#scheme-payment__info").fadeIn();
});

/* animate-to-section================================================*/

var $page = $('html, body');
$('.header-menu__link').click(function() {
	$(".header-menu__list").removeClass("header-menu__list-active");
	$(".header-menu__burger").removeClass("header-menu__burger-active");
	$(".header-menu__burger-close").removeClass("header-menu__burger-close-active");
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
	return false;
});

$('.footer-menu__link').click(function() {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
	return false;
});

/* scheme-section-parallax / arrow-anchor-top================================================*/

$(document).ready(function(){
	$window = $(window);
	$(".section-parallax").each(function(){
		var $bgobj = $(this);
 		$(window).scroll(function() {
 			var yPos = -($window.scrollTop() / 8);
 			var coords = '50% '+ yPos + 'px';
 			$bgobj.css({ backgroundPosition: coords });
 			
 			var yScroll = $window.scrollTop();
 			if (yScroll > 0) {
 				$(".arrow-anchor").addClass("arrow-anchor-active");
 			} else {
 				$(".arrow-anchor").removeClass("arrow-anchor-active");
 			}
 		}); 
 	});    
});

/* arrow-anchor-top================================================*/

$(document).ready(function(){
	$window = $(window);
 	$(window).scroll(function() {
		var yScroll = $window.scrollTop();
		if (yScroll > 0) {
			$(".arrow-anchor").addClass("arrow-anchor-active");
		} else {
			$(".arrow-anchor").removeClass("arrow-anchor-active");
		}
	});
 	$(".arrow-anchor").on("click", function () {
 		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 600);
 	}); 
});

/* multilanguges================================================*/

var arrLang = {
	"ua" : {
		"order-consultation" : "Запис на консультацію",
		"send" : "Відправити",
		"form1" : "Залиште заявку з описом Вашої проблеми і я обов'язково Вам допоможу",
		"name" : "Ім'я",
		"email" : "Пошта",
		"tel" : "Телефон",
		"date" : "Дата і час",
		"problem-descr" : "Опис проблеми",
		"form2" : "Залиште свої контактні дані",
		"form3" : "Я зв'яжусь з Вами в найближчий час",
		"form4" : "Дякую за звернення!",
		"pricing-1" : "Приклад-1",
		"pricing-1-text-1" : "Приклад-1-текст-1",
		"pricing-1-text-2" : "Приклад-1-текст-2",
		"pricing-1-text-3" : "Приклад-1-текст-3",
		"order" : "Замовити",
		"service-1" : "Кримінальні справи",
		"service-1-text-1" : "Приклад-1",
		"service-1-text-2" : "Приклад-2",
		"service-1-text-3" : "Приклад-3",
		"order-service" : "Замовити послугу",
		"address" : "просп.Комарова 40, оф.16, м.Київ, 03065",
		"menu-item-1" : "Послуги",
		"menu-item-2" : "Ціни",
		"menu-item-3" : "Схема роботи",
		"menu-item-4" : "Переваги",
		"menu-item-5" : "FAQ",
		"menu-item-6" : "Документи",
		"menu-item-7" : "Зворотній зв'язок",
		"menu-item-8" : "Контакти",
		"advocat-name" : "Рожкова Наталія Володимирівна",
		"advocat-name-subtitle" : "Юридичні послуги від професіонала",
		"quote-text" : '" В юридичних питаннях слід звертатися не до здорового глузду, а до юристів. "',
		"quote-author" : "Роберт Лембке"
	},
	"ru" : {
		"order-consultation" : "Запись на консультацию",
		"send" : "Отправить",
		"form1" : "Оставьте заявку с описанием Вашей проблемы и я обязательно Вам помогу",
		"name" : "Имя",
		"email" : "Почта",
		"tel" : "Телефон",
		"date" : "Дата и время",
		"problem-descr" : "Описание проблемы",
		"form2" : "Оставьте свои контактные данные",
		"form3" : "Я свяжусь с Вами в ближайшее время",
		"form4" : "Спасибо за обращение!",
		"pricing-1" : "Пример-1",
		"pricing-1-text-1" : "Пример-1-текст-1",
		"pricing-1-text-2" : "Пример-1-текст-2",
		"pricing-1-text-3" : "Пример-1-текст-3",
		"order" : "Заказать",
		"service-1" : "Уголовные дела",
		"service-1-text-1" : "Пример-1",
		"service-1-text-2" : "Пример-2",
		"service-1-text-3" : "Пример-3",
		"order-service" : "Заказать услугу",
		"address" : "просп.Комарова 40, оф.16, г.Киев, 03065",
		"menu-item-1" : "Услуги",
		"menu-item-2" : "Цены",
		"menu-item-3" : "Схема работы",
		"menu-item-4" : "Преимущества",
		"menu-item-5" : "FAQ",
		"menu-item-6" : "Документы",
		"menu-item-7" : "Обратная связь",
		"menu-item-8" : "Контакты",
		"advocat-name" : "Рожкова Наталья Владимировна",
		"advocat-name-subtitle" : "Юридические услуги от професионала",
		"quote-text" : '" В юридических вопросах следует обращаться не к здравому смыслу, а к юристам. "',
		"quote-author" : "Роберт Лембке"
	}
};

$(function() {
	$(".header-top__lang-item").on("click", function () {
		var lang = $(this).attr('id');

		$(".lang").each(function () {
			// console.log(this);
			$(this).text(arrLang[lang][$(this).attr("key")]);
			// $(this).text("test");
		});
	});
});
