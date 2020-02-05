$(document).ready(function () {

    $(document).on('click', '.btn-order-doctor', function (e) {
        e.preventDefault();
        let price = $(this).attr('data-price');
        $('#form-doctor input[name=price]').val(price);
    });

});