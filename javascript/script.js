console.log("Hello world");
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* Associated partners*/
$(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

/*Progress Bar*/
ProgressBar.singleStepAnimation = 1500;
ProgressBar.init(
    ['Request Submitted',
        'Received Responses',
        'Negotiation Done',
        'Hired Professional',
        'Service Completed'
    ],
    'Hired Professional',
    'progress-bar-wrapper' // created this optional parameter for container name (otherwise default container created)
);
/*Testimonial*/
$(document).ready(function () {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
/* Card slide */
var activeSection = 1; // Set the default active section

// Show the default section on page load
document.addEventListener("DOMContentLoaded", function (event) {
    var defaultSection = document.getElementById("section" + activeSection);
    defaultSection.classList.add("show");
});
function toggleSection(sectionNumber) {
    var selectedSection = document.getElementById("section" + sectionNumber);

    // Hide all sections
    var sections = document.getElementsByClassName("card-body5");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("show");
        sections[i].classList.add("d-none");
    }

    // Show the selected section
    selectedSection.classList.add("show");
    selectedSection.classList.remove("d-none");

    // Update the active section
    activeSection = sectionNumber;
}




