var tablero = document.getElementById('canvas').getContext('2d')
var letras = [];
var letra = [];
var palabraCorrecta = "";
var errores = 9;


function elegirPalabra (){
   var palabra = ['COMPUTACION', 'JAVASCRIPT','CSS','SISTEMAS','FUTURO','HTML'];
   var palabraAleatoria = palabra[Math.floor(Math.random()*palabra.length)];
   return palabraAleatoria;
}


var palabraSorteada = elegirPalabra ();

function dibujarLinea (){
   tablero.lineWidth =10;
   tablero.lineCap ='bolt  ';
   tablero.lineJoin ='round';
   tablero.strokeStyle ='blue';
   tablero.beginPath();
   //1000/cantida de letras de la palabra sorteada
   var ancho = 600/palabraSorteada.length;// en 600px van a entrar todas las letras de la palabra seleccionada

   for(i=0;i<palabraSorteada.length;i++){
      tablero.moveTo(100+ancho*i,650)
      tablero.lineTo(150+ancho*i,650)
      tablero.stroke();
   }
   tablero.closePath();
   
}

dibujarLinea(elegirPalabra ())

document.onkeydown = (e) => {
   letra = e.key.toUpperCase()
   
   if(!verificarLetraClicada(e.key)){
       if(palabraSorteada.includes(letra)){
            adicionalLetraCorrecta(palabraSorteada.indexOf(letra))
           for(let i=0; i< palabraSorteada.length;i++){
               if(palabraSorteada[i]===letra){
                   escribirLetraCorrecta(i)
               }
           }
       } 
       else{
           if(!verificarLetraClicada(e.key)) return
           adicionarLetraIncorrecta(letra)
           escribirLetraIncorrecta(letra,errores)
       }
   }
}

function verificarLetraClicada(key){
   if (letras.length <1 || letras.indexOf(key)<0){
       letras.push(key)
       return false
   }
   else{
       letras.push(key)
       return true
   }
}

function adicionalLetraCorrecta (i){
   palabraCorrecta += palabraSorteada[i].toUpperCase();

   
}

function escribirLetraCorrecta(index){
   tablero.font = 'bold 52px Inter';
   tablero.LineWidth = 6;
   tablero.LineCap = 'round';
   tablero.LineJoin = 'round';
   tablero.fillStyle = '#0A3871';
   let ancho = 600/palabraSorteada.length;
   tablero.fillText(palabraSorteada[index],105+(ancho*index),620);
}


function adicionarLetraIncorrecta (letter){
   if(palabraSorteada.indexOf(letter)<=0){
       errores -= 1

       if(errores===0){

         alert('PERDISTE !!!!!!!!!')
      }
   }
}

function escribirLetraIncorrecta (letra, errorsLeft){
   tablero.font = 'bold 40px Inter';
   tablero.LineWidth = 6;
   tablero.LineCap = 'round';
   tablero.LineJoin = 'round';
   tablero.fillStyle = '#0A3871';
   tablero.fillText(letra,135+(40*(10-errorsLeft)),710,40);

}







  



