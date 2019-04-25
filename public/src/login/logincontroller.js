window.addEventListener("load", init);
function init() {
    document.querySelector("#reglod").style.display = "none";
    bindevents();
    
}
function bindevents() {
    document.querySelector("#submit").addEventListener("click", Submitdet);
}
function Submitdet() {
    var USERid = document.querySelector("#loginid").value;
    var USERpass = document.querySelector("#pass").value;
    document.querySelector("#loginid").value = "";
    document.querySelector("#pass").value = "";
    if (!(USERid) && !(USERpass)) {
        window.alert("!!BOTH FIELD REQUIRED!!");
    }
    else if (!(USERid)) {
        window.alert("!!FIELD REQUIRED!!");
    }
    else if (!(USERpass)) {
        window.alert("!!FIELD REQUIRED!!");
    }
    else {
        submit(USERid,USERpass);
    }        
}
