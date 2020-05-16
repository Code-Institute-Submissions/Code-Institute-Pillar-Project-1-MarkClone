<!-- Custom script to expand and collapse the Top Navbar Submenu  -->

$(document).ready(function () {
    $(".toggle-button").click(function () {
        var id = $(this).data("id");
        $(id).toggle('slow', 'swing');
    });
});
