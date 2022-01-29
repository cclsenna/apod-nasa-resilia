//evento para chamar a função
$('#botao').click(()=>{
    if(validacao()) {
        getAPI();
    }
}
    );



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
    let dataFmt=Date.parse($('#campo-data').val());
    let today=Date.now();
    let min=Date.parse('1995-06-16'); 

    if(!$('#campo-data').val()){
        alert('Campo de data precisa ser preenchido!');
        return false;
    }
    else if(dataFmt<min){
        alert('A data mínima para pesquisa é 1995-06-16.Por favor, tente novamente.');
        return false;
    } 
    
    else if(dataFmt>today){
        alert('A data máxima para pesquisa é o dia de hoje.Por favor, tente novamente.');
        return false;

    } 
    return true;
    
}


//1995-06-16
//19950716

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("ibagem");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




