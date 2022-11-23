var tabela = [
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'e' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'g' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'i' ,'7i' ,'-' ,'-' ,'-' ,'c' ,'p' ,'u' ,'-' ,'-' ,'r' ,'a' ,'m'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'c' ,'s' ,'-' ,'-' ,'-' ,'-' ,'-','-' ,'l' ,'-' ,'-' ,'-' ,'d' ,'-'] ,
    ['-' ,'-' ,'-' ,'c' ,'-' ,'-' ,'-' ,'t' ,'-' ,'-' ,'f' ,'-','d' ,'u' ,'a' ,'l' ,'c' ,'o' ,'r' ,'e'] ,
    ['-','q' ,'u' ,'a' ,'d' ,'c' ,'o' ,'r' ,'e' ,'-' ,'l' ,'-' ,'m' ,'-' ,'-' ,'-' ,'-' ,'-' ,'e' ,'-'] ,
    ['-' ,'-' ,'-' ,'c' ,'-' ,'-' ,'-' ,'a' ,'-','d' ,'a' ,'t' ,'a' ,'b' ,'u' ,'s' ,'-' ,'-' ,'s' ,'-'] ,
    ['-' ,'-','t' ,'h' ,'r' ,'e' ,'a' ,'d' ,'s' ,'-' ,'s' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'s' ,'-'] ,
    ['-' ,'-' ,'-' ,'e' ,'-' ,'-' ,'-' ,'o' ,'-' ,'-' ,'h' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'b' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'-','-' ,'-' ,'-','-' ,'-' ,'-' ,'u' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-','m' ,'e' ,'m' ,'o' ,'r' ,'i' ,'a' ,'d' ,'e' ,'m' ,'a' ,'s' ,'s' ,'a'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'s' ,'-' ,'-' ,'o' ,'5i' ,'-' ,'-' ,'p' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'m' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-','-' ,'-' ,'-' ,'o' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'m' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
]


var countId = 0;

var palavraCruzada = document.getElementById("palavraCruzada");

for (var linha = 0; linha <= 16; linha++) {
    for (var coluna = 0; coluna <= 19; coluna++) {
        var posicao = tabela[linha][coluna]
        if (posicao >= '1' && posicao <= '18') {
            var numero = document.createElement('button');
            // numero.className = 'numero';
            palavraCruzada.appendChild(numero);
            numero.innerHTML = posicao;
        }else if (posicao != '-') {
            var input = document.createElement("input");
            input.id = 'c'+countId;
            input.className = "campo";
            palavraCruzada.appendChild(input);
            input.maxLength = 1;
            countId++;

        } else {
            var vazia = document.createElement('input');
            vazia.className = 'vazia';
            palavraCruzada.appendChild(vazia);
            vazia.disabled = true;
        }

        if (coluna == 21) {
            palavraCruzada.innerHTML += `<br>`
        }
    }
}

