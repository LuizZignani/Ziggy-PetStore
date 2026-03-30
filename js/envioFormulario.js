function enviarFormularioParaEmailCadastrado() {
    getEmail = document.getElementsByClassName("class_input_email")[0].value;
    document.getElementById("FormularioCadastro").action = "https://formsubmit.co/" + getEmail;
}