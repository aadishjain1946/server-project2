// var Data;
function submit(USERid, USERpass) {
    document.querySelector("#reglod").style.display = "block";

    var pr = fetch('login', {
        method: "POST",
        body: JSON.stringify({
            userId: USERid,
            password: USERpass
        })
    });
    pr.then(response => {
        document.querySelector("#reglod").style.display = "none";
        response.text().then((data) => {
            var Data = JSON.parse(data);
            if ((Data.status) != 'S') {
                window.alert("INCORRECT PASSWORD or UserName");
            }
            else {
                // console.log(Data);
                window.open("../user/user.html", "_self");
                if(localStorage){
                    localStorage.USER = JSON.stringify(Data.record);
                }
            }
        }).catch(err => {
            console.log("error", err);
        })
    }).catch(err => {
        console.log(err);
    })
}
