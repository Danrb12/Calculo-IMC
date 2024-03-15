function verificar(){

    var peso = parseFloat(document.getElementById('txtpeso').value)
    var altura = parseFloat(document.getElementById('txtaltura').value)
    
     var imc = peso/(altura*altura)
     
    var resultado = document.getElementById('res')
    resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)}`

    var classificacao = document.getElementById('clas')
    if( imc <= 18.59){
        classificacao.innerHTML = ` Magreza:  Você está abaixo do peso `
       
    } else if ( imc >= 18.6 && imc <= 24.99 ){
        classificacao.innerHTML = ` Normal: Você está no peso ideal `
        
    } else if ( imc >= 25 && imc <= 29.99){
        classificacao.innerHTML = ` Sobrepeso: Você está acima do peso `
       
    } else if ( imc >= 30 && imc <= 39.99){
        classificacao.innerHTML = ` Obesidade: Você está obeso `
        
    } else 
    {
        classificacao.innerHTML = ` Obesidade mórbida: Você está com obesidade grave `
        
    }
  
}
