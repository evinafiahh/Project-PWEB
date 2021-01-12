function terimainput()
{
    var tanggal = document.getElementById("tanggal");
    var nama = document.getElementById("nama");
    var notelp = document.getElementById("notelp");
    var meetingp = document.getElementById("meetingp");
    var rombongan = document.getElementById("rombongan");
    var hari = document.getElementById("hari");

    if(tanggal.value == "")
        {
            alert("Masukkan Tanggal Pemesanan");
            tanggal.fokus();
        }
    else if(nama.value == "")
        {
            alert("Masukkan Nama Lengkap Anda");
            nama.fokus();
        }
    else if(notelp.value == "")
        {
            alert("Masukkan Nomor Telpon Anda");
            notelp.fokus();
        }
    else if(meetingp.value == "")
        {
            alert("Masukkan Meeting Point");
            meetingp.fokus();
        }
    else if(rombongan.value == "")
        {
            alert("Masukkan Jumlah Rombongan Anda");
            rombongan.fokus();
        }
    else if(hari.value == "")
        {
            alert("Masukkan Jumlah Hari");
            hari.fokus();
        }
    else{
        alert("Data Berhasil Disimpan!");
        }
}