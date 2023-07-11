$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, digite seu nome!!',
            email: 'Por favor, digite seu email!!',
            telefone: 'Por favor, digite seu telefone!!'
        } 
    })
})