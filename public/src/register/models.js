function submit(USERid, USERpass, USERname) {
    document.querySelector("#reglod").style.display = "block";
    var pr = fetch('register', {
        method: "POST",
        body: JSON.stringify({
            userId: USERid,
            password: USERpass,
            Uname: USERname
        })
        // console.log(body);
    });
    pr.then(response => {
        response.text().then((data) => {
            document.querySelector("#reglod").style.display = "none";
            Data = JSON.parse(data);
            if ((Data.status) != 'S') {
                window.alert("Something Went wrong please try again");
            }
            else if ((Data.status) == 'S') {
                window.alert("SUCESSFULLY REGISTERD PLEASE LOGIN!!");
                // console.log(Data);
                // window.open("../login/login.html", "_self");
            }
        }).catch(err => {
            console.log("error", err);
        })
    }).catch(err => {
        console.log(err);
    })
}
function checkforUser(USERid) {
    var pr = fetch('login', {
        method: "POST",
        body: JSON.stringify({ userID: USERid })
    });
    pr.then(response => {
        response.text().then((data) => {
            var Data = JSON.parse(data);
            if ((Data.status) == 'S') {
                window.alert("USERNAME ALREADY EXIST!!!!");
                document.querySelector("#uID").value = "";
            }
        }).catch(err => {
            console.log("error", err);
        })
    }).catch(err => {
        console.log(err);
    })
}