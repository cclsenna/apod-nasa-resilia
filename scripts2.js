//document.getElementById('botao').addEventListener('click',getAPI);

$('#botao').click(getAPI);



function teste (){
    const a=$('#campo-data').val();

}



function getAPI(){

    const x=$('#campo-data').val();

    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=EhWtnzHD8M9mO1ZFpF7Y9AcgfwdaM7NzmPtUgafi&date=${x}`,
    method:'get',
    dataType: 'json',

    success: function(result){
        $('#title').text(result.title);
        $('#exp').text(result.explanation);
        $('#copy').text('Autor: '+result.copyright);



        if(result.media_type=='video'){
            $('#frame').css('display','block');
            $('#ibagem').css('display','none');
            $('#frame').attr("src",result.url);
        }
        else {
            $('#frame').css('display','none');
            $('#ibagem').css('display','block');
            $('#ibagem').attr("src",result.url);
        }

              
          
    },

    error: function(){
        alert('Erro na API. Contate o suporte da NASA');
    }
}
    );

    

    

}










function validacao(){
    if(!$('#campo-data').val()){
        return false;
    }
    return;

    
}



