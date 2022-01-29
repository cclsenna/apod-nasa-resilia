//document.getElementById('botao').addEventListener('click',getAPI);

$('#botao').click(()=>{
    if(validacao()) {
        getAPI();
    }
}
    );



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

        if(result.copyright){
            $('#copy').text('Author: '+result.copyright)            

        }
        else{
            $('#copy').text('No Author');         


        }
        





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
        $('.container__bg').css('filter','blur(1.9px)');

              
          
    },

    error: function(){
        alert('Erro na API. Contate o suporte da NASA');
    }
}
    );

    

    

}










function validacao(){

    


    if(!$('#campo-data').val()){
        alert('Campo de data precisa ser preenchido!');
        return false;
    }

    
    return true;

    
}


//1995-06-16,



