
var client = window.SanityClient({
    // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: '',
    dataset: '',
    token: "",
    useCdn: false
    })


let login = document.querySelector("header > div > ul > li > a")

let loginForm = document.querySelector("#loginform")

login.addEventListener("click", e => {
    if (!loginForm.style.display || loginForm.style.display === "none") {
        loginForm.style.display = "flex"
    } else if (loginForm.style.display === "flex") {
        loginForm.style.display = "none"
    }

})

document.querySelector("#loginform > button").addEventListener("click", e => {
    e.preventDefault();
    let navn = e.target.form.username.value
    let passord = e.target.form.pass.value

    const query = '*[_type == "author" && name == $student && password == $pass ] {"id": _id, "email": email, "name": name, "secKey": secKey, "verified": verified}'
    const params = {student: navn, pass: passord}

    client.fetch(query, params).then(res => {
        if(res.length <= 0){
            newUser()
        } else {
            localStorage.setItem("student", JSON.stringify(res))
            localstore = localStorage.getItem("student");
            console.log(JSON.parse(localstore))
        }
    })
})

newUser = () => {
    console.log(loginForm.children[2].children)
}
