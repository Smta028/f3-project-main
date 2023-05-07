let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPass = document.getElementById("confirmPass");
let signBtn = document.querySelector(".signBtn");
let form = document.getElementById("form");
let errorMssg = document.getElementById("error");



let allUsers = [];
let count = 0;


if(localStorage.getItem("allusers")){
    allUsers = JSON.parse(localStorage.getItem("allusers"));
    count = allUsers[allUsers.length - 1].id;
    // console.log(allUsers);
}


signBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstName.value.trim() === "" || lastName.value.trim() === "" || email.value.trim() === "" || password.value.trim() == "" || confirmPass.value.trim() === "") {
        errorMssg.innerHTML = "Please fill all the fields"
        errorMssg.style.color = "Red"
    }
    else if (password.value.trim() != confirmPass.value.trim()) {
        errorMssg.innerHTML = "Your password and confirm password does not match"
        errorMssg.style.color = "red"
    }
    else {

        if(allUsers){
            for(const user of allUsers){
                if(user.email === email.value){
                    errorMssg.innerHTML = "Email already exists";
                    errorMssg.style.color = "red"
                    return;
                }
            }
        }


        count++;    
        errorMssg.innerHTML = "You have successfully signed up!"
        errorMssg.style.color = "green"
        let newUser = {
            id: count,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
        };


        allUsers.push(newUser);

        form.reset();
        localStorage.setItem("allusers", JSON.stringify(allUsers));

        setTimeout(() => {
            location.href = "../login/index.html"

        }, 500);

    }

});