function validar() {
    if (c0.value + c1.value + c2.value + c3.value + c12.value + c16.value + c32.value + c38.value + c52.value + c57.value + c60.value + 
        c63.value + c76.value == 'registradores') {
        c0.style.color = 'green'
        c2.style.color = 'green'
        c3.style.color = 'green'
        c1.style.color = 'green'
        c12.style.color = 'green'
        c16.style.color = 'green'
        c32.style.color = 'green'
        c38.style.color = 'green'
        c52.style.color = 'green'
        c57.style.color = 'green'
        c60.style.color = 'green'
        c63.style.color = 'green'
        c76.style.color = 'green'
    }

    if(c3.value+c4.value == 'i7'){
        c3.style.color = 'green'
        c4.style.color = 'green'
    }

    if(c5.value+c6.value+c7.value == 'cpu'){
        c5.style.color = 'green'
        c6.style.color = 'green'
        c7.style.color = 'green'
    }
     
    if(c7.value+c13.value+c20.value == 'ula'){
        c7.style.color = 'green'
        c13.style.color = 'green'
        c20.style.color = 'green'
    }

    if(c8+c9+c10=='ram'){
        c8.style.color = 'green'
        c9.style.color = 'green'
        c10.style.color = 'green'
    }


    if(c9.value+c14.value+c24.value+c36.value+c46.value+c55.value+c59.value+c61.value+c74.value =='adressbus'){
        c9.style.color = 'green'
        c13.style.color = 'green'
        c21.style.color = 'green'
        c36.style.color = 'green'
        c46.style.color = 'green'
        c55.style.color = 'green'
        c59.style.color = 'green'
        c61.style.color = 'green'
        c74.style.color = 'green'
    }

    if(c11.value+c12.value =='cs'){
        c11.style.color = 'green'
        c12.style.color = 'green'
    }


    if(c15.value+c28.value+c37.value+c48.value+c56.value == 'cache'){
        c15.style.color = 'green'
        c28.style.color = 'green'
        c37.style.color = 'green'
        c48.style.color = 'green'
        c56.style.color = 'green'
    }


    if(c17.value+c34.value+c40.value+c54.value+c58.value =='flash'){
        c17.style.color = 'green'
        c34.style.color = 'green'
        c40.style.color = 'green'
        c54.style.color = 'green'
        c58.style.color = 'green'
    }

    if(c18.value+c19.value+c20.value+c21.value+c22.value+c23.value+c24.value+c25.value =='dualcore'){
        c18.style.color = 'green'
        c19.style.color = 'green'
        c20.style.color = 'green'
        c21.style.color = 'green'
        c22.style.color = 'green'
        c23.style.color = 'green'
        c24.style.color = 'green'
        c25.style.color = 'green'
    }

    if(c26.value+c27.value+c28.value+c29.value+c30.value+c31.value+c32.value+c33.value == 'quadcore'){
        c26.style.color = 'green'
        c27.style.color = 'green'
        c28.style.color = 'green'
        c29.style.color = 'green'
        c30.style.color = 'green'
        c31.style.color = 'green'
        c32.style.color = 'green'
        c33.style.color = 'green'
    }

    if(c39.value+c40.value+c41.value+c42.value+c43.value+c44.value+c45.value =='databus'){
        c39.style.color = 'green'
        c40.style.color = 'green'
        c41.style.color = 'green'
        c42.style.color = 'green'
        c43.style.color = 'green'
        c44.style.color = 'green'
        c45.style.color = 'green'
    }

    if(c47.value+c48.value+c49.value+c50.value+c51.value+c52.value+c53.value =='threads'){
        c47.style.color = 'green'
        c48.style.color = 'green'
        c49.style.color = 'green'
        c50.style.color = 'green'
        c51.style.color = 'green'
        c52.style.color = 'green'
        c53.style.color = 'green'
    }

    if(c66.value+c77.value+c80.value =='rom'){
        c66.style.color = 'green'
        c77.style.color = 'green'
        c80.style.color = 'green'
    }

    if(c62.value+c63.value+c64.value+c65.value+c66.value+c67.value+c68.value+c68.value+c69.value+c70.value+c71.value+c72.value+c73.value+
        c74.value+c75.value =='memoriademassa'){

        c62.style.color = 'green'
        c63.style.color = 'green'
        c64.style.color = 'green'
        c65.style.color = 'green'
        c66.style.color = 'green'
        c67.style.color = 'green'
        c68.style.color = 'green'
        c69.style.color = 'green'
        c70.style.color = 'green'
        c71.style.color = 'green'
        c72.style.color = 'green'
        c73.style.color = 'green'
        c74.style.color = 'green'
        c75.style.color = 'green'
    }

    if(c67.value+c78.value == 'i5'){
        c67.style.color = 'green'
        c78.style.color = 'green'
    }

    if(c70.value+c79.value+c81.value+c82.value+c83.value =='eprom'){
        c70.style.color = 'green'
        c79.style.color = 'green'
        c81.style.color = 'green'
        c82.style.color = 'green'
        c83.style.color = 'green'
    }

    if(c18.value+c35.value+c42.value == 'dma'){
        c18.style.color = 'green'
        c35.style.color = 'green'
        c42.style.color = 'green'
    }
}

// var tabela = [
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'1' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'e' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'g' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'4' ,'-' ,'-' ,'-' ,'6' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'2' ,'i' ,'7i' ,'-' ,'-' ,'3' ,'c' ,'p' ,'u' ,'-' ,'5' ,'r' ,'a' ,'m'] ,
//     ['-' ,'-' ,'-' ,'8' ,'-' ,'7' ,'c' ,'s' ,'-' ,'-' ,'9' ,'-' ,'11','-' ,'l' ,'-' ,'-' ,'-' ,'d' ,'-'] ,
//     ['-' ,'-' ,'-' ,'c' ,'-' ,'-' ,'-' ,'t' ,'-' ,'-' ,'f' ,'10','d' ,'u' ,'a' ,'l' ,'c' ,'o' ,'r' ,'e'] ,
//     ['14','q' ,'u' ,'a' ,'d' ,'c' ,'o' ,'r' ,'e' ,'-' ,'l' ,'-' ,'m' ,'-' ,'-' ,'-' ,'-' ,'-' ,'e' ,'-'] ,
//     ['-' ,'-' ,'-' ,'c' ,'-' ,'-' ,'-' ,'a' ,'12','d' ,'a' ,'t' ,'a' ,'b' ,'u' ,'s' ,'-' ,'-' ,'s' ,'-'] ,
//     ['-' ,'13','t' ,'h' ,'r' ,'e' ,'a' ,'d' ,'s' ,'-' ,'s' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'s' ,'-'] ,
//     ['-' ,'-' ,'-' ,'e' ,'-' ,'-' ,'-' ,'o' ,'-' ,'-' ,'h' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'b' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'16','-' ,'-' ,'17','-' ,'-' ,'-' ,'u' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'15','m' ,'e' ,'m' ,'o' ,'r' ,'i' ,'a' ,'d' ,'e' ,'m' ,'a' ,'s' ,'s' ,'a'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'s' ,'-' ,'-' ,'o' ,'5i' ,'-' ,'-' ,'p' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'m' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'18','-' ,'-' ,'-' ,'o' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
//     ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'m' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
// ]