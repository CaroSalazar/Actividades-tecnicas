function imprimirFila(fila){
    let filaString = "|"

    for(let i =0; i<9;i++){
        if(fila[i]!=-1){
            filaString += " " +fila[i] + " |"
        }else{
            filaString += "    |"
        }
    }
    console.log(filaString)
}

bingo()
function numerosAleatorios(){

    let numerosBingo = []
    let contador = 0
    
    let cerotena = []
    let decena = []
    let veintena = []
    let treintena = []
    let cuarentena = []
    let cincuentena = []
    let sesentena = []
    let setentena = []
    let ochentena = []

    
    while(contador<15){
        let numeroAleatorio = Math.trunc(Math.random()*90)
        
        if(0<=numeroAleatorio && numeroAleatorio<=9 && cerotena.length != 2 && cerotena.indexOf(numeroAleatorio) == -1){
            contador++
            cerotena.push(numeroAleatorio)
        }else if(10<=numeroAleatorio && numeroAleatorio<=19 && decena.length != 2 && decena.indexOf(numeroAleatorio) == -1){
            contador++
            decena.push(numeroAleatorio)
        }else if(20<=numeroAleatorio && numeroAleatorio<=29 && veintena.length != 2 && veintena.indexOf(numeroAleatorio) == -1){
            contador++
            veintena.push(numeroAleatorio)
        }else if(30<=numeroAleatorio && numeroAleatorio<=39 && treintena.length != 2 && treintena.indexOf(numeroAleatorio) == -1){
            contador++
            treintena.push(numeroAleatorio)
        }else if(40<=numeroAleatorio && numeroAleatorio<=49 && cuarentena.length != 2 && cuarentena.indexOf(numeroAleatorio) == -1){
            contador++
            cuarentena.push(numeroAleatorio)
        }else if(50<=numeroAleatorio && numeroAleatorio<=59 && cincuentena.length != 2 && cincuentena.indexOf(numeroAleatorio) == -1){
            contador++
            cincuentena.push(numeroAleatorio)
        }else if(60<=numeroAleatorio && numeroAleatorio<=69 && sesentena.length != 2 && sesentena.indexOf(numeroAleatorio) == -1){
            contador++
            sesentena.push(numeroAleatorio)
        }else if(70<=numeroAleatorio && numeroAleatorio<=79 && setentena.length != 2 && setentena.indexOf(numeroAleatorio) == -1){
            contador++
            setentena.push(numeroAleatorio)
        }else if(80<=numeroAleatorio && numeroAleatorio<=90 && ochentena.length != 2 && ochentena.indexOf(numeroAleatorio) == -1){
            contador++
            ochentena.push(numeroAleatorio)
        }
    }
    numerosBingo.push(cerotena)
    numerosBingo.push(decena)
    numerosBingo.push(veintena)
    numerosBingo.push(treintena)
    numerosBingo.push(cuarentena)
    numerosBingo.push(cincuentena)
    numerosBingo.push(sesentena)
    numerosBingo.push(setentena)
    numerosBingo.push(ochentena)



    return numerosBingo
}

function ordenarArray(array){
    array.sort((a,b)=> a-b)
}

function separarNumeros(numeros){
    numeros.forEach(element => {
        ordenarArray(element)       
    });
    let numerosBingo = []
    let filas = []
    
    let contador =0
    while(contador<2){
        aleatorios(numeros)

        numeros.forEach((array)=>{
            if(array[0]){
                numerosBingo.push(array[0])
                array.shift()
            }
        })
        contador++
    }

    let fila = []

    for(let i=0; i<3;i++){
        fila = numerosBingo.slice(0+5*i,5+5*i)
        filas.push(fila)
    }

    filas.forEach((fila)=>{
        ordenarArray(fila)
    })

    return filas
}

function armarFila(filaRaw){
    let fila = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
    for(let i = 0; i<filaRaw.length;i++){
        if(Math.trunc(filaRaw[i]/80)==1){
            fila[8] = filaRaw[i]
        }else if(Math.trunc(filaRaw[i]/70)==1){
            fila[7] = filaRaw[i]
        }else if(Math.trunc(filaRaw[i]/60)==1){
            fila[6] = filaRaw[i]
        }else if(Math.trunc(filaRaw[i]/50)==1){
            fila[5] = filaRaw[i]
        }else if(Math.trunc(filaRaw[i]/40)==1){
            fila[4] = filaRaw[i]
        }else if(Math.trunc(filaRaw[i]/30)==1){
            fila[3] = filaRaw[i]
        }else if(Math.trunc(filaRaw[i]/20)==1){
            fila[2] = filaRaw[i]
        }else if(Math.trunc(filaRaw[i]/10)==1){
            fila[1] = filaRaw[i]
        }else {
            fila[0] = "0"+filaRaw[i]
        }
    } 

    return fila
}

function aleatorios(lista) {
    return lista.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 9)
  }
function bingo(){
    let filasRaw = separarNumeros(numerosAleatorios())

    console.log("----------------------------------------------")
    for(let i=0;i<3;i++){
        imprimirFila(armarFila(filasRaw[i]))
    }
    console.log("----------------------------------------------")
}