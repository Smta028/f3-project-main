let email = document.getElementById("inputMail");
let password = document.getElementById("inputPass");
let loginBtn = document.getElementById("loginBtn");
let errorMssg = document.querySelector("#error")
const form = document.getElementById("loginForm")
const allUsers = JSON.parse(localStorage.getItem("allusers"));

let currUser = {};
// console.log(allUsers);

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value.trim() === "" || password.value.trim() === "") {
        errorMssg.innerHTML = "Please fill all the fields"
        errorMssg.style.color = "red";
    }
    else {
        allUsers.forEach((user)=>{
            console.log("a");
            if (user.email === email.value) {
                if (user.password === password.value) {
                    currUser = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        password: user.password,
                        token: generateToken()

                    };
                    localStorage.setItem("currUser",JSON.stringify(currUser));
                    setTimeout(() => {
                        location.href="../shop/index.html"
                        
                    }, 500);
                };

            };
        });
    }

});
function generateToken() {
    let token = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 16; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}