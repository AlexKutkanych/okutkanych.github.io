// //menu pagination

// // var resultPage = $("<div class='food-result__page'></div>");
var resultPage = document.createElement("div");
resultPage.classList.add("food-result__page");

// function myPagination(){

//     var objContent = this;
//     //variables
//     var fullPages = [];
//     var subPages = [];
//     var height = 0;
//     var lastPage = 1;
//     var paginatePages;

//     //init

//     init = function(){
//         objContent.childNodes
//     }
// }


// (function($){
//     $.fn.extend({
//         MyPagination: function(options) {
//             var defaults = {
//                 height: 400,
//                 fadeSpeed: 400
//             };
//             var options = $.extend(defaults, options);

//             // Создаем ссылку на объект
//             var objContent = $(this);

//             // Внутренние переменные
//             var fullPages = new Array();
//             var subPages = new Array();
//             var height = 0;
//             var lastPage = 1;
//             var paginatePages;

//             // Функция инициализации
//             init = function() {
//                 objContent.children().each(function(i){
//                     if (height + this.clientHeight > options.height) {
//                         fullPages.push(subPages);
//                         subPages = new Array();
//                         height = 0;
//                     }

//                     height += this.clientHeight;
//                     subPages.push(this);
//                 });

//                 if (height > 0) {
//                     fullPages.push(subPages);
//                 }

//                 // Оборачиваем каждую полную страницу
//                 $(fullPages).wrap(resultPage);

//                 // Скрываем все обернутые страницы
//                 objContent.children().hide();

//                 // Создаем коллекцию для навигации
//                 paginatePages = objContent.children();

//                 // Показываем первую страницу
//                 showPage(lastPage);

//                 // Выводим элементы управления
//                 showPagination($(paginatePages).length);
//             };

//             // Функция обновления счетчика
//             updateCounter = function(i) {
//                 $('#page_number').html(i);
//             };

//             // Функция вывода страницы
//             showPage = function(page) {
//                 i = page - 1;
//                 if (paginatePages[i]) {

//                     // Скрываем старую страницу, показываем новую
//                     $(paginatePages[lastPage]).fadeOut(options.fadeSpeed);
//                     lastPage = i;
//                     $(paginatePages[lastPage]).fadeIn(options.fadeSpeed);

//                     // и обновлем счетчик
//                     updateCounter(page);
//                 }
//             };


//             // Функция вывода навигации (выводим номера страниц)
//             showPagination = function(numPages) {
//                 var pagins = '';
//                 for (var i = 1; i <= numPages; i++) {
//                     pagins += '<li class="pagination__list-item"><a href="#" class="pagination__link" onclick="showPage(' + i + '); return false;">' + i + '</a></li>';
//                 }
//                 $('.pagination li:first-child').after(pagins);
//             };



//             // Выполняем инициализацию
//             init();

//             // Привязываем два события - нажатие на кнопке "Предыдущая страница"
//             $('.pagination #prev').click(function(e) {
//                 e.preventDefault();
//                 showPage(lastPage);
//             });
//             // и "Следующая страница"
//             $('.pagination #next').click(function(e) {
//                 e.preventDefault();
//                 showPage(lastPage+2);
//             });

//         }
//     });
// })(jQuery);


// // Инициализация
// jQuery(window).load(function() {
//     $('#food-wrapper__result').MyPagination({height: 2000, width: 800, fadeSpeed: 0});
// });


