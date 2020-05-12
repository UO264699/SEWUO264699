"use strict";
class Carrito {
    
    

    añadirPelicula(index){

        var textocarrito = "";
        var pelicula = document.getElementById("titulo" + index).innerHTML;
        
        $('#textoCarrito').append("<div id=elementocarrito>" + pelicula + "</div>");
    
       if(sessionStorage.getItem("carrito")){

            textocarrito += sessionStorage.getItem("carrito") + "," + pelicula;
       }

        else{

            textocarrito = pelicula;
        }

       sessionStorage.setItem("carrito",textocarrito);

    
        
    }

    añadirBocadillo(index){

        var textocarrito = "";

          var bocadillo = document.getElementById('nombreBocadillo' + index).innerHTML;
          var precio = document.getElementById('btnb' + index).innerHTML;
          
          $('#textoCarrito').append("<div id=elementocarrito>" + bocadillo + " " + precio + "</div>");

          if(sessionStorage.getItem("carrito")){

            textocarrito += sessionStorage.getItem("carrito") + "," + bocadillo+ " " + precio;
       }
       else{

        textocarrito = bocadillo+ " " + precio;
       }

       sessionStorage.setItem("carrito",textocarrito);
          

        
    }

    mostrarCarrito(){

        $(document).ready(function(){


            if(sessionStorage.getItem("carrito")){

        var listacarrito = sessionStorage.getItem("carrito").split(",");

        for(var i=0;i<listacarrito.length;i++){

            $('#textoCarrito').append("<div id=elementocarrito>" + listacarrito[i] + "</div>");

        }
    }
    })
    }

    borrarCarrito(){

             $('#textoCarrito').html("");
             sessionStorage.clear();

    }

    hacerPedido(){

        if(sessionStorage.getItem('carrito')){

            $('#textoCarrito').html("");
            sessionStorage.clear();
            alert("Pedido realizado");

        }
        else{

            alert("No hay elementos en el carrito");

        }

         
    }


}
var carrito = new Carrito();
carrito.mostrarCarrito();
