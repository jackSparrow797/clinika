$(document).ready(function () {
    $(document).on('click', ".open-phone", function (e) {
        e.preventDefault();
        let button = $(this);
        button.next().removeClass('d-none');
        button.remove();
    });

    $(document).on('click', ".btn-doctor", function (e) {
        e.preventDefault();
        clearServiceSelect();
        let button = $(this);
        let checked = button.attr('data-doctor');
        getDoctors('', checked);
    });

    let showPreloader = function (target) {
        $(target).append('<div class="preloader"></div>')
    };
    let hidePreloader = function () {
        $('.preloader').remove();
    };

    let clearServiceSelect = function () {
        $('.service-select option[value=""]').prop('selected', true);
    };

    let getDoctors = function (id, checked) {
        $.ajax({
            type: 'GET',
            url: '/getDoctors/',
            data: {id: id, checked: checked},
            beforeSend: function (xhr) {
                showPreloader('#modal-order .modal-content');
            },
            success: function (data) {
                let option = '<option value="" disabled selected>Специалист</option>';
                option += data;
                $('select[name=doctor]').html(option);
            },
            error: function (xhr, str) {
                alert('Ошибка: ' + xhr.responseCode);
            },
            complete: function () {
                hidePreloader();
            }
        });
    };

    $(document).on('change', ".service-select", function (e) {
        e.preventDefault();
        let id = $(this).val();
        getDoctors(id, '');
    });


});
