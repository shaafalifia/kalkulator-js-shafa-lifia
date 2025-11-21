
//  Jelaskan Kodingan ini apa 
// Coding ini merupakan kode JavaScript yang menunggu seluruh isi halaman HTML selesai dimuat, sebelum menjalankan fungsi di dalamnya.
        document.addEventListener('DOMContentLoaded', function() {
            
            //  Jelaskan Kodingan ini apa 
            //  Coding ini digunakan supaya JavaScript bisa menulis angka atau hasil perhitungan ke layar kalkulator, mengganti gambar status kalkulator, dan bisa memberikan event klik ke semua tombol kalkulator sekaligus (angka, operator, C, DEL, dll).
            const display = document.getElementById('display');
            const statusImage = document.getElementById('statusImage');
            const buttons = document.querySelectorAll('.btn-calc');

            //  Jelaskan Kodingan ini apa 
            //  Coding ini digunakan untuk menyiapkan gambar yang akan digunakan untuk menampilkan status kalkulator (ormal, sukses, error)
            const imgNormal = 'https://placehold.co/400x100/374151/E5E7EB?text=Kalkulator';
            const imgSuccess = 'https://placehold.co/400x100/16A34A/FFFFFF?text=Sukses!';
            const imgError = 'https://placehold.co/400x100/DC2626/FFFFFF?text=Error!';

            /**
              Jelaskan Kodingan ini apa 
             */
            // Coding ini berfungsi untuk menampilkan gambar atau tampilan ketika kalkulator dalam keadaan belum normal, sukses, dan error.
            function changeImage(state) {
                if (state === 'success') {
                    statusImage.src = imgSuccess;
                    statusImage.alt = "Perhitungan Sukses";
                } else if (state === 'error') {
                    statusImage.src = imgError;
                    statusImage.alt = "Error Perhitungan";
                } else {
                    //  Jelaskan Kodingan ini apa 
                    statusImage.src = imgNormal;
                    statusImage.alt = "Status Kalkulator";
                }
            }

            /**
              Jelaskan Kodingan ini apa 
             */
            // Coding ini dipakai untuk menghapus seluruh isi layar kalkulator dan mengembalikan tampilan gambar ke keadaan normal.
            function clearDisplay() {
                display.value = '';
                changeImage('normal'); // Memanggil function untuk merubah gambar
            }

            /**
              Jelaskan Kodingan ini apa 
             */
            // Coding ini berjalan ketika pengguna menekan tombol DEL, digunakan untuk menghapus 1 karakter terakhir pada layar kalkulator.
            function deleteLastChar() {
                display.value = display.value.slice(0, -1);
            }

            /**
              Jelaskan Kodingan ini apa 
             */
            // COding ini digunakan untuk menambahkan angka atau simbol ke layar kalkulator setiap kali tombol ditekan.
            function appendToDisplay(value) {
                display.value += value;
            }

            /**
              Jelaskan Kodingan ini apa 
             */
            // fungsi ini digunakan untuk menghitung hasil dari operasi matematika yang diinput oleh pengguna, biasanya beroperasi setelah pengguna menekan tombol =.
            function calculateResult() {
                //  Jelaskan Kodingan ini apa 
                //  Code ini akan berjalan ketika user menekan tombol = tapi tidak ada angka atau operasi di layar. Layar akan menampilkan gambar error atau teks "Kosong!".
                if (display.value === '') {
                    changeImage('error');
                    display.value = 'Kosong!';
                    //  Jelaskan Kodingan ini apa 
                    // Code ini membuat sistem atau kalkulator akan menunggu 1,5 detik. Jika tidak ada aksi lagi, maka sistem akan membersihkan layar dan memberhentikan proses hitungan. 
                    setTimeout(clearDisplay, 1500);
                    return;
                }

                try {
                    // try digunakan untuk mencoba menjalankan sebuah blok kode yang berpotensi error.
                    //  Jelaskan Kodingan ini apa 
                    // Code dibawah dipakai untuk menghitung hasil dari operasi matematika yang ditulis di layar kalkulator. Mengubah rumus % menjadi /100. 
                    let result = eval(display.value
                        .replace(/%/g, '/100') //  Jelaskan Kodingan ini apa 
                    ); 
                    
                    //  Jelaskan Kodingan ini apa 
                    // Mengecek apakah hasil perhitungan itu angka valid. Jika valid maka akan menampilkan gambar sukses.
                    if (isFinite(result)) {
                        display.value = result;
                        changeImage('success'); 
                    //  Jelaskan Kodingan ini apa 
                    // namun jika angkanya tidak valid, maka layar akan menampilkan gambar error.
                    } else {
                        throw new Error("Hasil tidak valid");
                    }

                } catch (error) {
                    console.error("Error kalkulasi:", error);
                    display.value = 'Error';
                    changeImage('error'); 
                    //  Jelaskan Kodingan ini apa 
                    // Code ini akan menghapus display atau layar setelah 1,5 detik.
                    setTimeout(clearDisplay, 1500);
                }
            }


            //  Jelaskan Kodingan ini apa 
            // Code ini menyiapkan setiap tombol kalkulator agar dapat mendeteksi klik tombol, mengetahui tombol apa yang ditekan lewat data value, dan menentukan aksi yang tepat setelahnya.
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const value = button.getAttribute('data-value');

                    //  Jelaskan Kodingan ini apa 
                    // Coding ini digunakan untuk kondisi bercabang. 
                    switch(value) {
                        case 'C':
                            //  Jelaskan Kodingan ini apa 
                            // Jika pengguna menekan tombol C maka display atau tampilan akan dihapus dan layar akan menampilkan gambar 'normal'.
                            clearDisplay();
                            break;
                        case 'DEL':
                            //  Jelaskan Kodingan ini apa 
                            // Jika pengguna menekan tombol DEL maka akan menghapus 1 karakter atau angka yang ada di layar.
                            deleteLastChar();
                            break;
                        case '=':
                            //  Jelaskan Kodingan ini apa 
                            // Jika pengguna menekan tombol = maka layar akan menghitung dan menampilan hasil perhitungan operasi matematika yang diinput.
                            calculateResult();
                            break;
                        default:
                            //  Jelaskan Kodingan ini apa 
                            // Code ini digunakan ketika layar menampilkan sukses atau error maka harus clear display duulu sebelum memasukkan angka yang baru. 
                            if (statusImage.src === imgSuccess || statusImage.src === imgError) {
                                clearDisplay();
                            }
                            appendToDisplay(value);
                            break;
                    }
                });
            });

            //  Jelaskan Kodingan ini apa 
            // Coding ini membuat kalkulator bisa digunakan lewat keyboard, bukan cuma klik tombol di layar. Jadi kalkulator akan tetap beroperasi ketika pengguna menekan lewat keyboard ketika menggunakan kaluklator.
            document.addEventListener('keydown', (e) => {
                const key = e.key;

                if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
                    if (statusImage.src === imgSuccess || statusImage.src === imgError) {
                        clearDisplay();
                    }
                    appendToDisplay(key);
                    e.preventDefault();
                } else if (key === 'Enter' || key === '=') {
                    calculateResult();
                    e.preventDefault();
                } else if (key === 'Backspace') {
                    deleteLastChar();
                    e.preventDefault();
                } else if (key === 'Escape' || key.toLowerCase() === 'c') {
                    clearDisplay();
                    e.preventDefault();
                }
            });

        });
