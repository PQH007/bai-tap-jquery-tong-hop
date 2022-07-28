$(document).ready(function(){

});
$(':button').css({
    'border': '1px solid black',
    'border-radius': '5px',
    'cursor': 'pointer',
});
// su kien 1
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
// su kien 2
$('#btbImg').click(function(){
    var Img = $('#textImg').val();
    $('#khoiImg').html(Img);
});
// su kien 3e
$('#khoiNoi').click(function(){
    if(!$('#input1').val()){
        $('.khoi1').css('background-color',$("#input2").val());
    }
    if(!$('#input2').val()){
        $('.khoi1').css('background-color',$("#input1").val());
    }
    if($('#input1').val() && $('#input2').val()){
        var text1 = $('#input1').val();
        var text2 = $('#input2').val();
        $('#textThay').text(text1+ ' '+ text2);
    }
});
// su kien 4
$('#go2').click(function(){
   var en = $('#eng');
   if(en.is(':checked')){
        $('#khoi7').text(en.val());
   }
   if($('#jp').is(':checked')){
        $('#khoi7').text($('#jp').val());
   }
   if(en.is(':checked') && $('#jp').is(':checked')){
        $('#khoi7').text(en.val()+', '+ $('#jp').val());
   }
   if(!en.is(':checked') && !$('#jp').is('checked')){
    alert('ban chua chon mon hoc');
   }
});
// su kien 5
$('#reset').click(function(){
    $('#eng').prop('checked',false);
    $('#jp').prop('checked',false);
    $('#khoi7').text('da reset');
});
// su kien 6
$('#changeKhoi9').click(function(){
    switch($('#stt').val()){
        case ('---'):
        $('#khoi9').css('background-color','orange');
        break;
        case ('one'):
        $('#khoi9').css('background-color','black');
    }
});

// su kien 7
$('#stt').change(function(){
    alert('Bạn đã thay đổi giá trị của combo box');
})
// su kien 9