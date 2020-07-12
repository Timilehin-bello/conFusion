$(document).ready(function(){
    $("#mycarousel").carousel({ 
        interval: 2000, pause: false
    });
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
            $("#carouselButton").removeClass('btn-danger').addClass('btn-success');// $("#carouselButton").addClass('btn-success');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
            $("#carouselButton").removeClass('btn-success').addClass('btn-danger');
            // $("#carouselButton").addClass('btn-danger');                    
        }
    });
    $('#reserveButton').click(function(){
            $('#reserveTableModal').modal('show');
    });

    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    }); 
    
});