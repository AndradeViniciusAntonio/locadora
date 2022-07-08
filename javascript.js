function loginUsuario() {

    let a1 = document.getElementById('1').value;
    let a2 = document.getElementById('2').value;

    if ((a1 === "") || (a2 === "")){

        alert(" Por favor digite o usuario e a senha !")


    } else {

        sessionStorage.setItem("lastname", document.getElementById("1").value);
        alert(" Bem Vindo: "  + sessionStorage.getItem("lastname") + " ! ");

        window.location.replace("home.html")


        


    }




}


function logado(){
  
    document.getElementById("user").innerHTML = sessionStorage.getItem("lastname");
}