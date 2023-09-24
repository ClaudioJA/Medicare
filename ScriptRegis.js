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

    let input_name = document.getElementById("subs_name").value;

    let input_email = document.getElementById("subs_email").value;
    
    var input_pass = document.getElementById("subs_pass").value;

    let input_cpass = document.getElementById("subs_cpass").value;

    if(input_name.length == 0){
        alert("Nama harus diisi!");
    }    

    if(input_email.length == 0){
        alert("Email harus diisi!");
    }
    else if(input_email.length != 0){
        validasiEmail();
    }

    if(input_pass.length < 8){
        alert("Password minimal memiliki 8 karakter!");
    }

    if(/^(?=.*[A-Z])(?=.*(\W|_)).{5,}$/.test(subs_pass)){
        
    }
    else{
        alert("Pass Not Valid");
    }

    if(input_pass != input_cpass){
        alert("Pass Not Same");
    }
    

    document.getElementById("regisForm").reset();
} )