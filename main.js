$(document).ready(function(){

});
$(':button').css({
    'border': '1px solid black',
    'border-radius': '5px',
    'cursor': 'pointer',
});

$('#go1').click(function(){
    var a = $('.radiosex');
    if(a[0].checked){
        alert('ban da chon '+ a[0].value);
    }
    if(a[1].checked){
        alert('ban da chon '+ a[1].value);
    }
    if(a[2].checked){
        alert('ban da chon '+ a[2].value);
    }
}); 
$('#btbImg').click(function(){
    var Img = $('#textImg').val();
    $('#khoiImg').html(Img);
});
