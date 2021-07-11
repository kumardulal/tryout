
function Submitlogin(username, password) {

    username = document.getElementById("idusername")
    password = document.getElementById("idpassword")
    if (username == "admin" || password == "admin") {
        console.log("id matched ")
    }
    else {
        console.log("not authorized")
    }
}
console.log(username)
export default Submitlogin();


