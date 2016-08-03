jQuery(document).ready(function($) {
	

	//控制menu表單
$('.headermenu ul > li >a').click(function(event) {
// event.preventDefault();
$(this).parent().find('li').slideToggle(200).parent().parent().siblings().find('li').slideUp(200);

});



	//控制header動畫
$('.header > input').click(function(event) {
	/* Act on the event */
	$('.header').addClass('hinge');

	$('.wrap > input').slideDown();
	$('.box').removeClass('wobble')
});

	//header回來動畫效果
$('.wrap > input').click(function(event) {
	/* Act on the event */
	
	$('.header').removeClass('hinge').fadeIn().find('.box').addClass('wobble');
	$(this).slideUp('2000');
});



$('.aside button').click(function(event) {
$('.aside').toggleClass('active');
if($('.aside').hasClass('active')){
    $(this).parent().find('img').attr('src', 'images/btn_close.png');
 }else{
    $(this).parent().find('img').attr('src', 'images/btn_open.png');
            };




 $(window).load(function() {
        $('#slider').nivoSlider({ 
    effect: 'fade',                 // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 500,                   // Slide transition speed 
    pauseTime:2800,             // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: true,               // Next & Prev navigation 
    controlNav: true,    // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: true,               // Stop animation while hovering 
    manualAdvance: false,        // Force manual transitions 
    prevText: 'Prev',                 // Prev directionNav text 
    nextText: 'Next',                 // Next directionNav text 
    randomStart: false,               // Start on a random slide 
    beforeChange: function(){},       // Triggers before a slide transition 
    afterChange: function(){},        // Triggers after a slide transition 
    slideshowEnd: function(){},       // Triggers after all slides have been shown 
    lastSlide: function(){},          // Triggers when last slide is shown 
    afterLoad: function(){}           // Triggers when slider has loaded 
});

    });

	/* Act on the event */
});

//.addClass('wobble')




// $('html,body').animate({scrollTop:0}, 700);

$('.aside ul > li >a').click(function(event) {
// event.preventDefault();
$(this).parent().find('li').slideToggle(200).parent().parent().siblings().find('li').slideUp(200);

});


});

//滾動視窗效果
jQuery(document).ready(function($) {
	

window.sr = ScrollReveal().reveal('.footer,.content,.prosonal.workex');
// Changing the defaults


// Customizing a reveal set
// sr.reveal('.prosonal', { duration: 0,
// delay: 0,opacity: 0.5});
// sr.reveal('.footer', { duration: buttom });

// window.sr = ScrollReveal({ reset: true });

});