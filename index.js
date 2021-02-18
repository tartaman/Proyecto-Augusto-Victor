/*function Proyecto() {
    const escoge = prompt("Escoge cuantos sets quieres jugar");
    if (sets > 3){
        alert("por favor escoge menos de 3 sets")
        Proyecto()
    }
    if (sets <= 3){

    const escogeMaquina = Math.floor(Math.random()* 5)
    if (escogeMaquina <= 0){
        numeroEscogido++
    }
    if (escogeMaquina == 1){
        escogeMaquina = "Piedra"
    }
    if(escoge == null){
    } else { if (escoge > 5) {
           alert("por favor ingresa un número válido")
           miFuncion()
       } else {
           if (escoge < 1){
               alert("por favor ingresa un número válido")
               miFuncion()
           } else {
               if (escoge.length > 1){
                   alert("por favor ingresa un número válido")
                   miFuncion()
                   } else {
                   if (escoge == escogeMaquina) {
                       alert(`Empatamos, tu escogiste ${escoge} y yo ${escogeMaquina}`)
                   }  else  {
                       alert(`Diablos, no lo lograste, mejor suerte la proxima :D, yo escogí ${numeroEscogido} y tu escogiste ${numero}`)
                       var intento = prompt("Intentar de nuevo? \n 1.Si \n 2.No")
                       if (intento == 1){
                           miFuncion()
                       } else {
                           alert("recarga la página si quieres intentar de nuevo")
                       }
                   }
               }
           }
       }
    }
}
}
Proyecto()*/
function intento(){
    var sets = prompt("¿cuantos sets quieres jugar?")
    if(sets < 0){
        alert("escoge un numero valido")
        intento()
    }
    if (sets > 3 ){
    alert("escoge un numero menor a 3")
    }
    var puntuacionSetUsuario = 0
    var puntuacionSetMaquina = 0
    for(let i = 0 ; i < sets ; i++){
        var puntuacionUsuario = 0
        var puntuacionMaquina = 0

        for(let j = 0 ; j < 3 ; j++){

            var escoge = prompt("Escoge uno \n1.piedra\n2.papel\n3.tijera")
            var  maquinaescoge = Math.floor(Math.random() * 2 + 1)
   
            const piedra = 1
            const papel = 2
            const tijera = 3
        
            if((escoge == piedra && maquinaescoge == papel )){
                alert("perdiste, escogiste piedra y yo papel")
                puntuacionMaquina++
            }    
            if ((escoge == papel && maquinaescoge == tijera)){
                alert("perdiste, escogiste papel y yo tijera")
                puntuacionMaquina++
            }

            if((escoge == tijera && maquinaescoge == piedra)){
                alert("perdiste, escogiste tijera y yo piedra")
                puntuacionMaquina++
            }

                if((escoge == piedra && maquinaescoge == tijera )){
                    alert("ganaste , escogiste piedra y yo tijera")
                    puntuacionUsuario++
                }    
                    if ((escoge == papel && maquinaescoge == piedra)){
                        alert("ganaste, escogiste papel y yo piedra")
                    puntuacionUsuario++
                    }
            if((escoge == tijera && maquinaescoge == papel)){
                alert("ganaste, escogiste tijera y yo papel")
                puntuacionUsuario++
            }
    
            if(escoge == maquinaescoge){
                alert("empatamos")
            }
            alert(`Usuario:${puntuacionUsuario}\nMaquina:${puntuacionMaquina}`)
        }
        if(puntuacionUsuario == puntuacionMaquina){
            alert("Empataron el primer set")
            
        } else {
            if(puntuacionUsuario > puntuacionMaquina){
                alert("ganaste el set")
            } else {
                alert("perdiste el set")
            }
        }

    }



    
}intento()