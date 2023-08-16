let vel = 45
console.log(`A velocidade do seu carro é ${vel} km/h`)
if(vel > 60){ // Condição Simples
    console.log('vc ultrapassou a velocidade, MULTADO!!!')
}
console.log('dirija sempre usando cinto de segurança')



let nome = window.prompt('qual é seu nome?')
let retorno = window.confirm(`Então o seu nome é ${nome}?`)
if (retorno == true){

    if(nome == 'Filipe'){ //Condição Composta
    alert(`Seja bem vindo ${nome}`)
}else{
    alert('só é permitidos Filipes por aqui meu irmão , VAZA')
}
}else{
    alert('cancelou ô maldito ? então tchau!!!')
}