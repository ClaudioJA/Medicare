let error_count = 0;
function validasiEmail() {
	var rs = document.forms["formInput"]["email"].value;
	var atps=rs.indexOf("@");
	var dots=rs.lastIndexOf(".");
	if (atps<1 || dots<atps+2 || dots+2>=rs.length) {
		alert("Alamat email tidak valid.");
		return false;
	} else {
      ++error_count;
	}
}

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () =>{
   event.preventDefault();

   let input_email = document.getElementById("subs_email").value;

   if(input_email.length == 0){
      alert("Email harus diisi!");
   }
   else if(input_email.length != 0){
      validasiEmail();
   }

   document.getElementById("loginForm").reset();
} )