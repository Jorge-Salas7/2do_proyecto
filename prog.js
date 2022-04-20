var cartas=document.getElementById("cartas");
var linkimg,cont,info;

alert('¡¡¡Hola ya empezara el juego!!!');


function rand(n){
 return(Math.floor(Math.random() * n + 1 ));
}

var cambia_imagen = new Array();
cambia_imagen[0] = "imagenes/1.jpg";
cambia_imagen[1] = "imagenes/2.jpg";
cambia_imagen[2] = "imagenes/3.jpg";
cambia_imagen[3] = "imagenes/4.jpg";
cambia_imagen[4] = "imagenes/5.jpg";
cambia_imagen[5] = "imagenes/6.jpg";
cambia_imagen[6] = "imagenes/7.jpg";
cambia_imagen[7] = "imagenes/8.jpg";
cambia_imagen[8] = "imagenes/9.jpg";
cambia_imagen[9] = "imagenes/10.jpg";
cambia_imagen[10] = "imagenes/11.jpg";
cambia_imagen[11] = "imagenes/12.jpg";
cambia_imagen[12] = "imagenes/13.jpg";
cambia_imagen[13] = "imagenes/14.jpg";
cambia_imagen[14] = "imagenes/15.jpg";
cambia_imagen[15] = "imagenes/16.jpg";
cambia_imagen[16] = "imagenes/17.jpg";
cambia_imagen[17] = "imagenes/18.jpg";
cambia_imagen[18] = "imagenes/19.jpg";
cambia_imagen[19] = "imagenes/20.jpg";
cambia_imagen[20] = "imagenes/21.jpg";
cambia_imagen[21] = "imagenes/22.jpg";
cambia_imagen[22] = "imagenes/23.jpg";
cambia_imagen[23] = "imagenes/24.jpg";
cambia_imagen[24] = "imagenes/25.jpg";
cambia_imagen[25] = "imagenes/26.jpg";
cambia_imagen[26] = "imagenes/27.jpg";
cambia_imagen[27] = "imagenes/28.jpg";
cambia_imagen[28] = "imagenes/29.jpg";
cambia_imagen[29] = "imagenes/30.jpg";
cambia_imagen[30] = "imagenes/31.jpg";
cambia_imagen[31] = "imagenes/32.jpg";
cambia_imagen[32] = "imagenes/33.jpg";
cambia_imagen[33] = "imagenes/34.jpg";
cambia_imagen[34] = "imagenes/35.jpg";
cambia_imagen[35] = "imagenes/36.jpg";
cambia_imagen[36] = "imagenes/37.jpg";
cambia_imagen[37] = "imagenes/38.jpg";
cambia_imagen[38] = "imagenes/39.jpg";
cambia_imagen[39] = "imagenes/40.jpg";
cambia_imagen[40] = "imagenes/41.jpg";
cambia_imagen[41] = "imagenes/42.jpg";
cambia_imagen[42] = "imagenes/43.jpg";
cambia_imagen[43] = "imagenes/44.jpg";
cambia_imagen[44] = "imagenes/45.jpg";
cambia_imagen[45] = "imagenes/46.jpg";
cambia_imagen[46] = "imagenes/47.jpg";
cambia_imagen[47] = "imagenes/48.jpg";
cambia_imagen[48] = "imagenes/49.jpg";
cambia_imagen[49] = "imagenes/50.jpg";
cambia_imagen[50] = "imagenes/51.jpg";
cambia_imagen[51] = "imagenes/52.jpg";
cambia_imagen[52] = "imagenes/53.jpg";
cambia_imagen[53] = "imagenes/54.jpg";

function cambiar(){
     document.getElementById("otra_carta").src = cambia_imagen[rand(10)-1];
}

