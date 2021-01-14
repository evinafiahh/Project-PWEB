function validasi(){
    var username = document.forms["register"]["username"].value;
    var password = document.forms["register"]["password"].value;
    var repassword = document.forms["register"]["repassword"].value;
    var email = document.forms["register"]["email"].value;
    if( username == "user" && password == "123" && repassword=="123" && email=="pweb@gmail.com"){
        alert("Selamat Datang :)")
        return true;
    }
    else if(username =="" || password ==""|| repassword =="" || email ==""){
        alert("Data Tidak boleh kosong");
        return false;
    }
    else{
        alert("Username atau password yang Anda masukan SALAH");
        return false;
    }
  }