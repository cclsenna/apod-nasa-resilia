document.getElementById('botao').addEventListener('click',getAPI);



function teste (){
    const a=$('#campo-data').val();



}



function getAPI(){

    const x=$('#campo-data').val();

    

    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=EhWtnzHD8M9mO1ZFpF7Y9AcgfwdaM7NzmPtUgafi&date=${x}`,
    method:'get',
    dataType: 'json',

    success: function(result){
        console.log('funcionou');

        document.getElementById('title').innerHTML=result.title;
        document.getElementById('exp').innerHTML=result.explanation;


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



