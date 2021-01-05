function horaCerta(){
    horaAtual = new Date();
    let hr = horaAtual.getHours();
    let mn = horaAtual.getMinutes();
    let sg = horaAtual.getSeconds();
    let mil = horaAtual.getMilliseconds();
    
    let ponteiroHora    = hr * 30 + mn/2;
    let ponteiroMinuto  = mn * 6 + (sg*6)/60;
    let ponteiroSegundos = sg * 6 + mil/166;

    document.querySelector('#hr').style.transform = `rotate(${ponteiroHora}deg)`;
    document.querySelector('#mn').style.transform = `rotate(${ponteiroMinuto}deg)`;
    document.querySelector('#sg').style.transform = `rotate(${ponteiroSegundos}deg)`;
}

let intervalo = setInterval(horaCerta, 1);

const $html = document.querySelector('html');
const $checkbox = document.querySelector('.dark');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode');
});
