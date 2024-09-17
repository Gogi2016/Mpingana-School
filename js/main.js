(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

var ctx = document.getElementById('performanceChart').getContext('2d');
        var performanceChart = new Chart(ctx, {
            type: 'bar', // Bar chart
            data: {
                labels: ['2017', '2018', '2019', '2020', '2021', '2022'], // Years
                datasets: [{
                    label: 'Enrolment',
                    data: [42, 43, 49, 37, 64, 75], // Enrollment data
                    backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue bars
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Percentage',
                    data: [81, 97.4, 89.9, 80.5, 78.1, 76], // Percentage data
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red bars
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Values'
                        }
                    }
                },
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Grade 12 School Performance in Past Years'
                    }
                }
            }
        });

function toggleStreamOptions() {
            var grade = document.getElementById('grade').value;
            var streamOptions = document.getElementById('streamOptions');
            if (grade == '10' || grade == '11' || grade == '12') {
                streamOptions.style.display = 'block';
            } else {
                streamOptions.style.display = 'none';
            }
        }

        function uploadDocuments() {
            var docType = document.getElementById('documentType').value;
            var fileInput = document.getElementById('documents');
            var uploadedFiles = document.getElementById('uploadedFiles');
        
            if (!docType) {
                alert('Please select a document type.');
                return;
            }
        
            var files = fileInput.files;
            if (files.length === 0) {
                alert('Please select at least one file to upload.');
                return;
            }
        
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var fileDiv = document.createElement('div');
                fileDiv.textContent = `${file.name} (${docType})`;
                uploadedFiles.appendChild(fileDiv);
            }
        
            // Optionally clear file input after upload
            fileInput.value = '';
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('admissionForm').onsubmit = function(event) {
                event.preventDefault(); // Prevent the default form submission
                alert('Application Submitted'); // Show the alert
                window.location.href = 'index.html'; // Redirect to the home page
            };
        });