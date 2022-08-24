$(document).ready(function(){


    //Monitorar o click no botão "read"
    $('#read').click(function(e){
        e.preventDefault()

        $('p').toggle(1500, function(){
            //Criar uma variavel para receber o status
            let status = $(this).attr('data-status')
            //Limpando o label do btn
            $('#read').empty()
            //Testando o status
            if(status == 1){
                $('#read').append('Esconder resumo')
                $('#read').attr('data-status', '2')
            }else{
                $('#read').append('Ver resumo')
                $('#read').attr('data-status', '1')
            }
        })
    })
})