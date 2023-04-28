const opcoesLinguagens = ["JavaScript","Python", "TypeScript", "PHP"];
const APIKey = document.getElementById('APIkey');
const botaoTraduzir = document.getElementById('botaoTraduzir');
const linguagemInput = document.getElementById('ling_input');
const linguagemOutput = document.getElementById('ling_output');

//select elements
for(let i = 0; i < opcoesLinguagens.length; i++){
   linguagemInput.innerHTML += `<option value="${opcoesLinguagens[i]}">${opcoesLinguagens[i]}</option>`;
   linguagemOutput.innerHTML += `<option value="${opcoesLinguagens[i]}">${opcoesLinguagens[i]}</option>`;
}


//get API key

//choose input language

//choose output language

//eventListener translate button

//call API

//handle response
