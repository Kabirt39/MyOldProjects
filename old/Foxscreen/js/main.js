jQuery(document).ready(function(){
   $('.team_mamber_contact_inner').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
 });
});