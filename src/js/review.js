$(document).ready(function () {
    $(document).on('click', '.review-tabs a', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('.review-tabs li').removeClass("active");
        $('.review-tab').removeClass("active");
        $(target).addClass("active");
        $(this).parent().addClass('active');
    });
});