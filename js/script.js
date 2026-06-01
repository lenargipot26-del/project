//Объявляем переменную welcоmeButtonModal и сохраняем в нее кнопку c классом welcome__button
const welcоmeButtonModal = document.querySelector(".welcome__button");

//объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть. У него указан класс applications
const modalApplication = document.querySelector(".applications");

//Если есть такая кнопка и модальное окно
if (welcоmeButtonModal && modalApplication) {
//Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
welcоmeButtonModal.addEventListener("click", function(event) {
// удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
 modalApplication.removeAttribute("hidden");
 });
}

// добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться эта функция
window.addEventListener("click", function(event) {
// проверяем, был ли клик на фоне модального окна
 if (event.target === modalApplication) {
//если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
 modalApplication.setAttribute("hidden", true);
}
});