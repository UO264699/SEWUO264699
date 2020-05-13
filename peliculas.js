"use strict";
class Peliculas {
    constructor(){
        
        this.url = "https://imdb-api.com/en/API/MostPopularMovies/k_nWHZu8ea";
    }

cargarDatos(){
  $.ajax({
    dataType: "json",
    url:this.url,
    method: "GET",
    timeout: 0,
    success: function(peliculas){


      
          var i = 0;
          for(var pelicula in peliculas.items){

                i++;
                $("#peliculas").prepend("<div id =pelicula> <img  src= "+ peliculas.items[pelicula].image + " alt=pelicula"+i +"/>"+ "<div id = titulo" +i + ">"+ peliculas.items[pelicula].fullTitle +"</div><button class = btnp onclick= carrito.añadirPelicula("+i+") id = btnp"+i+">Añadir</button>  </div>")
            
          } 

    },
    error:function(){
      $("h3").html("No se pudo obtener el JSON de <a href='https://imdb-api.com'>IMDB</a>"); 
      }
});
}


}
var peliculas = new Peliculas();
peliculas.cargarDatos();
