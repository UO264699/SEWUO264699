
var geo = new Object()

function initMap(){
    var latlng = {lat : 41.375822, lng:2.177770};




    // generamos el mapa
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 14,
        center: latlng,
        
    });

    var marker = new google.maps.Marker({
        position: latlng,
        draggable: true
    });

    marker.setMap(mapa);

    marker.addListener('dragend', mostrarDireccion);
    

      
  function mostrarDireccion() {
        
        document.getElementById("textoCarrito").innerHTML = "<div>" + marker.getPosition().lat()+","+ marker.getPosition().lng() + "</div>";

        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

}

