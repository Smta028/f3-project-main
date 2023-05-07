// Write your script here
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const oldPass = document.querySelector("#oldPass");
const newPass = document.querySelector("#newPass");
const confirmNewPass = document.querySelector("#confirNewPass");
const infoBtn = document.querySelector("#infoBtn");
const passBtn=document.getElementById("changePassBtn");
const logoutBtn=document.getElementById("logoutBtn");

const allUsers = JSON.parse(localStorage.getItem("allusers"));
const currUser = JSON.parse(localStorage.getItem("currUser"));

firstName.value = currUser.firstName;
lastName.value = currUser.lastName;

const allUser1 = [{ id: 1, firstName: "samta", lastName: "s", email: "samta@email.com", password: "123" }, { id: 1, firstName: "samta", lastName: "s", email: "samta@email.com", password: "123" }, { id: 1, firstName: "samta", lastName: "s", email: "samta@email.com", password: "123" }];

console.log(allUser1[0].firstName);

// const arr = [1, 2, 3, 4];
// 0   1   2   4[]
// console.log(arr[3])

infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("a");
    currUser.firstName = firstName.value;
    currUser.lastName = lastName.value;
    allUsers.forEach((user) => {
        if (user.email === currUser.email) {
            console.log("b");
            user.firstName = firstName.value;
            user.lastName = lastName.value;
        }
    });

    console.log(allUsers);
    console.log(currUser);
    localStorage.setItem("currUser", JSON.stringify(currUser));
    localStorage.setItem("allusers", JSON.stringify(allUsers));
});


passBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(oldPass.value===currUser.password){
        console.log("a");
        currUser.password=newPass.value;
        console.log(currUser);
      if(newPass.value.trim()===confirmNewPass.value.trim()){
        allUsers.forEach((user) => {
            if (user.email === currUser.email) {
                user.password = newPass.value;
                console.log(user.password)
                
            }
        });

        localStorage.setItem("currUser", JSON.stringify(currUser));
        localStorage.setItem("allusers", JSON.stringify(allUsers));
      }
    }
});

logoutBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    location.href="../index.html"
})