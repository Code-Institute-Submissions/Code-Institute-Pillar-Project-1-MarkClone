/* Script to open and close the Main Menu at the Top */
    $(document).ready(function () {
        $(".toggle-button").click(function () {
            var id = $(this).data("id");
            $(id).toggle(3000, 'swing');
        });
    });
