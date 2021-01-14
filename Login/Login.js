function validasi(){
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    if( username == "user" && password == "123"){
        alert("Selamat Datang :)")
        return true;
    }
    else if(username =="" || password ==""){
        alert("Masukan username dan password Anda");
        return false;
    }
    else{
        alert("Username atau password yang Anda masukan SALAH");
        return false;
    }
  }