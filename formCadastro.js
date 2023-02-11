
var enviar = document.querySelector("#enviar");

enviar.addEventListener("click", function (event) {
    event.preventDefault();
    /* formulário */
    var formCad = document.querySelector("#formCad");
    
    /** Resgatar */
    let form = new FormData(formCad);

    let nome = form.get('nome');
    let numero = form.get('numero');
    let telefone = form.get('celular');
    let email = form.get('email');

    /* 2.1 */
    if((numero / 3) === 0){
        //split separa a string em array 
        alert(nome.split(' ')[0]);
    }
    /* 2.1 */
    else if((numero / 7) === 0){
        //charAt resgata o char da posição 
        alert(telefone.charAt[0] + telefone.charAt[1])
        
    }else {
        let count_name = nome.replaceAll(" ","").length
        let count_email = email.replaceAll("@","").replaceAll(".","").length
        
        alert("char em nome ="+count_name+" /char em email ="+count_email )
    
    }

   

});
