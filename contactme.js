function moveHome() {
    window.location.href="./home.html"
}

function moveContactMe() {
    window.location.href="./contactme.html"
}
function moveLogin() {
    window.location.href="./index.html"
}
function moveSignUp() {
    window.location.href="./signup.html"
}

function resetLogout(){
    let getBoolean =JSON.parse(localStorage.getItem('boolean'))
    if(getBoolean==false) {
       window.location.href = './index.html'
    }
 }