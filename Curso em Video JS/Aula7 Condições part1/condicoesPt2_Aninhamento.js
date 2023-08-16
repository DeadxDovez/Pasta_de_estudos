// //Aninhamento de condições

 let idade = 66
 let agora = new Date()
 let hora = agora.getHours()
 if(hora < 12 ){
    console.log(`Agora são ${hora} horas`)
    console.log('Bom Dia')
 }else if(hora <= 18){
    console.log(`Agora são ${hora} horas`)
    console.log('Boa Tarde')
 }else{
    console.log(`Agora são ${hora} horas`)
    console.log('Boa Noite')
 }
 console.log(`Voce tem ${idade} anos`)
 if (idade < 16){
    console.log('Não Vota')
 }else if (idade < 18 || idade > 65){
        console.log('Voto Opcional')
 }else{
        console.log('Voto Obrigatorio')
 }

 
