$(document).ready(function() {
    $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
        })
        // toggle menu navbar script 
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing script start here 
    var typed = new Typed(".typing", {
        strings: ['are the best in the Industry!',
            'Hire Drivers',
            'Offer Great Benefits',
            'Offer Dispatching Services'
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});