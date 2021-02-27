    var sets = prompt('ingresa el numero de sets que quieres jugar')
    if (sets < 0){
        alert('ingresa un numero válido')
    }
    var puntuacionSetUsuario = 0
    var puntuacionSetMaquina = 0
    for(let i = 0 ; i < sets ; i++){
    var puntuacionUsuario = 0
    var puntuacionMaquina = 0

    function juego() {
        var arma = parseInt(prompt('Escoge:\n1.Piedra\n2.Papel\n3.Tijera\n4.Lagarto\n5.Spock'))
        var Piedra = 1
        var Papel = 2
        var Tijera = 3
        var Lagarto = 4
        var Spock = 5
        var maquinaEscoge = Math.floor(Math.random() * 5 + 1)

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
    function compararPuntuaciones() {
        puntuacionMaquina = 0
        puntuacionUsuario = 0             
        if(puntuacionSetMaquina == puntuacionSetUsuario){
             alert('Empatamos la partida, hagamos un desempate')
             while (puntuacionMaquina == puntuacionUsuario){
                 juego()
             } 
             if( puntuacionMaquina > puntuacionUsuario){
                 alert("Perdiste")
             } else {
                 alert("Ganaste")
             }
        } else {
            if (puntuacionSetMaquina > puntuacionSetUsuario){
                alert("Perdistelapartida.exe xd")
            } else {
                alert("Ganaste la partida")
            }
        }
   } 

        while (puntuacionMaquina !== 2  && puntuacionUsuario !== 2){
            if (puntuacionMaquina == 2 || puntuacionUsuario == 2){
                
            } else {
                juego()
            }
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
    compararPuntuaciones()