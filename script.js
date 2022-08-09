
const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

const div12wr = document.querySelectorAll('.div-12-wrapper');
const div12m = document.querySelector('.div-12-max');

function nextFunction() {
    count++;
    if (count == 6) {
        count = 0;
        div12wr[0].children[count].classList.add("active-img");
        div12wr[0].children[5].classList.remove("active-img");
        div12m.innerHTML = '<img src="img/1.png" alt="" class="img-12-max">';
    }
    else {
        div12m.innerHTML = '<img src="img/' + (count + 1) + '.png" alt="" class="img-12-max">';
        div12wr[0].children[count].classList.add("active-img");
        div12wr[0].children[count - 1].classList.remove("active-img");
    }
}

function prevFunction() {
    if (count == 0) {
        count = 5;
        div12wr[0].children[0].classList.remove("active-img");
        div12wr[0].children[5].classList.add("active-img");
        div12m.innerHTML = '<img src="img/6.png" alt="" class="img-12-max">';
    } else {
        div12m.innerHTML = '<img src="img/' + (count) + '.png" alt="" class="img-12-max">';
        div12wr[0].children[count - 1].classList.add("active-img");
        div12wr[0].children[count].classList.remove("active-img");
        count--;
    }
}

function resetFunction() {
    div12wr[0].children[count].classList.remove("active-img");
    count = 0;
    div12wr[0].children[0].classList.add("active-img");
    div12m.innerHTML = '<img src="img/1.png" alt="" class="img-12-max">';
}
