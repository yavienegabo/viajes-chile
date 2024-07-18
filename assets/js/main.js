$(document).ready(function(){
    // Smoth scroll
    $("a[href^='#']").on('click', function(event) {
        var target = $(this.hash);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 400);
        }
    });
        // Tooltip
   $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
    });
});
