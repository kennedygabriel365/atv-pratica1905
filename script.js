let botao = document.querySelector('#botão1');
botao.style.background='#615e5e91';
botao.style.borderRadius = '50px';
botao.innerHTML='Clique para ver uma mensagem';
let contaCliques=0;

botao.addEventListener('mouseover',e =>{
    botao.style.background='lightgrey';
});

botao.addEventListener('mouseout',e =>{
    botao.style.background="#615e5e91";
});

botao.addEventListener('click',e =>{
    
    contaCliques++;
    
    if(contaCliques%2===0){
    botao.innerHTML='Clique para ver uma mensagem';
    }
    else{
    botao.innerHTML='Olá, obrigado pela atenção, esse foi o meu primeiro trabalho no curso de analise e desenvolvimento de sistemas; espero que goste! ATÉ A PROXIMA👋😊';
    }
})  