

 function comprobar(){

    sessionStorage.clear();
    

    if(localStorage.getItem("usuario")){
 
    var usuarios = localStorage.getItem("usuario").split("Nuevo Usuario:");


    console.log(usuarios);
    var usuarioEncontrado = false;
    
    for(var i =0; i<usuarios.length;i++){


        if(document.login.usuario.value + "," + document.login.password.value == usuarios[i]){

            usuarioEncontrado=true;
            
            i==usuarios.length;

        }
     
} 
} else{
    usuarioEncontrado = false;
} if(usuarioEncontrado == false){
            
    alert("Usuario o contraseña incorrectos");
    document.login.action = "index.html";
}
else{
    document.login.action="carta.html";
}
}
 
function registrar(){

    var nombre = document.registro.nombre.value;
    var apellido = document.registro.apellido.value;
    var cif = document.registro.usuario.value;
    var password = document.registro.password.value;
     
    
    
    var nuevoUsuario ="";
    var cifUsuario="";

    var existe = false;
   
  
    if(document.registro.rpassword.value == password){
        
        if(localStorage.getItem("cif")){

            var cifs = localStorage.getItem("cif").split(",");

            for(var i=0;i<cifs.length;i++){

                if(cifs[i] == cif){

                    existe = true;

                }
                
            }

            
        }else{
            cifUsuario += localStorage.getItem("cif") + "," + cif;;
        }

        if(existe == false){


        if(localStorage.getItem("usuario")){

            nuevoUsuario += localStorage.getItem("usuario") + "Nuevo Usuario:" + cif + "," + password;
        }else{

            nuevoUsuario ="Nuevo Usuario:" + cif + "," + password;
        }

       
        

        localStorage.setItem("usuario",nuevoUsuario);
        localStorage.setItem("cif",cifUsuario);
        document.registro.action = "index.html"

    }
    else{
        
        alert("Usuario ya registrado");
        document.registro.action ="registrarse.html"
    }
    }else{
        alert("Las contraseñas no coinciden");
        document.registro.action ="registrarse.html"
        
    }
}



