
var enviar = document.querySelector("#enviar");

enviar.addEventListener("click", function (event) {
    event.preventDefault();
    /* formulário */
    var formCad = document.querySelector("#formCad");
 

    if (formCad.numero !=3){
        console.log(formCad.nome.value);
    } else {
        console.log(formCad.email.value);
    }
   

});
