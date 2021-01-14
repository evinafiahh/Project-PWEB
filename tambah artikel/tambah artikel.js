function tambah() {
    var submit = document.getElementById("submit");

    if(submit.value == "") {
        alert("Tambahkan Cerita Anda!!");
        submit.focus();
    } else {
        alert("Cerita Anda berhasil ditambahkan!");
    }
}