let count = document.querySelector('#cantidad');
let price = 400000
let add = document.querySelector('#suma');
let sust = document.querySelector('#resta');
let tot = document.querySelector('#valortotal');

sust.onclick = function () {
    count.innerHTML--;
    tot.innerHTML = (count.innerHTML * price).toLocaleString();
};

add.onclick = function () {
    count.innerHTML++;
    tot.innerHTML = (count.innerHTML * price).toLocaleString();
};
