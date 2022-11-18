var tabela = [
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'1' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'e' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'g' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'4' ,'-' ,'-' ,'-' ,'6' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'2' ,'i' ,'7' ,'-' ,'-' ,'3' ,'c' ,'p' ,'u' ,'-' ,'5' ,'r' ,'a' ,'m'] ,
    ['-' ,'-' ,'-' ,'8' ,'-' ,'7' ,'c' ,'s' ,'-' ,'-' ,'9' ,'-' ,'11','-' ,'l' ,'-' ,'-' ,'-' ,'d' ,'-'] ,
    ['-' ,'-' ,'-' ,'c' ,'-' ,'-' ,'-' ,'t' ,'-' ,'-' ,'f' ,'10','d' ,'u' ,'a' ,'l' ,'c' ,'o' ,'r' ,'e'] ,
    ['14','q' ,'u' ,'a' ,'d' ,'c' ,'o' ,'r' ,'e' ,'-' ,'l' ,'-' ,'m' ,'-' ,'-' ,'-' ,'-' ,'-' ,'e' ,'-'] ,
    ['-' ,'-' ,'-' ,'c' ,'-' ,'-' ,'-' ,'a' ,'12','d' ,'a' ,'t' ,'a' ,'b' ,'u' ,'s' ,'-' ,'-' ,'s' ,'-'] ,
    ['-' ,'13','t' ,'h' ,'r' ,'e' ,'a' ,'d' ,'s' ,'-' ,'s' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'s' ,'-'] ,
    ['-' ,'-' ,'-' ,'e' ,'-' ,'-' ,'-' ,'o' ,'-' ,'-' ,'h' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'b' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'16','-' ,'-' ,'17','-' ,'-' ,'-' ,'u' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'15','m' ,'e' ,'m' ,'o' ,'r' ,'i' ,'a' ,'d' ,'e' ,'m' ,'a' ,'s' ,'s' ,'a'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'s' ,'-' ,'-' ,'o' ,'5' ,'-' ,'-' ,'p' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'m' ,'-' ,'-' ,'-' ,'r' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'18','-' ,'-' ,'-' ,'o' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
    ['-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'-' ,'m' ,'-' ,'-' ,'-' ,'-' ,'-'] ,
]

var countId = 0;
var palavraCruzada = document.getElementById("palavraCruzada");

for (var linha = 0; linha <= 16; linha++) {
    for (var coluna = 0; coluna <= 21; coluna++) {
        var posicao = tabela[linha][coluna]
        if (posicao == '-') {
            var vazia = document.createElement('input');
            vazia.className = 'vazia';
            palavraCruzada.appendChild(vazia);
            vazia.disabled = true;
        }else if (posicao >= 1 && posicao <= 18) {
            var numero = document.createElement('span');
            numero.className = 'numero';
            palavraCruzada.appendChild(numero);
            numero.innerHTML = posicao;
        } else {
            var campo = document.createElement('input');
            campo.className = 'campo';
            palavraCruzada.appendChild(campo);
            campo.maxLength = 1;
        }

        if (coluna == 21) {
            palavraCruzada.innerHTML += `<br>`
        }
    }
}