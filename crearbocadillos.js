"use strict";
class CrearBocadillo {
    
    crearBocadillo(){

     var sepuede = false;

      var length = document.forms.bocadillo.elements.length;

      var bocadillo = [];

      var bocadillos = "";

     var  cont = 0;

    

      if($("pan").val()  == "Pan"){

        alert("Por favor escoja un pan");
    }
    else{

        bocadillo.push($("pan").val() )
        for(var i=0;i<length;i++){

           
        
            if (document.forms.bocadillo.elements[i].checked){
    
                cont++;
                bocadillo.push(document.forms.bocadillo.elements[i].value);
    
            }
      }

    }

    if(cont == 0){

        alert("Escoja algún ingrediente");
        document.bocadillo.action = "crearbocadillo.html";
    }
    else{

        document.bocadillo.action = "misbocadillos.html";
        bocadillos = bocadillo;

        if(localStorage.getItem("bocadillos")){

            bocadillos += "Nuevo Bocadillo:" + localStorage.getItem("bocadillos")

        }

        localStorage.setItem("bocadillos",bocadillos);

    }
    }

}

var cbocadillo = new CrearBocadillo();

