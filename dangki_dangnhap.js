class Accounts{
    username;
    password;
    points;
    constructor(username,password,points) {
        this.username = username;
        this.password = password;
        this.points = points;
    }
}
let accounts = JSON.parse(localStorage.getItem("accounts"));
if (accounts === null) {
    accounts = [];
}

function login() {
    let username = document.getElementById("usernamelogin").value;
    let password = document.getElementById("passwordlogin").value;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username && accounts[i].password === password) {
            loginDialog.close();
            playDialog.showModal();
            point= +accounts[i].points;
            userid=i;

        }
    }

}
function dangky(){
    loginDialog.close();
    registerDialog.showModal();
}

function register() {
    let username = document.getElementById("usernameregister").value;
    let password = document.getElementById("passwordregister").value;
    let points = document.getElementById("point").value;
    let account = new Accounts(username,password,points)
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    registerDialog.close();
    loginDialog.showModal();
}