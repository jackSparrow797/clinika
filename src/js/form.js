$(document).ready(function () {
    $(document).on('click', ".open-phone", function (e) {
        e.preventDefault();
        let button = $(this);
        button.next().removeClass('d-none');
        button.remove();
    });

    $(document).on('click', ".order-modal", function (e) {
        e.preventDefault();
        let button = $(this);
        let model = button.attr('data-model');
        $('#form-order input[name=model]').val(model);
    });


});
