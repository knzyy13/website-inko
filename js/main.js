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
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow');
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


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
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


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
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

const track = document.querySelector('.custom-carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.custom-next');
const prevButton = document.querySelector('.custom-prev');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

// Set position of slides
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Move to slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// When clicking next button
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

// When clicking previous button
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});


function openDownloadPage() {
    // Ganti URL di bawah ini dengan URL halaman download APK kamu
    window.location.href = 'app.html';
  }
  
  // Tambahkan event listener untuk memastikan fungsi dipanggil saat elemen diklik
  document.addEventListener('DOMContentLoaded', function() {
    var downloadApkElement = document.querySelector('.download-apk');
    if (downloadApkElement) {
        downloadApkElement.addEventListener('click', openDownloadPage);
    }
  });


  /*------------======LIVE CHAT==========-----*/

// Quick exercise
// Working on a login panel from my Bananaplate project
// http://dribbble.com/iamnbutler/projects/178899-BANANAPLATE

$(document).ready(function(){
    // No links pls
    $('.ui-button.inactive').click(function(){
      e.preventDefault();
    });
    
    $('#close').click(function(){
      $('.ui-panel').removeClass('bounceInDown').addClass('bounceOutUp');
    });
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const chatNotification = document.getElementById('chatNotification');
        chatNotification.style.display = 'block';
    }, 5000); // 5 menit (300000 ms)
  });
  
  function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
    
    const chatNotification = document.getElementById('chatNotification');
    chatNotification.style.display = 'none';
  }
  
  function startChat() {
    document.getElementById('chatForm').style.display = 'none';
    document.getElementById('chatConversation').style.display = 'block';
  }
  
  function sendMessage(event) {
    event.preventDefault();
    const chatMessage = document.getElementById('chatMessage').value;
    if (chatMessage.trim() !== '') {
        addMessage('sent', chatMessage);
        document.getElementById('chatMessage').value = '';
        setTimeout(() => {
            const response = getChatbotResponse(chatMessage);
            addMessage('received', response);
        }, 1000);
    }
  }
  
  function addMessage(type, text) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', type);
    
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = text;
    
    messageContainer.appendChild(messageContent);
    document.querySelector('.conversation-container').appendChild(messageContainer);
    document.querySelector('.conversation-container').scrollTop = document.querySelector('.conversation-container').scrollHeight;
  }
  
  function getChatbotResponse(userMessage) {
    const responses = [
        { pattern: /Kapan pesanan saya akan sampai?/i, response: 'Pesanan Anda diperkirakan tiba dalam 3-5 hari kerja. Untuk estimasi yang lebih akurat, Anda bisa memeriksa status pelacakan melalui link yang kami kirimkan' },
        { pattern: / Apakah pesanan saya sudah diproses?/i, response: 'Anda akan menerima email konfirmasi saat pesanan Anda telah diproses dan dikirim. Jika Anda belum menerima email tersebut, Anda bisa memeriksa status pesanan di akun Anda' },
        { pattern: / metode pembayaran|via pembayaran?/i, response: ' Kami menerima pembayaran melalui kartu kredit, debit, transfer bank, dan e-wallet seperti OVO,DANA dan GoPay.' },
        { pattern: /cicilan|cicil/i, response: ' Ya, kami menawarkan opsi cicilan melalui mitra pembiayaan kami. Silakan pilih metode cicilan saat checkout untuk informasi lebih lanjut.' },
        { pattern: /Bagaimana cara mengatasi masalah teknis dengan produk?/i, response: 'Anda dapat menghubungi dukungan teknis kami melalui live chat atau email. Sertakan detail masalah dan nomor seri produk untuk bantuan yang lebih cepat.' },
        { pattern: /Bagaimana cara menghubungi dukungan teknis?/i, response: 'Anda bisa menghubungi dukungan teknis kami melalui live chat, email di info@cpd-inko.com, atau telepon di 021-29028970 / 021-29028971' },
        { pattern: /Apakah ada promo atau diskon saat ini/i, response: 'Promo dan diskon terbaru dapat ditemukan di halaman utama situs kami atau di newsletter yang kami kirimkan. Pastikan untuk mendaftar agar tidak ketinggalan informasi terbaru.' },
        { pattern: /hi|halo/i, response: 'Hi! Ada yang bisa kami bantu?' },
        { pattern: /melacak pesanan|status pesanan/i, response: ' Anda dapat melacak pesanan Anda menggunakan nomor pelacakan yang dikirimkan melalui email konfirmasi. Masukkan nomor tersebut di situs kurir untuk melihat status pengiriman.' },
        { pattern: /bagaimana cara menggunakan produk ini/i, response: ' Anda dapat mengikuti panduan pengguna yang kami sediakan di situs kami. Jika ada pertanyaan spesifik, jangan ragu untuk bertanya!' },
        { pattern: /mesin|spesifikasi|detail/i, response: 'Untuk Spesifikasi Atau Detail Mesin Sudah Ada DiWebsite Kami Kak Kalo Mau Lihat Jelas Lagi Ke Gudang Kami Aj Kak.' },
        { pattern: /harga|berapa/i, response: 'Langsung Aja Kak Hubungi Contact Kami Untuk Menanyakan Harga Atau Apa Terimakasih :)' },
        { pattern: /lokasi|alamat|kantor/i, response: 'Untuk lokasi Kantor kami sudah dicantumkan di Website dan lebih jelas lagi ada di Maps.' },
        { pattern: /lihat-lihat|cek/i, response: 'Tentu, Kak. Langsung saja ke kantor kami.' },
        { pattern: /ready|tersedia/i, response: 'Jika tidak tertera SOLD OUT maka tersedia. Selagi masih ditampilkan di WEBSITE kami, produk kami ready, ya Kak.' },
        { pattern: /thanks|terima kasih|makasih/i, response: 'Sama-sama!' },
        { pattern: /bye|selamat tinggal/i, response: 'Selamat tinggal! Semoga harimu menyenangkan!' }
    ];
  
    const lowerCaseMessage = userMessage.toLowerCase();
    for (const response of responses) {
        if (response.pattern.test(lowerCaseMessage)) {
            return response.response;
        }
    }
  
    return 'Maaf, saya tidak mengerti. Bisa tolong ulangi?';
  }
  
  document.getElementById('chatMessage').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage(event);
    }
  });
  
  //--------------------END-----------------//
  