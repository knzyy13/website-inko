
function searchArticles() {
    // Ambil input dari pengguna
    var query = document.getElementById('searchInput').value.toLowerCase();
  
    // Kosongkan hasil pencarian sebelumnya
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
  
    // Jika input kosong, tampilkan pesan tidak ada hasil ditemukan
    if (query.trim() === '') {
        resultsContainer.innerText = 'Tidak ada hasil ditemukan.';
        return;
    }
  
    // Data artikel yang ada di halaman (untuk contoh ini, data disimpan di dalam array)
    var articles = [
        {
            title: "Tetap memilih kualitas: Pentingnya pelayanan unggul dalam industri digital printing.",
            url: "artikelview.html",
            imageUrl: "https://inko.id/assets/images/artikels/Img_65dd4583f1e7320240227091427.webp"
        },
        {
            title: "Mengapa Harus Inko? Memilih Kualitas dan keunggulan dalam Digital Printing.",
            url: "artikelview2.html",
            imageUrl: "https://inko.id/assets/images/artikels/Img_6632f78fb942720240502091647.webp"
        },
        {
            title: "Mengenal Digital Printing: Konsep Dasar dan Keuntungan dari sistim cetak digital",
            url: "artikelview3.html",
            imageUrl: "https://inko.id/assets/images/artikels/Img_660ccad5b72a820240403101949.webp"
        },
  
        {
          title: "INKO Hadir di ALLPACK ALLPRINT INDONESIA 2023: Membawa Inovasi Melalui Mesin Digital Printing",
          url: "artikelview4.html",
          imageUrl: "https://inko.id/assets/images/artikels/Img_653f24ee0af2f20231030113718.webp"
      },
      {
          title: "10 TIPS DAN TRIK Mengatur dan Menyimpan Media Cetak dalam Digital Printing",
          url: "artikelview5.html",
          imageUrl: "https://snapy.co.id/gambar/artikel/tahapan-proses-cetak-offset.jpg"
      },
      {
          title: "Metode Hot Folder dalam proses cetak digital",
          url: "beritaterkait1.html",
          imageUrl: "http://verbok.com/wp-content/uploads/2016/11/Hot-Folders-Print-By-Verbok.png"
      },
  
      {
        title: "Pengertian label barcode, jenis dan fungsinya",
        url: "beritaterkait2.html",
        imageUrl: "https://thumbs.dreamstime.com/b/bar-code-scanner-barcode-label-isolated-white-background-d-illustration-192518878.jpg"
    },
    {
        title: "Elektrostatik Dalam Proses Cetak: Penyebab, Dampak, Kendala, dan Teknik Pengendalian yang Sukses.",
        url: "beritaterkait3.html",
        imageUrl: "https://inko.id/assets/images/artikels/Img_64a22f0f0cd4e20230703101439.webp"
    },
    {
        title: "Melangkah ke Era Digital : Transformasi Dokumen dari Analog ke digital.",
        url: "beritaterkait4.html",
        imageUrl: "https://inko.id/assets/images/artikels/Img_649265a4ad00520230621105116.webp"
    },
  
    
  {
      title: "Perawatan mesin label Inko VIP",
      url: "beritaterkait5.html",
      imageUrl: "https://inko.id/assets/images/artikels/Img_641c00203bd6d20230323153040.webp"
  },
  {
      title: "Proyeksi Bisnis Digital Printing di tahun 2024",
      url: "beritaterkait6.html",
      imageUrl: "https://inko.id/assets/images/artikels/Img_645c99748371220230511152956.webp"
  },
  
  {
    title: "Cara menghilangkan atau menghapus latar belakang (background) pada gambar.",
    url: "beritaterkait7.html",
    imageUrl: "https://inko.id/assets/images/artikels/Img_645084852ae8120230502113325.webp"
  },
  {
    title: "Prosess Image Raster pada mesin cetak digital (RIP)",
    url: "beritaterkait8.html",
    imageUrl: "https://inko.id/assets/images/artikels/Img_63f6c99fc6e5620230223100415.webp"
  },
  {
    title: "Teka-teki Digital Printing: Mengenal dan mengatasi error dengan cerdas.",
    url: "beritaterkait9.html",
    imageUrl: "https://inko.id/assets/images/artikels/Img_66271bec74f8120240423102444.webp"
  },
        // Tambahkan data artikel lainnya di sini...
    ];
  
    // Filter artikel berdasarkan query
    var results = articles.filter(article => article.title.toLowerCase().includes(query));
  
    // Tampilkan hasil
    if (results.length > 0) {
        results.forEach(result => {
            // Buat elemen container untuk setiap artikel
            var articleContainer = document.createElement('div');
            articleContainer.style.display = 'flex';
            articleContainer.style.alignItems = 'center';
            articleContainer.style.marginBottom = '10px';
  
            // Buat elemen gambar
            var articleImage = document.createElement('img');
            articleImage.src = result.imageUrl;
            articleImage.alt = result.title;
            articleImage.style.width = '100px'; // Sesuaikan ukuran gambar sesuai kebutuhan
            articleImage.style.height = '100px';
            articleImage.style.marginRight = '10px';
  
            // Buat elemen link
            var articleLink = document.createElement('a');
            articleLink.href = result.url;
            articleLink.innerText = result.title;
  
            // Tambahkan gambar dan link ke dalam container
            articleContainer.appendChild(articleImage);
            articleContainer.appendChild(articleLink);
  
            // Tambahkan container artikel ke dalam resultsContainer
            resultsContainer.appendChild(articleContainer);
        });
    } else {
        resultsContainer.innerText = 'Tidak ada hasil ditemukan.';
    }
  }
  
  function resetSearch() {
    // Kosongkan input dan hasil pencarian
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  }
  