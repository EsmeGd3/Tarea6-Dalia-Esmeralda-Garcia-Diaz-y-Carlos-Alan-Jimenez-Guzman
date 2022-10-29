function myFunction() {
    // Get the value of the input field with id="palabra"
    let x1 = document.getElementById("numeroC").value;
    const regex = /^(m|c)?[0-9]{2}(120|121)[0-9]{3}$/i;
    const valNC = regex.exec(x1); 
 

    if (regex.test(x1)) {
      text="numero de control valido";
      console.log(""+valNC);
    }
    else {
      text="numero de control no valido";
    }
  
    document.getElementById("valida_numeroC").innerHTML = text;
    
    // Get the value of the input field with id="numeroRFC"
        let x2 = document.getElementById("numeroRFC").value;
        const regex2 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
        const FechaNac = regex2.exec(x2); 

        
    
       
      
        if (regex2.test(x2)) {
          text="RFC valido";
          console.log("Fecha de nacimiento: "+FechaNac)
          
        }
        else {
          text="RFC no valido";
        }
      
        document.getElementById("valida_numeroRFC").innerHTML = text;
  
    // Get the value of the input field with id="numerot"
    let x3 = document.getElementById("numerot").value;
    const regex3 = /^[4][4][3]\d{7}$/
  
    if (regex3.test(x3)) {
      text="Numero de telefono valido";
    }
    else {
      text="Numero de telefono no valido";
    }
  
    document.getElementById("valida_numerot").innerHTML = text;
  
  
   // Get the value of the input field with id="correo"
   let x4 = document.getElementById("correo").value;
   const regex4 = /^(l)((m|c)?[0-9]{2}(120|121)[0-9]{3})(@morelia.tecnm.mx)$/i;
 
   
  if (regex4.test(x4)) {
    const Correo = regex4.exec(x4); 
    console.log(""+Correo);
    console.log("Correo: "+Correo[2]);
    console.log("Número de control: "+valNC[0]);


    if(Correo[2] == valNC[0]){
    text="Correo valido";
    console.log("valido");
    text ="Correo válido";
    document.getElementById("Correo_valido").innerHTML = text;
    
  
  }
  else{
      
      console.log("no valido")
      text ="Correo no válido";
      document.getElementById("Correo_valido").innerHTML = text;
      text="El correo no coincide con el número de control";
    document.getElementById("valida_correo").innerHTML = text;
    }
    
  }
 
   document.getElementById("valida_correo").innerHTML = text;

   let x5 = document.getElementById("nombre").value;
     const regex5 = /[A-Z a-z]*[a-z]*/i;
     const nombre = regex5.exec(x5); 
     console.log("Nombre: "+nombre);
     const Concatenados = "Usuario verificado: "+nombre+" nacido el "+FechaNac[1];
     document.getElementById("Datos_Generados").innerHTML = Concatenados;
  }
 