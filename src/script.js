
window.addEventListener('DOMContentLoaded', function () {

    const question = document.getElementsByClassName('question'),
        btnUp = document.querySelector('.fa-chevron-up'),
        answer = document.querySelector('.answer')


    for (var i = 0; i < question.length; i++) {
        question[i].addEventListener('click', func, false);
    };
    function func() {
        btnUp.classList.toggle('rotate')
        answer.classList.toggle('d-none')
        answer.classList.toggle('d-block')
    };

});

