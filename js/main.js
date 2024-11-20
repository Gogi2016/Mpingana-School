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

        
    // Function to handle document uploads
function uploadDocuments() {
    var docType = document.getElementById('documentType').value;
    var fileInput = document.getElementById('documents');
    var uploadedDocsList = document.getElementById('uploadedDocsList');
    
    if (!docType) {
        alert('Please select a document type.');
        return;
    }
    
    var files = fileInput.files;
    if (files.length === 0) {
        alert('Please select at least one file to upload.');
        return;
    }

    // Loop through the files and add them to the list
    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        // Create list item for each uploaded file
        var listItem = document.createElement('li');
        listItem.classList.add('uploaded-doc-item');
        listItem.textContent = `${file.name} (${docType}) `;

        // Create delete button for each file
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
        deleteButton.onclick = function() {
            listItem.remove(); // Remove the list item on click
        };

        listItem.appendChild(deleteButton);
        uploadedDocsList.appendChild(listItem);
    }
    
    // Optionally clear file input after upload
    fileInput.value = '';
}

// Optional: Update file input if needed when document type changes (if required for specific handling)
function updateFileInput() {
    // You can handle specific file type restrictions or validation here based on selected document type
}
    
   // Function to handle form submission with validation
function handleSubmit(event) {
    event.preventDefault();  // Prevent form from submitting until validation is complete

    // Get June Results field value
    const juneResults = document.getElementById('juneResults').value;

    // Check if all required fields are filled, except June Results
    const requiredFields = [
        'applicantName', 'dob', 'applicantId', 'applicantEmail', 'applicantphone',
        'homeAddress', 'race', 'gender', 'guardianName', 'guardianId', 'guardianphone',
        'grade', 'documentType'
    ];

    let isValid = true;
    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field || !field.value) {
            isValid = false;
        }
    });

    // Additional individual validations
    const applicantId = document.getElementById("applicantId");
    const email = document.getElementById("applicantEmail");
    const phone = document.getElementById("applicantphone");

    // Validate ID Number (must be exactly 13 digits)
    if (!applicantId.value.match(/^\d{13}$/)) {
        isValid = false;
        alert("ID Number must be 13 digits.");
        applicantId.focus();
    }

    // Validate Email Address
    if (!email.validity.valid) {
        isValid = false;
        alert("Please enter a valid email address.");
        email.focus();
    }

    // Validate Contact Number (must be exactly 10 digits)
    if (!phone.value.match(/^\d{10}$/)) {
        isValid = false;
        alert("Contact Number must be 10 digits.");
        phone.focus();
    }

    // If validation is successful, show success message and reset form
    if (isValid) {
        alert('Application has been sent successfully');
        document.getElementById('applicationForm').reset();  // Optionally reset the form
    } else {
        alert('Please fill out all required fields correctly.');
    }
}

// Attach the handleSubmit function to the form submission
document.getElementById("applicationForm").addEventListener("submit", handleSubmit);