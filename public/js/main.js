$(document).ready(function() {
    console.log('in doc redy fn..........................');
    $('.removeBook').click(function(e) {
        console.log('in removeBook fn.....................');
        deleteId = $(this).data('id');
        $.ajax({
            url: '/manage/deletebooks/' + deleteId,
            type: 'DELETE',
            success: function() {
                console.log('in success function');
            }
        });
        window.location('/manage');
    });

    $('.removeCategory').click(function(e) {
        deleteId = $(this).data('remove');
        $.ajax({
            url: '/manage/deleteCategory/' + deleteId,
            type: 'DELETE',
            success: function() {

            }
        });
        window.location('/manage');
    });
});
