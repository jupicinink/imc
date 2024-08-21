const form = document.querySelector("#form")

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAlt = e.target.querySelector('#altura');
    // pegando o valor e tranformando em number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAlt.value);
    // caso seja NaN
    if (!peso){
        setResultado('Peso Invalido', false)
        return;
    }
    if (!altura){
        setResultado('Altura Invalido', false)
        return;
    }
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
    
});

function getNivelImc(imc){
    const nivel = ['Abeixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III']
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid)  {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = criaP();
    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('bad')
    }
    resultado.appendChild(p)

}