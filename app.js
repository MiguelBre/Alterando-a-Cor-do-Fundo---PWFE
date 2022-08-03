'use strict'

function mudarCor (){
    const nomeCor = document.getElementById('cor').value.toLowerCase();
    let cor = '#FFFFFF';
    if(nomeCor == 'vermelho'){
        cor = '#FF0000';
    } else if (nomeCor == 'verde'){
        cor = '#00FF00';
    } else if (nomeCor == 'azul'){
        cor = '#0000FF';
    } else if (nomeCor == 'amarelo'){
        cor = '#FFFF00';
    } else if (nomeCor == 'Padrão'){
        cor = '#FFFFFF';
    }

    //document.body.style.backgroundColor = `#${cor}`;
    document.documentElement.style.setProperty('--bg-color', `${cor}`);


}

document.getElementById('aplicar').addEventListener('click', mudarCor);
