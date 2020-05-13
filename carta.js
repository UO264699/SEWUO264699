"use strict";
class CartaXML {
    constructor(nombre){
        
        this.nombre = "bocadillos.xml";
    }

cargarDatos(){
  $.ajax({
    dataType: "xml",
    url:this.nombre,
    method: "GET",
    timeout : 0,
    success: function(datos){

      var cont = 0;
      
      $(datos).find('bocadillo').each(function(){
           
         cont++;

         $('#bocadillos').prepend( "<div class = bocadillo id = bocadillo" + cont +"></div>");

         var bocadillo = $(this);
         var nombreBocadillo = bocadillo.attr('nombre');
         var srcImagen = $(this).find('imagen').attr('src');
        
         var altImagen = $(this).find('imagen').attr('alt');
         var precio = bocadillo.find('precio').text();
         var moneda = bocadillo.find('precio').attr('moneda');
         var descripcion = bocadillo.find('descripcion').text();

        console.log(altImagen);

         $('#bocadillo' + cont).append("<img class=imgb src="+ srcImagen + " alt="+altImagen + "/>"+ "<p>");
         $('#bocadillo' + cont).append("<h2 id=nombreBocadillo" +cont + ">" + nombreBocadillo + "</h2>");

         $('#bocadillo' + cont).append("<div class=descripcion>" + descripcion + "</div>");

         $('#bocadillo' + cont).append("<h3> Ingredientes: </h3>");
        
         $('#bocadillo' + cont).append("<div id = container></div>");

         $('#bocadillo' + cont).append("<ul id=ingredientes> </ul>");
         $(this).find('ingrediente').each(function(){
              
           var ingrediente = $(this);
           var nombreIngrediente = ingrediente.attr('nombre');
          
           $('#ingredientes').append("<li>" + nombreIngrediente + "</li>");
         })

         $('#bocadillo' + cont).append("<div class=boton ><button class = btnbocadillo onclick=carrito.añadirBocadillo("+ cont +")  id=btnb" + cont+" > "+ precio + " "+ moneda + "</button></div>");

         var porcion = $('porcion');
         var unidadPorcion = porcion.attr('unidad');

         var calorias = $('calorias');
         var unidadCalorias = calorias.attr('unidad');

         var colesterol = $('colesterol');
         var unidadColesterol = colesterol.attr('unidad');

         var grasaTotal = $('grasaTotal');
         var unidadGrasa = grasaTotal.attr('unidad');

         var carbohidratos = $('carbohidratos');
         var unidadCarbohidratos = carbohidratos.attr('unidad');

         var azucares = $('azucares');
         var unidadAzucares = azucares.attr('unidad');

         var proteinas = $('proteinas');
         var unidadProteinas = proteinas.attr('unidad');


        

      })
      
    
    },
    error:function(){
      $("h3").html("No se pudo obtener el XML correctamente"); 
      }
});
}

}
var carta = new CartaXML("bocadillos.xml");
carta.cargarDatos();

