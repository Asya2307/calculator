document.querySelector('.calculate').addEventListener('click', (e) => {
    var value_1 = document.querySelector('.number-1').value;
    var value_2 = document.querySelector('.number-2').value;
    document.querySelector('.output').innerHTML = +value_1 + +value_2;
})
