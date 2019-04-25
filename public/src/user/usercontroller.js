window.addEventListener("load", initevent);
function initevent() {
    document.querySelector("#reglod").style.display = "none";
    console.log(localStorage.USER)
    var user = JSON.parse(localStorage.USER);
    document.querySelector("#Name").innerHTML = user.Uname;
    document.querySelector("#UCpass").addEventListener("click", changePass);
    document.querySelector("#submit").addEventListener("click", changeSubmit);
    document.querySelector("#Opass").addEventListener("blur", checkPass);
}
function changePass() {
    document.querySelector("#Uhome").style.display = "none";
    document.querySelector("#changepass").style.display = "block";
}
function checkPass() {
    document.querySelector("#reglod").style.display = "block";

    document.querySelector("#Opass").classList.remove("alert-success");
    document.querySelector("#Opass").classList.remove("alert-danger");
    var ps = document.querySelector("#Opass").value;
    var user = JSON.parse(localStorage.USER);
    var pr = fetch("login", {
        method: "POST",
        body: JSON.stringify({
            userId: user.userId,
            password: ps
        })
    });
    pr.then((Response) => {
    document.querySelector("#reglod").style.display = "none";

        Response.text().then((data) => {
            var val = JSON.parse(data);
            if ((val.status) != 'S') {
                document.querySelector("#Opass").classList.add("alert-danger");
                window.alert("PASSWORD INCORRECT!!!!");
                document.querySelector("#Opass").value = "";
            }
            else if ((val.status) == 'S')
                document.querySelector("#Opass").classList.add("alert-success");
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })

}
function changeSubmit() {
    document.querySelector("#reglod").style.display = "block";

    var ps = document.querySelector("#Npass").value;
    var user = JSON.parse(localStorage.USER);
    var pr = fetch("update", {
        method: "POST",
        body: JSON.stringify({
            userId: user.userId,
            password: ps
        })
    });
    pr.then((Response) => {

    document.querySelector("#reglod").style.display = "none";

        Response.text().then((data) => {
            var val = JSON.parse(data);
            if ((val.status) == 'S') {
                window.alert("PASSWORD CHANGED SUCCESSFULY");
                window.open("user.html","_self");
            }
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })

}