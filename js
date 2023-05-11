//definimos la funcion
function distancia() {
    //declaramos variables
let v= prompt("Ingresa la velocidad");
let t= prompt("Ingrese el tiempo");
//definimos esto si no se ingresan valores
if(!v){
alert("no tiene velocidad")
} else if (!t){
alert("el tiempo no tiene valor")
} else {
    //calculamos la distancia

    let d= parseInt (v) * parseInt(t);
    document.write(d); 
}
}



//definimos la funcion
function tiempo() {
    //declaramos variables
    let d= prompt("Ingrese la distancia");
    let v= prompt("Ingrese la velocidad");
    //definimos esto si no se ingresan valores
    if (!d){
        alert("No tiene distancia")
    }else if (!v) {
        alert("No tiene velocidad")
    }else {
        //calculamos el tiempo
        let t= parseInt (d) / parseInt(v);
        document.write(t);
    }


}

//definimos la funcion
function velocidad() {
    //declaramos variables
    let d= prompt("Ingrese la distancia");
    let t= prompt("Ingrese el tiempo");
   //definimos esto si no se ingresan valores
    if (!d){
        alert("No tiene distancia")
        }else if (!t) {
            alert("No tiene tiempo")
            }else {
                //calculamos la velocidad
                let v= parseInt (d) / parseInt(t);
                document.write(v);
                }
}

//definimos la funcion
function convertToBinary (number, bin) {

    if (number > 0) {
 return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };  
    return '';
}

//definimos la funcion
function bi(){
    //declaramos variables
    let n= prompt("Ingrese un numero de la tabla");
   //imprimime el resultado
     document.write(
        convertToBinary(n)
    )
}


function tabla () {
    let n= prompt("Ingrese un numero de la tabla");

    if (!n){
        alert("No tiene numero");
    }else {
        let t= parseInt (n);
        for(let j = 1; j <= 12; j++){
            r= j*n;
            document.write(`${j}*${t}= ${r} <br>`)

        }

    }

}

//definimos la funcion
function loops() {
    //declaramos variables
let n = prompt("Ingrese un numero")
if (!n) {
    alert("No tiene numero")
} else {
let t = parseInt (n);
for (let i = 1; i <= t; i++) {

    document.write(i +", ");
}
document.write ("<br>")
for (let i = t; 1 <= i; i--) {
    document.write(i +", ");
}
}
}




