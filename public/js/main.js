function handleData(data){
  console.log('in handle data fn...');
  if(data.success){
    window.location = '/manage?msg='+ data.message;
  }
}

$(document).ready(function() {
    console.log('in doc redy fn..........................');
    if(window.location.search){
      var query = window.location.search.split("=");
      console.log('search value',query);
      var param = decodeURIComponent(query[1]);
      console.log('param value',param);
      $('#msg').html(param);
    }else{
      $('#msg').html(param);
    }



    $('.removeBook').click(function(e) {
        console.log('in removeBook fn.....................');
        deleteId = $(this).data('id');
        $.ajax({
            url: '/manage/deletebooks/' + deleteId,
            type: 'DELETE',
        }).done(handleData);
    });

    $('.removeCategory').click(function(e) {
        deleteId = $(this).data('remove');
        $.ajax({
            url: '/manage/deleteCategory/' + deleteId,
            type: 'DELETE'
        }).done(handleData);
    });
});

function validatePrice(){
  var price = $('#price').val();
  if(isNaN(price)){
    alert("Enter a valid number in price field.");
    return false;
  }
}
