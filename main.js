//variables
let vidaRestante =3;
let seguir=true;

//funciones
//
function vidaRestanteResta(x , y){
    return vidaRestante= x-y;
}

function vidaRestanteSuma(x , y){
    return vidaRestante= x+y;
}

function parOInpar(numero){
    if (numero % 2===0 ){
        alert (`la moneda cae y te da una vida extra por acertar`)
        return vidaRestanteSuma(vidaRestante ,1);
    } else{
        alert (`la moneda cae y te quita una vida por no acertar`)
        return vidaRestanteResta(vidaRestante ,1);
    }
}

//comienza el juego
while (seguir!=false && vidaRestante>0){
    let ingresar = prompt(`Bienvenido al juego desea continuar? escriba si o no` ).toLowerCase();
    if(ingresar.toLowerCase()==="si" ){
        alert("bienvenido a la aventura")
        let opcion=parseInt(prompt("Estas en la entrada del juego hay 3 puertas , que puerta va a tomar? 1,2,3? si quieres saber tus vidas presiona 0"))
        //aquiva el switch
        switch(opcion){
            case 0:
                alert(`Sus vidas son ${vidaRestante}`)
            break;
            case 1:
                let opcionDragon1=parseInt(prompt(`Un Dragon aparece tienes 3 opciones presiona el 1 , 2, 3`));
                if (opcionDragon1===1){
                    vidaRestanteResta(vidaRestante,1)
                    alert (`el dragon te ataco ahora tu vida es de ${vidaRestante} `)
                }else if (opcionDragon1===2){
                    alert("salistes de la habitacion ya que el miedo se apodero de ti")

                }else if (opcionDragon1===3){
                    vidaRestanteSuma(vidaRestante,1)
                    alert (`Matastes al dragon ganastes una vida extra, tu vida es de ${vidaRestante}`)
                }
                else{
                    alert ("opcion invalida")
                }
            break;
            case 2:
                let opcionDragon2=parseInt(prompt("Has encontrado al mago Oscuro y te pide que tires una moneda , oprime 1 para cara o 2 para cruz"));
                if (opcionDragon2 <=2 && opcionDragon2>=1 ){
                    parOInpar(opcionDragon2)
                    alert (`su vida es de ${vidaRestante}`)
                }else{
                    alert("ups la moneda cayo pero se quebro, el mago deja irte sin reto")
                }
            break;
            case 3:
                alert("aparece que dentro de la habitacion se encuentra una persona de tercera edad")
                alert("Hola aventurero , te propongo un acertijo, te doy 3 intentos si fallas te quitare 3 vidas si ganas te dare 3")
                for (let i=1; i<=3; i++){
                    let opcionDragon3=prompt("Un animal que hace 'miau'").toLowerCase();
                    if (opcionDragon3 ==="gato"){
                        vidaRestante=vidaRestante+3
                        alert (`La respuesta es correcta , te ganastes ${vidaRestante}`)
                        break;
                    }else{
                        if (i>=3){
                            vidaRestante=vidaRestante-3
                            alert(`no hay aciertos , su vida actual es de ${vidaRestante}`)
                        }else{
                            alert("Respuesta incorrecta intente nuevamente")
                        }
                    }
                }
            break;
        }  
        //termina el switch
    }else{ 
        seguir=false;
        alert(`el resto de sus vidas fue de ${vidaRestante}`);
        alert(`Esta saliendo del juego`);
        alert(`fin del programa`);
    } 
}
alert("Game Over");





