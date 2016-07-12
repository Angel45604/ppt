function mostrar(){
	
	document.getElementById('inicial').style.display='none';
	document.getElementById('juego').style.display='block';
}

function volver(){
	
	document.getElementById('resultado').style.display='none';
	document.getElementById('juego').style.display='block';
}

function inicial(){
	
	document.getElementById('resultado').style.display='none';
	document.getElementById('inicial').style.display='block';
}

function jugar(opcionUsuario){
function aleatorio(minimo,maximo){

    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    var eleccion = opciones[numero];
    return eleccion;
}

var mensaje;
var opciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"]; 
var opcionMaquina = aleatorio(0,4);
    
if(opcionUsuario == opcionMaquina)
{
    mensaje = "<h2>Empate<br /><img src='img/empate.png' width='250px'/></h2>";
}
else if(opcionUsuario == "Piedra" && opcionMaquina == "Tijeras"
||
opcionUsuario == "Piedra" && opcionMaquina == "Lagarto"
||
opcionUsuario == "Papel" && opcionMaquina == "Spock"
||
opcionUsuario == "Papel" && opcionMaquina == "Piedra"
||
opcionUsuario == "Tijeras" && opcionMaquina == "Lagarto"
||
opcionUsuario == "Tijeras" && opcionMaquina == "Papel"
||
opcionUsuario == "Lagarto" && opcionMaquina == "Spock"
||
opcionUsuario == "Lagarto" && opcionMaquina == "Papel"
||
opcionUsuario == "Spock" && opcionMaquina == "Piedra"
||
opcionUsuario == "Spock" && opcionMaquina == "Tijeras"
){							
    mensaje = "<h2>Ganaste<br><img src='img/ganaste.png'width='250px'/></h2>";
}
else							
{
    mensaje = "<h2>Perdiste<br><img src='img/perdiste.png' width='250px'/></h2>";
}
 
document.getElementById('juego').style.display = "none";		
document.getElementById('resultado').style.display = "block";
document.getElementById('resultado').innerHTML = 

	"<p><span>Elegiste</span>" + "<span>" + opcionUsuario + "</span>" + 
	" y <span>La máquina eligió</span>" + "<span>" + opcionMaquina + "</span>" 
	+ ".</p>" + mensaje + "<h3 onClick='volver()'>Volver a jugar</h3>" + 
	 "<a onClick='inicial()'>Volver a la página principal</a>";

}