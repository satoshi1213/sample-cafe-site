jQuery(`.drawer`).on("click", function() {
    jQuery(`.drawer-list`).slideToggle();
});

jQuery( function() {
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > 80) {
            jQuery('.scroll-up').fadeIn(300);
        } else {
            jQuery('.scroll-up').fadeOut(300);
        }
    });

    jQuery('.scroll-up').on('click', function() {
        jQuery('html, body').animate({scrollTop: 0}, 500);
    });;
});

jQuery('.menu-img').on('click', function() {
    const imgSrc = jQuery(this).find('img').attr('src');
    jQuery(`.modal-img`).attr('src', imgSrc);
    jQuery('.modal').fadeIn(300);
});

jQuery('.modal').on('click', function() {
    jQuery(this).fadeOut(300);
});

function openModal() {
    document.getElementById(`your-modal`).style.display = `block`;
    document.body.classList.add(`modal-open`);
}

function closeModal() {
    document.getElementById(`your-modal`).style.display = `none`;
    document.body.classList.remove(`modal-open`);
}