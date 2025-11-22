const form = document.querySelector("form") ?? null;
try {
    const form = document.querySelector("form") ?? null;
    const nomeinput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#assunto");
    const mensagemtextarea = document.querySelector("#mensagem");
    const enviarbtn = document.querySelector("#enviar-btn");
    function validarFormulario(evento) {

        evento.preventDefault();
        let valido = true;
        if (nomeinput.value.trim() === '') {
            valido = false;
            alert("O campo de nome não pode ser vazio!");
        }
        if (mensagemtextarea.value.trim() === '') {
            valido = false;
            alert("Mensagem não pode ser vazia")
        }
        else if (mensagemtextarea.value.trim().length > 500) {
            valido = false;
            alert("Mesangem nao pode estar vazia")
        }
        if (valido) {
            alert("agradecemos seu contato")
            form.submit();
        }
    }
    enviarbtn.addEventListener('click', validarFormulario);
} catch (exception) {
    console.log(exception.message);
}
