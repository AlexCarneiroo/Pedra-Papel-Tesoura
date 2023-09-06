const player = document.querySelectorAll('.player div img');
const inimigo = document.querySelectorAll('.oponent div img');
let playerOpt = "";
let inimigoOpt = "";

function verificarVitoria(){
    const vitoriaa = document.querySelector('.vitoria');

    if(playerOpt == 'papel'){

        if(inimigoOpt == 'papel'){
            vitoriaa.innerHTML = 'O Jogo foi empate'
        }else if(inimigoOpt == 'pedra'){
            vitoriaa.innerHTML = 'Voce Venceu!'
        }else if(inimigoOpt == 'tesoura'){
            vitoriaa.innerHTML = 'Voce perdeu! :('
        }
    }
    if(playerOpt == 'pedra'){

        if(inimigoOpt == 'papel'){
            vitoriaa.innerHTML = 'Voce perdeu! :('
        }else if(inimigoOpt == 'pedra'){
            vitoriaa.innerHTML = 'O Jogo foi empate'
        }else if(inimigoOpt == 'tesoura'){
            vitoriaa.innerHTML = 'Voce Venceu!'
        }
    }
    if(playerOpt == 'tesoura'){

        if(inimigoOpt == 'papel'){
            vitoriaa.innerHTML = 'Voce Venceu!'
        }else if(inimigoOpt == 'pedra'){
            vitoriaa.innerHTML = 'Voce perdeu! :('
        }else if(inimigoOpt == 'tesoura'){
            vitoriaa.innerHTML = 'O Jogo foi empate'
        }
    }

}

function check(){
    
    for(let i = 0; i < player.length; i++){
        player[i].style.opacity = 0.3;
        player[i].classList.remove('voce')
    }

    for(let i = 0; i < inimigo.length; i++){
        inimigo[i].style.opacity = 0.3;
        inimigo[i].classList.remove('inimigo')
    }

}

function playerInimigo(){
    let rand =Math.floor(Math.random()*3);

    for(let i = 0 ; i < inimigo.length ; i++){
        if(i == rand){
            inimigo[i].style.opacity =1;
            inimigo[i].classList.add('inimigo')

            inimigoOpt = inimigo[i].getAttribute('opt')
        }

    }
    console.log(playerOpt)
    console.log(inimigoOpt);

}

for(let i = 0 ; i < player.length; i++){
    player[i].addEventListener('click' , (e)=>{
        check()
        e.target.style.opacity = 1;
        e.target.classList.add('voce')

        playerOpt = e.target.getAttribute('opt')

        playerInimigo();
        verificarVitoria();
    })
}
