const form = document.querySelector('#form');

form.addEventListener('submit', function (event){
    event.preventDefaut();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
    setResultado('peso invalido', false)
    return;
    }

    if(!altura){
        setResultado('altura invalido', false)
        return;
    }
    console.log('chegeui');
})

function criarParagrafo(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg , isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML  = '';

    const p = criarParagrafo();
    p.innerHTML = msg
    resultado.appendChild(p)
}