const img = document.getElementById('img1');

const buttons = document.getElementById('btns');

const trafficlight = (event) => {
    turnOn[event.target.id]();


}



const turnOn = {
    'red':      () => img.src = 'src/img/vermelho.png',
    'yellow':   ()=> img.src ='src/img/amarelo.png',
    'green':    ()=> img.src= 'src/img/verde.png',
    
}


buttons.addEventListener('click', trafficlight);
