
var audio = new Audio('http://stream.zeno.fm/mx0q282nw2hvv');
// audio.autoplay = true;

$('.trigger').click(function() {
    if (audio.paused == false) {
        audio.pause();
        $('.fa-play').show();
        $('.fa-pause').hide();
        $('.music-card').removeClass('playing');
    } else {
        audio.play();
        $('.fa-pause').show();
        $('.fa-play').hide();
        $('.music-card').addClass('playing');
    }
});

(function() {
    $('nav a').click(function() {
        $('nav a').removeClass('active');
        return $(this).addClass('active');
    });

}).call(this);


var slideIndex = 0;
showSlides();

function showSlides() {
    $(".slide").each(function() {
        $(this).hide()
    });
    slideIndex++;
    if (slideIndex > $(".slide").length) {
        slideIndex = 1
    }
    $(".dot").each(function() {
        $(this).removeClass("active");
    });
    $('.slide').eq(slideIndex - 1).show();
    setTimeout(showSlides, 9000);
};

var iconMenu = document.querySelector('.icon-menu'),
    menu = document.querySelector('.menu'),
    menuLink = document.querySelectorAll('.menu-link.sub');

iconMenu.addEventListener('click', openMenu);

menuLink.forEach(function(el) {
    el.addEventListener('click', openSubmenu);
});

function openMenu() {

    if (menu.classList.contains('open')) {
        menu.classList.add('close');
        iconMenu.classList.remove('icon-closed');

        setTimeout(function() {
            menu.classList.remove('open');
        }, 1300);

    } else {
        menu.classList.remove('close');
        menu.classList.add('open');
        iconMenu.classList.add('icon-closed');
    }
}

function openSubmenu(event) {

    if (event.currentTarget.classList.contains("active")) {
        event.currentTarget.classList.remove("active");
    } else {
        event.currentTarget.classList.add("active");
    }
}
