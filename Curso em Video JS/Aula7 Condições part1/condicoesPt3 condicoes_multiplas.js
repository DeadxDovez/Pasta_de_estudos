let agora = new Date()
let diaSem = agora.getDay()

//dentro do switch o break entre as cases é obrigatorio
//caso não coloque não causara erro de sintaxe mas tera um erro de Lógica!



//  O ARQUIVO JS ESTA PRONTO PARA RODAR , 
//DE UM F8 (CASO TENHA A EXTENÇÃO NODEEXEC)
// PARA VER COMO FUNCIONA O CODIGO

switch(diaSem){
    case 0:
        console.log('Domingo') 
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Esse dia não existe')
        break
}