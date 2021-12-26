var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

const Strong = 3,
    Medium = 2,
    Weak = 1;


function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
/*RESET FORM*/
function resetForm() {
    document.getElementById("error_username").innerHTML = "";
    document.getElementById("error_email").innerHTML = "";
    document.getElementById("error_password").innerHTML = "";
    document.getElementById("error_role").innerHTML = "";
    document.getElementById("error_system").innerHTML = "";

    document.getElementById('output_username').value = "";
    document.getElementById('output_email').value = "";
    document.getElementById('output_password').value = "";
    document.getElementById('output_role').value = "";
    document.getElementById('output_system').value = "";

    document.getElementById("medium").style.backgroundColor = "lightgrey";
    document.getElementById("strong").style.backgroundColor = "lightgrey";
    document.getElementById("weak").style.backgroundColor = "lightgrey";
}

function Reg() {
    resetForm();
    let strength = 0;
    affiliation = [];
    system = [];
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    role = document.getElementById('role').value;
    system = document.querySelectorAll('input[type="radio"]:checked');

    if (username == "" || email == "" || password == "" || role == "" || system == "") {
        if (username == "") {
            document.getElementById("error_username").innerHTML = 'Please fill username';
        } if (!validateEmail(email)) {
            document.getElementById("error_email").innerHTML = 'Please fill a valid email';
        } if (password == "") {
            document.getElementById("error_password").innerHTML = 'Please fill password';
        } if (role == "") {
            document.getElementById("error_role").innerHTML = 'Please select role...';
        }
        if (system == "") {
            document.getElementById("error_system").innerHTML = 'Please select system...';
        }
    }
    else {

        document.getElementById('output_username').value = username;
        document.getElementById('output_email').value = email;
        document.getElementById('output_password').value = password;
        document.getElementById('output_role').value = role;
        affiliation = document.querySelectorAll('input[type="checkbox"]:checked');
        for (var rad of system) {
            if (rad.checked) {
                document.getElementById('output_system').value += rad.value;
            }
        }
        for (var index of affiliation) {
            if (index.checked) {
                document.getElementById('output_affiliation').value += index.value;
                document.getElementById('output_affiliation').value += "\n ";
            }
        }


        strength = (strongRegex.test(password) ? Strong : (mediumRegex.test(password) ? Medium : Weak));
        if (strength >= Weak)
            document.getElementById("weak").style.backgroundColor = "red";
        if (strength >= Medium)
            document.getElementById("medium").style.backgroundColor = "orange";
        if (strength == Strong)
            document.getElementById("strong").style.backgroundColor = "green";

    }

}
