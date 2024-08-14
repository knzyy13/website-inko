/*-------============PRELOADER=============-------*/

function preloader() {
    if (navigator.onLine) {
      setTimeout(showPage, 300); // Ubah waktu jika perlu
    } else {
      // Cek koneksi setiap 3 detik
      checkConnection();
    }
  
    // Tambahkan event listener untuk mendeteksi perubahan status koneksi
    window.addEventListener('online', showPage);
    window.addEventListener('offline', showPreloader);
  }
  
  function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.body.style.overflow = "auto"; // Mengembalikan kemampuan scroll setelah preloader hilang 
  }
  
  function showPreloader() {
    document.getElementById("preloader").style.display = "flex"; // Mengembalikan preloader ke tengah
    document.body.style.overflow = "hidden"; // Menonaktifkan scroll ketika preloader aktif 
  }
  
  function checkConnection() {
    var connectionInterval = setInterval(function() {
      if (navigator.onLine) {
        clearInterval(connectionInterval);
        showPage();
      }
    }, 3000);
  }
  
  window.onload = preloader;
  
  
  /*===============---------ENDD===============---------*/