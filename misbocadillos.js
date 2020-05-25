"use strict";
class MisBocadillos {
    

    mostrarBocadillos(){

        $(document).ready(function(){

            
            if(localStorage.getItem('bocadillos')){

            var listabocadillos = localStorage.getItem('bocadillos');

            var bocadillos = listabocadillos.split('Nuevo Bocadillo:');

            var cont = bocadillos.length;
    
    
            for(var i=0; i<bocadillos.length;i++){
    
                
    
               $("#bocadillos").prepend("<div class=bocadillo id =bocadillo"+cont + "></div>" );
    
                $('#bocadillo' + cont).append("<h3 id=nombreBocadillo"+ cont + "> Bocadillo "+ cont +"</h3>")
    
                var ingredientes = bocadillos[i].split(',');
    
                for(var j = 0;j<ingredientes.length;j++){
    
                    if(ingredientes[j] != ""){
    
                      
                        $('#bocadillo' + cont).append("<div  id =ingrediente>"+ ingredientes[j] +"</div>")
                          
    
                    }
                }

                $('#bocadillo' + cont).append("<button class = btnbocadillo onclick=carrito.añadirBocadillo("+ cont +")  id=btnb" + cont+" >Añadir"+"</button>")
                cont--;
    
            }

        }
        })
    }
       
}

var misBocadillos = new MisBocadillos();
misBocadillos.mostrarBocadillos();