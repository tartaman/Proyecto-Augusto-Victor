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


/*function intento(){
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
                puntuacionSetUsuario++
            } else {
                alert("perdiste el set")
                puntuacionSetMaquina++
            }
        }
        alert(`sets ganados:${puntuacionSetUsuario}\nsets perdidos:${puntuacionSetMaquina}`)
    }
    if(puntuacionSetUsuario > puntuacionSetMaquina){
        alert("has ganado!")
    } else {
        var deNuevo = prompt("Perdiste, intentar de nuevo? \n1.Si\n2.No")
        if (deNuevo == 1) {
            intento()
        }
    }
}
intento()*/
function definitiva() {
    var sets = prompt('ingresa el numero de sets que quieres jugar')
    if (sets < 0){
        alert('ingresa un numero válido')
    }
    var puntuacionSetUsuario = 0
    var puntuacionSetMaquina = 0
    for(let i = 0 ; i < sets ; i++){
    var puntuacionUsuario = 0
    var puntuacionMaquina = 0
        for(let j = 0 ; j < 3 ; j++){
            var arma = prompt('Escoge:\n1.Piedra\n2.Papel\n3.Tijera\n4.Lagarto\n5.Spock')
            var Piedra = 1
            var Papel = 2
            var Tijera = 3
            var Lagarto = 4
            var Spock = 5
            var maquinaEscoge = Math.floor(Math.random() * 4 + 1)

            if (arma == Papel && maquinaEscoge == Piedra){
                alert("Ganaste, Papel envuelve piedra")
                puntuacionUsuario++
            } else {
                if(arma == Spock && maquinaEscoge == Piedra){
                alert("Ganaste, Spock vaporiza Piedra")
                puntuacionUsuario++
                } else {
                    if (arma == Lagarto && maquinaEscoge == Piedra){
                        alert('Perdiste, Lagarto es aplastado por Piedra')
                        puntuacionMaquina++
                    } else {
                        if (arma == Tijera && maquinaEscoge == Piedra){
                            alert('Perdiste, Tijera es aplatada por Piedra')
                            puntuacionMaquina++
                        } else {
                            if(arma == Piedra && maquinaEscoge == Piedra){
                                alert('Escogiste Piedra y yo Piedra')
                            }
                        }
                    }
                }
            }

            if (arma == Tijera && maquinaEscoge == Papel){
                alert('Ganaste, Tijera corta Papel')
                puntuacionUsuario++
            } else {
                if(arma == Piedra && maquinaEscoge == Papel){
                    alert('Perdiste, Piedra es envuelta por papel')
                    puntuacionMaquina++
                } else {
                    if(arma == Lagarto && maquinaEscoge == Papel){
                        alert('Ganaste, Lagarto come Papel')
                        puntuacionUsuario++
                    } else {
                        if(arma == Spock && maquinaEscoge == Papel){
                            alert('Perdiste, Papel funa a Spock')
                            puntuacionMaquina++
                        } else {
                            if(arma == Papel && maquinaEscoge == Papel){
                                alert('Escogiste Papel y yo Papel')
                            }
                        }
                    }
                }
            }

            if(arma == Piedra && maquinaEscoge == Tijera){
                alert('Ganaste, Piedra aplasta Tijera')
                puntuacionUsuario++
            } else {
                if(arma == Papel && maquinaEscoge == Tijera){
                    alert('Perdiste, Papel es cortado por Tijeras')
                    puntuacionMaquina++
                } else {
                    if(arma == Tijera && maquinaEscoge == Tijera){
                        alert('Escogiste Tijera y yo Tijera')
                    } else {
                        if (arma == Lagarto && maquinaEscoge == Tijera){
                            alert('Perdiste Lagarto es decapitado por Tijera')
                            puntuacionMaquina++
                        } else {
                            if(arma == Spock && maquinaEscoge == Tijera){
                                alert('Ganaste, Spock rompe Tijeras')
                                puntuacionUsuario++
                            } 
                        }
                    }
                }
            }

            if(arma == Piedra && maquinaEscoge == Lagarto){
                alert('Ganaste, Piedra aplasta Lagarto')
                puntuacionUsuario++
            } else {
                if (arma == Papel && maquinaEscoge == Lagarto){
                    alert('Perdiste, Papel es comida de Lagarto')
                    puntuacionMaquina++
                } else {
                    if (arma == Tijera && maquinaEscoge == Lagarto){
                        alert('Ganaste, Tijera decapita Lagarto')
                        puntuacionUsuario++
                    } else {
                        if (arma == Lagarto && maquinaEscoge == Lagarto){
                            alert('Escogiste Lagarto y yo Lagarto')
                        } else {
                            if (arma == Spock && maquinaEscoge == Lagarto){
                                alert('Perdiste, Spock es envenenado por Lagarto')
                                puntuacionMaquina++
                            }
                        }
                    }
                }
            }

            if (arma == Piedra && maquinaEscoge == Spock){
                alert('Perdiste, Spock vaporiza Piedra')
                puntuacionMaquina++
            } else {
                if (arma == Papel && maquinaEscoge == Spock){
                    alert('Ganaste, Papel funa a Spock')
                    puntuacionUsuario++
                } else {
                    if (arma == Tijera && maquinaEscoge == Spock){
                        alert('Perdiste, Tijera es destrozada por Spock')
                        puntuacionMaquina++
                    } else {
                        if (arma == Lagarto && maquinaEscoge == Spock){
                            alert('Ganaste, Lagarto envenena a Spock')
                            puntuacionUsuario++
                        } else {
                            if (arma == Spock && maquinaEscoge == Spock){
                                alert('Escogiste Spock y yo Spock')
                            }
                        }
                    }
                }
            }

            alert(`Puntuacion Usuario: ${puntuacionUsuario}\nPuntuacion Maquina: ${puntuacionMaquina}`)
            
        }
        
        if (puntuacionUsuario < puntuacionMaquina){
                alert('Perdiste el set')
                puntuacionSetMaquina++
            } else {
                if (puntuacionUsuario > puntuacionMaquina){
                    alert('Ganaste el set')
                    puntuacionSetUsuario++
                } else {
                    if (puntuacionUsuario == puntuacionMaquina){
                        alert('Empataste el set')
                    }
                }
            }

         alert(`Sets ganados por la Maquina: ${puntuacionSetMaquina}\nSets ganados por el Usuario: ${puntuacionSetUsuario}`)   
    }
    if (puntuacionSetUsuario > puntuacionSetMaquina){
            alert('Ganaste la partida, Felicidades')
         } else {
             if (puntuacionSetUsuario < puntuacionSetMaquina) {
                 alert('Perdiste la partida, ¡Mejor suerte la próxima!')
                 var nuevo = prompt('Intentar de nuevo?\n1.Si \n2.No')
                 if(nuevo == 1){
                    definitiva()
                 } else {}
             } else {
                 if(puntuacionSetMaquina == puntuacionSetUsuario){
                 alert('Empatamos la partida')
                 var nuevo = prompt('Intentar de nuevo?\n1.Si \n2.No')
                 if (nuevo == 1){
                     definitiva()
                    }
                 } else {}
             }
         }
}
definitiva()