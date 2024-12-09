// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "sayang" && password === "sayang") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang sayanggg",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya sayang:)",
      confirmButtonText: "Coba lagi sayang",
      confirmButtonColor: "#ff7675",
    });
  }
}
