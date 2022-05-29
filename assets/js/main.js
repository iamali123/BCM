$( document ).ready(function() {
    $(".card-btn").hover(function () {
        $(this).parent(".card-info").parent(".card").toggleClass("active");
     });
});